import { BytesLike } from "ethers";
import type {
  CallFailedEvent,
  CommitRevealMissedEvent,
  ConfigUpdateAddressEvent,
  ConfigUpdateBoolEvent,
  ConfigUpdateIntEvent,
  ConfigUpdateUintEvent,
  InvalidVoteEvent,
  NewRoundEvent,
  NewSymbolsEvent,
  NewVoterEvent,
  NoRevealPenaltyEvent,
  PenalizedEvent,
  PriceUpdatedEvent,
  SuccessfulVoteEvent,
  TotalOracleRewardsEvent,
} from "../typechain/Oracle";

export namespace OracleEvents {
  interface EventBase {
    blockNumber: number;
    transactionHash: string;
  }

  // Event Interfaces for better type hints and autocomplete
  export interface ICallFailed extends EventBase {
    to: string;
    methodSignature: string;
    returnData: string;
  }

  export interface ICommitRevealMissed extends EventBase {
    _voter: string;
    _round: bigint;
    _nonRevealCount: bigint;
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

  export interface IInvalidVote extends EventBase {
    cause: string;
    reporter: string;
    expValue: bigint;
    actualValue: bigint;
    extra: bigint;
  }

  export interface INewRound extends EventBase {
    _round: bigint;
    _timestamp: bigint;
    _votePeriod: bigint;
  }

  export interface INewSymbols extends EventBase {
    _symbols: string[];
    _round: bigint;
  }

  export interface INewVoter extends EventBase {
    reporter: string;
    extra: bigint;
  }

  export interface INoRevealPenalty extends EventBase {
    _voter: string;
    _round: bigint;
    _missedReveal: bigint;
  }

  export interface IPenalized extends EventBase {
    _participant: string;
    _slashingAmount: bigint;
    _symbol: string;
    _median: bigint;
    _reported: bigint;
  }

  export interface IPriceUpdated extends EventBase {
    price: bigint;
    round: bigint;
    symbol: string;
    status: boolean;
    timestamp: bigint;
  }

  export interface ISuccessfulVote extends EventBase {
    reporter: string;
    extra: bigint;
  }

  export interface ITotalOracleRewards extends EventBase {
    ntnReward: bigint;
    atnReward: bigint;
  }

  export type CallFailed = ICallFailed;
  export type CommitRevealMissed = ICommitRevealMissed;
  export type ConfigUpdateAddress = IConfigUpdateAddress;
  export type ConfigUpdateBool = IConfigUpdateBool;
  export type ConfigUpdateInt = IConfigUpdateInt;
  export type ConfigUpdateUint = IConfigUpdateUint;
  export type InvalidVote = IInvalidVote;
  export type NewRound = INewRound;
  export type NewSymbols = INewSymbols;
  export type NewVoter = INewVoter;
  export type NoRevealPenalty = INoRevealPenalty;
  export type Penalized = IPenalized;
  export type PriceUpdated = IPriceUpdated;
  export type SuccessfulVote = ISuccessfulVote;
  export type TotalOracleRewards = ITotalOracleRewards;

  // Union type for all Oracle events
  export type OracleEvent =
    | CallFailed
    | CommitRevealMissed
    | ConfigUpdateAddress
    | ConfigUpdateBool
    | ConfigUpdateInt
    | ConfigUpdateUint
    | InvalidVote
    | NewRound
    | NewSymbols
    | NewVoter
    | NoRevealPenalty
    | Penalized
    | PriceUpdated
    | SuccessfulVote
    | TotalOracleRewards;

  // Event type discriminator for pattern matching
  export type EventType =
    | "CallFailed"
    | "CommitRevealMissed"
    | "ConfigUpdateAddress"
    | "ConfigUpdateBool"
    | "ConfigUpdateInt"
    | "ConfigUpdateUint"
    | "InvalidVote"
    | "NewRound"
    | "NewSymbols"
    | "NewVoter"
    | "NoRevealPenalty"
    | "Penalized"
    | "PriceUpdated"
    | "SuccessfulVote"
    | "TotalOracleRewards";

