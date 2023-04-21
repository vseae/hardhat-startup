// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import {Script, console2} from "forge-std/Script.sol";
import {Counter} from "../contracts/Counter.sol";

contract CounterScript is Script {
    function setUp() public {}

    function run() public {
        uint256 deployerPrivateKey = vm.envUint("PK");
        vm.startBroadcast(deployerPrivateKey);
        Counter counter = new Counter();
        // solhint-disable-next-line no-console
        console2.log("Counter deployed on %s", address(counter));
        vm.stopBroadcast();
    }
}