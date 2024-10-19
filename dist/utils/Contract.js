"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initContract = void 0;
const Provider_1 = require("./Provider");
// Initialize contract instance with the provided factory, contract address, and provider or signer
const initContract = (factory, contractAddress, rpcUrl, privateKey, signerOrProvider) => {
    const providerOrSigner = signerOrProvider !== null && signerOrProvider !== void 0 ? signerOrProvider : (0, Provider_1.initProviderOrSigner)(privateKey, rpcUrl);
    return factory.connect(contractAddress, providerOrSigner);
};
exports.initContract = initContract;
