"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auton = void 0;
const utils_1 = require("../utils/utils");
const typechain_1 = require("../typechain");
const VALIDATOR_STATE = {
    0: "active",
    1: "paused",
    2: "jailed",
    3: "jailbound",
};
const configEntity = (config) => ({
    policy: {
        treasuryFee: config[0].treasuryFee.toString(),
        minBaseFee: config[0].minBaseFee.toString(),
        delegationRate: config[0].delegationRate.toString(),
        unbondingPeriod: config[0].unbondingPeriod.toString(),
        initialInflationReserve: config[0].initialInflationReserve.toString(),
        treasuryAccount: config[0].treasuryAccount,
    },
    contracts: {
        accountabilityContract: config[1].accountabilityContract,
        oracleContract: config[1].oracleContract,
        acuContract: config[1].acuContract,
        supplyControlContract: config[1].supplyControlContract,
        stabilizationContract: config[1].stabilizationContract,
        upgradeManagerContract: config[1].upgradeManagerContract,
        inflationControllerContract: config[1].inflationControllerContract,
        nonStakableVestingContract: config[1].nonStakableVestingContract,
    },
    protocol: {
        operatorAccount: config[2].operatorAccount,
        epochPeriod: config[2].epochPeriod.toString(),
        blockPeriod: config[2].blockPeriod.toString(),
        committeeSize: config[2].committeeSize.toString(),
    },
    contractVersion: config[3].toString(),
});
const committeeEntity = (committee) => ({
    addr: committee.addr,
    votingPower: committee.votingPower.toString(),
    consensusKey: committee.consensusKey,
});
const validatorEntity = (validator) => ({
    treasury: validator.treasury,
    nodeAddress: validator.nodeAddress,
    oracleAddress: validator.oracleAddress,
    enode: validator.enode,
    commissionRate: validator.commissionRate.toString(),
    bondedStake: validator.bondedStake.toString(),
    unbondingStake: validator.unbondingStake.toString(),
    unbondingShares: validator.unbondingShares.toString(),
    selfBondedStake: validator.selfBondedStake.toString(),
    selfUnbondingStake: validator.selfUnbondingStake.toString(),
    selfUnbondingShares: validator.selfUnbondingShares.toString(),
    selfUnbondingStakeLocked: validator.selfUnbondingStakeLocked.toString(),
    liquidContract: validator.liquidContract,
    liquidSupply: validator.liquidSupply.toString(),
    registrationBlock: validator.registrationBlock.toString(),
    totalSlashed: validator.totalSlashed.toString(),
    jailReleaseBlock: validator.jailReleaseBlock.toString(),
    provableFaultCount: validator.provableFaultCount.toString(),
    consensusKey: validator.consensusKey,
    state: VALIDATOR_STATE[Number(validator.state)] || "unknown",
});
class Auton {
    constructor(rpcUrl = (0, utils_1.defaultRpc)(), contractAddress = utils_1.AUTONITY_CONTRACT, privateKey, signerOrProvider) {
        this.contract = (0, utils_1.initContract)(typechain_1.Autonity__factory, contractAddress, rpcUrl, privateKey, signerOrProvider);
    }
    // transaction methode
    async activateValidator(_address) {
        try {
            const transactionResponse = await this.contract.activateValidator(_address);
            return transactionResponse;
        }
        catch (error) {
            console.error(`Failed to activate validator for address ${_address}:`, error);
            throw new Error(`Failed to activate validator for address ${_address}: ` +
                error.message);
        }
    }
    async approve(spender, amount) {
        try {
            const txResponse = await this.contract.approve(spender, amount);
            return txResponse;
        }
        catch (error) {
            console.error(`Failed to approve ${amount} for spender ${spender}:`, error);
            throw new Error(`Failed to approve ${amount} for spender ${spender}: ` +
                error.message);
        }
    }
    async bond(_validator, _amount) {
        try {
            const transactionResponse = await this.contract.bond(_validator, _amount);
            return transactionResponse;
        }
        catch (error) {
            console.error(`Failed to bond for ${_validator}`, error);
            throw new Error(`Failed to bond for ${_validator} ` + error.message);
        }
    }
    async change_commission_rate(_validator, _rate) {
        try {
            const transactionResponse = await this.contract.changeCommissionRate(_validator, _rate);
            return transactionResponse;
        }
        catch (error) {
            console.error(`Failed to change commission ${_validator}`, error);
            throw new Error(`Failed to change commission ${_validator} ` + error.message);
        }
    }
    async pause_validator(_address) {
        try {
            const txResponse = await this.contract.pauseValidator(_address);
            return txResponse;
        }
        catch (error) {
            console.error(`Failed to pause validator ${_address}`, error);
            throw new Error(`Failed to pause validator ${_address} ` + error.message);
        }
    }
    async register_validator(_enode, _oracleAddress, _consensusKey, _signatures) {
        try {
            const txResponse = await this.contract.registerValidator(_enode, _oracleAddress, _consensusKey, _signatures);
            return txResponse;
        }
        catch (error) {
            console.error(`Failed to register validator`, error);
            throw new Error(`Failed to register validator ` + error.message);
        }
    }
    async update_enode(_nodeAddress, _enode) {
        try {
            const txResponse = await this.contract.updateEnode(_nodeAddress, _enode);
            return txResponse;
        }
        catch (error) {
            console.error(`Failed to update enode`, error);
            throw new Error(`Failed to update enode ` + error.message);
        }
    }
    // Filter methode
    async NewBondingRequest(startBlock, endBlock) {
        try {
            const filter = this.contract.filters.NewBondingRequest();
            const events = await this.contract.queryFilter(filter, startBlock, endBlock);
            return events.map((event) => {
                var _a, _b, _c, _d;
                return ({
                    validator: (_a = event.args) === null || _a === void 0 ? void 0 : _a.validator,
                    delegator: (_b = event.args) === null || _b === void 0 ? void 0 : _b.delegator,
                    selfBonded: (_c = event.args) === null || _c === void 0 ? void 0 : _c.selfBonded,
                    amount: (_d = event.args) === null || _d === void 0 ? void 0 : _d.amount,
                    blockNumber: event.blockNumber,
                    transactionHash: event.transactionHash,
                });
            });
        }
        catch (error) {
            console.error(`Failed to filter NewBondingRequest events`, error);
            throw new Error(`Failed to filter NewBondingRequest events: ` + error.message);
        }
    }
    async NewEpoch(startBlock, endBlock) {
        try {
            const filter = this.contract.filters.NewEpoch();
            const events = await this.contract.queryFilter(filter, startBlock, endBlock);
            return events.map((event) => {
                var _a;
                return ({
                    epoch: (_a = event.args) === null || _a === void 0 ? void 0 : _a.epoch,
                    blockNumber: event.blockNumber,
                    transactionHash: event.transactionHash,
                });
            });
        }
        catch (error) {
            console.error(`Failed to filter NewEpoch events`, error);
            throw new Error(`Failed to filter NewEpoch events: ` + error.message);
        }
    }
    async NewUnbondingRequest(startBlock, endBlock) {
        try {
            const filter = this.contract.filters.NewUnbondingRequest();
            const events = await this.contract.queryFilter(filter, startBlock, endBlock);
            return events.map((event) => {
                var _a, _b, _c, _d;
                return ({
                    validator: (_a = event.args) === null || _a === void 0 ? void 0 : _a.validator,
                    delegator: (_b = event.args) === null || _b === void 0 ? void 0 : _b.delegator,
                    selfBonded: (_c = event.args) === null || _c === void 0 ? void 0 : _c.selfBonded,
                    amount: (_d = event.args) === null || _d === void 0 ? void 0 : _d.amount,
                    blockNumber: event.blockNumber,
                    transactionHash: event.transactionHash,
                });
            });
        }
        catch (error) {
            console.error(`Failed to filter NewBondingRequest events`, error);
            throw new Error(`Failed to filter NewBondingRequest events: ` + error.message);
        }
    }
    async CommissionRateChange(startBlock, endBlock) {
        try {
            const filter = this.contract.filters.CommissionRateChange();
            const events = await this.contract.queryFilter(filter, startBlock, endBlock);
            return events.map((event) => {
                var _a, _b;
                return ({
                    validator: (_a = event.args) === null || _a === void 0 ? void 0 : _a.validator,
                    rate: (_b = event.args) === null || _b === void 0 ? void 0 : _b.rate,
                    blockNumber: event.blockNumber,
                    transactionHash: event.transactionHash,
                });
            });
        }
        catch (error) {
            console.error(`Failed to filter CommissionRateChange events`, error);
            throw new Error(`Failed to filter CommissionRateChange events: ` +
                error.message);
        }
    }
    async EpochPeriodUpdated(startBlock, endBlock) {
        try {
            const filter = this.contract.filters.EpochPeriodUpdated();
            const events = await this.contract.queryFilter(filter, startBlock, endBlock);
            return events.map((event) => {
                var _a;
                return ({
                    period: (_a = event.args) === null || _a === void 0 ? void 0 : _a.period,
                    blockNumber: event.blockNumber,
                    transactionHash: event.transactionHash,
                });
            });
        }
        catch (error) {
            console.error(`Failed to filter EpochPeriodUpdated events`, error);
            throw new Error(`Failed to filter EpochPeriodUpdated events: ` +
                error.message);
        }
    }
    async MinimumBaseFeeUpdated(startBlock, endBlock) {
        try {
            const filter = this.contract.filters.MinimumBaseFeeUpdated();
            const events = await this.contract.queryFilter(filter, startBlock, endBlock);
            return events.map((event) => {
                var _a;
                return ({
                    gasPrice: (_a = event.args) === null || _a === void 0 ? void 0 : _a.gasPrice,
                    blockNumber: event.blockNumber,
                    transactionHash: event.transactionHash,
                });
            });
        }
        catch (error) {
            console.error(`Failed to filter MinimumBaseFeeUpdated events`, error);
            throw new Error(`Failed to filter MinimumBaseFeeUpdated events: ` +
                error.message);
        }
    }
    // View methode
    async allowance(owner, spender) {
        try {
            return await this.contract.allowance(owner, spender);
        }
        catch (error) {
            throw new Error(`Failed to fetch allowance for owner ${owner} and spender ${spender}: ` +
                error.message);
        }
    }
    async atnTotal_redistributed() {
        try {
            return await this.contract.atnTotalRedistributed();
        }
        catch (error) {
            throw new Error("Failed to fetch ATN total redistributed: " + error.message);
        }
    }
    async balanceOf(address) {
        try {
            return await this.contract.balanceOf(address);
        }
        catch (error) {
            throw new Error(`Failed to fetch balance for address ${address}: ` +
                error.message);
        }
    }
    async commission_rate_precision() {
        try {
            return await this.contract.COMMISSION_RATE_PRECISION();
        }
        catch (error) {
            throw new Error("Failed to fetch COMMISSION_RATE_PRECISION: " + error.message);
        }
    }
    async config() {
        try {
            const config = await this.contract.config();
            return configEntity(config);
        }
        catch (error) {
            throw new Error("Failed to fetch config: " + error.message);
        }
    }
    async decimals() {
        try {
            return await this.contract.decimals();
        }
        catch (error) {
            throw new Error("Failed to fetch decimals: " + error.message);
        }
    }
    async deployer() {
        try {
            return await this.contract.deployer();
        }
        catch (error) {
            throw new Error("Failed to fetch deployer address: " + error.message);
        }
    }
    async epochID() {
        try {
            return await this.contract.epochID();
        }
        catch (error) {
            throw new Error("Failed to fetch epoch ID: " + error.message);
        }
    }
    async epochReward() {
        try {
            return await this.contract.epochReward();
        }
        catch (error) {
            throw new Error("Failed to fetch epoch reward: " + error.message);
        }
    }
    async epochTotalBondedStake() {
        try {
            return await this.contract.epochTotalBondedStake();
        }
        catch (error) {
            throw new Error("Failed to fetch epoch total bonded stake: " + error.message);
        }
    }
    async getBlockPeriod() {
        try {
            return await this.contract.getBlockPeriod();
        }
        catch (error) {
            throw new Error("Failed to fetch block period: " + error.message);
        }
    }
    async getCommittee() {
        try {
            const result = await this.contract.getCommittee();
            return result.map(committeeEntity);
        }
        catch (error) {
            throw new Error("Failed to fetch committee members: " + error.message);
        }
    }
    async getCommitteeEnodes() {
        try {
            return await this.contract.getCommitteeEnodes();
        }
        catch (error) {
            throw new Error("Failed to fetch committee enodes: " + error.message);
        }
    }
    async getEpochFromBlock(_block) {
        try {
            return await this.contract.getEpochFromBlock(_block);
        }
        catch (error) {
            throw new Error(`Failed to fetch epoch from block ${_block}: ` +
                error.message);
        }
    }
    async getEpochPeriod() {
        try {
            return await this.contract.getEpochPeriod();
        }
        catch (error) {
            throw new Error("Failed to fetch epoch period: " + error.message);
        }
    }
    async getLastEpochBlock() {
        try {
            return await this.contract.getLastEpochBlock();
        }
        catch (error) {
            throw new Error("Failed to fetch last epoch block: " + error.message);
        }
    }
    async getMaxCommitteeSize() {
        try {
            return await this.contract.getMaxCommitteeSize();
        }
        catch (error) {
            throw new Error("Failed to fetch max committee size: " + error.message);
        }
    }
    async getMinimumBaseFee() {
        try {
            return await this.contract.getMinimumBaseFee();
        }
        catch (error) {
            throw new Error("Failed to fetch minimum base fee: " + error.message);
        }
    }
    async getNewContract() {
        try {
            return await this.contract.getNewContract();
        }
        catch (error) {
            throw new Error("Failed to fetch new contract addresses: " + error.message);
        }
    }
    async getOperator() {
        try {
            return await this.contract.getOperator();
        }
        catch (error) {
            throw new Error("Failed to fetch operator: " + error.message);
        }
    }
    async getOracle() {
        try {
            return await this.contract.getOracle();
        }
        catch (error) {
            throw new Error("Failed to fetch oracle address: " + error.message);
        }
    }
    async getProposer(height, round) {
        try {
            return await this.contract.getProposer(height, round);
        }
        catch (error) {
            throw new Error(`Failed to fetch proposer for height ${height} and round ${round}: ` +
                error.message);
        }
    }
    async getRevertingAmount(_unbondingID) {
        try {
            return await this.contract.getRevertingAmount(_unbondingID);
        }
        catch (error) {
            throw new Error(`Failed to fetch reverting amount for unbonding ID ${_unbondingID}: ` +
                error.message);
        }
    }
    async getTreasuryAccount() {
        try {
            return await this.contract.getTreasuryAccount();
        }
        catch (error) {
            throw new Error("Failed to fetch treasury account: " + error.message);
        }
    }
    async getTreasuryFee() {
        try {
            return await this.contract.getTreasuryFee();
        }
        catch (error) {
            throw new Error("Failed to fetch treasury fee: " + error.message);
        }
    }
    async getUnbondingPeriod() {
        try {
            return await this.contract.getUnbondingPeriod();
        }
        catch (error) {
            throw new Error("Failed to fetch unbonding period: " + error.message);
        }
    }
    async getUnbondingReleaseState(_unbondingID) {
        try {
            return await this.contract.getUnbondingReleaseState(_unbondingID);
        }
        catch (error) {
            throw new Error(`Failed to fetch unbonding release state for unbonding ID ${_unbondingID}: ` +
                error.message);
        }
    }
    async getVersion() {
        try {
            return await this.contract.getVersion();
        }
        catch (error) {
            throw new Error("Failed to fetch version: " + error.message);
        }
    }
    async inflationReserve() {
        try {
            return await this.contract.inflationReserve();
        }
        catch (error) {
            throw new Error("Failed to fetch inflation reserve: " + error.message);
        }
    }
    async lastEpochBlock() {
        try {
            return await this.contract.lastEpochBlock();
        }
        catch (error) {
            throw new Error("Failed to fetch last epoch block: " + error.message);
        }
    }
    async lastEpochTime() {
        try {
            return await this.contract.lastEpochTime();
        }
        catch (error) {
            throw new Error("Failed to fetch last epoch time: " + error.message);
        }
    }
    async maxBondAppliedGas() {
        try {
            return await this.contract.maxBondAppliedGas();
        }
        catch (error) {
            throw new Error("Failed to fetch max bond applied gas: " + error.message);
        }
    }
    async maxRewardsDistributionGas() {
        try {
            return await this.contract.maxRewardsDistributionGas();
        }
        catch (error) {
            throw new Error("Failed to fetch max rewards distribution gas: " +
                error.message);
        }
    }
    async maxUnbondAppliedGas() {
        try {
            return await this.contract.maxUnbondAppliedGas();
        }
        catch (error) {
            throw new Error("Failed to fetch max unbond applied gas: " + error.message);
        }
    }
    async maxUnbondReleasedGas() {
        try {
            return await this.contract.maxUnbondReleasedGas();
        }
        catch (error) {
            throw new Error("Failed to fetch max unbond released gas: " + error.message);
        }
    }
    async name() {
        try {
            return await this.contract.name();
        }
        catch (error) {
            throw new Error("Failed to fetch name: " + error.message);
        }
    }
    async stakingGasPrice() {
        try {
            return await this.contract.stakingGasPrice();
        }
        catch (error) {
            throw new Error("Failed to fetch staking gas price: " + error.message);
        }
    }
    async symbol() {
        try {
            return await this.contract.symbol();
        }
        catch (error) {
            throw new Error("Failed to fetch symbol: " + error.message);
        }
    }
    async totalSupply() {
        try {
            return await this.contract.totalSupply();
        }
        catch (error) {
            throw new Error("Failed to fetch total supply: " + error.message);
        }
    }
    async getValidator(_addr) {
        try {
            const result = await this.contract.getValidator(_addr);
            return validatorEntity(result);
        }
        catch (error) {
            throw new Error(`Failed to fetch validator info for address ${_addr}: ` +
                error.message);
        }
    }
    async getValidators() {
        try {
            return await this.contract.getValidators();
        }
        catch (error) {
            throw new Error("Failed to fetch validators: " + error.message);
        }
    }
}
exports.Auton = Auton;
