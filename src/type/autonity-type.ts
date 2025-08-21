import type { Autonity, IScheduleController, IAutonity } from "../typechain";

export namespace AutonityTypes {
  // Internal type aliases for typechain outputs
  type CommitteeStruct = IAutonity.CommitteeMemberStructOutput;
  type PolicyStruct = IAutonity.PolicyStructOutput;
  type ContractsStruct = IAutonity.ContractsStructOutput;
  type ProtocolStruct = IAutonity.ProtocolStructOutput;
  type EpochInfoStruct = IAutonity.EpochInfoStructOutput;
  type ScheduleStruct = IScheduleController.ScheduleStructOutput;
  type ValidatorStruct = IAutonity.ValidatorStructOutput;
  type Eip1559StructOutput = IAutonity.Eip1559StructOutput;
  type ClientAwareConfigStructOutput = IAutonity.ClientAwareConfigStructOutput;
  type AccountabilityStructOutput = IAutonity.AccountabilityStructOutput;
  type UnbondingRequestStructOutput = IAutonity.UnbondingRequestStructOutput;
  type BondingRequestStructOutput = IAutonity.BondingRequestStructOutput;
  type ConfigStruct = [PolicyStruct, ContractsStruct, ProtocolStruct, bigint];

  export enum ValidatorState {
    ACTIVE = "ACTIVE",
    PAUSED = "PAUSED",
    JAILED = "JAILED",
    JAILBOUND = "JAILBOUND",
    JAILED_FOR_INACTIVITY = "JAILED_FOR_INACTIVITY",
    JAILBOUND_FOR_INACTIVITY = "JAILBOUND_FOR_INACTIVITY",
  }

  const VALIDATOR_STATE_MAP: Record<number, ValidatorState> = {
    0: ValidatorState.ACTIVE,
    1: ValidatorState.PAUSED,
    2: ValidatorState.JAILED,
    3: ValidatorState.JAILBOUND,
    4: ValidatorState.JAILED_FOR_INACTIVITY,
    5: ValidatorState.JAILBOUND_FOR_INACTIVITY,
  };

  interface BaseRequest {
    delegator: string;
    delegatee: string;
    amount: bigint;
    requestBlock: bigint;
  }

  export interface BondingRequest extends BaseRequest {}

  export interface UnbondingRequest extends BaseRequest {
    unbondingShare: bigint;
    unlocked: boolean;
    released: boolean;
    selfDelegation: boolean;
  }

  export interface Committee {
    addr: string;
    votingPower: bigint;
    consensusKey: string;
  }

  export interface Eip1559Config {
    minBaseFee: bigint;
    baseFeeChangeDenominator: bigint;
    elasticityMultiplier: bigint;
    gasLimitBoundDivisor: bigint;
  }

  export interface Accountability {
    range: bigint;
    delta: bigint;
    gracePeriod: bigint;
  }

  export interface ClientConfig {
    epochPeriod: bigint;
    blockPeriod: bigint;
    gasLimit: bigint;
    clusteringThreshold: bigint;
    accountability: Accountability;
    eip1559: Eip1559Config;
  }

  export interface Schedule {
    totalAmount: bigint;
    unlockedAmount: bigint;
    start: bigint;
    totalDuration: bigint;
    lastUnlockTime: bigint;
  }

  export interface PolicyConfig {
    treasuryFee: bigint;
    minBaseFee: bigint;
    delegationRate: bigint;
    unbondingPeriod: bigint;
    initialInflationReserve: bigint;
    withholdingThreshold: bigint;
    proposerRewardRate: bigint;
    oracleRewardRate: bigint;
    withheldRewardsPool: string;
    treasuryAccount: string;
    elasticityMultiplier: bigint;
  }

  export interface ContractsConfig {
    accountabilityContract: string;
    oracleContract: string;
    acuContract: string;
    supplyControlContract: string;
    stabilizationContract: string;
    upgradeManagerContract: string;
    inflationControllerContract: string;
    omissionAccountabilityContract: string;
    auctioneerContract: string;
  }

