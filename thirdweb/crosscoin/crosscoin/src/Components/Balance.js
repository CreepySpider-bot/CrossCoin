import { Sepolia } from "@thirdweb-dev/chains";
import { ThirdwebSDK } from "@thirdweb-dev/sdk/evm";
import { useContract, useContractRead } from "@thirdweb-dev/react";


async function fetchBalance() {
    const sdk = new ThirdwebSDK(Sepolia);
    const contract = await sdk.getContract("0xB554D8922cA0A5c8F3B8eBeE790A979412e0b332");
    const data = await contract.call("balanceOf", ["0xc0EBf5a35CF0CCf0D93734B8b6aE4f706c528d38"]);
    console.log(data);
      }
export default fetchBalance;