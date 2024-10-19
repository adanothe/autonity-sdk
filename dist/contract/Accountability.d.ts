import { Network } from "../utils";
import { Accountability } from "../typechain";
import { ethers } from "ethers";
interface config {
    innocenceProofSubmissionWindow: bigint;
    baseSlashingRateLow: bigint;
    baseSlashingRateMid: bigint;
    collusionFactor: bigint;
    historyFactor: bigint;
    jailFactor: bigint;
    slashingRatePrecision: bigint;
}
export declare class accountability {
    private contract;
    constructor(networkOrRpcUrl?: Network | string, contractAddress?: string, privateKey?: string, signerOrProvider?: ethers.Wallet | ethers.JsonRpcProvider);
    getValidatorAccusation(_val: ethers.AddressLike): Promise<Accountability.EventStructOutput | string>;
    getSlashingHistory(_validator: ethers.AddressLike, _id: ethers.BigNumberish): Promise<bigint>;
    canSlash(_offender: ethers.AddressLike, _rule: ethers.BigNumberish, _block: ethers.BigNumberish): Promise<boolean>;
    canAccuse(_offender: ethers.AddressLike, _rule: ethers.BigNumberish, _block: ethers.BigNumberish): Promise<{
        result: boolean;
        deadline: bigint;
    }>;
    getConfig(): Promise<config>;
    getEpochPeriod(): Promise<bigint>;
    beneficiaries(address: ethers.AddressLike): Promise<string>;
    SlashingEvent(startBlock?: number, endBlock?: number): Promise<{
        validator: ethers.AddressLike;
        amount: ethers.BigNumberish;
        releaseBlock: ethers.BigNumberish;
        isJailbound: boolean;
        eventId: ethers.BigNumberish;
    }[]>;
    InnocenceProven(startBlock?: number, endBlock?: number): Promise<{
        _offender: ethers.AddressLike;
        _id: ethers.BigNumberish;
    }[]>;
    NewAccusation(startBlock?: number, endBlock?: number): Promise<{
        _offender: ethers.AddressLike;
        _severity: ethers.BigNumberish;
        _id: ethers.BigNumberish;
    }[]>;
    NewFaultProof(startBlock?: number, endBlock?: number): Promise<{
        _offender: ethers.AddressLike;
        _severity: ethers.BigNumberish;
        _id: ethers.BigNumberish;
    }[]>;
}
export {};
