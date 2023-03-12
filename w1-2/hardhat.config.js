require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.18",
  networks: {
    goerli:{
      url:`https://eth-goerli.alchemyapi.io/v2/` + process.env.INFURA_ID,
      accounts: [process.env.PRIVATE_KEY],
    },
    localhost:{
      url:`http://127.0.0.1:8545/`,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
}