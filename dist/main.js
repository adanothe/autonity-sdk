"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contract = void 0;
const contract_1 = require("./contract");
const utils_1 = require("./utils");
class Contract {
    constructor(networkOrRpcUrl = utils_1.piccadilly, liquidContractAddress = utils_1.LIQUID_CONTARCT, privateKey, oracleContractAddress = utils_1.ORACLE_CONTRACT, accountabilityContractAddress = utils_1.ACCOUNTABILITY_CONTRACT, autonityContractAddress = utils_1.AUTONITY_CONTRACT) {
        const rpcUrl = typeof networkOrRpcUrl === "string"
            ? networkOrRpcUrl
            : networkOrRpcUrl.rpcUrl;
        this.autonity = new contract_1.Auton(rpcUrl, autonityContractAddress, privateKey);
        this.oracle = new contract_1.oracle(rpcUrl, oracleContractAddress, privateKey);
        this.accountability = new contract_1.accountability(rpcUrl, accountabilityContractAddress, privateKey);
        this.liquid = new contract_1.liquid(rpcUrl, liquidContractAddress, privateKey);
    }
}
exports.Contract = Contract;
