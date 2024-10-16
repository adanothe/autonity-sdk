import { ethers } from "ethers";
export declare const RPC = "https://rpc1.piccadilly.autonity.org";
export declare const AUTONITY_CONTRACT = "0xBd770416a3345F91E4B34576cb804a576fa48EB1";
export declare const ORACLE_CONTRACT = "0x47e9Fbef8C83A1714F1951F142132E6e90F5fa5D";
export declare const defaultRpc: () => string;
export declare const initProvider: (rpcUrl?: string) => ethers.JsonRpcProvider;
export declare const initSigner: (privateKey: string, rpcUrl?: string) => ethers.Wallet;
export declare const initProviderOrSigner: (privateKey?: string, rpcUrl?: string) => ethers.JsonRpcProvider | ethers.Wallet;
export declare const initContract: <T>(factory: {
    connect: (address: string, signerOrProvider: ethers.Signer | ethers.Provider) => T;
}, contractAddress: string, rpcUrl?: string, privateKey?: string, signerOrProvider?: ethers.Wallet | ethers.JsonRpcProvider) => T;
