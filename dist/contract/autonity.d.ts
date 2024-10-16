import { ethers } from "ethers";
interface ConfigInterface {
    policy: {
        treasuryFee: string;
        minBaseFee: string;
        delegationRate: string;
        unbondingPeriod: string;
        initialInflationReserve: string;
        treasuryAccount: string;
    };
    contracts: {
        accountabilityContract: string;
        oracleContract: string;
        acuContract: string;
        supplyControlContract: string;
        stabilizationContract: string;
        upgradeManagerContract: string;
        inflationControllerContract: string;
        nonStakableVestingContract: string;
    };
    protocol: {
        operatorAccount: string;
        epochPeriod: string;
        blockPeriod: string;
        committeeSize: string;
    };
    contractVersion: string;
}
interface CommitteeInterface {
    addr: string;
    votingPower: string;
    consensusKey: string;
}
interface ValidatorInterface {
    treasury: string;
    nodeAddress: string;
    oracleAddress: string;
    enode: string;
    commissionRate: string;
    bondedStake: string;
    unbondingStake: string;
    unbondingShares: string;
    selfBondedStake: string;
    selfUnbondingStake: string;
    selfUnbondingShares: string;
    selfUnbondingStakeLocked: string;
    liquidContract: string;
    liquidSupply: string;
    registrationBlock: string;
    totalSlashed: string;
    jailReleaseBlock: string;
    provableFaultCount: string;
    consensusKey: string;
    state: string;
}
export declare class Auton {
    private contract;
    constructor(rpcUrl?: string, contractAddress?: string, privateKey?: string, signerOrProvider?: ethers.Wallet | ethers.JsonRpcProvider);
    activateValidator(_address: ethers.AddressLike): Promise<ethers.ContractTransactionResponse>;
    approve(spender: ethers.AddressLike, amount: ethers.BigNumberish): Promise<ethers.ContractTransactionResponse>;
    bond(_validator: ethers.AddressLike, _amount: ethers.BigNumberish): Promise<ethers.ContractTransactionResponse>;
    change_commission_rate(_validator: ethers.AddressLike, _rate: ethers.BigNumberish): Promise<ethers.ContractTransactionResponse>;
    pause_validator(_address: ethers.AddressLike): Promise<ethers.ContractTransactionResponse>;
    register_validator(_enode: string, _oracleAddress: ethers.AddressLike, _consensusKey: ethers.BytesLike, _signatures: ethers.BytesLike): Promise<ethers.ContractTransactionResponse>;
    update_enode(_nodeAddress: ethers.AddressLike, _enode: string): Promise<ethers.ContractTransactionResponse>;
    NewBondingRequest(startBlock?: number, endBlock?: number): Promise<{
        validator: string;
        delegator: string;
        selfBonded: boolean;
        amount: bigint;
        blockNumber: number;
        transactionHash: string;
    }[]>;
    NewEpoch(startBlock?: number, endBlock?: number): Promise<{
        epoch: bigint;
        blockNumber: number;
        transactionHash: string;
    }[]>;
    NewUnbondingRequest(startBlock?: number, endBlock?: number): Promise<{
        validator: string;
        delegator: string;
        selfBonded: boolean;
        amount: bigint;
        blockNumber: number;
        transactionHash: string;
    }[]>;
    CommissionRateChange(startBlock?: number, endBlock?: number): Promise<{
        validator: string;
        rate: bigint;
        blockNumber: number;
        transactionHash: string;
    }[]>;
    EpochPeriodUpdated(startBlock?: number, endBlock?: number): Promise<{
        period: bigint;
        blockNumber: number;
        transactionHash: string;
    }[]>;
    MinimumBaseFeeUpdated(startBlock?: number, endBlock?: number): Promise<{
        gasPrice: bigint;
        blockNumber: number;
        transactionHash: string;
    }[]>;
    allowance(owner: ethers.AddressLike, spender: ethers.AddressLike): Promise<bigint>;
    atnTotal_redistributed(): Promise<bigint>;
    balanceOf(address: ethers.AddressLike): Promise<bigint>;
    commission_rate_precision(): Promise<bigint>;
    config(): Promise<ConfigInterface>;
    decimals(): Promise<bigint>;
    deployer(): Promise<string>;
    epochID(): Promise<bigint>;
    epochReward(): Promise<bigint>;
    epochTotalBondedStake(): Promise<bigint>;
    getBlockPeriod(): Promise<bigint>;
    getCommittee(): Promise<CommitteeInterface[]>;
    getCommitteeEnodes(): Promise<string[]>;
    getEpochFromBlock(_block: ethers.BigNumberish): Promise<bigint>;
    getEpochPeriod(): Promise<bigint>;
    getLastEpochBlock(): Promise<bigint>;
    getMaxCommitteeSize(): Promise<bigint>;
    getMinimumBaseFee(): Promise<bigint>;
    getNewContract(): Promise<[string, string]>;
    getOperator(): Promise<string>;
    getOracle(): Promise<string>;
    getProposer(height: ethers.BigNumberish, round: bigint): Promise<string>;
    getRevertingAmount(_unbondingID: ethers.BigNumberish): Promise<bigint>;
    getTreasuryAccount(): Promise<string>;
    getTreasuryFee(): Promise<bigint>;
    getUnbondingPeriod(): Promise<bigint>;
    getUnbondingReleaseState(_unbondingID: bigint): Promise<bigint>;
    getVersion(): Promise<bigint>;
    inflationReserve(): Promise<bigint>;
    lastEpochBlock(): Promise<bigint>;
    lastEpochTime(): Promise<bigint>;
    maxBondAppliedGas(): Promise<bigint>;
    maxRewardsDistributionGas(): Promise<bigint>;
    maxUnbondAppliedGas(): Promise<bigint>;
    maxUnbondReleasedGas(): Promise<bigint>;
    name(): Promise<string>;
    stakingGasPrice(): Promise<bigint>;
    symbol(): Promise<string>;
    totalSupply(): Promise<bigint>;
    getValidator(_addr: ethers.AddressLike): Promise<ValidatorInterface>;
    getValidators(): Promise<string[]>;
}
export {};
