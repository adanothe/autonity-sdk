import { ethers } from "ethers";
interface RoundData {
    round: bigint;
    price: bigint;
    timestamp: bigint;
    success: boolean;
}
interface VotingInfo {
    round: bigint;
    commit: bigint;
    isVoter: boolean;
}
export declare class oracle {
    private contract;
    constructor(rpcUrl?: string, contractAddress?: string, privateKey?: string, signerOrProvider?: ethers.Wallet | ethers.JsonRpcProvider);
    getPrecision(): Promise<bigint>;
    lastRoundBlock(): Promise<bigint>;
    getRound(): Promise<bigint>;
    votinginfo(address: string): Promise<VotingInfo>;
    getRoundData(_round: ethers.BigNumberish, _symbol: string): Promise<RoundData>;
    getSymbols(): Promise<string[]>;
    getVotePeriod(): Promise<bigint>;
    getVoters(): Promise<string[]>;
    latestRoundData(_symbol: string): Promise<RoundData>;
}
export {};
