import { Autonity, Autonity__factory } from "../typechain";
import {
  ethers,
  AddressLike,
  ContractTransactionResponse,
  BigNumberish,
  BytesLike,
} from "ethers";
import { AutonityTypes, AutonityEvents } from "../types";
import { ContractClient } from "../core/contract-registry";

export class AutonityClient implements ContractClient {
  private contract: Autonity;
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
        ? Autonity__factory.connect(contractAddress, signer)
        : Autonity__factory.connect(contractAddress, provider);
    } catch (error) {
      throw new Error(
        `Failed to connect to Autonity contract: ${
          error instanceof Error ? error.message : "Unknown error"
        }`
      );
    }
  }

  // event methods

  /**
   * Emitted when a validator is activated.
   *
   * @param startBlock - optional start block to filter events
   * @param endBlock - optional end block to filter events
   * @param addr - optional address to filter events by validator address
   */
  async ActivatedValidator(
    startBlock?: number,
    endBlock?: number,
    addr?: AddressLike
  ): Promise<AutonityEvents.ActivatedValidator[]> {
    const eventList = await this.contract.queryFilter(
      this.contract.filters.ActivatedValidator(),
      startBlock,
      endBlock
    );
    const mappedEvents = eventList.map(AutonityEvents.mapActivatedValidator);
    return addr
      ? mappedEvents.filter((event) => event.addr === addr)
      : mappedEvents;
  }

  /**
   * ERC-20 approval event binding.
   *
   * @param startBlock - optional start block to filter events
   * @param endBlock - optional end block to filter events
   * @param owner - optional owner address to filter events
   * @param spender - optional spender address to filter events
   */
  async Approval(
    startBlock?: number,
    endBlock?: number,
    owner?: AddressLike,
    spender?: AddressLike
  ): Promise<AutonityEvents.Approval[]> {
    const eventList = await this.contract.queryFilter(
      this.contract.filters.Approval(),
      startBlock,
      endBlock
    );
    const mappedEvents = eventList.map(AutonityEvents.mapApproval);
    return mappedEvents.filter(
      (event) =>
        (!owner || event.owner === owner) &&
        (!spender || event.spender === spender)
    );
  }

  /**
   * Emitted when a validator's enode is updated.
   *
   * @param startBlock - optional start block to filter events
   * @param endBlock - optional end block to filter events
   * @param validator - optional address to filter events by validator address
   */
  async EnodeUpdate(
    startBlock?: number,
    endBlock?: number,
    validator?: AddressLike
  ): Promise<AutonityEvents.EnodeUpdate[]> {
    const eventList = await this.contract.queryFilter(
      this.contract.filters.EnodeUpdate(),
      startBlock,
      endBlock
    );
    const mappedEvents = eventList.map(AutonityEvents.mapEnodeUpdate);
    return validator
      ? mappedEvents.filter((event) => event.validator === validator)
      : mappedEvents;
  }

  /**
   * Emitted when a bonding request is registered.
   *
   * @param startBlock - optional start block to filter events
   * @param endBlock - optional end block to filter events
   * @param validator - optional address to filter events by validator address
   */
  async NewBondingRequest(
    startBlock?: number,
    endBlock?: number,
    validator?: AddressLike
  ): Promise<AutonityEvents.NewBondingRequest[]> {
    const eventList = await this.contract.queryFilter(
      this.contract.filters.NewBondingRequest(),
      startBlock,
      endBlock
    );
    const mappedEvents = eventList.map(AutonityEvents.mapNewBondingRequest);
    return validator
      ? mappedEvents.filter((event) => event.validator === validator)
      : mappedEvents;
  }

  /**
   * Emitted when an unbonding request is registered.
   *
   * @param startBlock - optional start block to filter events
   * @param endBlock - optional end block to filter events
   * @param validator - optional address to filter events by validator address
   */
  async NewUnbondingRequest(
    startBlock?: number,
    endBlock?: number,
    validator?: AddressLike
  ): Promise<AutonityEvents.NewUnbondingRequest[]> {
    const eventList = await this.contract.queryFilter(
      this.contract.filters.NewUnbondingRequest(),
      startBlock,
      endBlock
    );
    const mappedEvents = eventList.map(AutonityEvents.mapNewUnbondingRequest);
    return validator
      ? mappedEvents.filter((event) => event.validator === validator)
      : mappedEvents;
  }

  /**
   * Emitted when stake is minted.
   *
   * @param startBlock - optional start block to filter events
   * @param endBlock - optional end block to filter events
   * @param addr - optional address to filter events by address
   */
  async MintedStake(
    startBlock?: number,
    endBlock?: number,
    addr?: AddressLike
  ): Promise<AutonityEvents.MintedStake[]> {
    const eventList = await this.contract.queryFilter(
      this.contract.filters.MintedStake(),
      startBlock,
      endBlock
    );
    const mappedEvents = eventList.map(AutonityEvents.mapMintedStake);
    return addr
      ? mappedEvents.filter((event) => event.addr === addr)
      : mappedEvents;
  }

  // transaction methods

  /**
   * Re-activates a paused validator.
   *
   * @param _address - address of the validator to activate
   */
  async activateValidator(
    _address: AddressLike
  ): Promise<ContractTransactionResponse> {
    return this.contract.activateValidator(_address);
  }

  /**
   * Creates a bonding request with automatic self-bond and delegation.
   *
   * @param _validator - address of the validator to delegate stake to
   * @param _selfBond - total amount of NTN to self-bond
   * @param _delegated - total amount of NTN to delegate
   */
  async autobond(
    _validator: AddressLike,
    _selfBond: BigNumberish,
    _delegated: BigNumberish
  ): Promise<ContractTransactionResponse> {
    return this.contract.autobond(_validator, _selfBond, _delegated);
  }

  /**
   * Pauses a validator and stops it from accepting delegations.
   *
   * @param _address - address of the validator to pause
   */
  async pauseValidator(
    _address: AddressLike
  ): Promise<ContractTransactionResponse> {
    return this.contract.pauseValidator(_address);
  }

  /**
   * Registers a validator on the Autonity contract.
   *
   * Effects:
   * - Assigns caller as the validator's treasury account
   * - Deploys a "Liquid Stake" token
   * - Emits the `RegisteredValidator` event
   *
   * @param _enode - Enode of the validator node
   * @param _oracleAddress - Oracle server address managed by the validator
   * @param _consensusKey - Validator’s BLS public key (bytes)
   * @param _signatures - Proof of ownership, including:
   *    1. Treasury message signed by validator account key
   *    2. Treasury message signed by oracle account key
   *    3. BLS signature
   * @returns The transaction response from the blockchain
   */
  async registerValidator(
    _enode: string,
    _oracleAddress: AddressLike,
    _consensusKey: BytesLike,
    _signatures: BytesLike
  ): Promise<ContractTransactionResponse> {
    return this.contract.registerValidator(
      _enode,
      _oracleAddress,
      _consensusKey,
      _signatures
    );
  }

  /**
   * Changes the commission rate for a validator.
   *
   * @param _validator - address of the validator
   * @param _rate - new commission rate (0-10000, where 10000 = 100%)
   */
  async changeCommissionRate(
    _validator: AddressLike,
    _rate: BigNumberish
  ): Promise<ContractTransactionResponse> {
    return this.contract.changeCommissionRate(_validator, _rate);
  }

  /**
   * Updates the enode of a registered validator.
   *
   * @param _nodeAddress - validator address to update
   * @param _enode - new enode string
   */
  async updateEnode(
    _nodeAddress: AddressLike,
    _enode: string
  ): Promise<ContractTransactionResponse> {
    return this.contract.updateEnode(_nodeAddress, _enode);
  }

  /**
   * Creates a bonding request to delegate stake to a validator.
   *
   * @param _validator - address of the validator to delegate to
   * @param _amount - amount of NTN to bond
   */
  async bond(
    _validator: AddressLike,
    _amount: BigNumberish
  ): Promise<ContractTransactionResponse> {
    return this.contract.bond(_validator, _amount);
  }

  /**
   * Creates a bonding request on behalf of another account.
   *
   * @param _account - address of the delegator
   * @param _validator - address of the validator to delegate to
   * @param _amount - amount of NTN to bond
   */
  async bondFrom(
    _account: AddressLike,
    _validator: AddressLike,
    _amount: BigNumberish
  ): Promise<ContractTransactionResponse> {
    return this.contract.bondFrom(_account, _validator, _amount);
  }

  /**
   * Creates an unbonding request to withdraw delegated stake.
   *
   * @param _validator - address of the validator to unbond from
   * @param _amount - amount of LNTN to unbond
   */
  async unbond(
    _validator: AddressLike,
    _amount: BigNumberish
  ): Promise<ContractTransactionResponse> {
    return this.contract.unbond(_validator, _amount);
  }

  /**
   * Creates an unbonding request on behalf of another account.
   *
   * @param _account - address of the delegator
   * @param _validator - address of the validator to unbond from
   * @param _amount - amount of LNTN to unbond
   */
  async unbondFrom(
    _account: AddressLike,
    _validator: AddressLike,
    _amount: BigNumberish
  ): Promise<ContractTransactionResponse> {
    return this.contract.unbondFrom(_account, _validator, _amount);
  }

  /**
   * Approves another account to bond NTN on behalf of the caller.
   *
   * @param _caller - address allowed to bond on behalf of owner
   * @param _amount - amount of NTN that can be bonded
   */
  async approveBonding(
    _caller: AddressLike,
    _amount: BigNumberish
  ): Promise<ContractTransactionResponse> {
    return this.contract.approveBonding(_caller, _amount);
  }

  /** Approves spender to transfer NTN tokens on behalf of the caller */
  async approve(
    spender: AddressLike,
    amount: BigNumberish
  ): Promise<ContractTransactionResponse> {
    return this.contract.approve(spender, amount);
  }

  /** Transfers NTN tokens to another address */
  async transfer(
    _recipient: AddressLike,
    _amount: BigNumberish
  ): Promise<ContractTransactionResponse> {
    return this.contract.transfer(_recipient, _amount);
  }

  /** Transfers NTN tokens from one address to another */
  async transferFrom(
    _sender: AddressLike,
    _recipient: AddressLike,
    _amount: BigNumberish
  ): Promise<ContractTransactionResponse> {
    return this.contract.transferFrom(_sender, _recipient, _amount);
  }

  // read-only methods

  /** Returns the NTN balance of an address */
  async balanceOf(_address: AddressLike): Promise<bigint> {
    return this.contract.balanceOf(_address);
  }

  /** Returns the allowance for ERC-20 transfers */
  async allowance(owner: AddressLike, spender: AddressLike): Promise<bigint> {
    return this.contract.allowance(owner, spender);
  }

  /** Returns the bonding allowance for an account */
  async bondingAllowance(
    _owner: AddressLike,
    _caller: AddressLike
  ): Promise<bigint> {
    return this.contract.bondingAllowance(_owner, _caller);
  }

  /** Returns the number of decimal places for NTN token */
  async decimals(): Promise<bigint> {
    return this.contract.decimals();
  }

  /** Returns the name of the NTN token */
  async name(): Promise<string> {
    return this.contract.name();
  }

  /** Returns the symbol of the NTN token */
  async symbol(): Promise<string> {
    return this.contract.symbol();
  }

  /** Returns the total supply of NTN tokens */
  async totalSupply(): Promise<bigint> {
    return this.contract.totalSupply();
  }

  /** Returns the circulating supply of NTN tokens */
  async circulatingSupply(): Promise<bigint> {
    return this.contract.circulatingSupply();
  }

  /** Returns the standard decimals constant */
  async STANDARD_DECIMALS(): Promise<bigint> {
    return this.contract.STANDARD_DECIMALS();
  }

  /** Returns the standard scale factor constant */
  async STANDARD_SCALE_FACTOR(): Promise<bigint> {
    return this.contract.STANDARD_SCALE_FACTOR();
  }

  /**
   * Returns the bonding request for a given ID.
   *
   * @param _id - the ID of the bonding request
   */
  async getBondingRequestByID(
    _id: BigNumberish
  ): Promise<AutonityTypes.BondingRequest> {
    const bondingRequest = await this.contract.getBondingRequestByID(_id);
    return AutonityTypes.mapBondingRequest(bondingRequest);
  }

  /**
   * Returns the unbonding request for a given ID.
   *
   * @param _id - the ID of the unbonding request
   */
  async getUnbondingRequestByID(
    _id: BigNumberish
  ): Promise<AutonityTypes.UnbondingRequest> {
    const unbondingRequest = await this.contract.getUnbondingRequestByID(_id);
    return AutonityTypes.mapUnbondingRequest(unbondingRequest);
  }

  /** Returns the current contract configuration */
  async getConfig(): Promise<AutonityTypes.AutonityConfig> {
    const config = await this.contract.getConfig();
    return AutonityTypes.mapAutonityConfig(config);
  }

  /** Returns the current contract version */
  async getVersion(): Promise<bigint> {
    return this.contract.getVersion();
  }

  /** Returns the current size of the consensus committee */
  async getCurrentCommitteeSize(): Promise<bigint> {
    return this.contract.getCurrentCommitteeSize();
  }

  /** Returns the current epoch ID */
  async getEpochID(): Promise<bigint> {
    return this.contract.getEpochID();
  }

  /** Returns the current epoch information */
  async getEpochInfo(): Promise<AutonityTypes.EpochInfo> {
    const epochInfo = await this.contract.getEpochInfo();
    return AutonityTypes.mapEpochInfo(epochInfo);
  }

  /**
   * Returns epoch information for a specific block height.
   *
   * @param _height - the block height
   */
  async getEpochByHeight(
    _height: BigNumberish
  ): Promise<AutonityTypes.EpochInfo> {
    const epochInfo = await this.contract.getEpochByHeight(_height);
    return AutonityTypes.mapEpochInfo(epochInfo);
  }

  /** Returns the total bonded stake for the current epoch */
  async getEpochTotalBondedStake(): Promise<bigint> {
    return this.contract.getEpochTotalBondedStake();
  }

  /**
   * Returns the epoch associated with a block number.
   *
   * @param _block - the block number
   */
  async getEpochFromBlock(_block: BigNumberish): Promise<bigint> {
    return this.contract.getEpochFromBlock(_block);
  }

  /** Returns the epoch period (next period if update is scheduled) */
  async getEpochPeriod(): Promise<bigint> {
    return this.contract.getEpochPeriod();
  }

  /** Returns the epoch period of the current epoch */
  async getCurrentEpochPeriod(): Promise<bigint> {
    return this.contract.getCurrentEpochPeriod();
  }

  /** Returns the last epoch's end block height */
  async getLastEpochBlock(): Promise<bigint> {
    return this.contract.getLastEpochBlock();
  }

  /** Returns the last epoch's end block timestamp */
  async getLastEpochTime(): Promise<bigint> {
    return this.contract.getLastEpochTime();
  }

  /** Returns the next epoch block number */
  async getNextEpochBlock(): Promise<bigint> {
    return this.contract.getNextEpochBlock();
  }

  /** Returns the client-aware configuration */
  async getClientConfig(): Promise<AutonityTypes.ClientConfig> {
    const config = await this.contract.getClientConfig();
    return AutonityTypes.mapClientConfig(config);
  }

  /** Returns the current consensus committee members */
  async getCommittee(): Promise<AutonityTypes.Committee[]> {
    const committee = await this.contract.getCommittee();
    return committee.map(AutonityTypes.mapCommittee);
  }

  /** Returns the enodes of current committee members */
  async getCommitteeEnodes(): Promise<string[]> {
    return this.contract.getCommitteeEnodes();
  }

  /** Returns the maximum allowed committee size */
  async getMaxCommitteeSize(): Promise<bigint> {
    return this.contract.getMaxCommitteeSize();
  }

  /** Returns the block period duration */
  async getBlockPeriod(): Promise<bigint> {
    return this.contract.getBlockPeriod();
  }

  /** Returns the minimum gas price for transactions */
  async getMinimumBaseFee(): Promise<bigint> {
    return this.contract.getMinimumBaseFee();
  }

  /** Returns the unbonding period duration */
  async getUnbondingPeriod(): Promise<bigint> {
    return this.contract.getUnbondingPeriod();
  }

  /** Returns the maximum allowed schedule duration */
  async getMaxScheduleDuration(): Promise<bigint> {
    return this.contract.getMaxScheduleDuration();
  }

  /** Returns the current treasury account address */
  async getTreasuryAccount(): Promise<string> {
    return this.contract.getTreasuryAccount();
  }

  /** Returns the current treasury fee amount */
  async getTreasuryFee(): Promise<bigint> {
    return this.contract.getTreasuryFee();
  }

  /** Returns the current inflation reserve amount */
  async getInflationReserve(): Promise<bigint> {
    return this.contract.getInflationReserve();
  }

  /** Returns the current operator account address */
  async getOperator(): Promise<string> {
    return this.contract.getOperator();
  }

  /** Returns the oracle contract address */
  async getOracle(): Promise<string> {
    return this.contract.getOracle();
  }

  /** Returns the slasher contract address */
  async getSlasher(): Promise<string> {
    return this.contract.getSlasher();
  }

  /** Returns the liquid logic contract address */
  async getLiquidLogicContract(): Promise<string> {
    return this.contract.getLiquidLogicContract();
  }

  /**
   * Returns new contract bytecode and ABI for upgrades.
   */
  async getNewContract(): Promise<[string, string]> {
    return this.contract.getNewContract();
  }

  /**
   * Returns a specific schedule for a vault.
   *
   * @param vault - address of the vault
   * @param id - index of the schedule
   */
  async getSchedule(
    vault: AddressLike,
    id: BigNumberish
  ): Promise<AutonityTypes.Schedule> {
    const schedule = await this.contract.getSchedule(vault, id);
    return AutonityTypes.mapSchedule(schedule);
  }

  /**
   * Returns the total number of schedules for a vault.
   *
   * @param vault - address of the vault
   */
  async getTotalSchedules(vault: AddressLike): Promise<bigint> {
    return this.contract.getTotalSchedules(vault);
  }

  /**
   * Returns validator information for a given address.
   *
   * @param addr - address of the validator
   */
  async getValidator(addr: AddressLike): Promise<AutonityTypes.Validator> {
    const validator = await this.contract.getValidator(addr);
    return AutonityTypes.mapValidator(validator);
  }

  /** Returns the list of all validator addresses */
  async getValidators(): Promise<string[]> {
    return this.contract.getValidators();
  }

  /**
   * Returns the state of a validator.
   *
   * @param addr - address of the validator
   */
  async getValidatorState(addr: AddressLike): Promise<bigint> {
    return this.contract.getValidatorState(addr);
  }

  /**
   * Returns the unbonding share amount for a request.
   *
   * @param unbondingID - ID of the unbonding request
   */
  async getUnbondingShare(unbondingID: BigNumberish): Promise<bigint> {
    return this.contract.getUnbondingShare(unbondingID);
  }

  /**
   * Checks if an unbonding request has been released.
   *
   * @param unbondingID - ID of the unbonding request
   */
  async isUnbondingReleased(unbondingID: BigNumberish): Promise<boolean> {
    return this.contract.isUnbondingReleased(unbondingID);
  }
}
