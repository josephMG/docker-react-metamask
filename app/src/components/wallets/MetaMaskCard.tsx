import { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import MUICardHeader, { cardHeaderClasses } from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { hooks, metaMask } from '../../connectors/metaMask';
import { Accounts } from '../Accounts';
import { Chain } from '../Chain';
import { ConnectWithSelect } from '../ConnectWithSelect';
import { Status } from '../Status';

const { useChainId, useAccounts, useError, useIsActivating, useIsActive, useProvider, useENSNames } = hooks

const CardHeader = styled(MUICardHeader)(() => ({
  [`& .${cardHeaderClasses.content}`]: {
    flex: 0
  },
  [`& .${cardHeaderClasses.action}`]: {
    alignSelf: 'auto'
  }
}))

export default function MetaMaskCard() {
  const chainId = useChainId()
  const accounts = useAccounts()
  const error = useError()
  const isActivating = useIsActivating()

  const isActive = useIsActive()

  const provider = useProvider()
  const ENSNames = useENSNames(provider)

  // attempt to connect eagerly on mount
  useEffect(() => {
    void metaMask.connectEagerly()
  }, [])

  return (
    <Card
      variant="outlined"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '20rem',
        padding: '1rem',
        margin: '1rem',
        overflow: 'auto',
        border: '1px solid',
        borderRadius: '1rem',
      }}
    >
      <CardHeader
        sx={{ justifyContent: 'space-between' }}
        title="MetaMask"
        action={
          <Status isActivating={isActivating} error={error} isActive={isActive} />
        }
      />
      <CardContent>
        <Box sx={{ marginBottom: '1rem' }}>
          <Chain chainId={chainId} />
          <Accounts accounts={accounts} provider={provider} ENSNames={ENSNames} />
        </Box>
        <ConnectWithSelect
          connector={metaMask}
          chainId={chainId}
          isActivating={isActivating}
          error={error}
          isActive={isActive}
        />
      </CardContent>
    </Card>
  )
}
