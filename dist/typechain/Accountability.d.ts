import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "./common";
export declare namespace Accountability {
    type ConfigStruct = {
        innocenceProofSubmissionWindow: BigNumberish;
        baseSlashingRateLow: BigNumberish;
        baseSlashingRateMid: BigNumberish;
        collusionFactor: BigNumberish;
        historyFactor: BigNumberish;
        jailFactor: BigNumberish;
        slashingRatePrecision: BigNumberish;
    };
    type ConfigStructOutput = [
        innocenceProofSubmissionWindow: bigint,
        baseSlashingRateLow: bigint,
        baseSlashingRateMid: bigint,
        collusionFactor: bigint,
        historyFactor: bigint,
        jailFactor: bigint,
        slashingRatePrecision: bigint
    ] & {
        innocenceProofSubmissionWindow: bigint;
        baseSlashingRateLow: bigint;
        baseSlashingRateMid: bigint;
        collusionFactor: bigint;
        historyFactor: bigint;
        jailFactor: bigint;
        slashingRatePrecision: bigint;
    };
    type EventStruct = {
        chunks: BigNumberish;
        chunkId: BigNumberish;
        eventType: BigNumberish;
        rule: BigNumberish;
        reporter: AddressLike;
        offender: AddressLike;
        rawProof: BytesLike;
        id: BigNumberish;
        block: BigNumberish;
        epoch: BigNumberish;
        reportingBlock: BigNumberish;
        messageHash: BigNumberish;
    };
    type EventStructOutput = [
        chunks: bigint,
        chunkId: bigint,
        eventType: bigint,
        rule: bigint,
        reporter: string,
        offender: string,
        rawProof: string,
        id: bigint,
        block: bigint,
        epoch: bigint,
        reportingBlock: bigint,
        messageHash: bigint
    ] & {
        chunks: bigint;
        chunkId: bigint;
        eventType: bigint;
        rule: bigint;
        reporter: string;
        offender: string;
        rawProof: string;
        id: bigint;
        block: bigint;
        epoch: bigint;
        reportingBlock: bigint;
        messageHash: bigint;
    };
}
export interface AccountabilityInterface extends Interface {
    getFunction(nameOrSignature: "beneficiaries" | "canAccuse" | "canSlash" | "config" | "distributeRewards" | "epochPeriod" | "events" | "finalize" | "getValidatorAccusation" | "getValidatorFaults" | "handleEvent" | "setEpochPeriod" | "slashingHistory"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "InnocenceProven" | "NewAccusation" | "NewFaultProof" | "SlashingEvent"): EventFragment;
    encodeFunctionData(functionFragment: "beneficiaries", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "canAccuse", values: [AddressLike, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "canSlash", values: [AddressLike, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "config", values?: undefined): string;
    encodeFunctionData(functionFragment: "distributeRewards", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "epochPeriod", values?: undefined): string;
    encodeFunctionData(functionFragment: "events", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "finalize", values: [boolean]): string;
    encodeFunctionData(functionFragment: "getValidatorAccusation", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getValidatorFaults", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "handleEvent", values: [Accountability.EventStruct]): string;
    encodeFunctionData(functionFragment: "setEpochPeriod", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "slashingHistory", values: [AddressLike, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "beneficiaries", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "canAccuse", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "canSlash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "config", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "distributeRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "epochPeriod", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "events", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "finalize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getValidatorAccusation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getValidatorFaults", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "handleEvent", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setEpochPeriod", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "slashingHistory", data: BytesLike): Result;
}
export declare namespace InnocenceProvenEvent {
    type InputTuple = [_offender: AddressLike, _id: BigNumberish];
    type OutputTuple = [_offender: string, _id: bigint];
    interface OutputObject {
        _offender: string;
        _id: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace NewAccusationEvent {
    type InputTuple = [
        _offender: AddressLike,
        _severity: BigNumberish,
        _id: BigNumberish
    ];
    type OutputTuple = [_offender: string, _severity: bigint, _id: bigint];
    interface OutputObject {
        _offender: string;
        _severity: bigint;
        _id: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace NewFaultProofEvent {
    type InputTuple = [
        _offender: AddressLike,
        _severity: BigNumberish,
        _id: BigNumberish
    ];
    type OutputTuple = [_offender: string, _severity: bigint, _id: bigint];
    interface OutputObject {
        _offender: string;
        _severity: bigint;
        _id: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace SlashingEventEvent {
    type InputTuple = [
        validator: AddressLike,
        amount: BigNumberish,
        releaseBlock: BigNumberish,
        isJailbound: boolean,
        eventId: BigNumberish
    ];
    type OutputTuple = [
        validator: string,
        amount: bigint,
        releaseBlock: bigint,
        isJailbound: boolean,
        eventId: bigint
    ];
    interface OutputObject {
        validator: string;
        amount: bigint;
        releaseBlock: bigint;
        isJailbound: boolean;
        eventId: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface Accountability extends BaseContract {
    connect(runner?: ContractRunner | null): Accountability;
    waitForDeployment(): Promise<this>;
    interface: AccountabilityInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    beneficiaries: TypedContractMethod<[arg0: AddressLike], [string], "view">;
    canAccuse: TypedContractMethod<[
        _offender: AddressLike,
        _rule: BigNumberish,
        _block: BigNumberish
    ], [
        [boolean, bigint] & {
            _result: boolean;
            _deadline: bigint;
        }
    ], "view">;
    canSlash: TypedContractMethod<[
        _offender: AddressLike,
        _rule: BigNumberish,
        _block: BigNumberish
    ], [
        boolean
    ], "view">;
    config: TypedContractMethod<[
    ], [
        [
            bigint,
            bigint,
            bigint,
            bigint,
            bigint,
            bigint,
            bigint
        ] & {
            innocenceProofSubmissionWindow: bigint;
            baseSlashingRateLow: bigint;
            baseSlashingRateMid: bigint;
            collusionFactor: bigint;
            historyFactor: bigint;
            jailFactor: bigint;
            slashingRatePrecision: bigint;
        }
    ], "view">;
    distributeRewards: TypedContractMethod<[
        _validator: AddressLike,
        _ntnReward: BigNumberish
    ], [
        void
    ], "payable">;
    epochPeriod: TypedContractMethod<[], [bigint], "view">;
    events: TypedContractMethod<[
        arg0: BigNumberish
    ], [
        [
            bigint,
            bigint,
            bigint,
            bigint,
            string,
            string,
            string,
            bigint,
            bigint,
            bigint,
            bigint,
            bigint
        ] & {
            chunks: bigint;
            chunkId: bigint;
            eventType: bigint;
            rule: bigint;
            reporter: string;
            offender: string;
            rawProof: string;
            id: bigint;
            block: bigint;
            epoch: bigint;
            reportingBlock: bigint;
            messageHash: bigint;
        }
    ], "view">;
    finalize: TypedContractMethod<[_epochEnd: boolean], [void], "nonpayable">;
    getValidatorAccusation: TypedContractMethod<[
        _val: AddressLike
    ], [
        Accountability.EventStructOutput
    ], "view">;
    getValidatorFaults: TypedContractMethod<[
        _val: AddressLike
    ], [
        Accountability.EventStructOutput[]
    ], "view">;
    handleEvent: TypedContractMethod<[
        _event: Accountability.EventStruct
    ], [
        void
    ], "nonpayable">;
    setEpochPeriod: TypedContractMethod<[
        _newPeriod: BigNumberish
    ], [
        void
    ], "nonpayable">;
    slashingHistory: TypedContractMethod<[
        arg0: AddressLike,
        arg1: BigNumberish
    ], [
        bigint
    ], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "beneficiaries"): TypedContractMethod<[arg0: AddressLike], [string], "view">;
    getFunction(nameOrSignature: "canAccuse"): TypedContractMethod<[
        _offender: AddressLike,
        _rule: BigNumberish,
        _block: BigNumberish
    ], [
        [boolean, bigint] & {
            _result: boolean;
            _deadline: bigint;
        }
    ], "view">;
    getFunction(nameOrSignature: "canSlash"): TypedContractMethod<[
        _offender: AddressLike,
        _rule: BigNumberish,
        _block: BigNumberish
    ], [
        boolean
    ], "view">;
    getFunction(nameOrSignature: "config"): TypedContractMethod<[
    ], [
        [
            bigint,
            bigint,
            bigint,
            bigint,
            bigint,
            bigint,
            bigint
        ] & {
            innocenceProofSubmissionWindow: bigint;
            baseSlashingRateLow: bigint;
            baseSlashingRateMid: bigint;
            collusionFactor: bigint;
            historyFactor: bigint;
            jailFactor: bigint;
            slashingRatePrecision: bigint;
        }
    ], "view">;
    getFunction(nameOrSignature: "distributeRewards"): TypedContractMethod<[
        _validator: AddressLike,
        _ntnReward: BigNumberish
    ], [
        void
    ], "payable">;
    getFunction(nameOrSignature: "epochPeriod"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "events"): TypedContractMethod<[
        arg0: BigNumberish
    ], [
        [
            bigint,
            bigint,
            bigint,
            bigint,
            string,
            string,
            string,
            bigint,
            bigint,
            bigint,
            bigint,
            bigint
        ] & {
            chunks: bigint;
            chunkId: bigint;
            eventType: bigint;
            rule: bigint;
            reporter: string;
            offender: string;
            rawProof: string;
            id: bigint;
            block: bigint;
            epoch: bigint;
            reportingBlock: bigint;
            messageHash: bigint;
        }
    ], "view">;
    getFunction(nameOrSignature: "finalize"): TypedContractMethod<[_epochEnd: boolean], [void], "nonpayable">;
    getFunction(nameOrSignature: "getValidatorAccusation"): TypedContractMethod<[
        _val: AddressLike
    ], [
        Accountability.EventStructOutput
    ], "view">;
    getFunction(nameOrSignature: "getValidatorFaults"): TypedContractMethod<[
        _val: AddressLike
    ], [
        Accountability.EventStructOutput[]
    ], "view">;
    getFunction(nameOrSignature: "handleEvent"): TypedContractMethod<[
        _event: Accountability.EventStruct
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "setEpochPeriod"): TypedContractMethod<[_newPeriod: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "slashingHistory"): TypedContractMethod<[
        arg0: AddressLike,
        arg1: BigNumberish
    ], [
        bigint
    ], "view">;
    getEvent(key: "InnocenceProven"): TypedContractEvent<InnocenceProvenEvent.InputTuple, InnocenceProvenEvent.OutputTuple, InnocenceProvenEvent.OutputObject>;
    getEvent(key: "NewAccusation"): TypedContractEvent<NewAccusationEvent.InputTuple, NewAccusationEvent.OutputTuple, NewAccusationEvent.OutputObject>;
    getEvent(key: "NewFaultProof"): TypedContractEvent<NewFaultProofEvent.InputTuple, NewFaultProofEvent.OutputTuple, NewFaultProofEvent.OutputObject>;
    getEvent(key: "SlashingEvent"): TypedContractEvent<SlashingEventEvent.InputTuple, SlashingEventEvent.OutputTuple, SlashingEventEvent.OutputObject>;
    filters: {
        "InnocenceProven(address,uint256)": TypedContractEvent<InnocenceProvenEvent.InputTuple, InnocenceProvenEvent.OutputTuple, InnocenceProvenEvent.OutputObject>;
        InnocenceProven: TypedContractEvent<InnocenceProvenEvent.InputTuple, InnocenceProvenEvent.OutputTuple, InnocenceProvenEvent.OutputObject>;
        "NewAccusation(address,uint256,uint256)": TypedContractEvent<NewAccusationEvent.InputTuple, NewAccusationEvent.OutputTuple, NewAccusationEvent.OutputObject>;
        NewAccusation: TypedContractEvent<NewAccusationEvent.InputTuple, NewAccusationEvent.OutputTuple, NewAccusationEvent.OutputObject>;
        "NewFaultProof(address,uint256,uint256)": TypedContractEvent<NewFaultProofEvent.InputTuple, NewFaultProofEvent.OutputTuple, NewFaultProofEvent.OutputObject>;
        NewFaultProof: TypedContractEvent<NewFaultProofEvent.InputTuple, NewFaultProofEvent.OutputTuple, NewFaultProofEvent.OutputObject>;
        "SlashingEvent(address,uint256,uint256,bool,uint256)": TypedContractEvent<SlashingEventEvent.InputTuple, SlashingEventEvent.OutputTuple, SlashingEventEvent.OutputObject>;
        SlashingEvent: TypedContractEvent<SlashingEventEvent.InputTuple, SlashingEventEvent.OutputTuple, SlashingEventEvent.OutputObject>;
    };
}
