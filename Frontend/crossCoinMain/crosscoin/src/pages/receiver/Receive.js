import React from 'react'
import "./Receive.css"
import { ConnectWallet } from "@thirdweb-dev/react";
import { Sepolia } from "@thirdweb-dev/chains";
import { ThirdwebSDK } from "@thirdweb-dev/sdk/evm";
import { useContract, useContractWrite } from "@thirdweb-dev/react";
import { MetaMaskWallet } from "@thirdweb-dev/wallets";
import { ethers } from "ethers";
import { useState } from "react";
import Navbar from '../../components/navbar/Navbar';


const signer = new ethers.Wallet(
  "b12304108ae7bfc2387775e89cfc11baa580870e1f4356e21569233ffccae640"
);
console.log(signer);
const sdk = ThirdwebSDK.fromSigner(signer, Sepolia);

function Receive() {
  const [balance, setBalance] = useState("");
  const getBalance = async () => {
    const contract = await sdk.getContract(
      "0xB554D8922cA0A5c8F3B8eBeE790A979412e0b332"
    );
    const walletAddress = "0x095676d39626BF7d8274fAe057229648a76842cd";
    const balance = await contract.erc20.balanceOf(walletAddress);
    console.log("hello")
    console.log(balance.displayValue)
    setBalance(balance.displayValue);
  };


  return (
    <div>
      <Navbar/>
    <div className='upper_withdraw'>
      <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>
      <div className='your_bal'>
        <div className='bal_text'>
        Your Balance - {balance}
        </div>
      </div>
      <div className='card_1'>
          <label className='ac_label'>Account Number</label>
          <input className='ac_input' placeholder='' type='email' />
          <label className='ac_label' style={{right: "140px"}}>IFSC code</label>
          <input className='ac_input'/>
          <button className='wbtn'>Withdraw</button>
          <hr className='divider'></hr>
          <button className='gbbtn' onClick={getBalance}>Get Balance</button>
      </div>

    </div>
    </div>
  )
}

export default Receive
