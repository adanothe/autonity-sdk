import { ethers } from "ethers";
import { initProviderOrSigner } from "./Provider";

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
