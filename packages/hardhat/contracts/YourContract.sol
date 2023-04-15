pragma solidity >=0.8.0 <0.9.0;
//SPDX-License-Identifier: MIT

// import "hardhat/console.sol";
import "@openzeppelin/contracts/access/Ownable.sol"; 
// https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol

contract YourContract is Ownable {

  event SetPurpose(address sender, string purpose);

  string public purpose = "Put your ad here";
  uint public price = 1;

  constructor() payable {
    // what should we do on deploy?
  }

  function setPurpose(string memory newPurpose) public payable {
      require(msg.value >= price, "Not enough price");
      purpose = newPurpose;
      // console.log(msg.sender,"set purpose to",purpose);
      emit SetPurpose(msg.sender, purpose);
      price = price * 105 / 100;
  }

  function withdraw() public onlyOwner {
      (bool success, ) = msg.sender.call{value: address(this).balance}("");
  }


  // to support receiving ETH by default
  receive() external payable {}
  fallback() external payable {}
}
