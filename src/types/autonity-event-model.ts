import type {
  ActivatedValidatorEvent,
  ApprovalEvent,
  BondingApprovalEvent,
  BondingRejectedEvent,
  BurnedStakeEvent,
  CallFailedEvent,
  CommissionRateChangeEvent,
  ConfigUpdateAddressEvent,
  ConfigUpdateBoolEvent,
  ConfigUpdateIntEvent,
  ConfigUpdateUintEvent,
  Eip1559ParamsUpdateEvent,
  EnodeUpdateEvent,
  EpochPeriodUpdatedEvent,
  MintedStakeEvent,
  NewBondingRequestEvent,
  NewEpochEvent,
  NewScheduleEvent,
  NewUnbondingRequestEvent,
  PausedValidatorEvent,
  RegisteredValidatorEvent,
  RewardedEvent,
  TransferEvent,
} from "../typechain/Autonity";

export namespace AutonityEvents {
  interface EventBase {
    blockNumber: number;
    transactionHash: string;
  }

  // Event Interfaces for better type hints and autocomplete
  export interface IActivatedValidator extends EventBase {
    treasury: string;
    addr: string;
    effectiveBlock: bigint;
  }

  export interface IApproval extends EventBase {
    owner: string;
    spender: string;
    value: bigint;
  }

  export interface IBondingApproval extends EventBase {
    _owner: string;
    _caller: string;
    _value: bigint;
  }

  export interface IBondingRejected extends EventBase {
    validator: string;
    delegator: string;
    amount: bigint;
    state: bigint;
  }

  export interface IBurnedStake extends EventBase {
    addr: string;
    amount: bigint;
  }

  export interface ICallFailed extends EventBase {
    to: string;
    methodSignature: string;
    returnData: string;
  }

  export interface ICommissionRateChange extends EventBase {
    validator: string;
    rate: bigint;
  }

  export interface IConfigUpdateAddress extends EventBase {
    name: string;
    oldValue: string;
    newValue: string;
    appliesAtHeight: bigint;
  }

  export interface IConfigUpdateBool extends EventBase {
    name: string;
    oldValue: boolean;
    newValue: boolean;
    appliesAtHeight: bigint;
  }

  export interface IConfigUpdateInt extends EventBase {
    name: string;
    oldValue: bigint;
    newValue: bigint;
    appliesAtHeight: bigint;
  }

  export interface IConfigUpdateUint extends EventBase {
    name: string;
    oldValue: bigint;
    newValue: bigint;
    appliesAtHeight: bigint;
  }

  export interface IEip1559ParamsUpdate extends EventBase {
    oldParams: {
      minBaseFee: bigint;
      gasLimitBoundDivisor: bigint;
      elasticityMultiplier: bigint;
      baseFeeChangeDenominator: bigint;
    };
    newParams: {
      minBaseFee: bigint;
      gasLimitBoundDivisor: bigint;
      elasticityMultiplier: bigint;
      baseFeeChangeDenominator: bigint;
    };
  }

  export interface IEnodeUpdate extends EventBase {
    validator: string;
    oldEnode: string;
    newEnode: string;
  }

  export interface IEpochPeriodUpdated extends EventBase {
    period: bigint;
    appliedAtBlock: bigint;
  }

  export interface IMintedStake extends EventBase {
    addr: string;
    amount: bigint;
  }

  export interface INewBondingRequest extends EventBase {
    validator: string;
    delegator: string;
    caller: string;
    selfBonded: boolean;
    amount: bigint;
    headBondingID: bigint;
  }

  export interface INewEpoch extends EventBase {
    epoch: bigint;
    inflationReserve: bigint;
    stakeCirculating: bigint;
  }

  export interface INewSchedule extends EventBase {
    scheduleVault: string;
    amount: bigint;
    start: bigint;
    totalDuration: bigint;
  }

  export interface INewUnbondingRequest extends EventBase {
    validator: string;
    delegator: string;
    caller: string;
    selfBonded: boolean;
    amount: bigint;
    headUnbondingID: bigint;
  }

  export interface IPausedValidator extends EventBase {
    treasury: string;
    addr: string;
    effectiveBlock: bigint;
  }

  export interface IRegisteredValidator extends EventBase {
    treasury: string;
    addr: string;
    oracleAddress: string;
    enode: string;
    liquidStateContract: string;
  }

  export interface IRewarded extends EventBase {
    addr: string;
    atnSelfAmount: bigint;
    atnDelegatedAmount: bigint;
    ntnSelfAmount: bigint;
    ntnDelegatedAmount: bigint;
  }

