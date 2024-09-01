// SPDX-License-Identifier: MIT

pragma solidity ^0.8.19;

import {Script, console2} from "forge-std/Script.sol";
import {TransferUSDC} from "../src/TransferUSDC.sol";

contract TransferUSDCsript is Script {
    TransferUSDCsript transferUSDC;

    function setUp() public {}

    function run() public {
        vm.startBroadcast();

        transferUSDC = new TransferUSDC();

        vm.stopBroadcast();
        // return transferUSDC;

    }
   

}