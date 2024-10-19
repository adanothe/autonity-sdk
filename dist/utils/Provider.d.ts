import { ethers } from "ethers";
export declare const initProvider: (rpcUrl?: string) => ethers.JsonRpcProvider;
export declare const initSigner: (privateKey: string, rpcUrl?: string) => ethers.Wallet;
export declare const initProviderOrSigner: (privateKey?: string, rpcUrl?: string) => ethers.JsonRpcProvider | ethers.Wallet;
