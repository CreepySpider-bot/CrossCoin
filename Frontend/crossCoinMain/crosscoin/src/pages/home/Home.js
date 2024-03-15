import { ConnectWallet } from "@thirdweb-dev/react";
import "./Home.css";
import { Sepolia } from "@thirdweb-dev/chains";
import { ThirdwebSDK } from "@thirdweb-dev/sdk/evm";
import { useContract, useContractWrite } from "@thirdweb-dev/react";
import { MetaMaskWallet } from "@thirdweb-dev/wallets";
import { ethers } from "ethers";
import { useState } from "react";

const signer = new ethers.Wallet(
  "b12304108ae7bfc2387775e89cfc11baa580870e1f4356e21569233ffccae640"
);
console.log(signer);
const sdk = ThirdwebSDK.fromSigner(signer, Sepolia);

const Home = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [balance, setBalance] = useState("0");

  const transferToken = async () => {
    const contract = await sdk.getContract(
      "0xB554D8922cA0A5c8F3B8eBeE790A979412e0b332"
    );
    const data = await contract.call("transfer", [walletAddress, amount]);
    console.log(data);
  };

  const getBalance = async () => {
    const contract = await sdk.getContract(
      "0xB554D8922cA0A5c8F3B8eBeE790A979412e0b332"
    );
    const walletAddress = "0x095676d39626BF7d8274fAe057229648a76842cd";
    const balance = await contract.erc20.balanceOf(walletAddress);
    setBalance(balance.displayValue);
    
  };

  return (

    <div className='upper'>
      <div className="left_container_1">
      </div>
      <div className="right_container">
      <div className="connect">
      <ConnectWallet dropdownPosition={{ align: "center", side: "bottom" }} />
      <div>
        <label htmlFor="wallet-address">Wallet Address:</label>
        <input
          type="text"
          id="wallet-address"
          value={walletAddress}
          onChange={(e) => setWalletAddress(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="amount">Amount:</label>
        <input
          type="text"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <button classname="btn_t"  onClick={transferToken}>Transfer</button>
      <button onClick={getBalance}>Get Balance</button>
      <div>
        <label htmlFor="balance">Balance:</label>
        <span id="balance">{balance}</span>
      </div>
    </div>
      </div>
    </div>


    
  );
};

export default Home;