import { ethers } from "ethers";

// Constants
// export const RPC = "https://rpc1.piccadilly.autonity.org";
export const AUTONITY_CONTRACT = "0xBd770416a3345F91E4B34576cb804a576fa48EB1";
export const ORACLE_CONTRACT = "0x47e9Fbef8C83A1714F1951F142132E6e90F5fa5D";
export const ACCOUNTABILITY_CONTRACT =
  "0x5a443704dd4B594B382c22a083e2BD3090A6feF3";
export const LIQUID = "0xC500751c4F96d49B954D20EAE42Fa29278B96beB";
// export const defaultRpc = (): string => RPC;
export const initProvider = (rpcUrl?: string): ethers.JsonRpcProvider => {
  return new ethers.JsonRpcProvider(rpcUrl);
};

// Initialize wallet/signer with private key and optional custom RPC URL
export const initSigner = (
  privateKey: string,
  rpcUrl?: string
): ethers.Wallet => {
  const provider = initProvider(rpcUrl);
  return new ethers.Wallet(privateKey, provider);
};

// Initialize either provider or signer based on the presence of a private key
export const initProviderOrSigner = (
  privateKey?: string,
  rpcUrl?: string
): ethers.JsonRpcProvider | ethers.Wallet => {
  return privateKey ? initSigner(privateKey, rpcUrl) : initProvider(rpcUrl);
};

// Initialize contract instance with the provided factory, contract address, and provider or signer
export const initContract = <T>(
  factory: {
    connect: (
      address: string,
      signerOrProvider: ethers.Signer | ethers.Provider
    ) => T;
  },
  contractAddress: string,
  rpcUrl: string,
  privateKey?: string,
  signerOrProvider?: ethers.Wallet | ethers.JsonRpcProvider
): T => {
  const providerOrSigner =
    signerOrProvider ?? initProviderOrSigner(privateKey, rpcUrl);
  return factory.connect(contractAddress, providerOrSigner);
};
