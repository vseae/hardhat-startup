"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("hardhat-deploy");
require("@nomiclabs/hardhat-ethers");
const config_1 = require("hardhat/config");
(0, config_1.task)("deploy-verify", "Deploys and verifies Safe contracts").setAction(async (_, hre) => {
    await hre.run("deploy");
    await hre.run("etherscan-verify", {
        forceLicense: true,
        license: "MIT",
    });
});