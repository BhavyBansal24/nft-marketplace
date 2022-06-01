require("@nomiclabs/hardhat-waffle");
const fs = require('fs');
const privateKey = "4b254b49420f603a3fb17a9fe0f9e769bc70cf5b18b1e17434111599c15f2780"

// infuraId is optional if you are using Infura RPC
const projectId = "00afd9d737274524be6846169b67c6cd";

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      // Infura
      url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
      //url: "https://rpc-mumbai.matic.today",
      accounts: [privateKey]
    },
    matic: {
      // Infura
      url: `https://polygon-mainnet.infura.io/v3/${projectId}`,
      //url: "https://rpc-mainnet.maticvigil.com",
      accounts: [privateKey]
    }
  },
  solidity: {
    version: "0.8.4",
  }
};