  // Event mapper type for type-safe event processing
  export interface EventMappers {
    CallFailed: typeof mapCallFailed;
    CommitRevealMissed: typeof mapCommitRevealMissed;
    ConfigUpdateAddress: typeof mapConfigUpdateAddress;
    ConfigUpdateBool: typeof mapConfigUpdateBool;
    ConfigUpdateInt: typeof mapConfigUpdateInt;
    ConfigUpdateUint: typeof mapConfigUpdateUint;
    InvalidVote: typeof mapInvalidVote;
    NewRound: typeof mapNewRound;
    NewSymbols: typeof mapNewSymbols;
    NewVoter: typeof mapNewVoter;
    NoRevealPenalty: typeof mapNoRevealPenalty;
    Penalized: typeof mapPenalized;
    PriceUpdated: typeof mapPriceUpdated;
    SuccessfulVote: typeof mapSuccessfulVote;
    TotalOracleRewards: typeof mapTotalOracleRewards;
  }


  export const mapCallFailed = (event: CallFailedEvent.Log): CallFailed => ({
    to: event.args.to,
    methodSignature: event.args.methodSignature,
    returnData: event.args.returnData,
    blockNumber: event.blockNumber,
    transactionHash: event.transactionHash,
  });

  export const mapCommitRevealMissed = (
    event: CommitRevealMissedEvent.Log
  ): CommitRevealMissed => ({
    _voter: event.args._voter,
    _round: event.args._round,
    _nonRevealCount: event.args._nonRevealCount,
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

  export const mapInvalidVote = (event: InvalidVoteEvent.Log): InvalidVote => ({
    cause: event.args.cause,
    reporter: event.args.reporter,
    expValue: event.args.expValue,
    actualValue: event.args.actualValue,
    extra: event.args.extra,
    blockNumber: event.blockNumber,
    transactionHash: event.transactionHash,
  });

  export const mapNewRound = (event: NewRoundEvent.Log): NewRound => ({
    _round: event.args._round,
    _timestamp: event.args._timestamp,
    _votePeriod: event.args._votePeriod,
    blockNumber: event.blockNumber,
    transactionHash: event.transactionHash,
  });

  export const mapNewSymbols = (event: NewSymbolsEvent.Log): NewSymbols => ({
    _symbols: event.args._symbols,
    _round: event.args._round,
    blockNumber: event.blockNumber,
    transactionHash: event.transactionHash,
  });

  export const mapNewVoter = (event: NewVoterEvent.Log): NewVoter => ({
    reporter: event.args.reporter,
    extra: event.args.extra,
    blockNumber: event.blockNumber,
    transactionHash: event.transactionHash,
  });

  export const mapNoRevealPenalty = (
    event: NoRevealPenaltyEvent.Log
  ): NoRevealPenalty => ({
    _voter: event.args._voter,
    _round: event.args._round,
    _missedReveal: event.args._missedReveal,
    blockNumber: event.blockNumber,
    transactionHash: event.transactionHash,
  });

  export const mapPenalized = (event: PenalizedEvent.Log): Penalized => ({
    _participant: event.args._participant,
    _slashingAmount: event.args._slashingAmount,
    _symbol: event.args._symbol,
    _median: event.args._median,
    _reported: event.args._reported,
    blockNumber: event.blockNumber,
    transactionHash: event.transactionHash,
  });

  export const mapPriceUpdated = (
    event: PriceUpdatedEvent.Log
  ): PriceUpdated => ({
    price: event.args.price,
    round: event.args.round,
    symbol: event.args.symbol,
    status: event.args.status,
    timestamp: event.args.timestamp,
    blockNumber: event.blockNumber,
    transactionHash: event.transactionHash,
  });

  export const mapSuccessfulVote = (
    event: SuccessfulVoteEvent.Log
  ): SuccessfulVote => ({
    reporter: event.args.reporter,
    extra: event.args.extra,
    blockNumber: event.blockNumber,
    transactionHash: event.transactionHash,
  });

  export const mapTotalOracleRewards = (
    event: TotalOracleRewardsEvent.Log
  ): TotalOracleRewards => ({
    ntnReward: event.args.ntnReward,
    atnReward: event.args.atnReward,
    blockNumber: event.blockNumber,
    transactionHash: event.transactionHash,
  });

  // Helper function to get event type from event name
  export function getEventType(eventName: string): EventType | null {
    const eventTypes: Record<string, EventType> = {
      CallFailed: "CallFailed",
      CommitRevealMissed: "CommitRevealMissed",
      ConfigUpdateAddress: "ConfigUpdateAddress",
      ConfigUpdateBool: "ConfigUpdateBool",
      ConfigUpdateInt: "ConfigUpdateInt",
      ConfigUpdateUint: "ConfigUpdateUint",
      InvalidVote: "InvalidVote",
      NewRound: "NewRound",
      NewSymbols: "NewSymbols",
      NewVoter: "NewVoter",
      NoRevealPenalty: "NoRevealPenalty",
      Penalized: "Penalized",
      PriceUpdated: "PriceUpdated",
      SuccessfulVote: "SuccessfulVote",
      TotalOracleRewards: "TotalOracleRewards",
    };

    return eventTypes[eventName] || null;
  }

  // Helper function to check if an event is a voter-related event
  export function isVoterEvent(event: OracleEvent): boolean {
    return (
      event.hasOwnProperty("reporter") ||
      event.hasOwnProperty("_voter") ||
      "validator" in event
    );
  }

  // Helper function to check if an event is a price-related event
  export function isPriceEvent(event: OracleEvent): boolean {
    return "price" in event || "_median" in event || "_reported" in event;
  }

  // Helper function to check if an event is a configuration-related event
  export function isConfigEvent(event: OracleEvent): boolean {
    return "name" in event && ("oldValue" in event || "newValue" in event);
  }

  // Helper function to check if an event is a round-related event
  export function isRoundEvent(event: OracleEvent): boolean {
    return "_round" in event || "round" in event;
  }

  // All available event mappers in a single object for dynamic access
  export const eventMappers: EventMappers = {
    CallFailed: mapCallFailed,
    CommitRevealMissed: mapCommitRevealMissed,
    ConfigUpdateAddress: mapConfigUpdateAddress,
    ConfigUpdateBool: mapConfigUpdateBool,
    ConfigUpdateInt: mapConfigUpdateInt,
    ConfigUpdateUint: mapConfigUpdateUint,
    InvalidVote: mapInvalidVote,
    NewRound: mapNewRound,
    NewSymbols: mapNewSymbols,
    NewVoter: mapNewVoter,
    NoRevealPenalty: mapNoRevealPenalty,
    Penalized: mapPenalized,
    PriceUpdated: mapPriceUpdated,
    SuccessfulVote: mapSuccessfulVote,
    TotalOracleRewards: mapTotalOracleRewards,
  };
}

// Type aliases for backward compatibility and easier access
export type CallFailed = OracleEvents.CallFailed;
export type CommitRevealMissed = OracleEvents.CommitRevealMissed;
export type ConfigUpdateAddress = OracleEvents.ConfigUpdateAddress;
export type ConfigUpdateBool = OracleEvents.ConfigUpdateBool;
export type ConfigUpdateInt = OracleEvents.ConfigUpdateInt;
export type ConfigUpdateUint = OracleEvents.ConfigUpdateUint;
export type InvalidVote = OracleEvents.InvalidVote;
export type NewRound = OracleEvents.NewRound;
export type NewSymbols = OracleEvents.NewSymbols;
export type NewVoter = OracleEvents.NewVoter;
export type NoRevealPenalty = OracleEvents.NoRevealPenalty;
export type Penalized = OracleEvents.Penalized;
export type PriceUpdated = OracleEvents.PriceUpdated;
export type SuccessfulVote = OracleEvents.SuccessfulVote;
export type TotalOracleRewards = OracleEvents.TotalOracleRewards;
export type OracleEvent = OracleEvents.OracleEvent;
export type EventType = OracleEvents.EventType;
export type EventMappers = OracleEvents.EventMappers;

// Function aliases for backward compatibility
export const {
  mapCallFailed,
  mapCommitRevealMissed,
  mapConfigUpdateAddress,
  mapConfigUpdateBool,
  mapConfigUpdateInt,
  mapConfigUpdateUint,
  mapInvalidVote,
  mapNewRound,
  mapNewSymbols,
  mapNewVoter,
  mapNoRevealPenalty,
  mapPenalized,
  mapPriceUpdated,
  mapSuccessfulVote,
  mapTotalOracleRewards,
  getEventType,
  isVoterEvent,
  isPriceEvent,
  isConfigEvent,
  isRoundEvent,
  eventMappers,
} = OracleEvents;