  export interface ITransfer extends EventBase {
    from: string;
    to: string;
    value: bigint;
  }

  export type ActivatedValidator = IActivatedValidator;
  export type Approval = IApproval;
  export type BondingApproval = IBondingApproval;
  export type BondingRejected = IBondingRejected;
  export type BurnedStake = IBurnedStake;
  export type CallFailed = ICallFailed;
  export type CommissionRateChange = ICommissionRateChange;
  export type ConfigUpdateAddress = IConfigUpdateAddress;
  export type ConfigUpdateBool = IConfigUpdateBool;
  export type ConfigUpdateInt = IConfigUpdateInt;
  export type ConfigUpdateUint = IConfigUpdateUint;
  export type Eip1559ParamsUpdate = IEip1559ParamsUpdate;
  export type EnodeUpdate = IEnodeUpdate;
  export type EpochPeriodUpdated = IEpochPeriodUpdated;
  export type MintedStake = IMintedStake;
  export type NewBondingRequest = INewBondingRequest;
  export type NewEpoch = INewEpoch;
  export type NewSchedule = INewSchedule;
  export type NewUnbondingRequest = INewUnbondingRequest;
  export type PausedValidator = IPausedValidator;
  export type RegisteredValidator = IRegisteredValidator;
  export type Rewarded = IRewarded;
  export type Transfer = ITransfer;

  // Union type for all Autonity events
  export type AutonityEvent =
    | ActivatedValidator
    | Approval
    | BondingApproval
    | BondingRejected
    | BurnedStake
    | CallFailed
    | CommissionRateChange
    | ConfigUpdateAddress
    | ConfigUpdateBool
    | ConfigUpdateInt
    | ConfigUpdateUint
    | Eip1559ParamsUpdate
    | EnodeUpdate
    | EpochPeriodUpdated
    | MintedStake
    | NewBondingRequest
    | NewEpoch
    | NewSchedule
    | NewUnbondingRequest
    | PausedValidator
    | RegisteredValidator
    | Rewarded
    | Transfer;

  // Event type discriminator for pattern matching
  export type EventType =
    | "ActivatedValidator"
    | "Approval"
    | "BondingApproval"
    | "BondingRejected"
    | "BurnedStake"
    | "CallFailed"
    | "CommissionRateChange"
    | "ConfigUpdateAddress"
    | "ConfigUpdateBool"
    | "ConfigUpdateInt"
    | "ConfigUpdateUint"
    | "Eip1559ParamsUpdate"
    | "EnodeUpdate"
    | "EpochPeriodUpdated"
    | "MintedStake"
    | "NewBondingRequest"
    | "NewEpoch"
    | "NewSchedule"
    | "NewUnbondingRequest"
    | "PausedValidator"
    | "RegisteredValidator"
    | "Rewarded"
    | "Transfer";

  // Event mapper type for type-safe event processing
  export interface EventMappers {
    ActivatedValidator: typeof mapActivatedValidator;
    Approval: typeof mapApproval;
    BondingApproval: typeof mapBondingApproval;
    BondingRejected: typeof mapBondingRejected;
    BurnedStake: typeof mapBurnedStake;
    CallFailed: typeof mapCallFailed;
    CommissionRateChange: typeof mapCommissionRateChange;
    ConfigUpdateAddress: typeof mapConfigUpdateAddress;
    ConfigUpdateBool: typeof mapConfigUpdateBool;
    ConfigUpdateInt: typeof mapConfigUpdateInt;
    ConfigUpdateUint: typeof mapConfigUpdateUint;
    Eip1559ParamsUpdate: typeof mapEip1559ParamsUpdate;
    EnodeUpdate: typeof mapEnodeUpdate;
    EpochPeriodUpdated: typeof mapEpochPeriodUpdated;
    MintedStake: typeof mapMintedStake;
    NewBondingRequest: typeof mapNewBondingRequest;
    NewEpoch: typeof mapNewEpoch;
    NewSchedule: typeof mapNewSchedule;
    NewUnbondingRequest: typeof mapNewUnbondingRequest;
    PausedValidator: typeof mapPausedValidator;
    RegisteredValidator: typeof mapRegisteredValidator;
    Rewarded: typeof mapRewarded;
    Transfer: typeof mapTransfer;
  }

  export function createEventMapper<T extends readonly unknown[], R>(
    mapper: (struct: T, blockNumber: number, transactionHash: string) => R
  ) {
    return mapper;
  }

  export const mapTransfer = (event: TransferEvent.Log): Transfer => ({
    from: event.args.from,
    to: event.args.to,
    value: event.args.value,
    blockNumber: event.blockNumber,
    transactionHash: event.transactionHash,
  });

