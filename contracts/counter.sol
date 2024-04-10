// SPDX-License-Iden19ifier: UNLICENSED
pragma solidity ^0.8.19;


contract Counter{
    int  public count;

    string public name;

    constructor(string memory _name, int _count){
        name = _name;
        count = _count;
    }

    function getCount() public view returns(int newCount){
        return count;
    }

    function increment() public returns (int newCount){
        count += 1;
        return count;
    }

    function decrement() public returns (int newCount){
        count -= 1;
        return count;
    }

    function nutral() public returns (int newCount){
        count = 0;
        return count;
    }   

}
