import { Network } from "../utils";
import { ethers } from "ethers";
export declare class liquid {
    private contract;
    constructor(networkOrRpcUrl: (Network | string) | undefined, contractAddress: string, privateKey?: string, signerOrProvider?: ethers.Wallet | ethers.JsonRpcProvider);
    allowance(_owner: ethers.AddressLike, _spender: ethers.AddressLike): Promise<bigint>;
    Approval(startBlock?: number, endBlock?: number): Promise<{
        owner: ethers.AddressLike;
        spender: ethers.AddressLike;
        value: ethers.BigNumberish;
        blockNumber: number;
        transactionHash: string;
    }[]>;
    balanceOf(_delegator: ethers.AddressLike): Promise<bigint>;
    claimRewards(): Promise<ethers.ContractTransactionResponse>;
    commissionRate(): Promise<bigint>;
    decimals(): Promise<bigint>;
    feeFactorUnitRecip(): Promise<bigint>;
    getPrecision(): Promise<bigint>;
    lockedBalanceOf(_delegator: ethers.AddressLike): Promise<bigint>;
    name(): Promise<string>;
    symbol(): Promise<string>;
    totalSupply(): Promise<bigint>;
    transfer(_to: ethers.AddressLike, _amount: ethers.BigNumberish): Promise<ethers.ContractTransactionResponse>;
    transferFrom(_sender: ethers.AddressLike, _recipient: ethers.AddressLike, _amount: ethers.BigNumberish): Promise<ethers.ContractTransactionResponse>;
    treasury(): Promise<string>;
    unclaimedRewards(_account: ethers.AddressLike): Promise<{
        unclaimedATN: bigint;
        unclaimedNTN: bigint;
    }>;
    unlockedBalanceOf(_delegator: ethers.AddressLike): Promise<bigint>;
    validator(): Promise<string>;
}
