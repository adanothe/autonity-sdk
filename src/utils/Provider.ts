import { ethers } from "ethers";

// Initialize provider using optional custom RPC URL
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
