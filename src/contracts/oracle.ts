import { Oracle, Oracle__factory, IOracle } from "../typechain";
import { ethers, BigNumberish, AddressLike } from "ethers";
import { OracleTypes } from "../type";
import { ContractClient } from "../core/contract-registry";

/**
 * Autonity Protocol - Oracle Contract · kind: dev · version: 1
 *
 * Auto-generated from devdoc: oracle-doc.json
 */
export class OracleClient implements ContractClient {
  private contract: Oracle;

  constructor(
    provider: ethers.Provider,
    contractAddress: string,
    signer?: ethers.Signer
  ) {
    if (!provider) {
      throw new Error("Provider is required");
    }

    if (!contractAddress || !ethers.isAddress(contractAddress)) {
      throw new Error("Invalid contract address");
    }

    try {
      this.contract = signer
        ? Oracle__factory.connect(contractAddress, signer)
        : Oracle__factory.connect(contractAddress, provider);
    } catch (error) {
      throw new Error(
        `Failed to connect to Oracle contract: ${
          error instanceof Error ? error.message : "Unknown error"
        }`
      );
    }
  }

  /**
   * Binding for `getConfig` on the Oracle contract.
   * @returns {Oracle.ConfigStruct} config, the current oracle config
   */
  async getConfig(): Promise<Oracle.ConfigStruct> {
    const configData = await this.contract.getConfig();
    return OracleTypes.mapOracleConfig(configData);
  }

  /**
   * Binding for `getDecimals` on the Oracle contract.
   *
   * Decimal places to be used with price reports
   *
   * @returns {bigint} the number of decimal places
   */
  async getDecimals(): Promise<bigint> {
    return this.contract.getDecimals();
  }

  /**
   * Binding for `getNewVoters` on the Oracle contract.
   *
   * Retrieve the list of new participants in the Oracle process.
   *
   * @returns {Promise<string[]>} the list of new voters
   */
  async getNewVoters(): Promise<string[]> {
    return this.contract.getNewVoters();
  }

  /**
   * Binding for `getNonRevealThreshold` on the Oracle contract.
   *
   * Returns the tolerance for missed reveal count before the voter gets punished.
   * @returns {bigint} the non-reveal threshold
   */
  async getNonRevealThreshold(): Promise<bigint> {
    return this.contract.getNonRevealThreshold();
  }

  /**
   * Binding for `getRound` on the Oracle contract.
   *
   * Retrieve the current round ID.
   *
   * @returns {bigint} the current round ID
   */
  async getRound(): Promise<bigint> {
    return this.contract.getRound();
  }

  /**
   * Binding for `getRoundData` on the Oracle contract.
   *
   * Return price data for a specific round.
   *
   * IOracle interface method
   * @param {BigNumberish} _round - the round for which the price should be returned.
   * @param {string} _symbol - the symbol for which the current price should be returned.
   *
   * @returns {Promise<IOracle.RoundDataStruct>} the round data for the specified round and symbol
   */
  async getRoundData(
    _round: BigNumberish,
    _symbol: string
  ): Promise<IOracle.RoundDataStruct> {
    const roundData = await this.contract.getRoundData(_round, _symbol);
    return OracleTypes.mapRoundData(roundData);
  }

  /**
   * Binding for `getRewardPeriodPerformance` on the Oracle contract.
   *
   * Retrieve the performance for a voter in this reward (epoch) period.
   * @param {AddressLike} _voter - the voter address
   * @returns {Promise<bigint>} the performance of the voter in the current reward
   */
  async getRewardPeriodPerformance(_voter: AddressLike): Promise<bigint> {
    return this.contract.getRewardPeriodPerformance(_voter);
  }

  /**
   * Binding for `getReports` on the Oracle contract.
   * @param {string} _symbol - the target symbol
   * @param {AddressLike} _voter - the target voter address
   * @returns {OracleTypes.Report} the latest report of that voter for that symbol
   */
  async getReports(
    _symbol: string,
    _voter: AddressLike
  ): Promise<OracleTypes.Report> {
    const reports = await this.contract.getReports(_symbol, _voter);
    return OracleTypes.mapReport(reports);
  }

  /**
   * Binding for `getSymbols` on the Oracle contract.
   *
   * Retrieve the lists of symbols to be voted on.
   * @returns {Promise<string[]>} the list of symbols
   */
  async getSymbols(): Promise<string[]> {
    return this.contract.getSymbols();
  }

  /**
   * Binding for `getSymbolUpdatedRound` on the Oracle contract.
   * @returns {bigint} the round at which the symbols got updated
   */
  async getSymbolUpdatedRound(): Promise<bigint> {
    return this.contract.getSymbolUpdatedRound();
  }

  /**
   * Binding for `getVotePeriod` on the Oracle contract.
   *
   * Retrieve the vote period.
   *
   * @returns {Promise<bigint>} the current vote period
   */
  async getVotePeriod(): Promise<bigint> {
    return this.contract.getVotePeriod();
  }

  /**
   * Binding for `getVoters` on the Oracle contract.
   *
   * Retrieve the list of participants in the Oracle process.
   *
   * @returns {Promise<string[]>} the list of voters
   */
  async getVoters(): Promise<string[]> {
    return this.contract.getVoters();
  }

  /**
   * Binding for `getLastRoundBlock` on the Oracle contract.
   * @returns {bigint} the block at which the last completed round ended
   */
  async getLastRoundBlock(): Promise<bigint> {
    return this.contract.getLastRoundBlock();
  }

  /**
   * Binding for `getNewVotePeriod` on the Oracle contract.
   *
   * Retrieve the new vote period that is going to be applied at the end of the vote round.
   *
   * @returns {Promise<bigint>} the new vote period
   */
  async getNewVotePeriod(): Promise<bigint> {
    return this.contract.getNewVotePeriod();
  }

  /**
   * Binding for `getLatestRoundData` on the Oracle contract.
   *
   * Return latest available price data.
   * @param {string} _symbol - the symbol from which the current price should be returned.
   * @return {Promise<IOracle.RoundDataStruct>} the latest round data for the specified symbol
   */
  async getLatestRoundData(_symbol: string): Promise<IOracle.RoundDataStruct> {
    const roundData = await this.contract.latestRoundData(_symbol);
    return OracleTypes.mapRoundData(roundData);
  }

  /**
   * Binding for `getVoterInfo` on the Oracle contract.
   * @param {AddressLike} _voter - the voter address
   * @returns {OracleTypes.VoterInfo} the related voter information
   */
  async getVoterInfo(_voter: AddressLike): Promise<OracleTypes.VoterInfo> {
    const voter = await this.contract.getVoterInfo(_voter);
    return OracleTypes.mapVoterInfo(voter);
  }

  /**
   * Binding for `getVoterTreasuries` on the Oracle contract.
   * @param {AddressLike} _oracleAddress - the oracle address of a validator
   * @returns {string} this treasury address
   */
  async getVoterTreasuries(_oracleAddress: AddressLike): Promise<string> {
    return this.contract.getVoterTreasuries(_oracleAddress);
  }

  /**
   * Binding for `getVoterValidators` on the Oracle contract.
   * @param {AddressLike} _oracleAddress - the oracle address of a validator
   * @returns {string} this node address
   */
  async getVoterValidators(_oracleAddress: AddressLike): Promise<string> {
    return this.contract.getVoterValidators(_oracleAddress);
  }
}
