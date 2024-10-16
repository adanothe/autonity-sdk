import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "./common";
export declare namespace IOracle {
    type RoundDataStruct = {
        round: BigNumberish;
        price: BigNumberish;
        timestamp: BigNumberish;
        success: boolean;
    };
    type RoundDataStructOutput = [
        round: bigint,
        price: bigint,
        timestamp: bigint,
        success: boolean
    ] & {
        round: bigint;
        price: bigint;
        timestamp: bigint;
        success: boolean;
    };
}
export interface OracleInterface extends Interface {
    getFunction(nameOrSignature: "finalize" | "getPrecision" | "getRound" | "getRoundData" | "getSymbols" | "getVotePeriod" | "getVoters" | "lastRoundBlock" | "lastVoterUpdateRound" | "latestRoundData" | "newSymbols" | "reports" | "round" | "setOperator" | "setSymbols" | "setVoters" | "symbolUpdatedRound" | "symbols" | "vote" | "votePeriod" | "votingInfo"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "NewRound" | "NewSymbols" | "Voted"): EventFragment;
    encodeFunctionData(functionFragment: "finalize", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPrecision", values?: undefined): string;
    encodeFunctionData(functionFragment: "getRound", values?: undefined): string;
    encodeFunctionData(functionFragment: "getRoundData", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "getSymbols", values?: undefined): string;
    encodeFunctionData(functionFragment: "getVotePeriod", values?: undefined): string;
    encodeFunctionData(functionFragment: "getVoters", values?: undefined): string;
    encodeFunctionData(functionFragment: "lastRoundBlock", values?: undefined): string;
    encodeFunctionData(functionFragment: "lastVoterUpdateRound", values?: undefined): string;
    encodeFunctionData(functionFragment: "latestRoundData", values: [string]): string;
    encodeFunctionData(functionFragment: "newSymbols", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "reports", values: [string, AddressLike]): string;
    encodeFunctionData(functionFragment: "round", values?: undefined): string;
    encodeFunctionData(functionFragment: "setOperator", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "setSymbols", values: [string[]]): string;
    encodeFunctionData(functionFragment: "setVoters", values: [AddressLike[]]): string;
    encodeFunctionData(functionFragment: "symbolUpdatedRound", values?: undefined): string;
    encodeFunctionData(functionFragment: "symbols", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "vote", values: [BigNumberish, BigNumberish[], BigNumberish]): string;
    encodeFunctionData(functionFragment: "votePeriod", values?: undefined): string;
    encodeFunctionData(functionFragment: "votingInfo", values: [AddressLike]): string;
    decodeFunctionResult(functionFragment: "finalize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPrecision", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRound", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoundData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSymbols", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getVotePeriod", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getVoters", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lastRoundBlock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lastVoterUpdateRound", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "latestRoundData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "newSymbols", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "reports", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "round", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setOperator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setSymbols", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setVoters", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbolUpdatedRound", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbols", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "vote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "votePeriod", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "votingInfo", data: BytesLike): Result;
}
export declare namespace NewRoundEvent {
    type InputTuple = [
        _round: BigNumberish,
        _height: BigNumberish,
        _timestamp: BigNumberish,
        _votePeriod: BigNumberish
    ];
    type OutputTuple = [
        _round: bigint,
        _height: bigint,
        _timestamp: bigint,
        _votePeriod: bigint
    ];
    interface OutputObject {
        _round: bigint;
        _height: bigint;
        _timestamp: bigint;
        _votePeriod: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace NewSymbolsEvent {
    type InputTuple = [_symbols: string[], _round: BigNumberish];
    type OutputTuple = [_symbols: string[], _round: bigint];
    interface OutputObject {
        _symbols: string[];
        _round: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace VotedEvent {
    type InputTuple = [_voter: AddressLike, _votes: BigNumberish[]];
    type OutputTuple = [_voter: string, _votes: bigint[]];
    interface OutputObject {
        _voter: string;
        _votes: bigint[];
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface Oracle extends BaseContract {
    connect(runner?: ContractRunner | null): Oracle;
    waitForDeployment(): Promise<this>;
    interface: OracleInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    finalize: TypedContractMethod<[], [boolean], "nonpayable">;
    getPrecision: TypedContractMethod<[], [bigint], "view">;
    getRound: TypedContractMethod<[], [bigint], "view">;
    getRoundData: TypedContractMethod<[
        _round: BigNumberish,
        _symbol: string
    ], [
        IOracle.RoundDataStructOutput
    ], "view">;
    getSymbols: TypedContractMethod<[], [string[]], "view">;
    getVotePeriod: TypedContractMethod<[], [bigint], "view">;
    getVoters: TypedContractMethod<[], [string[]], "view">;
    lastRoundBlock: TypedContractMethod<[], [bigint], "view">;
    lastVoterUpdateRound: TypedContractMethod<[], [bigint], "view">;
    latestRoundData: TypedContractMethod<[
        _symbol: string
    ], [
        IOracle.RoundDataStructOutput
    ], "view">;
    newSymbols: TypedContractMethod<[arg0: BigNumberish], [string], "view">;
    reports: TypedContractMethod<[
        arg0: string,
        arg1: AddressLike
    ], [
        bigint
    ], "view">;
    round: TypedContractMethod<[], [bigint], "view">;
    setOperator: TypedContractMethod<[
        _operator: AddressLike
    ], [
        void
    ], "nonpayable">;
    setSymbols: TypedContractMethod<[_symbols: string[]], [void], "nonpayable">;
    setVoters: TypedContractMethod<[
        _newVoters: AddressLike[]
    ], [
        void
    ], "nonpayable">;
    symbolUpdatedRound: TypedContractMethod<[], [bigint], "view">;
    symbols: TypedContractMethod<[arg0: BigNumberish], [string], "view">;
    vote: TypedContractMethod<[
        _commit: BigNumberish,
        _reports: BigNumberish[],
        _salt: BigNumberish
    ], [
        void
    ], "nonpayable">;
    votePeriod: TypedContractMethod<[], [bigint], "view">;
    votingInfo: TypedContractMethod<[
        arg0: AddressLike
    ], [
        [
            bigint,
            bigint,
            boolean
        ] & {
            round: bigint;
            commit: bigint;
            isVoter: boolean;
        }
    ], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "finalize"): TypedContractMethod<[], [boolean], "nonpayable">;
    getFunction(nameOrSignature: "getPrecision"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getRound"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getRoundData"): TypedContractMethod<[
        _round: BigNumberish,
        _symbol: string
    ], [
        IOracle.RoundDataStructOutput
    ], "view">;
    getFunction(nameOrSignature: "getSymbols"): TypedContractMethod<[], [string[]], "view">;
    getFunction(nameOrSignature: "getVotePeriod"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getVoters"): TypedContractMethod<[], [string[]], "view">;
    getFunction(nameOrSignature: "lastRoundBlock"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "lastVoterUpdateRound"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "latestRoundData"): TypedContractMethod<[
        _symbol: string
    ], [
        IOracle.RoundDataStructOutput
    ], "view">;
    getFunction(nameOrSignature: "newSymbols"): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
    getFunction(nameOrSignature: "reports"): TypedContractMethod<[arg0: string, arg1: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "round"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "setOperator"): TypedContractMethod<[_operator: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "setSymbols"): TypedContractMethod<[_symbols: string[]], [void], "nonpayable">;
    getFunction(nameOrSignature: "setVoters"): TypedContractMethod<[_newVoters: AddressLike[]], [void], "nonpayable">;
    getFunction(nameOrSignature: "symbolUpdatedRound"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "symbols"): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
    getFunction(nameOrSignature: "vote"): TypedContractMethod<[
        _commit: BigNumberish,
        _reports: BigNumberish[],
        _salt: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "votePeriod"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "votingInfo"): TypedContractMethod<[
        arg0: AddressLike
    ], [
        [
            bigint,
            bigint,
            boolean
        ] & {
            round: bigint;
            commit: bigint;
            isVoter: boolean;
        }
    ], "view">;
    getEvent(key: "NewRound"): TypedContractEvent<NewRoundEvent.InputTuple, NewRoundEvent.OutputTuple, NewRoundEvent.OutputObject>;
    getEvent(key: "NewSymbols"): TypedContractEvent<NewSymbolsEvent.InputTuple, NewSymbolsEvent.OutputTuple, NewSymbolsEvent.OutputObject>;
    getEvent(key: "Voted"): TypedContractEvent<VotedEvent.InputTuple, VotedEvent.OutputTuple, VotedEvent.OutputObject>;
    filters: {
        "NewRound(uint256,uint256,uint256,uint256)": TypedContractEvent<NewRoundEvent.InputTuple, NewRoundEvent.OutputTuple, NewRoundEvent.OutputObject>;
        NewRound: TypedContractEvent<NewRoundEvent.InputTuple, NewRoundEvent.OutputTuple, NewRoundEvent.OutputObject>;
        "NewSymbols(string[],uint256)": TypedContractEvent<NewSymbolsEvent.InputTuple, NewSymbolsEvent.OutputTuple, NewSymbolsEvent.OutputObject>;
        NewSymbols: TypedContractEvent<NewSymbolsEvent.InputTuple, NewSymbolsEvent.OutputTuple, NewSymbolsEvent.OutputObject>;
        "Voted(address,int256[])": TypedContractEvent<VotedEvent.InputTuple, VotedEvent.OutputTuple, VotedEvent.OutputObject>;
        Voted: TypedContractEvent<VotedEvent.InputTuple, VotedEvent.OutputTuple, VotedEvent.OutputObject>;
    };
}
