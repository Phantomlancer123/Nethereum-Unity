import logo from './assets/stashi-head.png';
import './styles/App.css';
import {Landing, Claim, Staking} from './components';
import { useState } from 'react';
import { ethers } from "ethers";

function App() {

  const states = {
    Landing: 'landing',
    Staking: 'staking',
    Claim: 'claim',
  };
  
  const [satdata, setsatdata] = useState({
    address: "",
    balance: null,
  })

  const [data, setdata] = useState({
    address: "",
    Balance: null,
  });

  const btnhandler = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((res) => accountChangeHandler(res[0]));
    } else {
      alert("install metamask extension!!");
    }
  };

  const getbalance = (address) => {
    window.ethereum
      .request({ 
        method: "eth_getBalance", 
        params: [address, "latest"] 
      })
      .then((balance) => {
        setdata({
          Balance: ethers.utils.formatEther(balance),
          address: ethers.utils.formatEther(address),
        });
      });
  };
  
  const accountChangeHandler = (account) => {
    setdata({
      address: account,
    });
    getbalance(account);
  };

  const [layout_state, set_layout_state] = useState('landing');

  return (
    <div className="App">
      <header className="App-header">
        <button className="button-header" onClick={() => landingClick()}>SATOSHI Bank</button>
        <img src={logo} className="App-logo" alt="logo" />
        <button className="button-header" onClick={btnhandler}>{data.address ? data.address : 'Connect' }</button>
      </header>
      <div className="Menu-bar">
        <button className={layout_state === states.Landing ? 'Menu-button1' : layout_state === states.Claim ? 'Menu-button11' : 'Menu-button1'} onClick={() => stakeClick()}>Stake</button>
        <button className={layout_state === states.Landing ? 'Menu-button2' : layout_state === states.Claim ? 'Menu-button2' : 'Menu-button21'} onClick={() => claimClick()}>Claim</button>
      </div>
      {layout_state === states.Landing ? (
        <Landing />
        ) : layout_state === states.Staking ? (
          <Staking />
        ) : (
          <Claim />
        )
      }
      
    </div>
  );
  function landingClick(){
    set_layout_state('landing');
    console.log(data.address);
    console.log(data.Balance);
  }
  function stakeClick() {
    set_layout_state('staking');
  }
  function claimClick() {
      set_layout_state('claim');
  }
  
}

export default App;
