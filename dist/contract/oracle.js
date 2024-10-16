"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.oracle = void 0;
const utils_1 = require("../utils/utils");
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
    constructor(rpcUrl = (0, utils_1.defaultRpc)(), contractAddress = utils_1.ORACLE_CONTRACT, privateKey, signerOrProvider) {
        this.contract = (0, utils_1.initContract)(typechain_1.Oracle__factory, contractAddress, rpcUrl, privateKey, signerOrProvider);
    }
    // Fetch precision value
    async getPrecision() {
        return await this.contract.getPrecision();
    }
    // Fetch last round block
    async lastRoundBlock() {
        return await this.contract.lastRoundBlock();
    }
    // Fetch current round number
    async getRound() {
        return await this.contract.getRound();
    }
    // Fetch voting info for a specific address
    async votinginfo(address) {
        const data = await this.contract.votingInfo(address);
        // Check if data exists, otherwise throw error
        if (!data) {
            throw new Error(`No voting info found for address ${address}`);
        }
        return votingInfoEntity(data);
    }
    // Fetch round data for a specific round and symbol
    async getRoundData(_round, _symbol) {
        try {
            const data = await this.contract.getRoundData(_round, _symbol);
            // Check if data exists, otherwise throw error
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
    // Fetch available symbols
    async getSymbols() {
        return await this.contract.getSymbols();
    }
    // Fetch voting period
    async getVotePeriod() {
        return await this.contract.getVotePeriod();
    }
    // Fetch list of voters
    async getVoters() {
        return await this.contract.getVoters();
    }
    // Fetch latest round data for a specific symbol
    async latestRoundData(_symbol) {
        try {
            const data = await this.contract.latestRoundData(_symbol);
            // Check if data exists, otherwise throw error
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