  export const mapBurnedStake = createEventMapper(
    (
      struct: BurnedStakeEvent.OutputTuple,
      blockNumber: number,
      transactionHash: string
    ): BurnedStake => ({
      addr: struct[0],
      amount: struct[1],
      blockNumber,
      transactionHash,
    })
  );

  export const mapNewEpoch = createEventMapper(
    (
      struct: NewEpochEvent.OutputTuple,
      blockNumber: number,
      transactionHash: string
    ): NewEpoch => ({
      epoch: struct[0],
      inflationReserve: struct[1],
      stakeCirculating: struct[2],
      blockNumber,
      transactionHash,
    })
  );

  export const mapCommissionRateChange = createEventMapper(
    (
      struct: CommissionRateChangeEvent.OutputTuple,
      blockNumber: number,
      transactionHash: string
    ): CommissionRateChange => ({
      validator: struct[0],
      rate: struct[1],
      blockNumber,
      transactionHash,
    })
  );

  export const mapBondingRejected = createEventMapper(
    (
      struct: BondingRejectedEvent.OutputTuple,
      blockNumber: number,
      transactionHash: string
    ): BondingRejected => ({
      validator: struct[0],
      delegator: struct[1],
      amount: struct[2],
      state: struct[3],
      blockNumber,
      transactionHash,
    })
  );

  export const mapNewBondingRequest = (
    event: NewBondingRequestEvent.Log
  ): NewBondingRequest => ({
    validator: event.args.validator,
    delegator: event.args.delegator,
    amount: event.args.amount,
    selfBonded: event.args.selfBonded,
    caller: event.args.caller,
    headBondingID: event.args.headBondingID,
    blockNumber: event.blockNumber,
    transactionHash: event.transactionHash,
  });

  export const mapRewarded = createEventMapper(
    (
      struct: RewardedEvent.OutputTuple,
      blockNumber: number,
      transactionHash: string
    ): Rewarded => ({
      addr: struct[0],
      atnSelfAmount: struct[1],
      atnDelegatedAmount: struct[2],
      ntnSelfAmount: struct[3],
      ntnDelegatedAmount: struct[4],
      blockNumber,
      transactionHash,
    })
  );

  export const mapActivatedValidator = (
    event: ActivatedValidatorEvent.Log
  ): ActivatedValidator => ({
    treasury: event.args.treasury,
    addr: event.args.addr,
    effectiveBlock: event.args.effectiveBlock,
    blockNumber: event.blockNumber,
    transactionHash: event.transactionHash,
  });

  export const mapApproval = (event: ApprovalEvent.Log): Approval => ({
    owner: event.args.owner,
    spender: event.args.spender,
    value: event.args.value,
    blockNumber: event.blockNumber,
    transactionHash: event.transactionHash,
  });

  export const mapBondingApproval = (
    event: BondingApprovalEvent.Log
  ): BondingApproval => ({
    _owner: event.args._owner,
    _caller: event.args._caller,
    _value: event.args._value,
    blockNumber: event.blockNumber,
    transactionHash: event.transactionHash,
  });

  export const mapCallFailed = (event: CallFailedEvent.Log): CallFailed => ({
    to: event.args.to,
    methodSignature: event.args.methodSignature,
    returnData: event.args.returnData,
    blockNumber: event.blockNumber,
    transactionHash: event.transactionHash,
  });

  export const mapConfigUpdateAddress = (
    event: ConfigUpdateAddressEvent.Log
  ): ConfigUpdateAddress => ({
    name: event.args.name,
    oldValue: event.args.oldValue,
    newValue: event.args.newValue,
    appliesAtHeight: event.args.appliesAtHeight,
    blockNumber: event.blockNumber,
    transactionHash: event.transactionHash,
  });

  export const mapConfigUpdateBool = (
    event: ConfigUpdateBoolEvent.Log
  ): ConfigUpdateBool => ({
    name: event.args.name,
    oldValue: event.args.oldValue,
    newValue: event.args.newValue,
    appliesAtHeight: event.args.appliesAtHeight,
    blockNumber: event.blockNumber,
    transactionHash: event.transactionHash,
  });

  export const mapConfigUpdateInt = (
    event: ConfigUpdateIntEvent.Log
  ): ConfigUpdateInt => ({
    name: event.args.name,
    oldValue: event.args.oldValue,
    newValue: event.args.newValue,
    appliesAtHeight: event.args.appliesAtHeight,
    blockNumber: event.blockNumber,
    transactionHash: event.transactionHash,
  });

