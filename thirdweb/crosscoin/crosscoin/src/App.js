import { ConnectWallet } from "@thirdweb-dev/react";
import "./styles/Home.css";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { ThirdwebSDK } from "@thirdweb-dev/react";
import { Sepolia } from "@thirdweb-dev/chains";
import fetchBalance from "./Components/Balance";



export default  function Home() {

  return (
    <div className="container">
      <main className="main">
        <div className="connect">
          <ConnectWallet dropdownPosition={{ side: 'bottom', align: 'center'}} />
          <button onClick={fetchBalance}>Check Balance</button>
        </div>
      </main>
    </div>
  );
}
