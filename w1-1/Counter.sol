// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity ^0.8.0;

contract Counter{
    uint public cnt;

    function add(uint number) public {
        cnt += number;
    }
}