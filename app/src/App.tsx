import React from 'react';
import fox from './svg/metamask-fox.svg';
import './App.css';
import MetaMaskAuth from './components/MetaMaskAuth';
import MetaMaskCard from './components/wallets/MetaMaskCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={fox} className="App-logo" alt="metamask fox" />
        <MetaMaskAuth onAddressChanged={(address) => {}} />
        <MetaMaskCard />
      </header>
    </div>
  );
}

export default App;
