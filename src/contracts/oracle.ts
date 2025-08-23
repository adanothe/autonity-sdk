import { Oracle, Oracle__factory, IOracle } from "../typechain";
import { ethers, BigNumberish, AddressLike } from "ethers";
import { OracleTypes, OracleEvents } from "../types";
import { ContractClient } from "../core/contract-registry";

/**
 * Oracle contract client for interacting with the Autonity Protocol Oracle.
 *
 * Provides methods to read oracle configuration, rounds, reports, and voter information.
 *
 * @example
 * ```ts
 * const oracleClient = new OracleClient(provider, contractAddress, signer);
 * const decimals = await oracleClient.getDecimals();
 * const voters = await oracleClient.getVoters();
 * ```
 */
export class OracleClient implements ContractClient {
  /** Underlying connected Oracle contract */
  private contract: Oracle;

  /**
   * Creates a new Oracle client instance.
   *
   * @param provider - ethers provider for blockchain connection
   * @param contractAddress - address of the deployed Oracle contract
   * @param signer - optional ethers signer for write operations
   * @throws Error if provider or contractAddress is invalid
   */
  constructor(
    provider: ethers.Provider,
    contractAddress: string,
    signer?: ethers.Signer
  ) {
    if (!provider) throw new Error("Provider is required");
    if (!contractAddress || !ethers.isAddress(contractAddress))
      throw new Error("Invalid contract address");

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

  // event methods

  /**
   * emitted when a call to an address fails in a protocol function (like finalize())
   *
   * @param startBlock - optional starting block number for event filtering
   * @param endBlock - optional ending block number for event filtering
   * @param to - optional address to filter events by recipient
   */
  async CallFailed(
    startBlock?: number,
    endBlock?: number,
    to?: AddressLike
  ): Promise<OracleEvents.CallFailed[]> {
    const eventList = await this.contract.queryFilter(
      this.contract.filters.CallFailed(),
      startBlock,
      endBlock
    );
    const mappedEvents = eventList.map(OracleEvents.mapCallFailed);
    return to ? mappedEvents.filter((event) => event.to === to) : mappedEvents;
  }
  /**
   * Emitted when a participant submitted commit in the previous round but did not submit reveal in the current round.
   * @param startBlock - optional starting block number for event filtering
   * @param endBlock - optional ending block number for event filtering
   * @param _voter - optional address to filter events by voter
   */
  async CommitRevealMissed(
    startBlock?: number,
    endBlock?: number,
    _voter?: AddressLike
  ): Promise<OracleEvents.CommitRevealMissed[]> {
    const eventList = await this.contract.queryFilter(
      this.contract.filters.CommitRevealMissed(),
      startBlock,
      endBlock
    );
    const mappedEvents = eventList.map((event) =>
      OracleEvents.mapCommitRevealMissed(event)
    );
    return _voter
      ? mappedEvents.filter((event) => event._voter === _voter)
      : mappedEvents;
  }

  /**
   * Emitted when a new voting round is started
   * @param startBlock - optional starting block number for event filtering
   * @param endBlock - optional ending block number for event filtering
   * @param _round - optional round ID to filter events by
   */
  async NewRound(
    startBlock?: number,
    endBlock?: number,
    _round?: bigint
  ): Promise<OracleEvents.NewRound[]> {
    const eventList = await this.contract.queryFilter(
      this.contract.filters.NewRound(),
      startBlock,
      endBlock
    );
    const mappedEvents = eventList.map((event) =>
      OracleEvents.mapNewRound(event)
    );
    return _round
      ? mappedEvents.filter((event) => event._round === _round)
      : mappedEvents;
  }

  /**
   * Emitted when a valid report is accepted
   * @param startBlock - optional starting block number for event filtering
   * @param endBlock - optional ending block number for event filtering
   * @param reporter - optional address to filter events by reporter
   */
  async SuccessfulVote(
    startBlock?: number,
    endBlock?: number,
    reporter?: AddressLike
  ): Promise<OracleEvents.SuccessfulVote[]> {
    const eventList = await this.contract.queryFilter(
      this.contract.filters.SuccessfulVote(),
      startBlock,
      endBlock
    );
    const mappedEvents = eventList.map((event) =>
      OracleEvents.mapSuccessfulVote(event)
    );
    return reporter
      ? mappedEvents.filter((event) => event.reporter === reporter)
      : mappedEvents;
  }
  /**
   * Emitted when an invalid report is submitted
   * @param startBlock - optional starting block number for event filtering
   * @param endBlock - optional ending block number for event filtering
   * @param reporter - optional address to filter events by reporter
   */
  async InvalidVote(
    startBlock?: number,
    endBlock?: number,
    reporter?: AddressLike
  ): Promise<OracleEvents.InvalidVote[]> {
    const eventList = await this.contract.queryFilter(
      this.contract.filters.InvalidVote(),
      startBlock,
      endBlock
    );
    const mappedEvents = eventList.map((event) =>
      OracleEvents.mapInvalidVote(event)
    );
    return reporter
      ? mappedEvents.filter((event) => event.reporter === reporter)
      : mappedEvents;
  }
  /**
   * Emitted when a participant gets penalized for missing too many reveals in a certain window
   * @param startBlock - optional starting block number for event filtering
   * @param endBlock - optional ending block number for event filtering
   * @param _voter - optional address to filter events by voter
   */
  async NoRevealPenalty(
    startBlock?: number,
    endBlock?: number,
    _voter?: AddressLike
  ): Promise<OracleEvents.NoRevealPenalty[]> {
    const eventList = await this.contract.queryFilter(
      this.contract.filters.NoRevealPenalty(),
      startBlock,
      endBlock
    );
    const mappedEvents = eventList.map((event) =>
      OracleEvents.mapNoRevealPenalty(event)
    );
    return _voter
      ? mappedEvents.filter((event) => event._voter === _voter)
      : mappedEvents;
  }

  /**
   * Emitted when a new price is calculated for a symbol
   * @param startBlock - optional starting block number for event filtering
   * @param endBlock - optional ending block number for event filtering
   * @param price - optional price to filter events by price
   */
  async PriceUpdated(
    startBlock?: number,
    endBlock?: number,
    price?: bigint
  ): Promise<OracleEvents.PriceUpdated[]> {
    const eventList = await this.contract.queryFilter(
      this.contract.filters.PriceUpdated(),
      startBlock,
      endBlock
    );
    const mappedEvents = eventList.map((event) =>
      OracleEvents.mapPriceUpdated(event)
    );
    return price
      ? mappedEvents.filter((event) => event.price === price)
      : mappedEvents;
  }

  /** Returns the current Oracle configuration */
  async getConfig(): Promise<Oracle.ConfigStruct> {
    const configData = await this.contract.getConfig();
    return OracleTypes.mapOracleConfig(configData);
  }

  /** Returns the decimal places used for price reports */
  async getDecimals(): Promise<bigint> {
    return this.contract.getDecimals();
  }

  /** Returns the list of new voters in the Oracle process */
  async getNewVoters(): Promise<string[]> {
    return this.contract.getNewVoters();
  }

  /** Returns the non-reveal threshold for voters */
  async getNonRevealThreshold(): Promise<bigint> {
    return this.contract.getNonRevealThreshold();
  }

  /** Returns the current round ID */
  async getRound(): Promise<bigint> {
    return this.contract.getRound();
  }

  /**
   * Returns price data for a specific round and symbol.
   * @param _round - round number
   * @param _symbol - symbol for the price
   */
  async getRoundData(
    _round: BigNumberish,
    _symbol: string
  ): Promise<IOracle.RoundDataStruct> {
    const roundData = await this.contract.getRoundData(_round, _symbol);
    return OracleTypes.mapRoundData(roundData);
  }

  /**
   * Returns the performance of a voter in the current reward period
   * @param _voter - voter address
   */
  async getRewardPeriodPerformance(_voter: AddressLike): Promise<bigint> {
    return this.contract.getRewardPeriodPerformance(_voter);
  }

  /**
   * Returns the latest report for a voter and symbol
   * @param _symbol - target symbol
   * @param _voter - target voter address
   */
  async getReports(
    _symbol: string,
    _voter: AddressLike
  ): Promise<OracleTypes.Report> {
    const reports = await this.contract.getReports(_symbol, _voter);
    return OracleTypes.mapReport(reports);
  }

  /** Returns the list of symbols to be voted on */
  async getSymbols(): Promise<string[]> {
    return this.contract.getSymbols();
  }

  /** Returns the round when symbols were last updated */
  async getSymbolUpdatedRound(): Promise<bigint> {
    return this.contract.getSymbolUpdatedRound();
  }

  /** Returns the current vote period */
  async getVotePeriod(): Promise<bigint> {
    return this.contract.getVotePeriod();
  }

  /** Returns the list of current voters */
  async getVoters(): Promise<string[]> {
    return this.contract.getVoters();
  }

  /** Returns the block number of the last completed round */
  async getLastRoundBlock(): Promise<bigint> {
    return this.contract.getLastRoundBlock();
  }

  /** Returns the upcoming vote period */
  async getNewVotePeriod(): Promise<bigint> {
    return this.contract.getNewVotePeriod();
  }

  /** Returns the latest round data for a symbol */
  async getLatestRoundData(_symbol: string): Promise<IOracle.RoundDataStruct> {
    const roundData = await this.contract.latestRoundData(_symbol);
    return OracleTypes.mapRoundData(roundData);
  }

  /** Returns voter info for a given address */
  async getVoterInfo(_voter: AddressLike): Promise<OracleTypes.VoterInfo> {
    const voter = await this.contract.getVoterInfo(_voter);
    return OracleTypes.mapVoterInfo(voter);
  }

  /** Returns treasury address for a given validator */
  async getVoterTreasuries(_oracleAddress: AddressLike): Promise<string> {
    return this.contract.getVoterTreasuries(_oracleAddress);
  }

  /** Returns node address for a given validator */
  async getVoterValidators(_oracleAddress: AddressLike): Promise<string> {
    return this.contract.getVoterValidators(_oracleAddress);
  }
}
