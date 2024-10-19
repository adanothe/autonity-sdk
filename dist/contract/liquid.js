"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.liquid = void 0;
const utils_1 = require("../utils"); // Sekarang menggunakan `index.ts`
const typechain_1 = require("../typechain");
class liquid {
    constructor(networkOrRpcUrl = utils_1.piccadilly, contractAddress, privateKey, signerOrProvider) {
        const rpcUrl = typeof networkOrRpcUrl === "string"
            ? networkOrRpcUrl
            : networkOrRpcUrl.rpcUrl;
        this.contract = (0, utils_1.initContract)(typechain_1.Liquid__factory, contractAddress, rpcUrl, privateKey, signerOrProvider);
    }
    async allowance(_owner, _spender) {
        return await this.contract.allowance(_owner, _spender);
    }
    async Approval(startBlock, endBlock) {
        try {
            const filter = this.contract.filters.Approval();
            const events = await this.contract.queryFilter(filter, startBlock, endBlock);
            return events.map((event) => {
                var _a, _b, _c;
                return ({
                    owner: (_a = event.args) === null || _a === void 0 ? void 0 : _a.owner,
                    spender: (_b = event.args) === null || _b === void 0 ? void 0 : _b.spender,
                    value: (_c = event.args) === null || _c === void 0 ? void 0 : _c.value,
                    blockNumber: event.blockNumber,
                    transactionHash: event.transactionHash,
                });
            });
        }
        catch (error) {
            console.error(`Failed to filter Approval events:`, error);
            throw new Error(`Failed to filter Approval events: ` + error.message);
        }
    }
    async balanceOf(_delegator) {
        return await this.contract.balanceOf(_delegator);
    }
    async claimRewards() {
        try {
            const transactionResponse = await this.contract.claimRewards();
            return transactionResponse;
        }
        catch (error) {
            console.error(`Failed to claim rewards`, error);
            throw new Error(`Failed to claim rewards: ` + error.message);
        }
    }
    async commissionRate() {
        return await this.contract.commissionRate();
    }
    async decimals() {
        return await this.contract.decimals();
    }
    async feeFactorUnitRecip() {
        return await this.contract.FEE_FACTOR_UNIT_RECIP();
    }
    async getPrecision() {
        return await this.contract.COMMISSION_RATE_PRECISION();
    }
    async lockedBalanceOf(_delegator) {
        return await this.contract.lockedBalanceOf(_delegator);
    }
    async name() {
        return await this.contract.name();
    }
    async symbol() {
        return await this.contract.symbol();
    }
    async totalSupply() {
        return await this.contract.totalSupply();
    }
    async transfer(_to, _amount) {
        try {
            const txResponse = await this.contract.transfer(_to, _amount);
            return txResponse;
        }
        catch (error) {
            console.error(`Failed to transfer ${_amount} to recipient ${_to}:`, error);
            throw new Error(`Failed to transfer ${_amount} to recipient ${_to}: ` +
                error.message);
        }
    }
    async transferFrom(_sender, _recipient, _amount) {
        try {
            const txResponse = await this.contract.transferFrom(_sender, _recipient, _amount);
            return txResponse;
        }
        catch (error) {
            console.error(`Failed to transfer ${_amount} from sender ${_sender} to recipient ${_recipient}:`, error);
            throw new Error(`Failed to transfer ${_amount} from sender ${_sender} to recipient ${_recipient}: ` +
                error.message);
        }
    }
    async treasury() {
        return await this.contract.treasury();
    }
    async unclaimedRewards(_account) {
        const [_unclaimedATN, _unclaimedNTN] = await this.contract.unclaimedRewards(_account);
        return {
            unclaimedATN: _unclaimedATN,
            unclaimedNTN: _unclaimedNTN,
        };
    }
    async unlockedBalanceOf(_delegator) {
        return await this.contract.unlockedBalanceOf(_delegator);
    }
    async validator() {
        return await this.contract.validator();
    }
}
exports.liquid = liquid;
