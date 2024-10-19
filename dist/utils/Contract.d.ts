import { ethers } from "ethers";
export declare const initContract: <T>(factory: {
    connect: (address: string, signerOrProvider: ethers.Signer | ethers.Provider) => T;
}, contractAddress: string, rpcUrl: string, privateKey?: string, signerOrProvider?: ethers.Wallet | ethers.JsonRpcProvider) => T;
