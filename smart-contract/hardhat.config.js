require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: "https://goerli.infura.io/v3/94510ce91528482380e7290737b813c1",
      accounts: [
        "1c5dc199a201fe118e4ea1e3b62588e560caa65752b769dc84b2b00e21e96fdb",
      ],
    },
  },
};
