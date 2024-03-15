import { Sepolia } from "@thirdweb-dev/chains";
import { ThirdwebSDK } from "@thirdweb-dev/sdk/evm";

const sdk = new ThirdwebSDK(Sepolia);
const contract = await sdk.getContract("0xB554D8922cA0A5c8F3B8eBeE790A979412e0b332");
const data = await contract.call("balanceOf", [account]);
console.log("balance is",data)