import logo from './assets/stashi-head.png';
import './styles/app.css';
import { Landing, Claim, Staking } from './components';
import { useState } from 'react';
import { ethers } from "ethers";
import { useModal } from './context/modal-context'

function App() {
  const { setModal } = useModal();
  const states = {
    landing: 'landing',
    staking: 'staking',
    claim: 'claim',
  };

  const [walletData, setWalletData] = useState({
    address: "",
    balance: null,
  });

  const walletConnectButton = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((res) => accountChangeHandler(res[0]));
    } else {
      alert("install metamask extension!!");
    }
  };

  const getBalance = (address) => {
    window.ethereum
      .request({
        method: "eth_getbalance",
        params: [address, "latest"]
      })
      .then((balance) => {
        setWalletData({
          balance: ethers.utils.formatEther(balance),
          address: ethers.utils.formatEther(address),
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
        <button className="button-header" onClick={() => landingClick()}>SATOSHI Bank</button>
        <img src={logo} className="app-logo" alt="logo" />
        <button className="button-header" onClick={() => {
          setModal(
            <>
              <button className="connect-button" onClick={walletConnectButton}>Metamask</button>
              <button className="connect-button" >WalletConnect</button>
              <button className="connect-button" >Trust Wallet</button>
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
