require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
const path = require('path');
require("dotenv").config({
  path: path.resolve(__dirname, '../.env')
});

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.4",
  networks: {
    celo: {
      url: process.env.CELO_URL,
      accounts: [process.env.PRIVATE_KEY]
    },
  },
  etherscan: {
    apiKey: process.env.CELOSCAN_API_KEY
  }
};
