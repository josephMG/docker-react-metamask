import React from 'react';
import fox from './svg/metamask-fox.svg';
import './App.css';
import MetaMaskAuth from './components/MetaMaskAuth';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={fox} className="App-logo" alt="metamask fox" />
        <MetaMaskAuth onAddressChanged={(address) => alert(address)} />
      </header>
    </div>
  );
}

export default App;
