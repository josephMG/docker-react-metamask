import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import fox from './svg/metamask-fox.svg';
import './App.css';
// import MetaMaskAuth from './components/MetaMaskAuth';
import MetaMaskCard from './components/wallets/MetaMaskCard';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <header className="App-header">
          <img src={fox} className="App-logo" alt="metamask fox" />
          {/* <MetaMaskAuth onAddressChanged={(address) => {}} /> */ }
          <MetaMaskCard />
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
