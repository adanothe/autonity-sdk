import { initContract, ORACLE_CONTRACT, defaultRpc } from "../utils/utils";
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
    rpcUrl: string = defaultRpc(),
    contractAddress: string = ORACLE_CONTRACT,
    privateKey?: string,
    signerOrProvider?: ethers.Wallet | ethers.JsonRpcProvider
  ) {
    this.contract = initContract(
      Oracle__factory,
      contractAddress,
      rpcUrl,
      privateKey,
      signerOrProvider
    );
  }

  // Fetch precision value
  async getPrecision(): Promise<bigint> {
    return await this.contract.getPrecision();
  }

  // Fetch last round block
  async lastRoundBlock(): Promise<bigint> {
    return await this.contract.lastRoundBlock();
  }

  // Fetch current round number
  async getRound(): Promise<bigint> {
    return await this.contract.getRound();
  }

  // Fetch voting info for a specific address
  async votinginfo(address: string): Promise<VotingInfo> {
    const data: IVotingInfoData = await this.contract.votingInfo(address);

    // Check if data exists, otherwise throw error
    if (!data) {
      throw new Error(`No voting info found for address ${address}`);
    }

    return votingInfoEntity(data);
  }

  // Fetch round data for a specific round and symbol
  async getRoundData(
    _round: ethers.BigNumberish,
    _symbol: string
  ): Promise<RoundData> {
    try {
      const data: IOracleRoundData = await this.contract.getRoundData(
        _round,
        _symbol
      );

      // Check if data exists, otherwise throw error
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

  // Fetch available symbols
  async getSymbols(): Promise<string[]> {
    return await this.contract.getSymbols();
  }

  // Fetch voting period
  async getVotePeriod(): Promise<bigint> {
    return await this.contract.getVotePeriod();
  }

  // Fetch list of voters
  async getVoters(): Promise<string[]> {
    return await this.contract.getVoters();
  }

  // Fetch latest round data for a specific symbol
  async latestRoundData(_symbol: string): Promise<RoundData> {
    try {
      const data: IOracleRoundData = await this.contract.latestRoundData(
        _symbol
      );

      // Check if data exists, otherwise throw error
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
