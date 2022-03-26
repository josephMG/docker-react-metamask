import { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { connect, checkIfWalletIsConnected } from "../utils"

function Connect({ setUserAddress }: { setUserAddress: React.Dispatch<React.SetStateAction<string>> }) {
  return (
    <Button variant="contained" color="error" onClick={() => connect(setUserAddress)}>
      Connect to MetaMask
    </Button>
  );
}


function Address({ userAddress }: { userAddress: string }) {
  return (
    <Typography variant="h5" gutterBottom component="div">
      {userAddress.substring(0, 5)}…{userAddress.substring(userAddress.length - 4)}
    </Typography>
  );
}

export default function MetaMaskAuth({ onAddressChanged }: { onAddressChanged: (address: string) => void }) {
  const [userAddress, setUserAddress] = useState("");

  useEffect(() => {
    checkIfWalletIsConnected(setUserAddress);
  }, []);

  useEffect(() => {
    onAddressChanged(userAddress);
  }, [userAddress]);

  return userAddress ? (
    <div>
      Connected with <Address userAddress={userAddress} />
    </div>
  ) : (
     <Connect setUserAddress={setUserAddress}/>
  );
}
