import {SUPPORTED_CHAINS} from './chains'
import Web3 from 'web3'

const provider = SUPPORTED_CHAINS[0].rpc_url;
const web3Provider = new Web3.providers.HttpProvider(provider);
const web3 = new Web3(web3Provider);


export const apiGetAccounts = async () => {
    const accounts = await web3.eth.getAccounts();
    return accounts;
}
export const apiGetGasPrice = async () => {
    const gasPrice = await web3.eth.getGasPrice().then(response => response);
    return gasPrice;
}
// export const apiGetNonce = async () => {
    
// }
export const apiGetBalance = async (address) => {
    
    const balance = await web3.eth.getBalance(address).then(response => response);
    return balance;
}
export const apiGetNonce = async (blockNumber,isContainTx = false) => {
    const nonce = await web3.eth.getBlock(blockNumber).then(response => response.nonce);
    return nonce;
}
export const apiGetGasLimit = async() => {
    const block = await web3.eth.getBlock('latest')
}
export const apiGetBlockNumber = async () => {
    const blockNumber = await web3.eth.getBlockNumber().then(response => response);
    return blockNumber;
}
export const apiGetTransactionCount = async (address) => {
    const nonce = await web3.eth.getTransactionCount(address).then(response => response);
    return nonce;
}