  export interface ProtocolConfig {
    operatorAccount: string;
    epochPeriod: bigint;
    blockPeriod: bigint;
    committeeSize: bigint;
    maxScheduleDuration: bigint;
    gasLimit: bigint;
    gasLimitBoundDivisor: bigint;
    clusteringThreshold: bigint;
  }

  export interface AutonityConfig {
    policy: PolicyConfig;
    contracts: ContractsConfig;
    protocol: ProtocolConfig;
    contractVersion: bigint;
  }

  export interface EpochInfo {
    committee: Committee[];
    previousEpochBlock: bigint;
    epochBlock: bigint;
    nextEpochBlock: bigint;
    omissionDelta: bigint;
    eip1559: Eip1559Config;
  }

  export interface Validator {
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
    liquidStateContract: string;
    liquidSupply: bigint;
    registrationBlock: bigint;
    totalSlashed: bigint;
    jailReleaseBlock: bigint;
    consensusKey: string;
    state: ValidatorState;
    conversionRatio: bigint;
  }

  function createStructMapper<TStruct, TResult>(
    mapper: (struct: TStruct) => TResult
  ): (struct: TStruct) => TResult {
    return mapper;
  }

  export const mapBondingRequest = createStructMapper(
    (struct: BondingRequestStructOutput): BondingRequest => ({
      delegator: struct.delegator,
      delegatee: struct.delegatee,
      amount: struct.amount,
      requestBlock: struct.requestBlock,
    })
  );

  export const mapUnbondingRequest = createStructMapper(
    (struct: UnbondingRequestStructOutput): UnbondingRequest => ({
      delegator: struct.delegator,
      delegatee: struct.delegatee,
      amount: struct.amount,
      unbondingShare: struct.unbondingShare,
      requestBlock: struct.requestBlock,
      unlocked: struct.unlocked,
      released: struct.released,
      selfDelegation: struct.selfDelegation,
    })
  );

  export const mapCommittee = createStructMapper(
    (struct: CommitteeStruct): Committee => ({
      addr: struct.addr,
      votingPower: struct.votingPower,
      consensusKey: struct.consensusKey,
    })
  );

  export const mapSchedule = createStructMapper(
    (struct: ScheduleStruct): Schedule => ({
      totalAmount: struct.totalAmount,
      unlockedAmount: struct.unlockedAmount,
      start: struct.start,
      totalDuration: struct.totalDuration,
      lastUnlockTime: struct.lastUnlockTime,
    })
  );

  const mapEip1559Config = (eip1559: Eip1559StructOutput): Eip1559Config => ({
    minBaseFee: eip1559.minBaseFee,
    baseFeeChangeDenominator: eip1559.baseFeeChangeDenominator,
    elasticityMultiplier: eip1559.elasticityMultiplier,
    gasLimitBoundDivisor: eip1559.gasLimitBoundDivisor,
  });

  const mapAccountabilityConfig = (
    accountability: AccountabilityStructOutput
  ): Accountability => ({
    range: accountability.range,
    delta: accountability.delta,
    gracePeriod: accountability.gracePeriod,
  });

  export const mapEpochInfo = createStructMapper(
    (struct: EpochInfoStruct): EpochInfo => ({
      committee: struct.committee.map(mapCommittee),
      previousEpochBlock: struct.previousEpochBlock,
      epochBlock: struct.epochBlock,
      nextEpochBlock: struct.nextEpochBlock,
      omissionDelta: struct.omissionDelta,
      eip1559: mapEip1559Config(struct.eip1559),
    })
  );

  export const mapValidator = createStructMapper(
    (struct: ValidatorStruct): Validator => ({
      treasury: struct.treasury,
      nodeAddress: struct.nodeAddress,
      oracleAddress: struct.oracleAddress,
      enode: struct.enode,
      commissionRate: struct.commissionRate,
      bondedStake: struct.bondedStake,
      unbondingStake: struct.unbondingStake,
      unbondingShares: struct.unbondingShares,
      selfBondedStake: struct.selfBondedStake,
      selfUnbondingStake: struct.selfUnbondingStake,
      selfUnbondingShares: struct.selfUnbondingShares,
      selfUnbondingStakeLocked: struct.selfUnbondingStakeLocked,
      liquidStateContract: struct.liquidStateContract,
      liquidSupply: struct.liquidSupply,
      registrationBlock: struct.registrationBlock,
      totalSlashed: struct.totalSlashed,
      jailReleaseBlock: struct.jailReleaseBlock,
      consensusKey: struct.consensusKey,
      state: getValidatorState(Number(struct.state)),
      conversionRatio: struct.conversionRatio,
    })
  );

