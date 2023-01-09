import { SUPPORTED_CHAINS } from "./chains";
import Web3 from "web3";

const provider = SUPPORTED_CHAINS[0].rpc_url;
// const web3Provider = new Web3.providers.HttpProvider(provider);
const web3 = new Web3(provider);

const apiGetAccounts = async () => {
  const accounts = await web3.eth.getAccounts();
  return accounts;
};
const apiGetGasPrice = async () => {
  const gasPrice = await web3.eth.getGasPrice().then(response => response);
  return gasPrice;
};
// export const apiGetNonce = async () => {

// }
const apiGetBalance = async address => {
  const balance = await web3.eth.getBalance(address).then(response => response);
  return balance;
};
const apiGetNonce = async (blockNumber, isContainTx = false) => {
  const nonce = await web3.eth.getBlock(blockNumber).then(response => response.nonce);
  return nonce;
};
const apiGetGasLimit = async () => {
  const block = await web3.eth.getBlock("latest");
};
const apiGetBlockNumber = async () => {
  const blockNumber = await web3.eth.getBlockNumber().then(response => response);
  return blockNumber;
};
const apiGetTransactionCount = async address => {
  const nonce = await web3.eth.getTransactionCount(address).then(response => response);
  return nonce;
};

export default {
  apiGetAccounts,
  apiGetBalance,
  apiGetBlockNumber,
  apiGetGasLimit,
  apiGetGasPrice,
  apiGetNonce,
  apiGetTransactionCount,
};
