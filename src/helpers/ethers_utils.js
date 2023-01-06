import { convertStringToHex } from "./bignumber";
import { providers,Contract } from "ethers";
import { convertHexToString } from "./bignumber";
import { getChainData } from "./utilities";
import {balanceOfABI, decimalsOfABI} from '../constant/abi'

let provider ;
export const initProvider = (chainId) => {
    const rpcUrl = getChainData(parseInt(chainId,10)).rpc_url;
    provider = new providers.JsonRpcProvider(rpcUrl);
}

export const getAccounts = async addresss => {
  const accounts = await provider.listAccounts().then(response => response);
  return accounts;
};
export const getBalance = async address => {
  const balance = await provider.getBalance(address).then(response => response);
  return convertHexToString(balance);
};
export const getProviderGasPrice = async () => {
  const gasPrice = await provider.getGasPrice().then(response => response);
  return convertStringToHex(gasPrice);
};

export const getTokenBalance = async (address,tokenAddress) => {
   const contract = new Contract(tokenAddress,balanceOfABI,provider);
   const tokenBalance = await contract.balanceOf(address)
   return convertStringToHex('0x'+tokenBalance);
};
export const getTokenDecimals = async (tokenAddress) => {
   const contract = new Contract(tokenAddress,decimalsOfABI,provider);
   return await contract.decimals()
}
