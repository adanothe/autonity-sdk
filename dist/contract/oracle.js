"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.oracle = void 0;
const utils_1 = require("../utils");
const typechain_1 = require("../typechain");
const roundDataEntity = (data) => ({
    round: data.round,
    price: data.price,
    timestamp: data.timestamp,
    success: data.success,
});
const votingInfoEntity = (data) => ({
    round: data.round,
    commit: data.commit,
    isVoter: data.isVoter,
});
class oracle {
    constructor(networkOrRpcUrl = utils_1.piccadilly, contractAddress = utils_1.ORACLE_CONTRACT, privateKey, signerOrProvider) {
        const rpcUrl = typeof networkOrRpcUrl === "string"
            ? networkOrRpcUrl
            : networkOrRpcUrl.rpcUrl;
        this.contract = (0, utils_1.initContract)(typechain_1.Oracle__factory, contractAddress, rpcUrl, privateKey, signerOrProvider);
    }
    async getPrecision() {
        return await this.contract.getPrecision();
    }
    async lastRoundBlock() {
        return await this.contract.lastRoundBlock();
    }
    async getRound() {
        return await this.contract.getRound();
    }
    async votinginfo(address) {
        const data = await this.contract.votingInfo(address);
        if (!data) {
            throw new Error(`No voting info found for address ${address}`);
        }
        return votingInfoEntity(data);
    }
    async getRoundData(_round, _symbol) {
        try {
            const data = await this.contract.getRoundData(_round, _symbol);
            if (!data) {
                throw new Error(`No data found for round ${_round} and symbol ${_symbol}`);
            }
            return roundDataEntity(data);
        }
        catch (error) {
            throw new Error(`Failed to fetch round data for round ${_round} and symbol ${_symbol}: ` +
                error.message);
        }
    }
    async getSymbols() {
        return await this.contract.getSymbols();
    }
    async getVotePeriod() {
        return await this.contract.getVotePeriod();
    }
    async getVoters() {
        return await this.contract.getVoters();
    }
    async latestRoundData(_symbol) {
        try {
            const data = await this.contract.latestRoundData(_symbol);
            if (!data) {
                throw new Error(`No latest round data found for symbol ${_symbol}`);
            }
            return roundDataEntity(data);
        }
        catch (error) {
            throw new Error(`Failed to fetch latest round data for symbol ${_symbol}: ` +
                error.message);
        }
    }
}
exports.oracle = oracle;
