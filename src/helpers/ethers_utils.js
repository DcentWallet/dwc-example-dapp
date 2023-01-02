import {convertStringToHex} from './bignumber'
import {providers} from 'ethers';
import { convertHexToString } from './bignumber';
import { getChainData } from './utilities';
const rpcUrl = getChainData(137).rpc_url;
const provider = new providers.JsonRpcProvider(rpcUrl);

export const getAccounts = async (addresss) => {
    const accounts = await provider.listAccounts().then(response => response)
    return accounts;
}
export const getBalance = async (address) => {
    const balance = await provider.getBalance(address).then(response => response);
    return convertHexToString(balance);
}
// export const getContract = async () => {

// }

export const getProviderGasPrice = async () => {
    const gasPrice = await provider.getGasPrice().then(response => response);
    return convertStringToHex(gasPrice)
}