  export const mapClientConfig = createStructMapper(
    (struct: ClientAwareConfigStructOutput): ClientConfig => ({
      epochPeriod: struct.epochPeriod,
      blockPeriod: struct.blockPeriod,
      gasLimit: struct.gasLimit,
      clusteringThreshold: struct.clusteringThreshold,
      eip1559: mapEip1559Config(struct.eip1559),
      accountability: mapAccountabilityConfig(struct.accountability),
    })
  );

  export const mapAutonityConfig = createStructMapper(
    (struct: ConfigStruct): AutonityConfig => ({
      policy: {
        treasuryFee: struct[0].treasuryFee,
        minBaseFee: struct[0].minBaseFee,
        delegationRate: struct[0].delegationRate,
        unbondingPeriod: struct[0].unbondingPeriod,
        initialInflationReserve: struct[0].initialInflationReserve,
        withholdingThreshold: struct[0].withholdingThreshold,
        proposerRewardRate: struct[0].proposerRewardRate,
        oracleRewardRate: struct[0].oracleRewardRate,
        withheldRewardsPool: struct[0].withheldRewardsPool,
        treasuryAccount: struct[0].treasuryAccount,
        elasticityMultiplier: struct[0].elasticityMultiplier,
      },
      contracts: {
        accountabilityContract: struct[1].accountabilityContract,
        oracleContract: struct[1].oracleContract,
        acuContract: struct[1].acuContract,
        supplyControlContract: struct[1].supplyControlContract,
        stabilizationContract: struct[1].stabilizationContract,
        upgradeManagerContract: struct[1].upgradeManagerContract,
        inflationControllerContract: struct[1].inflationControllerContract,
        omissionAccountabilityContract: struct[1].omissionAccountabilityContract,
        auctioneerContract: struct[1].auctioneerContract,
      },
      protocol: {
        operatorAccount: struct[2].operatorAccount,
        epochPeriod: struct[2].epochPeriod,
        blockPeriod: struct[2].blockPeriod,
        committeeSize: struct[2].committeeSize,
        maxScheduleDuration: struct[2].maxScheduleDuration,
        gasLimit: struct[2].gasLimit,
        gasLimitBoundDivisor: struct[2].gasLimitBoundDivisor,
        clusteringThreshold: struct[2].clusteringThreshold,
      },
      contractVersion: struct[3],
    })
  );

  export function getValidatorState(stateValue: number): ValidatorState {
    return VALIDATOR_STATE_MAP[stateValue] || ValidatorState.ACTIVE;
  }
}

// Type aliases for backward compatibility and easier access
export type ValidatorState = AutonityTypes.ValidatorState;
export type BondingRequest = AutonityTypes.BondingRequest;
export type UnbondingRequest = AutonityTypes.UnbondingRequest;
export type Committee = AutonityTypes.Committee;
export type Eip1559Config = AutonityTypes.Eip1559Config;
export type Accountability = AutonityTypes.Accountability;
export type ClientConfig = AutonityTypes.ClientConfig;
export type Schedule = AutonityTypes.Schedule;
export type PolicyConfig = AutonityTypes.PolicyConfig;
export type ContractsConfig = AutonityTypes.ContractsConfig;
export type ProtocolConfig = AutonityTypes.ProtocolConfig;
export type AutonityConfig = AutonityTypes.AutonityConfig;
export type EpochInfo = AutonityTypes.EpochInfo;
export type Validator = AutonityTypes.Validator;

// Function aliases for backward compatibility
export const {
  ValidatorState: ValidatorStateEnum,
  mapBondingRequest,
  mapUnbondingRequest,
  mapCommittee,
  mapSchedule,
  mapEpochInfo,
  mapValidator,
  mapClientConfig,
  mapAutonityConfig,
  getValidatorState
} = AutonityTypes;
