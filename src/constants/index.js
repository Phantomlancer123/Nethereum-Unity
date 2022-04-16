import {
    walletconnect,
    coinbase
  } from "../components/connectors";
  
  export const connectorTypes = {
    WalletConnect: walletconnect,
    Coinbase: coinbase
  };
  
  export const connectorNames = {
    WalletConnect: "walletconnect",
    Coinbase: "coinbase"
  };
  