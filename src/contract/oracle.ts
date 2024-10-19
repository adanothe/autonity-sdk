import { Network, initContract, ORACLE_CONTRACT, piccadilly } from "../utils";
import { Oracle, IOracle, Oracle__factory } from "../typechain";
import { ethers } from "ethers";

type IOracleRoundData = IOracle.RoundDataStructOutput;

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

type IVotingInfoData = {
  round: bigint;
  commit: bigint;
  isVoter: boolean;
};

const roundDataEntity = (data: IOracleRoundData): RoundData => ({
  round: data.round,
  price: data.price,
  timestamp: data.timestamp,
  success: data.success,
});

const votingInfoEntity = (data: IVotingInfoData): VotingInfo => ({
  round: data.round,
  commit: data.commit,
  isVoter: data.isVoter,
});

export class oracle {
  private contract: Oracle;
  constructor(
    networkOrRpcUrl: Network | string = piccadilly,
    contractAddress: string = ORACLE_CONTRACT,
    privateKey?: string,
    signerOrProvider?: ethers.Wallet | ethers.JsonRpcProvider
  ) {
    const rpcUrl =
      typeof networkOrRpcUrl === "string"
        ? networkOrRpcUrl
        : networkOrRpcUrl.rpcUrl;
    this.contract = initContract(
      Oracle__factory,
      contractAddress,
      rpcUrl,
      privateKey,
      signerOrProvider
    );
  }

  async getPrecision(): Promise<bigint> {
    return await this.contract.getPrecision();
  }

  async lastRoundBlock(): Promise<bigint> {
    return await this.contract.lastRoundBlock();
  }

  async getRound(): Promise<bigint> {
    return await this.contract.getRound();
  }

  async votinginfo(address: string): Promise<VotingInfo> {
    const data: IVotingInfoData = await this.contract.votingInfo(address);

    if (!data) {
      throw new Error(`No voting info found for address ${address}`);
    }

    return votingInfoEntity(data);
  }

  async getRoundData(
    _round: ethers.BigNumberish,
    _symbol: string
  ): Promise<RoundData> {
    try {
      const data: IOracleRoundData = await this.contract.getRoundData(
        _round,
        _symbol
      );

      if (!data) {
        throw new Error(
          `No data found for round ${_round} and symbol ${_symbol}`
        );
      }

      return roundDataEntity(data);
    } catch (error) {
      throw new Error(
        `Failed to fetch round data for round ${_round} and symbol ${_symbol}: ` +
          (error as Error).message
      );
    }
  }

  async getSymbols(): Promise<string[]> {
    return await this.contract.getSymbols();
  }

  async getVotePeriod(): Promise<bigint> {
    return await this.contract.getVotePeriod();
  }

  async getVoters(): Promise<string[]> {
    return await this.contract.getVoters();
  }

  async latestRoundData(_symbol: string): Promise<RoundData> {
    try {
      const data: IOracleRoundData = await this.contract.latestRoundData(
        _symbol
      );

      if (!data) {
        throw new Error(`No latest round data found for symbol ${_symbol}`);
      }

      return roundDataEntity(data);
    } catch (error) {
      throw new Error(
        `Failed to fetch latest round data for symbol ${_symbol}: ` +
          (error as Error).message
      );
    }
  }
}
