"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contract = void 0;
const autonity_1 = require("./contract/autonity");
const oracle_1 = require("./contract/oracle");
const utils_1 = require("./utils/utils");
class Contract {
    constructor(rpcUrl, contractAddressAutonity, contractAddressOracle, privateKey, signerOrProvider) {
        const providerOrSigner = signerOrProvider !== null && signerOrProvider !== void 0 ? signerOrProvider : (0, utils_1.initProviderOrSigner)(privateKey, rpcUrl);
        this.autonity = new autonity_1.Auton(rpcUrl, contractAddressAutonity, privateKey, providerOrSigner);
        this.oracle = new oracle_1.oracle(rpcUrl, contractAddressOracle, privateKey, providerOrSigner);
    }
}
exports.Contract = Contract;
