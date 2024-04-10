
require("@nomiclabs/hardhat-waffle");
require("@nomicfoundation/hardhat-ethers");
const fs = require('fs');
// const FTM_RPC_URL = "https://rpc.testnet.fantom.network";

// const privateKey = fs.readFileSync("./privatekey.text").toString().trim();

// module.exports = {
//   solidity: "0.8.19",
//   networks: {
//     fantomTestnet: {
//       url: FTM_RPC_URL,
//       chainId: 4002, // Chain ID for Fantom testnet
//       gas: "auto",
//       gasPrice: "auto",
//       accounts: [privateKey], 
//     },
//   },
// };



const INFURA_PROJECT_ID = "7b524c880052487fbbb4443d1235b38a";
const privateKey = fs.readFileSync("./privatekey.text").toString().trim();

module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: { 
      url: `https://sepolia.infura.io/v3/${INFURA_PROJECT_ID}`,
      accounts: [privateKey]
    }
  }
};
