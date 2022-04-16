import logo from './assets/stashi-head.png';
import './app.css';
import { Landing, Claim, Staking } from './components';
import { useState } from 'react';
import { ethers } from "ethers";
import { useModal } from './context/modal-context';
import { useWeb3React } from '@web3-react/core';
import { connectorNames, connectorTypes } from './constants';

function App() {

  const { setModal, unSetModal } = useModal();

  const context = useWeb3React();

  const {
    activate,
    connector,
  } = context;

  const states = {
    landing: 'landing',
    staking: 'staking',
    claim: 'claim',
  };

  const [walletData, setWalletData] = useState({
    address: "",
    balance: null,
  });

  const metamaskConnectButton = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((res) => accountChangeHandler(res[0]));
      unSetModal();
    } else {
      alert("install metamask extension!!");
    }
  };

  const getBalance = (address) => {
    window.ethereum
      .request({
        method: "eth_getBalance",
        params: [address, "latest"]
      })
      .then((balance) => {
        setWalletData({
          balance: ethers.utils.formatEther(balance),
          address: address
        });
      });
  };

  const accountChangeHandler = (account) => {
    setWalletData({
      address: account,
    });
    getBalance(account);
  };

  const [layoutState, setLayoutState] = useState('landing');

  return (

    <div className="app">
      <header className="app-header">
        <button className="button-headerf" onClick={() => landingClick()}>GO TO BANK</button>
        <img src={logo} className="app-logo" alt="logo" />
        <button className={walletData.address ? 'button-headers' : 'button-headerf'} onClick={() => {
          setModal(
            <>
              {/* <button className="connect-button" onClick={metamaskConnectButton} >Metamask</button>
              <button className="connect-button" >WalletConnect</button>
              <button className="connect-button" >Trust Wallet</button> */}
              <button className="connect-button" onClick={metamaskConnectButton} >Metamask</button>
              {Object.keys(connectorTypes).map(con => {
                const current = connectorTypes[con];
                const disabled = current === connector;
                const name = connectorNames[con];

                return (
                  <div
                    key={con}
                    onClick={() => {
                      activate(connectorTypes[con]);
                      unSetModal();
                    }}
                    disabled={disabled}
                  >
                    <button className="connect-button">{name}</button>
                  </div>
                );
              })}
            </>
          )
        }}>{walletData.address ? walletData.address : 'Connect'}</button>

      </header>
      <div className="menu-bar">
        <button className={layoutState === states.landing ? 'menuButton' : layoutState === states.claim ? 'menuButton-Active' : 'menuButton'} onClick={() => stakeClick()}>Stake</button>
        <button className={layoutState === states.landing ? 'menuButtonSecond' : layoutState === states.claim ? 'menuButtonSecond' : 'menuButtonSecond-Active'} onClick={() => claimClick()}>Claim</button>
      </div>
      {layoutState === states.landing ? (
        <Landing waletData={walletData} />
      ) : layoutState === states.staking ? (
        <Staking />
      ) : (
        <Claim />
      )
      }
    </div>
  );
  function landingClick() {
    setLayoutState('landing');
    console.log(walletData);
  }
  function stakeClick() {
    setLayoutState('staking');
  }
  function claimClick() {
    setLayoutState('claim');
  }
}

export default App;
