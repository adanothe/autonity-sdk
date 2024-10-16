"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initContract = exports.initProviderOrSigner = exports.initSigner = exports.initProvider = exports.defaultRpc = exports.ORACLE_CONTRACT = exports.AUTONITY_CONTRACT = exports.RPC = void 0;
const ethers_1 = require("ethers");
// Constants
exports.RPC = "https://rpc1.piccadilly.autonity.org";
exports.AUTONITY_CONTRACT = "0xBd770416a3345F91E4B34576cb804a576fa48EB1";
exports.ORACLE_CONTRACT = "0x47e9Fbef8C83A1714F1951F142132E6e90F5fa5D";
const defaultRpc = () => exports.RPC;
exports.defaultRpc = defaultRpc;
const initProvider = (rpcUrl) => {
    return new ethers_1.ethers.JsonRpcProvider(rpcUrl || (0, exports.defaultRpc)());
};
exports.initProvider = initProvider;
// Initialize wallet/signer with private key and optional custom RPC URL
const initSigner = (privateKey, rpcUrl) => {
    const provider = (0, exports.initProvider)(rpcUrl);
    return new ethers_1.ethers.Wallet(privateKey, provider);
};
exports.initSigner = initSigner;
// Initialize either provider or signer based on the presence of a private key
const initProviderOrSigner = (privateKey, rpcUrl) => {
    return privateKey ? (0, exports.initSigner)(privateKey, rpcUrl) : (0, exports.initProvider)(rpcUrl);
};
exports.initProviderOrSigner = initProviderOrSigner;
// Initialize contract instance with the provided factory, contract address, and provider or signer
const initContract = (factory, contractAddress, rpcUrl = (0, exports.defaultRpc)(), privateKey, signerOrProvider) => {
    const providerOrSigner = signerOrProvider !== null && signerOrProvider !== void 0 ? signerOrProvider : (0, exports.initProviderOrSigner)(privateKey, rpcUrl);
    return factory.connect(contractAddress, providerOrSigner);
};
exports.initContract = initContract;
