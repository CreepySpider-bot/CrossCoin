import React from 'react'
import Navbar from '../../components/Navbar'
import "./Main.css"
import Sidebar from '../../components/sidebar/Sidebar'
import { ConnectWallet } from "@thirdweb-dev/react";
import { Sepolia } from "@thirdweb-dev/chains";
import { ThirdwebSDK } from "@thirdweb-dev/sdk/evm";
import { useContract, useContractWrite } from "@thirdweb-dev/react";
import { MetaMaskWallet } from "@thirdweb-dev/wallets";
import { ethers } from "ethers";
import { useState } from "react";

import Stripe from 'stripe';
//stripe
const stripe = new Stripe('sk_test_51N4hWuSHB1PRd9HwL0YfeN9zcD2x76ny3eKj09UYF37SCFdAfY32aOwazPJBNIkyeD9Ow9Sip8lhy54qVrJCfsCV00qQZdhgCf', {
  apiVersion: '2020-08-27',
});

const signer = new ethers.Wallet(
  "b12304108ae7bfc2387775e89cfc11baa580870e1f4356e21569233ffccae640"
);
console.log(signer);
const sdk = ThirdwebSDK.fromSigner(signer, Sepolia);

// ----------------------------->

// ----------------------------->


function Main() {
  const [walletAddress, setWalletAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [balance, setBalance] = useState("");

  const transferToken = async () => {
    const contract = await sdk.getContract(
      "0x3fEcDBC489552ee5654ef4EFce379918340dC310"
    );
  
    const weI = ethers.utils.parseUnits(amount, 8);
  
    const data = await contract.call("transfer", [walletAddress, weI]);
    console.log(data);
  
    // Open the Stripe checkout popup with the transfer amount
    // const checkoutSession = await stripe.checkout.sessions.create({
    //   payment_method_types: ['card'],
    //   line_items: [
    //     {
    //       price_data: {
    //         currency: 'usd',
    //         product_data: {
    //           name: 'Transfer',
    //         },
    //         unit_amount: amount * 100,
    //       },
    //       quantity: 1,
    //     },
    //   ],
    //   mode: 'payment',
    //   success_url: 'http://localhost:8080/success',
    //   cancel_url: 'http://localhost:8080/cancel',
    // });
    // window.open(checkoutSession.url, 'stripe', 'width=600,height=700');
  };
  //stripe pop up opening and transfer
  const handleTransferAndBuy = async () => {
    await openStripeLink();
    await transferToken();
  };
  //
  //get-balance
  const getBalance = async () => {
    const contract = await sdk.getContract(
      "0x3fEcDBC489552ee5654ef4EFce379918340dC310"
    );
    const walletAddress = "0x095676d39626BF7d8274fAe057229648a76842cd";
    const balance = await contract.erc20.balanceOf(walletAddress);
    setBalance(balance);
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=5c0a0d5e4652487fa9bccbb2e793198e`);
      const data = await response.json();
      const countryCode = data.results[0].components.country_code;
      console.log(countryCode);
    });
  };
  //
  // Stripe API
  const openStripeLink = async () => {
    const checkoutSession = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Cross Coin',
              images: [],
            },
            unit_amount: amount * 100, 
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: 'http://localhost:8080/success',
      cancel_url: 'http://localhost:8080/cancel',
    });
  
    // Open the Stripe checkout popup
    window.open(checkoutSession.url, 'stripe', 'width=600,height=700');
  }; 
  return (
    <div>
      <Sidebar/>
    <div className='main_upper'>
      <div className='text_main'>
        <h1 className='transfer_txt'>transfer money</h1>
        <label>wallet address</label>
        <input 
        className='wa_input' 
        type='text'
        id="wallet-address"
        value={walletAddress}
        onChange={(e) => setWalletAddress(e.target.value)}
        />
        <label>amount</label>
        <input 
        placeholder='enter the amount to be sent' 
        className='wa_input'
        type="number"
        id="amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={handleTransferAndBuy} className='send_btn'>send</button>
      </div>
    </div>
    </div>
  )
}

export default Main
