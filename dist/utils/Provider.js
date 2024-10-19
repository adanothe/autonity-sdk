"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initProviderOrSigner = exports.initSigner = exports.initProvider = void 0;
const ethers_1 = require("ethers");
// Initialize provider using optional custom RPC URL
const initProvider = (rpcUrl) => {
    return new ethers_1.ethers.JsonRpcProvider(rpcUrl);
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