  export const mapConfigUpdateUint = (
    event: ConfigUpdateUintEvent.Log
  ): ConfigUpdateUint => ({
    name: event.args.name,
    oldValue: event.args.oldValue,
    newValue: event.args.newValue,
    appliesAtHeight: event.args.appliesAtHeight,
    blockNumber: event.blockNumber,
    transactionHash: event.transactionHash,
  });

  export const mapEip1559ParamsUpdate = (
    event: Eip1559ParamsUpdateEvent.Log
  ): Eip1559ParamsUpdate => ({
    oldParams: event.args.oldParams,
    newParams: event.args.newParams,
    blockNumber: event.blockNumber,
    transactionHash: event.transactionHash,
  });

  export const mapEnodeUpdate = (event: EnodeUpdateEvent.Log): EnodeUpdate => ({
    validator: event.args.validator,
    oldEnode: event.args.oldEnode,
    newEnode: event.args.newEnode,
    blockNumber: event.blockNumber,
    transactionHash: event.transactionHash,
  });

  export const mapEpochPeriodUpdated = (
    event: EpochPeriodUpdatedEvent.Log
  ): EpochPeriodUpdated => ({
    period: event.args.period,
    appliedAtBlock: event.args.appliedAtBlock,
    blockNumber: event.blockNumber,
    transactionHash: event.transactionHash,
  });

  export const mapMintedStake = (event: MintedStakeEvent.Log): MintedStake => ({
    addr: event.args.addr,
    amount: event.args.amount,
    blockNumber: event.blockNumber,
    transactionHash: event.transactionHash,
  });

  export const mapNewSchedule = (event: NewScheduleEvent.Log): NewSchedule => ({
    scheduleVault: event.args.scheduleVault,
    amount: event.args.amount,
    start: event.args.start,
    totalDuration: event.args.totalDuration,
    blockNumber: event.blockNumber,
    transactionHash: event.transactionHash,
  });

  export const mapNewUnbondingRequest = (
    event: NewUnbondingRequestEvent.Log
  ): NewUnbondingRequest => ({
    validator: event.args.validator,
    delegator: event.args.delegator,
    caller: event.args.caller,
    selfBonded: event.args.selfBonded,
    amount: event.args.amount,
    headUnbondingID: event.args.headUnbondingID,
    blockNumber: event.blockNumber,
    transactionHash: event.transactionHash,
  });

  export const mapPausedValidator = (
    event: PausedValidatorEvent.Log
  ): PausedValidator => ({
    treasury: event.args.treasury,
    addr: event.args.addr,
    effectiveBlock: event.args.effectiveBlock,
    blockNumber: event.blockNumber,
    transactionHash: event.transactionHash,
  });

  export const mapRegisteredValidator = (
    event: RegisteredValidatorEvent.Log
  ): RegisteredValidator => ({
    treasury: event.args.treasury,
    addr: event.args.addr,
    oracleAddress: event.args.oracleAddress,
    enode: event.args.enode,
    liquidStateContract: event.args.liquidStateContract,
    blockNumber: event.blockNumber,
    transactionHash: event.transactionHash,
  });

  // Helper function to get event type from event name
  export function getEventType(eventName: string): EventType | null {
    const eventTypes: Record<string, EventType> = {
      ActivatedValidator: "ActivatedValidator",
      Approval: "Approval",
      BondingApproval: "BondingApproval",
      BondingRejected: "BondingRejected",
      BurnedStake: "BurnedStake",
      CallFailed: "CallFailed",
      CommissionRateChange: "CommissionRateChange",
      ConfigUpdateAddress: "ConfigUpdateAddress",
      ConfigUpdateBool: "ConfigUpdateBool",
      ConfigUpdateInt: "ConfigUpdateInt",
      ConfigUpdateUint: "ConfigUpdateUint",
      Eip1559ParamsUpdate: "Eip1559ParamsUpdate",
      EnodeUpdate: "EnodeUpdate",
      EpochPeriodUpdated: "EpochPeriodUpdated",
      MintedStake: "MintedStake",
      NewBondingRequest: "NewBondingRequest",
      NewEpoch: "NewEpoch",
      NewSchedule: "NewSchedule",
      NewUnbondingRequest: "NewUnbondingRequest",
      PausedValidator: "PausedValidator",
      RegisteredValidator: "RegisteredValidator",
      Rewarded: "Rewarded",
      Transfer: "Transfer",
    };

    return eventTypes[eventName] || null;
  }

