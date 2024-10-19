"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accountability = void 0;
const utils_1 = require("../utils");
const typechain_1 = require("../typechain");
const configEntity = (data) => ({
    innocenceProofSubmissionWindow: data.innocenceProofSubmissionWindow,
    baseSlashingRateLow: data.baseSlashingRateLow,
    baseSlashingRateMid: data.baseSlashingRateMid,
    collusionFactor: data.collusionFactor,
    historyFactor: data.historyFactor,
    jailFactor: data.jailFactor,
    slashingRatePrecision: data.slashingRatePrecision,
});
class accountability {
    constructor(networkOrRpcUrl = utils_1.piccadilly, contractAddress = utils_1.ACCOUNTABILITY_CONTRACT, privateKey, signerOrProvider) {
        const rpcUrl = typeof networkOrRpcUrl === "string"
            ? networkOrRpcUrl
            : networkOrRpcUrl.rpcUrl;
        this.contract = (0, utils_1.initContract)(typechain_1.Accountability__factory, contractAddress, rpcUrl, privateKey, signerOrProvider);
    }
    async getValidatorAccusation(_val) {
        try {
            return await this.contract.getValidatorAccusation(_val);
        }
        catch (error) {
            if (error instanceof Error && error.message.includes("no accusation")) {
                return "no accusation";
            }
            else {
                throw error;
            }
        }
    }
    async getSlashingHistory(_validator, _id) {
        return await this.contract.slashingHistory(_validator, _id);
    }
    async canSlash(_offender, _rule, _block) {
        return await this.contract.canSlash(_offender, _rule, _block);
    }
    async canAccuse(_offender, _rule, _block) {
        const [result, deadline] = await this.contract.canAccuse(_offender, _rule, _block);
        return { result, deadline };
    }
    async getConfig() {
        const data = await this.contract.config();
        if (!data) {
            throw new Error(`failed to get config`);
        }
        return configEntity(data);
    }
    async getEpochPeriod() {
        return await this.contract.epochPeriod();
    }
    async beneficiaries(address) {
        return await this.contract.beneficiaries(address);
    }
    async SlashingEvent(startBlock, endBlock) {
        try {
            const filter = this.contract.filters.SlashingEvent();
            const events = await this.contract.queryFilter(filter, startBlock, endBlock);
            return events.map((event) => {
                var _a, _b, _c, _d, _e;
                return ({
                    validator: (_a = event.args) === null || _a === void 0 ? void 0 : _a.validator,
                    amount: (_b = event.args) === null || _b === void 0 ? void 0 : _b.amount,
                    releaseBlock: (_c = event.args) === null || _c === void 0 ? void 0 : _c.releaseBlock,
                    isJailbound: (_d = event.args) === null || _d === void 0 ? void 0 : _d.isJailbound,
                    eventId: (_e = event.args) === null || _e === void 0 ? void 0 : _e.eventId,
                    blockNumber: event.blockNumber,
                    transactionHash: event.transactionHash,
                });
            });
        }
        catch (error) {
            console.error(`Failed to filter NewBondingRequest events`, error);
            throw new Error(`Failed to filter SlashingEvent: ` + error.message);
        }
    }
    async InnocenceProven(startBlock, endBlock) {
        try {
            const filter = this.contract.filters.InnocenceProven();
            const events = await this.contract.queryFilter(filter, startBlock, endBlock);
            return events.map((event) => {
                var _a, _b;
                return ({
                    _offender: (_a = event.args) === null || _a === void 0 ? void 0 : _a._offender,
                    _id: (_b = event.args) === null || _b === void 0 ? void 0 : _b._id,
                    blockNumber: event.blockNumber,
                    transactionHash: event.transactionHash,
                });
            });
        }
        catch (error) {
            console.error(`Failed to filter InnocenceProven events`, error);
            throw new Error(`Failed to filter InnocenceProven: ` + error.message);
        }
    }
    async NewAccusation(startBlock, endBlock) {
        try {
            const filter = this.contract.filters.NewAccusation();
            const events = await this.contract.queryFilter(filter, startBlock, endBlock);
            return events.map((event) => {
                var _a, _b, _c;
                return ({
                    _offender: (_a = event.args) === null || _a === void 0 ? void 0 : _a._offender,
                    _id: (_b = event.args) === null || _b === void 0 ? void 0 : _b._id,
                    _severity: (_c = event.args) === null || _c === void 0 ? void 0 : _c._severity,
                    blockNumber: event.blockNumber,
                    transactionHash: event.transactionHash,
                });
            });
        }
        catch (error) {
            console.error(`Failed to filter InnocenceProven events`, error);
            throw new Error(`Failed to filter InnocenceProven: ` + error.message);
        }
    }
    async NewFaultProof(startBlock, endBlock) {
        try {
            const filter = this.contract.filters.NewFaultProof();
            const events = await this.contract.queryFilter(filter, startBlock, endBlock);
            return events.map((event) => {
                var _a, _b, _c;
                return ({
                    _offender: (_a = event.args) === null || _a === void 0 ? void 0 : _a._offender,
                    _id: (_b = event.args) === null || _b === void 0 ? void 0 : _b._id,
                    _severity: (_c = event.args) === null || _c === void 0 ? void 0 : _c._severity,
                    blockNumber: event.blockNumber,
                    transactionHash: event.transactionHash,
                });
            });
        }
        catch (error) {
            console.error(`Failed to filter InnocenceProven events`, error);
            throw new Error(`Failed to filter InnocenceProven: ` + error.message);
        }
    }
}
exports.accountability = accountability;
