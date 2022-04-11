import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import { Web3ReactProvider } from '@web3-react/core'
import { ModalProvider } from './context/modal-context'
import { Web3Provider } from "@ethersproject/providers";

function getLibrary(provider) {

  return new Web3Provider(provider);

}

ReactDOM.render(
  <React.StrictMode>
    <ModalProvider>
      <App />
    </ModalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);