  // Helper function to check if an event is a validator-related event
  export function isValidatorEvent(event: AutonityEvent): boolean {
    return (
      event.hasOwnProperty("treasury") ||
      event.hasOwnProperty("addr") ||
      "validator" in event
    );
  }

  // Helper function to check if an event is a staking-related event
  export function isStakingEvent(event: AutonityEvent): boolean {
    return "amount" in event && ("validator" in event || "delegator" in event);
  }

  // Helper function to check if an event is a configuration-related event
  export function isConfigEvent(event: AutonityEvent): boolean {
    return "name" in event && ("oldValue" in event || "newValue" in event);
  }

  // All available event mappers in a single object for dynamic access
  export const eventMappers: EventMappers = {
    ActivatedValidator: mapActivatedValidator,
    Approval: mapApproval,
    BondingApproval: mapBondingApproval,
    BondingRejected: mapBondingRejected,
    BurnedStake: mapBurnedStake,
    CallFailed: mapCallFailed,
    CommissionRateChange: mapCommissionRateChange,
    ConfigUpdateAddress: mapConfigUpdateAddress,
    ConfigUpdateBool: mapConfigUpdateBool,
    ConfigUpdateInt: mapConfigUpdateInt,
    ConfigUpdateUint: mapConfigUpdateUint,
    Eip1559ParamsUpdate: mapEip1559ParamsUpdate,
    EnodeUpdate: mapEnodeUpdate,
    EpochPeriodUpdated: mapEpochPeriodUpdated,
    MintedStake: mapMintedStake,
    NewBondingRequest: mapNewBondingRequest,
    NewEpoch: mapNewEpoch,
    NewSchedule: mapNewSchedule,
    NewUnbondingRequest: mapNewUnbondingRequest,
    PausedValidator: mapPausedValidator,
    RegisteredValidator: mapRegisteredValidator,
    Rewarded: mapRewarded,
    Transfer: mapTransfer,
  };
}

// Type aliases for backward compatibility and easier access
export type ActivatedValidator = AutonityEvents.ActivatedValidator;
export type Approval = AutonityEvents.Approval;
export type BondingApproval = AutonityEvents.BondingApproval;
export type BondingRejected = AutonityEvents.BondingRejected;
export type BurnedStake = AutonityEvents.BurnedStake;
export type CallFailed = AutonityEvents.CallFailed;
export type CommissionRateChange = AutonityEvents.CommissionRateChange;
export type ConfigUpdateAddress = AutonityEvents.ConfigUpdateAddress;
export type ConfigUpdateBool = AutonityEvents.ConfigUpdateBool;
export type ConfigUpdateInt = AutonityEvents.ConfigUpdateInt;
export type ConfigUpdateUint = AutonityEvents.ConfigUpdateUint;
export type Eip1559ParamsUpdate = AutonityEvents.Eip1559ParamsUpdate;
export type EnodeUpdate = AutonityEvents.EnodeUpdate;
export type EpochPeriodUpdated = AutonityEvents.EpochPeriodUpdated;
export type MintedStake = AutonityEvents.MintedStake;
export type NewBondingRequest = AutonityEvents.NewBondingRequest;
export type NewEpoch = AutonityEvents.NewEpoch;
export type NewSchedule = AutonityEvents.NewSchedule;
export type NewUnbondingRequest = AutonityEvents.NewUnbondingRequest;
export type PausedValidator = AutonityEvents.PausedValidator;
export type RegisteredValidator = AutonityEvents.RegisteredValidator;
export type Rewarded = AutonityEvents.Rewarded;
export type Transfer = AutonityEvents.Transfer;
export type AutonityEvent = AutonityEvents.AutonityEvent;
export type EventType = AutonityEvents.EventType;
export type EventMappers = AutonityEvents.EventMappers;

// Function aliases for backward compatibility
export const {
  mapTransfer,
  mapBurnedStake,
  mapNewEpoch,
  mapCommissionRateChange,
  mapBondingRejected,
  mapNewBondingRequest,
  mapRewarded,
  mapActivatedValidator,
  mapApproval,
  mapBondingApproval,
  mapCallFailed,
  mapConfigUpdateAddress,
  mapConfigUpdateBool,
  mapConfigUpdateInt,
  mapConfigUpdateUint,
  mapEip1559ParamsUpdate,
  mapEnodeUpdate,
  mapEpochPeriodUpdated,
  mapMintedStake,
  mapNewSchedule,
  mapNewUnbondingRequest,
  mapPausedValidator,
  mapRegisteredValidator,
  getEventType,
  isValidatorEvent,
  isStakingEvent,
  isConfigEvent,
  eventMappers,
} = AutonityEvents;
