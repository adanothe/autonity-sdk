import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "./common";
export declare namespace Autonity {
    type ValidatorStruct = {
        treasury: AddressLike;
        nodeAddress: AddressLike;
        oracleAddress: AddressLike;
        enode: string;
        commissionRate: BigNumberish;
        bondedStake: BigNumberish;
        unbondingStake: BigNumberish;
        unbondingShares: BigNumberish;
        selfBondedStake: BigNumberish;
        selfUnbondingStake: BigNumberish;
        selfUnbondingShares: BigNumberish;
        selfUnbondingStakeLocked: BigNumberish;
        liquidContract: AddressLike;
        liquidSupply: BigNumberish;
        registrationBlock: BigNumberish;
        totalSlashed: BigNumberish;
        jailReleaseBlock: BigNumberish;
        provableFaultCount: BigNumberish;
        consensusKey: BytesLike;
        state: BigNumberish;
    };
    type ValidatorStructOutput = [
        treasury: string,
        nodeAddress: string,
        oracleAddress: string,
        enode: string,
        commissionRate: bigint,
        bondedStake: bigint,
        unbondingStake: bigint,
        unbondingShares: bigint,
        selfBondedStake: bigint,
        selfUnbondingStake: bigint,
        selfUnbondingShares: bigint,
        selfUnbondingStakeLocked: bigint,
        liquidContract: string,
        liquidSupply: bigint,
        registrationBlock: bigint,
        totalSlashed: bigint,
        jailReleaseBlock: bigint,
        provableFaultCount: bigint,
        consensusKey: string,
        state: bigint
    ] & {
        treasury: string;
        nodeAddress: string;
        oracleAddress: string;
        enode: string;
        commissionRate: bigint;
        bondedStake: bigint;
        unbondingStake: bigint;
        unbondingShares: bigint;
        selfBondedStake: bigint;
        selfUnbondingStake: bigint;
        selfUnbondingShares: bigint;
        selfUnbondingStakeLocked: bigint;
        liquidContract: string;
        liquidSupply: bigint;
        registrationBlock: bigint;
        totalSlashed: bigint;
        jailReleaseBlock: bigint;
        provableFaultCount: bigint;
        consensusKey: string;
        state: bigint;
    };
    type PolicyStruct = {
        treasuryFee: BigNumberish;
        minBaseFee: BigNumberish;
        delegationRate: BigNumberish;
        unbondingPeriod: BigNumberish;
        initialInflationReserve: BigNumberish;
        treasuryAccount: AddressLike;
    };
    type PolicyStructOutput = [
        treasuryFee: bigint,
        minBaseFee: bigint,
        delegationRate: bigint,
        unbondingPeriod: bigint,
        initialInflationReserve: bigint,
        treasuryAccount: string
    ] & {
        treasuryFee: bigint;
        minBaseFee: bigint;
        delegationRate: bigint;
        unbondingPeriod: bigint;
        initialInflationReserve: bigint;
        treasuryAccount: string;
    };
    type ContractsStruct = {
        accountabilityContract: AddressLike;
        oracleContract: AddressLike;
        acuContract: AddressLike;
        supplyControlContract: AddressLike;
        stabilizationContract: AddressLike;
        upgradeManagerContract: AddressLike;
        inflationControllerContract: AddressLike;
        nonStakableVestingContract: AddressLike;
    };
    type ContractsStructOutput = [
        accountabilityContract: string,
        oracleContract: string,
        acuContract: string,
        supplyControlContract: string,
        stabilizationContract: string,
        upgradeManagerContract: string,
        inflationControllerContract: string,
        nonStakableVestingContract: string
    ] & {
        accountabilityContract: string;
        oracleContract: string;
        acuContract: string;
        supplyControlContract: string;
        stabilizationContract: string;
        upgradeManagerContract: string;
        inflationControllerContract: string;
        nonStakableVestingContract: string;
    };
    type ProtocolStruct = {
        operatorAccount: AddressLike;
        epochPeriod: BigNumberish;
        blockPeriod: BigNumberish;
        committeeSize: BigNumberish;
    };
    type ProtocolStructOutput = [
        operatorAccount: string,
        epochPeriod: bigint,
        blockPeriod: bigint,
        committeeSize: bigint
    ] & {
        operatorAccount: string;
        epochPeriod: bigint;
        blockPeriod: bigint;
        committeeSize: bigint;
    };
    type ConfigStruct = {
        policy: Autonity.PolicyStruct;
        contracts: Autonity.ContractsStruct;
        protocol: Autonity.ProtocolStruct;
        contractVersion: BigNumberish;
    };
    type ConfigStructOutput = [
        policy: Autonity.PolicyStructOutput,
        contracts: Autonity.ContractsStructOutput,
        protocol: Autonity.ProtocolStructOutput,
        contractVersion: bigint
    ] & {
        policy: Autonity.PolicyStructOutput;
        contracts: Autonity.ContractsStructOutput;
        protocol: Autonity.ProtocolStructOutput;
        contractVersion: bigint;
    };
    type CommitteeMemberStruct = {
        addr: AddressLike;
        votingPower: BigNumberish;
        consensusKey: BytesLike;
    };
    type CommitteeMemberStructOutput = [
        addr: string,
        votingPower: bigint,
        consensusKey: string
    ] & {
        addr: string;
        votingPower: bigint;
        consensusKey: string;
    };
}
export interface AutonityInterface extends Interface {
    getFunction(nameOrSignature: "COMMISSION_RATE_PRECISION" | "activateValidator" | "allowance" | "approve" | "atnTotalRedistributed" | "balanceOf" | "bond" | "burn" | "changeCommissionRate" | "completeContractUpgrade" | "computeCommittee" | "config" | "decimals" | "deployer" | "epochID" | "epochReward" | "epochTotalBondedStake" | "finalize" | "finalizeInitialization" | "getBlockPeriod" | "getCommittee" | "getCommitteeEnodes" | "getEpochFromBlock" | "getEpochPeriod" | "getLastEpochBlock" | "getMaxCommitteeSize" | "getMinimumBaseFee" | "getNewContract" | "getOperator" | "getOracle" | "getProposer" | "getRevertingAmount" | "getTreasuryAccount" | "getTreasuryFee" | "getUnbondingPeriod" | "getUnbondingReleaseState" | "getValidator" | "getValidators" | "getVersion" | "inflationReserve" | "lastEpochBlock" | "lastEpochTime" | "maxBondAppliedGas" | "maxRewardsDistributionGas" | "maxUnbondAppliedGas" | "maxUnbondReleasedGas" | "mint" | "name" | "pauseValidator" | "receiveATN" | "registerValidator" | "resetContractUpgrade" | "setAccountabilityContract" | "setAcuContract" | "setCommitteeSize" | "setEpochPeriod" | "setInflationControllerContract" | "setMaxBondAppliedGas" | "setMaxRewardsDistributionGas" | "setMaxUnbondAppliedGas" | "setMaxUnbondReleasedGas" | "setMinimumBaseFee" | "setNonStakableVestingContract" | "setOperatorAccount" | "setOracleContract" | "setStabilizationContract" | "setStakingGasPrice" | "setSupplyControlContract" | "setTreasuryAccount" | "setTreasuryFee" | "setUnbondingPeriod" | "setUpgradeManagerContract" | "stakingGasPrice" | "symbol" | "totalSupply" | "transfer" | "transferFrom" | "unbond" | "updateEnode" | "updateValidatorAndTransferSlashedFunds" | "upgradeContract"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "ActivatedValidator" | "AppliedUnbondingReverted" | "Approval" | "BondingRejected" | "BondingReverted" | "BurnedStake" | "CommissionRateChange" | "EpochPeriodUpdated" | "MinimumBaseFeeUpdated" | "MintedStake" | "NewBondingRequest" | "NewEpoch" | "NewUnbondingRequest" | "PausedValidator" | "RegisteredValidator" | "ReleasedUnbondingReverted" | "Rewarded" | "Transfer" | "UnbondingRejected" | "UnlockingScheduleFailed"): EventFragment;
    encodeFunctionData(functionFragment: "COMMISSION_RATE_PRECISION", values?: undefined): string;
    encodeFunctionData(functionFragment: "activateValidator", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "allowance", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "approve", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "atnTotalRedistributed", values?: undefined): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "bond", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "burn", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "changeCommissionRate", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "completeContractUpgrade", values?: undefined): string;
    encodeFunctionData(functionFragment: "computeCommittee", values?: undefined): string;
    encodeFunctionData(functionFragment: "config", values?: undefined): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "deployer", values?: undefined): string;
    encodeFunctionData(functionFragment: "epochID", values?: undefined): string;
    encodeFunctionData(functionFragment: "epochReward", values?: undefined): string;
    encodeFunctionData(functionFragment: "epochTotalBondedStake", values?: undefined): string;
    encodeFunctionData(functionFragment: "finalize", values?: undefined): string;
    encodeFunctionData(functionFragment: "finalizeInitialization", values?: undefined): string;
    encodeFunctionData(functionFragment: "getBlockPeriod", values?: undefined): string;
    encodeFunctionData(functionFragment: "getCommittee", values?: undefined): string;
    encodeFunctionData(functionFragment: "getCommitteeEnodes", values?: undefined): string;
    encodeFunctionData(functionFragment: "getEpochFromBlock", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getEpochPeriod", values?: undefined): string;
    encodeFunctionData(functionFragment: "getLastEpochBlock", values?: undefined): string;
    encodeFunctionData(functionFragment: "getMaxCommitteeSize", values?: undefined): string;
    encodeFunctionData(functionFragment: "getMinimumBaseFee", values?: undefined): string;
    encodeFunctionData(functionFragment: "getNewContract", values?: undefined): string;
    encodeFunctionData(functionFragment: "getOperator", values?: undefined): string;
    encodeFunctionData(functionFragment: "getOracle", values?: undefined): string;
    encodeFunctionData(functionFragment: "getProposer", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getRevertingAmount", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getTreasuryAccount", values?: undefined): string;
    encodeFunctionData(functionFragment: "getTreasuryFee", values?: undefined): string;
    encodeFunctionData(functionFragment: "getUnbondingPeriod", values?: undefined): string;
    encodeFunctionData(functionFragment: "getUnbondingReleaseState", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getValidator", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getValidators", values?: undefined): string;
    encodeFunctionData(functionFragment: "getVersion", values?: undefined): string;
    encodeFunctionData(functionFragment: "inflationReserve", values?: undefined): string;
    encodeFunctionData(functionFragment: "lastEpochBlock", values?: undefined): string;
    encodeFunctionData(functionFragment: "lastEpochTime", values?: undefined): string;
    encodeFunctionData(functionFragment: "maxBondAppliedGas", values?: undefined): string;
    encodeFunctionData(functionFragment: "maxRewardsDistributionGas", values?: undefined): string;
    encodeFunctionData(functionFragment: "maxUnbondAppliedGas", values?: undefined): string;
    encodeFunctionData(functionFragment: "maxUnbondReleasedGas", values?: undefined): string;
    encodeFunctionData(functionFragment: "mint", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "pauseValidator", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "receiveATN", values?: undefined): string;
    encodeFunctionData(functionFragment: "registerValidator", values: [string, AddressLike, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "resetContractUpgrade", values?: undefined): string;
    encodeFunctionData(functionFragment: "setAccountabilityContract", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "setAcuContract", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "setCommitteeSize", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setEpochPeriod", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setInflationControllerContract", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "setMaxBondAppliedGas", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setMaxRewardsDistributionGas", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setMaxUnbondAppliedGas", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setMaxUnbondReleasedGas", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setMinimumBaseFee", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setNonStakableVestingContract", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "setOperatorAccount", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "setOracleContract", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "setStabilizationContract", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "setStakingGasPrice", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setSupplyControlContract", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "setTreasuryAccount", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "setTreasuryFee", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setUnbondingPeriod", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setUpgradeManagerContract", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "stakingGasPrice", values?: undefined): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "transfer", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [AddressLike, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "unbond", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "updateEnode", values: [AddressLike, string]): string;
    encodeFunctionData(functionFragment: "updateValidatorAndTransferSlashedFunds", values: [Autonity.ValidatorStruct]): string;
    encodeFunctionData(functionFragment: "upgradeContract", values: [BytesLike, string]): string;
    decodeFunctionResult(functionFragment: "COMMISSION_RATE_PRECISION", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "activateValidator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "atnTotalRedistributed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bond", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeCommissionRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "completeContractUpgrade", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "computeCommittee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "config", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deployer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "epochID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "epochReward", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "epochTotalBondedStake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "finalize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "finalizeInitialization", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBlockPeriod", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCommittee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCommitteeEnodes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getEpochFromBlock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getEpochPeriod", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLastEpochBlock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMaxCommitteeSize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMinimumBaseFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNewContract", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getOperator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getOracle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getProposer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRevertingAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTreasuryAccount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTreasuryFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUnbondingPeriod", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUnbondingReleaseState", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getValidator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getValidators", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getVersion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "inflationReserve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lastEpochBlock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lastEpochTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxBondAppliedGas", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxRewardsDistributionGas", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxUnbondAppliedGas", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxUnbondReleasedGas", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pauseValidator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "receiveATN", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "registerValidator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "resetContractUpgrade", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAccountabilityContract", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAcuContract", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setCommitteeSize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setEpochPeriod", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setInflationControllerContract", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMaxBondAppliedGas", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMaxRewardsDistributionGas", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMaxUnbondAppliedGas", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMaxUnbondReleasedGas", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMinimumBaseFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setNonStakableVestingContract", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setOperatorAccount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setOracleContract", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setStabilizationContract", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setStakingGasPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setSupplyControlContract", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTreasuryAccount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTreasuryFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setUnbondingPeriod", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setUpgradeManagerContract", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stakingGasPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unbond", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateEnode", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateValidatorAndTransferSlashedFunds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeContract", data: BytesLike): Result;
}
export declare namespace ActivatedValidatorEvent {
    type InputTuple = [
        treasury: AddressLike,
        addr: AddressLike,
        effectiveBlock: BigNumberish
    ];
    type OutputTuple = [
        treasury: string,
        addr: string,
        effectiveBlock: bigint
    ];
    interface OutputObject {
        treasury: string;
        addr: string;
        effectiveBlock: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace AppliedUnbondingRevertedEvent {
    type InputTuple = [
        validator: AddressLike,
        delegator: AddressLike,
        selfBonded: boolean,
        amount: BigNumberish
    ];
    type OutputTuple = [
        validator: string,
        delegator: string,
        selfBonded: boolean,
        amount: bigint
    ];
    interface OutputObject {
        validator: string;
        delegator: string;
        selfBonded: boolean;
        amount: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace ApprovalEvent {
    type InputTuple = [
        owner: AddressLike,
        spender: AddressLike,
        value: BigNumberish
    ];
    type OutputTuple = [owner: string, spender: string, value: bigint];
    interface OutputObject {
        owner: string;
        spender: string;
        value: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace BondingRejectedEvent {
    type InputTuple = [
        validator: AddressLike,
        delegator: AddressLike,
        amount: BigNumberish,
        state: BigNumberish
    ];
    type OutputTuple = [
        validator: string,
        delegator: string,
        amount: bigint,
        state: bigint
    ];
    interface OutputObject {
        validator: string;
        delegator: string;
        amount: bigint;
        state: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace BondingRevertedEvent {
    type InputTuple = [
        validator: AddressLike,
        delegator: AddressLike,
        amount: BigNumberish
    ];
    type OutputTuple = [
        validator: string,
        delegator: string,
        amount: bigint
    ];
    interface OutputObject {
        validator: string;
        delegator: string;
        amount: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace BurnedStakeEvent {
    type InputTuple = [addr: AddressLike, amount: BigNumberish];
    type OutputTuple = [addr: string, amount: bigint];
    interface OutputObject {
        addr: string;
        amount: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace CommissionRateChangeEvent {
    type InputTuple = [validator: AddressLike, rate: BigNumberish];
    type OutputTuple = [validator: string, rate: bigint];
    interface OutputObject {
        validator: string;
        rate: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace EpochPeriodUpdatedEvent {
    type InputTuple = [period: BigNumberish];
    type OutputTuple = [period: bigint];
    interface OutputObject {
        period: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace MinimumBaseFeeUpdatedEvent {
    type InputTuple = [gasPrice: BigNumberish];
    type OutputTuple = [gasPrice: bigint];
    interface OutputObject {
        gasPrice: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace MintedStakeEvent {
    type InputTuple = [addr: AddressLike, amount: BigNumberish];
    type OutputTuple = [addr: string, amount: bigint];
    interface OutputObject {
        addr: string;
        amount: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace NewBondingRequestEvent {
    type InputTuple = [
        validator: AddressLike,
        delegator: AddressLike,
        selfBonded: boolean,
        amount: BigNumberish
    ];
    type OutputTuple = [
        validator: string,
        delegator: string,
        selfBonded: boolean,
        amount: bigint
    ];
    interface OutputObject {
        validator: string;
        delegator: string;
        selfBonded: boolean;
        amount: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace NewEpochEvent {
    type InputTuple = [epoch: BigNumberish];
    type OutputTuple = [epoch: bigint];
    interface OutputObject {
        epoch: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace NewUnbondingRequestEvent {
    type InputTuple = [
        validator: AddressLike,
        delegator: AddressLike,
        selfBonded: boolean,
        amount: BigNumberish
    ];
    type OutputTuple = [
        validator: string,
        delegator: string,
        selfBonded: boolean,
        amount: bigint
    ];
    interface OutputObject {
        validator: string;
        delegator: string;
        selfBonded: boolean;
        amount: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace PausedValidatorEvent {
    type InputTuple = [
        treasury: AddressLike,
        addr: AddressLike,
        effectiveBlock: BigNumberish
    ];
    type OutputTuple = [
        treasury: string,
        addr: string,
        effectiveBlock: bigint
    ];
    interface OutputObject {
        treasury: string;
        addr: string;
        effectiveBlock: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace RegisteredValidatorEvent {
    type InputTuple = [
        treasury: AddressLike,
        addr: AddressLike,
        oracleAddress: AddressLike,
        enode: string,
        liquidContract: AddressLike
    ];
    type OutputTuple = [
        treasury: string,
        addr: string,
        oracleAddress: string,
        enode: string,
        liquidContract: string
    ];
    interface OutputObject {
        treasury: string;
        addr: string;
        oracleAddress: string;
        enode: string;
        liquidContract: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace ReleasedUnbondingRevertedEvent {
    type InputTuple = [
        validator: AddressLike,
        delegator: AddressLike,
        selfBonded: boolean,
        amount: BigNumberish
    ];
    type OutputTuple = [
        validator: string,
        delegator: string,
        selfBonded: boolean,
        amount: bigint
    ];
    interface OutputObject {
        validator: string;
        delegator: string;
        selfBonded: boolean;
        amount: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace RewardedEvent {
    type InputTuple = [
        addr: AddressLike,
        atnAmount: BigNumberish,
        ntnAmount: BigNumberish
    ];
    type OutputTuple = [
        addr: string,
        atnAmount: bigint,
        ntnAmount: bigint
    ];
    interface OutputObject {
        addr: string;
        atnAmount: bigint;
        ntnAmount: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace TransferEvent {
    type InputTuple = [
        from: AddressLike,
        to: AddressLike,
        value: BigNumberish
    ];
    type OutputTuple = [from: string, to: string, value: bigint];
    interface OutputObject {
        from: string;
        to: string;
        value: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace UnbondingRejectedEvent {
    type InputTuple = [
        validator: AddressLike,
        delegator: AddressLike,
        selfBonded: boolean,
        amount: BigNumberish
    ];
    type OutputTuple = [
        validator: string,
        delegator: string,
        selfBonded: boolean,
        amount: bigint
    ];
    interface OutputObject {
        validator: string;
        delegator: string;
        selfBonded: boolean;
        amount: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace UnlockingScheduleFailedEvent {
    type InputTuple = [epochTime: BigNumberish];
    type OutputTuple = [epochTime: bigint];
    interface OutputObject {
        epochTime: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface Autonity extends BaseContract {
    connect(runner?: ContractRunner | null): Autonity;
    waitForDeployment(): Promise<this>;
    interface: AutonityInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    COMMISSION_RATE_PRECISION: TypedContractMethod<[], [bigint], "view">;
    activateValidator: TypedContractMethod<[
        _address: AddressLike
    ], [
        void
    ], "nonpayable">;
    allowance: TypedContractMethod<[
        owner: AddressLike,
        spender: AddressLike
    ], [
        bigint
    ], "view">;
    approve: TypedContractMethod<[
        spender: AddressLike,
        amount: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    atnTotalRedistributed: TypedContractMethod<[], [bigint], "view">;
    balanceOf: TypedContractMethod<[_addr: AddressLike], [bigint], "view">;
    bond: TypedContractMethod<[
        _validator: AddressLike,
        _amount: BigNumberish
    ], [
        bigint
    ], "payable">;
    burn: TypedContractMethod<[
        _addr: AddressLike,
        _amount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    changeCommissionRate: TypedContractMethod<[
        _validator: AddressLike,
        _rate: BigNumberish
    ], [
        void
    ], "nonpayable">;
    completeContractUpgrade: TypedContractMethod<[], [void], "nonpayable">;
    computeCommittee: TypedContractMethod<[], [string[]], "nonpayable">;
    config: TypedContractMethod<[
    ], [
        [
            Autonity.PolicyStructOutput,
            Autonity.ContractsStructOutput,
            Autonity.ProtocolStructOutput,
            bigint
        ] & {
            policy: Autonity.PolicyStructOutput;
            contracts: Autonity.ContractsStructOutput;
            protocol: Autonity.ProtocolStructOutput;
            contractVersion: bigint;
        }
    ], "view">;
    decimals: TypedContractMethod<[], [bigint], "view">;
    deployer: TypedContractMethod<[], [string], "view">;
    epochID: TypedContractMethod<[], [bigint], "view">;
    epochReward: TypedContractMethod<[], [bigint], "view">;
    epochTotalBondedStake: TypedContractMethod<[], [bigint], "view">;
    finalize: TypedContractMethod<[
    ], [
        [boolean, Autonity.CommitteeMemberStructOutput[]]
    ], "nonpayable">;
    finalizeInitialization: TypedContractMethod<[], [void], "nonpayable">;
    getBlockPeriod: TypedContractMethod<[], [bigint], "view">;
    getCommittee: TypedContractMethod<[
    ], [
        Autonity.CommitteeMemberStructOutput[]
    ], "view">;
    getCommitteeEnodes: TypedContractMethod<[], [string[]], "view">;
    getEpochFromBlock: TypedContractMethod<[
        _block: BigNumberish
    ], [
        bigint
    ], "view">;
    getEpochPeriod: TypedContractMethod<[], [bigint], "view">;
    getLastEpochBlock: TypedContractMethod<[], [bigint], "view">;
    getMaxCommitteeSize: TypedContractMethod<[], [bigint], "view">;
    getMinimumBaseFee: TypedContractMethod<[], [bigint], "view">;
    getNewContract: TypedContractMethod<[], [[string, string]], "view">;
    getOperator: TypedContractMethod<[], [string], "view">;
    getOracle: TypedContractMethod<[], [string], "view">;
    getProposer: TypedContractMethod<[
        height: BigNumberish,
        round: BigNumberish
    ], [
        string
    ], "view">;
    getRevertingAmount: TypedContractMethod<[
        _unbondingID: BigNumberish
    ], [
        bigint
    ], "view">;
    getTreasuryAccount: TypedContractMethod<[], [string], "view">;
    getTreasuryFee: TypedContractMethod<[], [bigint], "view">;
    getUnbondingPeriod: TypedContractMethod<[], [bigint], "view">;
    getUnbondingReleaseState: TypedContractMethod<[
        _unbondingID: BigNumberish
    ], [
        bigint
    ], "view">;
    getValidator: TypedContractMethod<[
        _addr: AddressLike
    ], [
        Autonity.ValidatorStructOutput
    ], "view">;
    getValidators: TypedContractMethod<[], [string[]], "view">;
    getVersion: TypedContractMethod<[], [bigint], "view">;
    inflationReserve: TypedContractMethod<[], [bigint], "view">;
    lastEpochBlock: TypedContractMethod<[], [bigint], "view">;
    lastEpochTime: TypedContractMethod<[], [bigint], "view">;
    maxBondAppliedGas: TypedContractMethod<[], [bigint], "view">;
    maxRewardsDistributionGas: TypedContractMethod<[], [bigint], "view">;
    maxUnbondAppliedGas: TypedContractMethod<[], [bigint], "view">;
    maxUnbondReleasedGas: TypedContractMethod<[], [bigint], "view">;
    mint: TypedContractMethod<[
        _addr: AddressLike,
        _amount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    name: TypedContractMethod<[], [string], "view">;
    pauseValidator: TypedContractMethod<[
        _address: AddressLike
    ], [
        void
    ], "nonpayable">;
    receiveATN: TypedContractMethod<[], [void], "payable">;
    registerValidator: TypedContractMethod<[
        _enode: string,
        _oracleAddress: AddressLike,
        _consensusKey: BytesLike,
        _signatures: BytesLike
    ], [
        void
    ], "nonpayable">;
    resetContractUpgrade: TypedContractMethod<[], [void], "nonpayable">;
    setAccountabilityContract: TypedContractMethod<[
        _address: AddressLike
    ], [
        void
    ], "nonpayable">;
    setAcuContract: TypedContractMethod<[
        _address: AddressLike
    ], [
        void
    ], "nonpayable">;
    setCommitteeSize: TypedContractMethod<[
        _size: BigNumberish
    ], [
        void
    ], "nonpayable">;
    setEpochPeriod: TypedContractMethod<[
        _period: BigNumberish
    ], [
        void
    ], "nonpayable">;
    setInflationControllerContract: TypedContractMethod<[
        _address: AddressLike
    ], [
        void
    ], "nonpayable">;
    setMaxBondAppliedGas: TypedContractMethod<[
        _gas: BigNumberish
    ], [
        void
    ], "nonpayable">;
    setMaxRewardsDistributionGas: TypedContractMethod<[
        _gas: BigNumberish
    ], [
        void
    ], "nonpayable">;
    setMaxUnbondAppliedGas: TypedContractMethod<[
        _gas: BigNumberish
    ], [
        void
    ], "nonpayable">;
    setMaxUnbondReleasedGas: TypedContractMethod<[
        _gas: BigNumberish
    ], [
        void
    ], "nonpayable">;
    setMinimumBaseFee: TypedContractMethod<[
        _price: BigNumberish
    ], [
        void
    ], "nonpayable">;
    setNonStakableVestingContract: TypedContractMethod<[
        _address: AddressLike
    ], [
        void
    ], "nonpayable">;
    setOperatorAccount: TypedContractMethod<[
        _account: AddressLike
    ], [
        void
    ], "nonpayable">;
    setOracleContract: TypedContractMethod<[
        _address: AddressLike
    ], [
        void
    ], "nonpayable">;
    setStabilizationContract: TypedContractMethod<[
        _address: AddressLike
    ], [
        void
    ], "nonpayable">;
    setStakingGasPrice: TypedContractMethod<[
        _price: BigNumberish
    ], [
        void
    ], "nonpayable">;
    setSupplyControlContract: TypedContractMethod<[
        _address: AddressLike
    ], [
        void
    ], "nonpayable">;
    setTreasuryAccount: TypedContractMethod<[
        _account: AddressLike
    ], [
        void
    ], "nonpayable">;
    setTreasuryFee: TypedContractMethod<[
        _treasuryFee: BigNumberish
    ], [
        void
    ], "nonpayable">;
    setUnbondingPeriod: TypedContractMethod<[
        _period: BigNumberish
    ], [
        void
    ], "nonpayable">;
    setUpgradeManagerContract: TypedContractMethod<[
        _address: AddressLike
    ], [
        void
    ], "nonpayable">;
    stakingGasPrice: TypedContractMethod<[], [bigint], "view">;
    symbol: TypedContractMethod<[], [string], "view">;
    totalSupply: TypedContractMethod<[], [bigint], "view">;
    transfer: TypedContractMethod<[
        _recipient: AddressLike,
        _amount: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    transferFrom: TypedContractMethod<[
        _sender: AddressLike,
        _recipient: AddressLike,
        _amount: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    unbond: TypedContractMethod<[
        _validator: AddressLike,
        _amount: BigNumberish
    ], [
        bigint
    ], "payable">;
    updateEnode: TypedContractMethod<[
        _nodeAddress: AddressLike,
        _enode: string
    ], [
        void
    ], "nonpayable">;
    updateValidatorAndTransferSlashedFunds: TypedContractMethod<[
        _val: Autonity.ValidatorStruct
    ], [
        void
    ], "nonpayable">;
    upgradeContract: TypedContractMethod<[
        _bytecode: BytesLike,
        _abi: string
    ], [
        void
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "COMMISSION_RATE_PRECISION"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "activateValidator"): TypedContractMethod<[_address: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "allowance"): TypedContractMethod<[
        owner: AddressLike,
        spender: AddressLike
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "approve"): TypedContractMethod<[
        spender: AddressLike,
        amount: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    getFunction(nameOrSignature: "atnTotalRedistributed"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "balanceOf"): TypedContractMethod<[_addr: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "bond"): TypedContractMethod<[
        _validator: AddressLike,
        _amount: BigNumberish
    ], [
        bigint
    ], "payable">;
    getFunction(nameOrSignature: "burn"): TypedContractMethod<[
        _addr: AddressLike,
        _amount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "changeCommissionRate"): TypedContractMethod<[
        _validator: AddressLike,
        _rate: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "completeContractUpgrade"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "computeCommittee"): TypedContractMethod<[], [string[]], "nonpayable">;
    getFunction(nameOrSignature: "config"): TypedContractMethod<[
    ], [
        [
            Autonity.PolicyStructOutput,
            Autonity.ContractsStructOutput,
            Autonity.ProtocolStructOutput,
            bigint
        ] & {
            policy: Autonity.PolicyStructOutput;
            contracts: Autonity.ContractsStructOutput;
            protocol: Autonity.ProtocolStructOutput;
            contractVersion: bigint;
        }
    ], "view">;
    getFunction(nameOrSignature: "decimals"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "deployer"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "epochID"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "epochReward"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "epochTotalBondedStake"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "finalize"): TypedContractMethod<[
    ], [
        [boolean, Autonity.CommitteeMemberStructOutput[]]
    ], "nonpayable">;
    getFunction(nameOrSignature: "finalizeInitialization"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "getBlockPeriod"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getCommittee"): TypedContractMethod<[], [Autonity.CommitteeMemberStructOutput[]], "view">;
    getFunction(nameOrSignature: "getCommitteeEnodes"): TypedContractMethod<[], [string[]], "view">;
    getFunction(nameOrSignature: "getEpochFromBlock"): TypedContractMethod<[_block: BigNumberish], [bigint], "view">;
    getFunction(nameOrSignature: "getEpochPeriod"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getLastEpochBlock"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getMaxCommitteeSize"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getMinimumBaseFee"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getNewContract"): TypedContractMethod<[], [[string, string]], "view">;
    getFunction(nameOrSignature: "getOperator"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "getOracle"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "getProposer"): TypedContractMethod<[
        height: BigNumberish,
        round: BigNumberish
    ], [
        string
    ], "view">;
    getFunction(nameOrSignature: "getRevertingAmount"): TypedContractMethod<[_unbondingID: BigNumberish], [bigint], "view">;
    getFunction(nameOrSignature: "getTreasuryAccount"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "getTreasuryFee"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getUnbondingPeriod"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getUnbondingReleaseState"): TypedContractMethod<[_unbondingID: BigNumberish], [bigint], "view">;
    getFunction(nameOrSignature: "getValidator"): TypedContractMethod<[
        _addr: AddressLike
    ], [
        Autonity.ValidatorStructOutput
    ], "view">;
    getFunction(nameOrSignature: "getValidators"): TypedContractMethod<[], [string[]], "view">;
    getFunction(nameOrSignature: "getVersion"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "inflationReserve"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "lastEpochBlock"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "lastEpochTime"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "maxBondAppliedGas"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "maxRewardsDistributionGas"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "maxUnbondAppliedGas"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "maxUnbondReleasedGas"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "mint"): TypedContractMethod<[
        _addr: AddressLike,
        _amount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "name"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "pauseValidator"): TypedContractMethod<[_address: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "receiveATN"): TypedContractMethod<[], [void], "payable">;
    getFunction(nameOrSignature: "registerValidator"): TypedContractMethod<[
        _enode: string,
        _oracleAddress: AddressLike,
        _consensusKey: BytesLike,
        _signatures: BytesLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "resetContractUpgrade"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "setAccountabilityContract"): TypedContractMethod<[_address: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "setAcuContract"): TypedContractMethod<[_address: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "setCommitteeSize"): TypedContractMethod<[_size: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "setEpochPeriod"): TypedContractMethod<[_period: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "setInflationControllerContract"): TypedContractMethod<[_address: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "setMaxBondAppliedGas"): TypedContractMethod<[_gas: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "setMaxRewardsDistributionGas"): TypedContractMethod<[_gas: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "setMaxUnbondAppliedGas"): TypedContractMethod<[_gas: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "setMaxUnbondReleasedGas"): TypedContractMethod<[_gas: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "setMinimumBaseFee"): TypedContractMethod<[_price: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "setNonStakableVestingContract"): TypedContractMethod<[_address: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "setOperatorAccount"): TypedContractMethod<[_account: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "setOracleContract"): TypedContractMethod<[_address: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "setStabilizationContract"): TypedContractMethod<[_address: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "setStakingGasPrice"): TypedContractMethod<[_price: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "setSupplyControlContract"): TypedContractMethod<[_address: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "setTreasuryAccount"): TypedContractMethod<[_account: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "setTreasuryFee"): TypedContractMethod<[_treasuryFee: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "setUnbondingPeriod"): TypedContractMethod<[_period: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "setUpgradeManagerContract"): TypedContractMethod<[_address: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "stakingGasPrice"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "symbol"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "totalSupply"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "transfer"): TypedContractMethod<[
        _recipient: AddressLike,
        _amount: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    getFunction(nameOrSignature: "transferFrom"): TypedContractMethod<[
        _sender: AddressLike,
        _recipient: AddressLike,
        _amount: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    getFunction(nameOrSignature: "unbond"): TypedContractMethod<[
        _validator: AddressLike,
        _amount: BigNumberish
    ], [
        bigint
    ], "payable">;
    getFunction(nameOrSignature: "updateEnode"): TypedContractMethod<[
        _nodeAddress: AddressLike,
        _enode: string
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "updateValidatorAndTransferSlashedFunds"): TypedContractMethod<[
        _val: Autonity.ValidatorStruct
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "upgradeContract"): TypedContractMethod<[
        _bytecode: BytesLike,
        _abi: string
    ], [
        void
    ], "nonpayable">;
    getEvent(key: "ActivatedValidator"): TypedContractEvent<ActivatedValidatorEvent.InputTuple, ActivatedValidatorEvent.OutputTuple, ActivatedValidatorEvent.OutputObject>;
    getEvent(key: "AppliedUnbondingReverted"): TypedContractEvent<AppliedUnbondingRevertedEvent.InputTuple, AppliedUnbondingRevertedEvent.OutputTuple, AppliedUnbondingRevertedEvent.OutputObject>;
    getEvent(key: "Approval"): TypedContractEvent<ApprovalEvent.InputTuple, ApprovalEvent.OutputTuple, ApprovalEvent.OutputObject>;
    getEvent(key: "BondingRejected"): TypedContractEvent<BondingRejectedEvent.InputTuple, BondingRejectedEvent.OutputTuple, BondingRejectedEvent.OutputObject>;
    getEvent(key: "BondingReverted"): TypedContractEvent<BondingRevertedEvent.InputTuple, BondingRevertedEvent.OutputTuple, BondingRevertedEvent.OutputObject>;
    getEvent(key: "BurnedStake"): TypedContractEvent<BurnedStakeEvent.InputTuple, BurnedStakeEvent.OutputTuple, BurnedStakeEvent.OutputObject>;
    getEvent(key: "CommissionRateChange"): TypedContractEvent<CommissionRateChangeEvent.InputTuple, CommissionRateChangeEvent.OutputTuple, CommissionRateChangeEvent.OutputObject>;
    getEvent(key: "EpochPeriodUpdated"): TypedContractEvent<EpochPeriodUpdatedEvent.InputTuple, EpochPeriodUpdatedEvent.OutputTuple, EpochPeriodUpdatedEvent.OutputObject>;
    getEvent(key: "MinimumBaseFeeUpdated"): TypedContractEvent<MinimumBaseFeeUpdatedEvent.InputTuple, MinimumBaseFeeUpdatedEvent.OutputTuple, MinimumBaseFeeUpdatedEvent.OutputObject>;
    getEvent(key: "MintedStake"): TypedContractEvent<MintedStakeEvent.InputTuple, MintedStakeEvent.OutputTuple, MintedStakeEvent.OutputObject>;
    getEvent(key: "NewBondingRequest"): TypedContractEvent<NewBondingRequestEvent.InputTuple, NewBondingRequestEvent.OutputTuple, NewBondingRequestEvent.OutputObject>;
    getEvent(key: "NewEpoch"): TypedContractEvent<NewEpochEvent.InputTuple, NewEpochEvent.OutputTuple, NewEpochEvent.OutputObject>;
    getEvent(key: "NewUnbondingRequest"): TypedContractEvent<NewUnbondingRequestEvent.InputTuple, NewUnbondingRequestEvent.OutputTuple, NewUnbondingRequestEvent.OutputObject>;
    getEvent(key: "PausedValidator"): TypedContractEvent<PausedValidatorEvent.InputTuple, PausedValidatorEvent.OutputTuple, PausedValidatorEvent.OutputObject>;
    getEvent(key: "RegisteredValidator"): TypedContractEvent<RegisteredValidatorEvent.InputTuple, RegisteredValidatorEvent.OutputTuple, RegisteredValidatorEvent.OutputObject>;
    getEvent(key: "ReleasedUnbondingReverted"): TypedContractEvent<ReleasedUnbondingRevertedEvent.InputTuple, ReleasedUnbondingRevertedEvent.OutputTuple, ReleasedUnbondingRevertedEvent.OutputObject>;
    getEvent(key: "Rewarded"): TypedContractEvent<RewardedEvent.InputTuple, RewardedEvent.OutputTuple, RewardedEvent.OutputObject>;
    getEvent(key: "Transfer"): TypedContractEvent<TransferEvent.InputTuple, TransferEvent.OutputTuple, TransferEvent.OutputObject>;
    getEvent(key: "UnbondingRejected"): TypedContractEvent<UnbondingRejectedEvent.InputTuple, UnbondingRejectedEvent.OutputTuple, UnbondingRejectedEvent.OutputObject>;
    getEvent(key: "UnlockingScheduleFailed"): TypedContractEvent<UnlockingScheduleFailedEvent.InputTuple, UnlockingScheduleFailedEvent.OutputTuple, UnlockingScheduleFailedEvent.OutputObject>;
    filters: {
        "ActivatedValidator(address,address,uint256)": TypedContractEvent<ActivatedValidatorEvent.InputTuple, ActivatedValidatorEvent.OutputTuple, ActivatedValidatorEvent.OutputObject>;
        ActivatedValidator: TypedContractEvent<ActivatedValidatorEvent.InputTuple, ActivatedValidatorEvent.OutputTuple, ActivatedValidatorEvent.OutputObject>;
        "AppliedUnbondingReverted(address,address,bool,uint256)": TypedContractEvent<AppliedUnbondingRevertedEvent.InputTuple, AppliedUnbondingRevertedEvent.OutputTuple, AppliedUnbondingRevertedEvent.OutputObject>;
        AppliedUnbondingReverted: TypedContractEvent<AppliedUnbondingRevertedEvent.InputTuple, AppliedUnbondingRevertedEvent.OutputTuple, AppliedUnbondingRevertedEvent.OutputObject>;
        "Approval(address,address,uint256)": TypedContractEvent<ApprovalEvent.InputTuple, ApprovalEvent.OutputTuple, ApprovalEvent.OutputObject>;
        Approval: TypedContractEvent<ApprovalEvent.InputTuple, ApprovalEvent.OutputTuple, ApprovalEvent.OutputObject>;
        "BondingRejected(address,address,uint256,uint8)": TypedContractEvent<BondingRejectedEvent.InputTuple, BondingRejectedEvent.OutputTuple, BondingRejectedEvent.OutputObject>;
        BondingRejected: TypedContractEvent<BondingRejectedEvent.InputTuple, BondingRejectedEvent.OutputTuple, BondingRejectedEvent.OutputObject>;
        "BondingReverted(address,address,uint256)": TypedContractEvent<BondingRevertedEvent.InputTuple, BondingRevertedEvent.OutputTuple, BondingRevertedEvent.OutputObject>;
        BondingReverted: TypedContractEvent<BondingRevertedEvent.InputTuple, BondingRevertedEvent.OutputTuple, BondingRevertedEvent.OutputObject>;
        "BurnedStake(address,uint256)": TypedContractEvent<BurnedStakeEvent.InputTuple, BurnedStakeEvent.OutputTuple, BurnedStakeEvent.OutputObject>;
        BurnedStake: TypedContractEvent<BurnedStakeEvent.InputTuple, BurnedStakeEvent.OutputTuple, BurnedStakeEvent.OutputObject>;
        "CommissionRateChange(address,uint256)": TypedContractEvent<CommissionRateChangeEvent.InputTuple, CommissionRateChangeEvent.OutputTuple, CommissionRateChangeEvent.OutputObject>;
        CommissionRateChange: TypedContractEvent<CommissionRateChangeEvent.InputTuple, CommissionRateChangeEvent.OutputTuple, CommissionRateChangeEvent.OutputObject>;
        "EpochPeriodUpdated(uint256)": TypedContractEvent<EpochPeriodUpdatedEvent.InputTuple, EpochPeriodUpdatedEvent.OutputTuple, EpochPeriodUpdatedEvent.OutputObject>;
        EpochPeriodUpdated: TypedContractEvent<EpochPeriodUpdatedEvent.InputTuple, EpochPeriodUpdatedEvent.OutputTuple, EpochPeriodUpdatedEvent.OutputObject>;
        "MinimumBaseFeeUpdated(uint256)": TypedContractEvent<MinimumBaseFeeUpdatedEvent.InputTuple, MinimumBaseFeeUpdatedEvent.OutputTuple, MinimumBaseFeeUpdatedEvent.OutputObject>;
        MinimumBaseFeeUpdated: TypedContractEvent<MinimumBaseFeeUpdatedEvent.InputTuple, MinimumBaseFeeUpdatedEvent.OutputTuple, MinimumBaseFeeUpdatedEvent.OutputObject>;
        "MintedStake(address,uint256)": TypedContractEvent<MintedStakeEvent.InputTuple, MintedStakeEvent.OutputTuple, MintedStakeEvent.OutputObject>;
        MintedStake: TypedContractEvent<MintedStakeEvent.InputTuple, MintedStakeEvent.OutputTuple, MintedStakeEvent.OutputObject>;
        "NewBondingRequest(address,address,bool,uint256)": TypedContractEvent<NewBondingRequestEvent.InputTuple, NewBondingRequestEvent.OutputTuple, NewBondingRequestEvent.OutputObject>;
        NewBondingRequest: TypedContractEvent<NewBondingRequestEvent.InputTuple, NewBondingRequestEvent.OutputTuple, NewBondingRequestEvent.OutputObject>;
        "NewEpoch(uint256)": TypedContractEvent<NewEpochEvent.InputTuple, NewEpochEvent.OutputTuple, NewEpochEvent.OutputObject>;
        NewEpoch: TypedContractEvent<NewEpochEvent.InputTuple, NewEpochEvent.OutputTuple, NewEpochEvent.OutputObject>;
        "NewUnbondingRequest(address,address,bool,uint256)": TypedContractEvent<NewUnbondingRequestEvent.InputTuple, NewUnbondingRequestEvent.OutputTuple, NewUnbondingRequestEvent.OutputObject>;
        NewUnbondingRequest: TypedContractEvent<NewUnbondingRequestEvent.InputTuple, NewUnbondingRequestEvent.OutputTuple, NewUnbondingRequestEvent.OutputObject>;
        "PausedValidator(address,address,uint256)": TypedContractEvent<PausedValidatorEvent.InputTuple, PausedValidatorEvent.OutputTuple, PausedValidatorEvent.OutputObject>;
        PausedValidator: TypedContractEvent<PausedValidatorEvent.InputTuple, PausedValidatorEvent.OutputTuple, PausedValidatorEvent.OutputObject>;
        "RegisteredValidator(address,address,address,string,address)": TypedContractEvent<RegisteredValidatorEvent.InputTuple, RegisteredValidatorEvent.OutputTuple, RegisteredValidatorEvent.OutputObject>;
        RegisteredValidator: TypedContractEvent<RegisteredValidatorEvent.InputTuple, RegisteredValidatorEvent.OutputTuple, RegisteredValidatorEvent.OutputObject>;
        "ReleasedUnbondingReverted(address,address,bool,uint256)": TypedContractEvent<ReleasedUnbondingRevertedEvent.InputTuple, ReleasedUnbondingRevertedEvent.OutputTuple, ReleasedUnbondingRevertedEvent.OutputObject>;
        ReleasedUnbondingReverted: TypedContractEvent<ReleasedUnbondingRevertedEvent.InputTuple, ReleasedUnbondingRevertedEvent.OutputTuple, ReleasedUnbondingRevertedEvent.OutputObject>;
        "Rewarded(address,uint256,uint256)": TypedContractEvent<RewardedEvent.InputTuple, RewardedEvent.OutputTuple, RewardedEvent.OutputObject>;
        Rewarded: TypedContractEvent<RewardedEvent.InputTuple, RewardedEvent.OutputTuple, RewardedEvent.OutputObject>;
        "Transfer(address,address,uint256)": TypedContractEvent<TransferEvent.InputTuple, TransferEvent.OutputTuple, TransferEvent.OutputObject>;
        Transfer: TypedContractEvent<TransferEvent.InputTuple, TransferEvent.OutputTuple, TransferEvent.OutputObject>;
        "UnbondingRejected(address,address,bool,uint256)": TypedContractEvent<UnbondingRejectedEvent.InputTuple, UnbondingRejectedEvent.OutputTuple, UnbondingRejectedEvent.OutputObject>;
        UnbondingRejected: TypedContractEvent<UnbondingRejectedEvent.InputTuple, UnbondingRejectedEvent.OutputTuple, UnbondingRejectedEvent.OutputObject>;
        "UnlockingScheduleFailed(uint256)": TypedContractEvent<UnlockingScheduleFailedEvent.InputTuple, UnlockingScheduleFailedEvent.OutputTuple, UnlockingScheduleFailedEvent.OutputObject>;
        UnlockingScheduleFailed: TypedContractEvent<UnlockingScheduleFailedEvent.InputTuple, UnlockingScheduleFailedEvent.OutputTuple, UnlockingScheduleFailedEvent.OutputObject>;
    };
}
