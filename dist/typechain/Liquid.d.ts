import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "./common";
export interface LiquidInterface extends Interface {
    getFunction(nameOrSignature: "COMMISSION_RATE_PRECISION" | "FEE_FACTOR_UNIT_RECIP" | "allowance" | "approve" | "balanceOf" | "burn" | "claimRewards" | "commissionRate" | "decimals" | "lock" | "lockedBalanceOf" | "mint" | "name" | "redistribute" | "setCommissionRate" | "symbol" | "totalSupply" | "transfer" | "transferFrom" | "treasury" | "unclaimedRewards" | "unlock" | "unlockedBalanceOf" | "validator"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "Approval" | "Transfer"): EventFragment;
    encodeFunctionData(functionFragment: "COMMISSION_RATE_PRECISION", values?: undefined): string;
    encodeFunctionData(functionFragment: "FEE_FACTOR_UNIT_RECIP", values?: undefined): string;
    encodeFunctionData(functionFragment: "allowance", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "approve", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "burn", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "claimRewards", values?: undefined): string;
    encodeFunctionData(functionFragment: "commissionRate", values?: undefined): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "lock", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "lockedBalanceOf", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "mint", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "redistribute", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setCommissionRate", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "transfer", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [AddressLike, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "treasury", values?: undefined): string;
    encodeFunctionData(functionFragment: "unclaimedRewards", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "unlock", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "unlockedBalanceOf", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "validator", values?: undefined): string;
    decodeFunctionResult(functionFragment: "COMMISSION_RATE_PRECISION", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "FEE_FACTOR_UNIT_RECIP", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "commissionRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lockedBalanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redistribute", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setCommissionRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "treasury", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unclaimedRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unlock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unlockedBalanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validator", data: BytesLike): Result;
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
export interface Liquid extends BaseContract {
    connect(runner?: ContractRunner | null): Liquid;
    waitForDeployment(): Promise<this>;
    interface: LiquidInterface;
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
    FEE_FACTOR_UNIT_RECIP: TypedContractMethod<[], [bigint], "view">;
    allowance: TypedContractMethod<[
        _owner: AddressLike,
        _spender: AddressLike
    ], [
        bigint
    ], "view">;
    approve: TypedContractMethod<[
        _spender: AddressLike,
        _amount: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    balanceOf: TypedContractMethod<[_delegator: AddressLike], [bigint], "view">;
    burn: TypedContractMethod<[
        _account: AddressLike,
        _amount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    claimRewards: TypedContractMethod<[], [void], "nonpayable">;
    commissionRate: TypedContractMethod<[], [bigint], "view">;
    decimals: TypedContractMethod<[], [bigint], "view">;
    lock: TypedContractMethod<[
        _account: AddressLike,
        _amount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    lockedBalanceOf: TypedContractMethod<[
        _delegator: AddressLike
    ], [
        bigint
    ], "view">;
    mint: TypedContractMethod<[
        _account: AddressLike,
        _amount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    name: TypedContractMethod<[], [string], "view">;
    redistribute: TypedContractMethod<[
        _ntnReward: BigNumberish
    ], [
        [bigint, bigint]
    ], "payable">;
    setCommissionRate: TypedContractMethod<[
        _rate: BigNumberish
    ], [
        void
    ], "nonpayable">;
    symbol: TypedContractMethod<[], [string], "view">;
    totalSupply: TypedContractMethod<[], [bigint], "view">;
    transfer: TypedContractMethod<[
        _to: AddressLike,
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
    treasury: TypedContractMethod<[], [string], "view">;
    unclaimedRewards: TypedContractMethod<[
        _account: AddressLike
    ], [
        [bigint, bigint] & {
            _unclaimedATN: bigint;
            _unclaimedNTN: bigint;
        }
    ], "view">;
    unlock: TypedContractMethod<[
        _account: AddressLike,
        _amount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    unlockedBalanceOf: TypedContractMethod<[
        _delegator: AddressLike
    ], [
        bigint
    ], "view">;
    validator: TypedContractMethod<[], [string], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "COMMISSION_RATE_PRECISION"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "FEE_FACTOR_UNIT_RECIP"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "allowance"): TypedContractMethod<[
        _owner: AddressLike,
        _spender: AddressLike
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "approve"): TypedContractMethod<[
        _spender: AddressLike,
        _amount: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    getFunction(nameOrSignature: "balanceOf"): TypedContractMethod<[_delegator: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "burn"): TypedContractMethod<[
        _account: AddressLike,
        _amount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "claimRewards"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "commissionRate"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "decimals"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "lock"): TypedContractMethod<[
        _account: AddressLike,
        _amount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "lockedBalanceOf"): TypedContractMethod<[_delegator: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "mint"): TypedContractMethod<[
        _account: AddressLike,
        _amount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "name"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "redistribute"): TypedContractMethod<[
        _ntnReward: BigNumberish
    ], [
        [bigint, bigint]
    ], "payable">;
    getFunction(nameOrSignature: "setCommissionRate"): TypedContractMethod<[_rate: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "symbol"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "totalSupply"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "transfer"): TypedContractMethod<[
        _to: AddressLike,
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
    getFunction(nameOrSignature: "treasury"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "unclaimedRewards"): TypedContractMethod<[
        _account: AddressLike
    ], [
        [bigint, bigint] & {
            _unclaimedATN: bigint;
            _unclaimedNTN: bigint;
        }
    ], "view">;
    getFunction(nameOrSignature: "unlock"): TypedContractMethod<[
        _account: AddressLike,
        _amount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "unlockedBalanceOf"): TypedContractMethod<[_delegator: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "validator"): TypedContractMethod<[], [string], "view">;
    getEvent(key: "Approval"): TypedContractEvent<ApprovalEvent.InputTuple, ApprovalEvent.OutputTuple, ApprovalEvent.OutputObject>;
    getEvent(key: "Transfer"): TypedContractEvent<TransferEvent.InputTuple, TransferEvent.OutputTuple, TransferEvent.OutputObject>;
    filters: {
        "Approval(address,address,uint256)": TypedContractEvent<ApprovalEvent.InputTuple, ApprovalEvent.OutputTuple, ApprovalEvent.OutputObject>;
        Approval: TypedContractEvent<ApprovalEvent.InputTuple, ApprovalEvent.OutputTuple, ApprovalEvent.OutputObject>;
        "Transfer(address,address,uint256)": TypedContractEvent<TransferEvent.InputTuple, TransferEvent.OutputTuple, TransferEvent.OutputObject>;
        Transfer: TypedContractEvent<TransferEvent.InputTuple, TransferEvent.OutputTuple, TransferEvent.OutputObject>;
    };
}
