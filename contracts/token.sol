// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

contract Token {
    uint public totalSupply = 1000;
    address public owner;
    string public userName;
    mapping(address => uint) public balances;

    constructor(address author, string memory _userName) public {
        userName = _userName;
        owner = author;
        balances[owner] = totalSupply;
    }

    function transfer(address me, address to, uint256 amount) public {
        require(balances[me] >= amount, "You don't have this much amount");

        balances[me] -= amount;
        balances[to] += amount;
    }

    function getBalance(address account) public view returns (uint) {
        return balances[account];
    }
}