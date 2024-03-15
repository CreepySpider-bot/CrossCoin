import React, { useState } from 'react'
import "./Receive.css"
import Sidebar from '../../components/sidebar/Sidebar'
import { ConnectWallet } from "@thirdweb-dev/react";
import { Sepolia } from "@thirdweb-dev/chains";
import { ThirdwebSDK } from "@thirdweb-dev/sdk/evm";
import { useContract, useContractWrite } from "@thirdweb-dev/react";
import { MetaMaskWallet } from "@thirdweb-dev/wallets";
import { ethers } from "ethers";

import Stripe from 'stripe';
//stripe
const stripe = new Stripe('sk_test_51N4hWuSHB1PRd9HwL0YfeN9zcD2x76ny3eKj09UYF37SCFdAfY32aOwazPJBNIkyeD9Ow9Sip8lhy54qVrJCfsCV00qQZdhgCf', {
  apiVersion: '2020-08-27',
});

const signer = new ethers.Wallet(
//   "b12304108ae7bfc2387775e89cfc11baa580870e1f4356e21569233ffccae640"
"b12304108ae7bfc2387775e89cfc11baa580870e1f4356e21569233ffccae640"
);
console.log(signer);
const sdk = ThirdwebSDK.fromSigner(signer, Sepolia);


function Receive() {
    const [convertedBalance, setConvertedBalance] = useState("******");
    const getBalance = async () => {
        const contract = await sdk.getContract(
          "0x3fEcDBC489552ee5654ef4EFce379918340dC310"
        
        );
        const walletAddress = "0x095676d39626BF7d8274fAe057229648a76842cd";
        const balance = await contract.erc20.balanceOf(walletAddress);
        
      
        // Get user's location using navigator.geolocation
        navigator.geolocation.getCurrentPosition(async (position) => {
          const { latitude, longitude } = position.coords;
          const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=5c0a0d5e4652487fa9bccbb2e793198e`);
          const data = await response.json();
          const countryCode = data.results[0].components.country_code;
          console.log(countryCode);
      
          // Convert balance to user's currency
          let exchangeRate;
          if (countryCode === "in") {
            exchangeRate = 81.82;
            console.log(exchangeRate)
          } else {
            const exchangeRatesResponse = await fetch(`https://api.exchangeratesapi.io/latest?base=USD&symbols=${countryCode}&access_key=TmN83sjuYTHYwL0IUXnJUidVLNdrTlHj`);
            const exchangeRatesData = await exchangeRatesResponse.json();
            exchangeRate = exchangeRatesData.rates[countryCode];
          }
          
          let convertedBalance = parseInt(balance.displayValue) * exchangeRate;
          console.log(convertedBalance);
          convertedBalance = convertedBalance.toString();
          setConvertedBalance(convertedBalance);
          
        });
      };
  return (
    <div>
      <Sidebar/>
      <div className='rec_upupper'>
        <div className='rec_upper'>
            <h1 className='lramt'>Last Received Amount</h1>
            <span className='show_balance'>₹{convertedBalance}</span>
            <button className='show_balbtn' onClick={getBalance}>show balance</button>
        </div>
      </div>
    </div>
  )
}

export default Receive
