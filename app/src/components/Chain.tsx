import Box from '@mui/material/Box';
import type { Web3ReactHooks } from '@web3-react/core';
import { CHAINS } from '../chains';

export function Chain({ chainId }: { chainId: ReturnType<Web3ReactHooks['useChainId']> }) {
  if (chainId === undefined) return null

  const name = chainId ? CHAINS[chainId]?.name : undefined

  if (name) {
    return (
      <Box>
        Chain:{' '}
        <b>
          {name} ({chainId})
        </b>
      </Box>
    )
  }

  return (
    <Box>
      Chain Id: <b>{chainId}</b>
    </Box>
  )
}
