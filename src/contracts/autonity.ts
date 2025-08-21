import { Autonity, Autonity__factory } from "../typechain";
import {
  ethers,
  AddressLike,
  ContractTransactionResponse,
  BigNumberish,
} from "ethers";
import { AutonityTypes, AutonityEvents } from "../type";
import { ContractClient } from "../core/contract-registry";

/**
 * Proof-of-Stake Autonity Contract  · kind: dev · version: 1
 *
 * Auto-generated from devdoc: autonity-doc.json
 */
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

  /**
   * Binding for `ActivatedValidator` on the Autonity contract.
   *
   * emitted when a validator is activated, validator starts accepting delegation and becomes eligible  for committee inclusion
   * @param {number} [startBlock] - optional start block to filter events
   * @param {number} [endBlock] - optional end block to filter events
   * @param {AddressLike} [addr] - optional address to filter events by validator address
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
      ? mappedEvents.filter(
          (event) => event.addr.toLowerCase() === addr.toString().toLowerCase()
        )
      : mappedEvents;
  }

  /** Binding for `Approval` on the Autonity contract.
   * See {IERC20-approve}.
   * Emits an {Approval} event.
   * @param {number} [startBlock] - optional start block to filter events
   * @param {number} [endBlock] - optional end block to filter events
   * @param {AddressLike} [owner] - optional owner address to filter events
   * @param {AddressLike} [spender] - optional spender address to filter events
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
        (!owner ||
          event.owner.toLowerCase() === owner.toString().toLowerCase()) &&
        (!spender ||
          event.spender.toLowerCase() === spender.toString().toLowerCase())
    );
  }

  /**
   * Binding for `EnodeUpdate` on the Autonity contract.
   *
   * Emitted after updating a enode address of a validator
   * @param {number} [startBlock] - optional start block to filter events
   * @param {number} [endBlock] - optional end block to filter events
   * @param {AddressLike} [validator] - optional address to filter events by validator address
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
      ? mappedEvents.filter(
          (event) =>
            event.validator.toLowerCase() === validator.toString().toLowerCase()
        )
      : mappedEvents;
  }

  /**
   * Binding for `NewBondingRequest` on the Autonity contract.
   *
   * This event is emitted when a bonding request to a validator node has been registered.
   * This request will only be effective at the end of the current epoch however the stake will be put in custody immediately from the delegator's account.
   * @param {number} [startBlock] - optional start block to filter events
   * @param {number} [endBlock] - optional end block to filter events
   * @param {AddressLike} [validator] - optional address to filter events by validator address
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
      ? mappedEvents.filter(
          (event) =>
            event.validator.toLowerCase() === validator.toString().toLowerCase()
        )
      : mappedEvents;
  }

  /**
   * Binding for `NewUnbondingRequest` on the Autonity contract.
   *
   * This event is emitted when an unbonding request to a validator node has been registered.
   * This request will only be effective after the unbonding period, rounded to the next epoch.
   * Please note that because of potential slashing events during this delay period, the released amount may or may not be correspond to the amount requested.
   * @param {number} [startBlock] - optional start block to filter events
   * @param {number} [endBlock] - optional end block to filter events
   * @param {AddressLike} [validator] - optional address to filter events by validator address
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
      ? mappedEvents.filter(
          (event) =>
            event.validator.toLowerCase() === validator.toString().toLowerCase()
        )
      : mappedEvents;
  }

  /** Binding for `MintedStake` on the Autonity contract.
   *
   * @param {number} [startBlock] - optional start block to filter events
   * @param {number} [endBlock] - optional end block to filter events
   * @param {AddressLike} [addr] - optional address to filter events by address
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
      ? mappedEvents.filter(
          (event) => event.addr.toLowerCase() === addr.toString().toLowerCase()
        )
      : mappedEvents;
  }

  /**
   * Binding for `activateValidator` on the Autonity contract.
   *
   * Re-activate the specified validator.
   * @param {AddressLike} _address - address to be enabled.
   */
  async activateValidator(
    _address: AddressLike
  ): Promise<ContractTransactionResponse> {
    return this.contract.activateValidator(_address);
  }

  /**
   * Binding for `autobond` on the Autonity contract.
   *
   * Create a bonding(delegation) request with the caller as delegator.
   * This function is used to automatically bond a validator with self-bond and delegated amount.
   * @param {AddressLike} _validator - address of the validator to delegate stake to.
   * @param {BigNumberish} _selfBond - total amount of NTN to self-bond.
   * @param {BigNumberish} _delegated - total amount of NTN to delegate.
   */
  async autobond(
    _validator: AddressLike,
    _selfBond: BigNumberish,
    _delegated: BigNumberish
  ): Promise<ContractTransactionResponse> {
    return this.contract.autobond(_validator, _selfBond, _delegated);
  }

  /**
   * Binding for `pauseValidator` on the Autonity contract.
   *
   * Pause the validator and stop it accepting delegations.
   *
   * emit a {DisabledValidator} event.
   * @param {AddressLike} _address - address to be disabled.
   * @returns {ContractTransactionResponse} - the transaction response
   */
  async pauseValidator(
    _address: AddressLike
  ): Promise<ContractTransactionResponse> {
    return this.contract.pauseValidator(_address);
  }

  /**
   * Binding for `registerValidator` on the Autonity contract.
   *
   * - Assigns caller as the validator's treasury account.
   * - Deploys a "Liquid Stake" token.
   * - Emits {RegisteredValidator} event.
   *
   * @param {string} _enode - Enode of the validator node.
   * @param {AddressLike} _oracleAddress - Oracle server address managed by validator.
   * @param {ethers.BytesLike} _consensusKey - Validator’s BLS public key (bytes).
   * @param {ethers.BytesLike} _signatures - Proof of ownership:
   *    1. Treasury msg signed by validator account key
   *    2. Treasury msg signed by oracle account key
   *    3. BLS signature
   * @returns {ContractTransactionResponse} - the transaction response
   */
  async registerValidator(
    _enode: string,
    _oracleAddress: AddressLike,
    _consensusKey: ethers.BytesLike,
    _signatures: ethers.BytesLike
  ): Promise<ContractTransactionResponse> {
    return this.contract.registerValidator(
      _enode,
      _oracleAddress,
      _consensusKey,
      _signatures
    );
  }

  /**
   * Binding for `changeCommissionRate` on the Autonity contract.
   *
   * Change commission rate for the specified validator.
   * @param {AddressLike} _validator - address to be enabled.
   * @param {BigNumberish} _rate - new commission rate, ranging between 0-10000 (10000 = 100%).
   * @returns {ContractTransactionResponse} - the transaction response
   */
  async changeCommissionRate(
    _validator: AddressLike,
    _rate: ethers.BigNumberish
  ): Promise<ContractTransactionResponse> {
    return this.contract.changeCommissionRate(_validator, _rate);
  }

  /**
   * Binding for `updateEnode` on the Autonity contract.
   *
   * Update enode of a registered validator. This function updates the network connection information (IP or/and port) of a registered validator.
   * you cannot change the validator's address (pubkey part of the enode)
   * @param {AddressLike} _nodeAddress - This identifies the validator you want to update
   * @param {string} _enode - new enode to be updated
   * @returns {ContractTransactionResponse} - the transaction response
   */
  async updateEnode(
    _nodeAddress: AddressLike,
    _enode: string
  ): Promise<ContractTransactionResponse> {
    return this.contract.updateEnode(_nodeAddress, _enode);
  }

  /**
   * Binding for `bond` on the Autonity contract.
   *
   * Create a bonding(delegation) request with the caller as delegator.
   * @param {AddressLike} _validator - address of the validator to delegate stake to.
   * @param {BigNumberish} _amount - total amount of NTN to bond.
   * @returns {ContractTransactionResponse} - the transaction response
   */
  async bond(
    _validator: AddressLike,
    _amount: ethers.BigNumberish
  ): Promise<ContractTransactionResponse> {
    return this.contract.bond(_validator, _amount);
  }

  /**
   * Binding for `bondFrom` on the Autonity contract.
   *
   * Create a bonding(delegation) request with the `_account` as delegator. The caller needs to have required bonding-allowance (NTN) from the `_account`.
   * @param {AddressLike} _account - address of the delegator.
   * @param {AddressLike} _validator - address of the validator to delegate stake to.
   * @param {BigNumberish} _amount - total amount of NTN to bond.
   * @returns {ContractTransactionResponse} - the transaction response
   */
  async bondFrom(
    _account: AddressLike,
    _validator: AddressLike,
    _amount: ethers.BigNumberish
  ): Promise<ContractTransactionResponse> {
    return this.contract.bondFrom(_account, _validator, _amount);
  }

  /**
   * Binding for `unbond` on the Autonity contract.
   *
   * Create an unbonding request with the caller as delegator.
   * @param {AddressLike} _validator - address of the validator to unbond stake to.
   * @param {BigNumberish} _amount - total amount of LNTN (or NTN if self delegated) to unbond.
   * @returns {ContractTransactionResponse} - the transaction response
   */
  async unbond(
    _validator: AddressLike,
    _amount: ethers.BigNumberish
  ): Promise<ContractTransactionResponse> {
    return this.contract.unbond(_validator, _amount);
  }

  /**
   * Binding for `unbondFrom` on the Autonity contract.
   *
   * Create an unbonding request with the `_account` as delegator.
   * The caller needs to have required unbonding-allowance to unbond LNTN from the `_account`.
   * @param {AddressLike} _account - address of the delegator.
   * @param {AddressLike} _validator - address of the validator to unbond stake to.
   * @param {BigNumberish} _amount - total amount of LNTN (or NTN if self delegated) to unbond.
   * @returns {ContractTransactionResponse} - the transaction response
   */
  async unbondFrom(
    _account: AddressLike,
    _validator: AddressLike,
    _amount: ethers.BigNumberish
  ): Promise<ContractTransactionResponse> {
    return this.contract.unbondFrom(_account, _validator, _amount);
  }

  /**
   * Binding for `approveBonding` on the Autonity contract.
   *
   * Sets `_amount` as the bonding-allowance (NTN) of `_caller` over the caller's tokens.
   * Returns a boolean value indicating whether the operation succeeded. Emits an {BondingApproval} event.
   * @param {AddressLike} _caller - address of the caller who is allowed to bond on behalf of the owner.
   * @param {BigNumberish} _amount - amount of NTN that `_caller` is allowed to bond on behalf of the owner.
   * @returns {ContractTransactionResponse} - the transaction response
   */
  async approveBonding(
    _caller: AddressLike,
    _amount: ethers.BigNumberish
  ): Promise<ContractTransactionResponse> {
    return this.contract.approveBonding(_caller, _amount);
  }

  /**
   * Binding for `approve` on the Autonity contract.
   *
   * See {IERC20-approve}. Requirements: - `spender` cannot be the zero address.
   * @param {AddressLike} spender - address to be approved to spend the tokens.
   * @param {BigNumberish} amount - amount of tokens to be approved for spending.
   * @returns {ContractTransactionResponse} - the transaction response
   */
  async approve(
    spender: AddressLike,
    amount: ethers.BigNumberish
  ): Promise<ContractTransactionResponse> {
    return this.contract.approve(spender, amount);
  }

  /**
   * Binding for `transfer` on the Autonity contract.
   *
   * Moves `amount` NTN stake tokens from the caller's account to `recipient`.
   *
   * Emits a {Transfer} event. Implementation of {IERC20 transfer}
   * @param {AddressLike} _recipient - address to transfer the tokens to.
   * @param {BigNumberish} _amount - amount of tokens to be transferred.
   * @returns {ContractTransactionResponse} - the transaction response
   * @see {IERC20-transfer}
   */
  async transfer(
    _recipient: AddressLike,
    _amount: ethers.BigNumberish
  ): Promise<ContractTransactionResponse> {
    return this.contract.transfer(_recipient, _amount);
  }

  /**
   * Binding for `transferFrom` on the Autonity contract.
   *
   * See {IERC20-transferFrom}. Emits an {Approval} event indicating the updated allowance.
   * Requirements: - `sender` and `recipient` must be allowed to hold stake. -
   * `sender` must have a balance of at least `amount`.
   * - the caller must have allowance for ``sender``'s tokens of at least `amount`.
   * @param {AddressLike} _sender - address from which the tokens are transferred.
   * @param {AddressLike} _recipient - address to which the tokens are transferred.
   * @param {BigNumberish} _amount - amount of tokens to be transferred.
   */
  async transferFrom(
    _sender: AddressLike,
    _recipient: AddressLike,
    _amount: ethers.BigNumberish
  ): Promise<ContractTransactionResponse> {
    return this.contract.transferFrom(_sender, _recipient, _amount);
  }

  /**
   * Binding for `balanceOf` on the Autonity contract.
   *
   * Returns the amount of unbonded Newton token held by the account (ERC-20).
   * @param {AddressLike} _address - address to check the balance of.
   */
  async balanceOf(_address: AddressLike): Promise<bigint> {
    return this.contract.balanceOf(_address);
  }

  /**
   * Binding for `allowance` on the Autonity contract.
   *
   * See {IERC20-allowance}.
   * @param {AddressLike} owner - address of the token owner
   * @param {AddressLike} spender - address of the spender
   */
  async allowance(owner: AddressLike, spender: AddressLike): Promise<bigint> {
    return this.contract.allowance(owner, spender);
  }

  /**
   * Binding for `bondingAllowance` on the Autonity contract.
   *
   * Returns the remaining number of NTN that
   * `_caller` will be allowed to bond on behalf of `_owner` through `bondFrom`.
   * This is zero by default.
   * @param {AddressLike} _owner - address of the owner of the tokens
   * @param {AddressLike} _caller - address of the caller who is allowed to bond on behalf of the owner
   */
  async bondingAllowance(
    _owner: AddressLike,
    _caller: AddressLike
  ): Promise<bigint> {
    return this.contract.bondingAllowance(_owner, _caller);
  }

  /**
   * Binding for `decimals` on the Autonity contract.
   *
   * ERC-20 Optional.
   * @returns {bigint} the number of decimals the NTN token uses.
   */
  async decimals(): Promise<bigint> {
    return this.contract.decimals();
  }

  /**
   * Binding for `name` on the Autonity contract.
   *
   * ERC-20 Optional.
   * @returns {string} the name of the stake token.
   */
  async name(): Promise<string> {
    return this.contract.name();
  }

  /**
   * Binding for `symbol` on the Autonity contract.
   *
   * ERC-20 Optional.
   * @returns {string} the Stake token's symbol.
   */
  async symbol(): Promise<string> {
    return this.contract.symbol();
  }

  /**
   * Binding for `totalSupply` on the Autonity contract.
   *
   * Returns the total amount of stake token issued.
   */
  async totalSupply(): Promise<bigint> {
    return this.contract.totalSupply();
  }

  /**
   * Binding for `circulatingSupply` on the Autonity contract.
   *
   * Returns the amount of tokens circulating in the network.
   */
  async circulatingSupply(): Promise<bigint> {
    return this.contract.circulatingSupply();
  }

  /** Binding for `STANDARD_DECIMALS` on the Autonity contract. */
  async STANDARD_DECIMALS(): Promise<bigint> {
    return this.contract.STANDARD_DECIMALS();
  }

  /** Binding for `STANDARD_SCALE_FACTOR` on the Autonity contract. */
  async STANDARD_SCALE_FACTOR(): Promise<bigint> {
    return this.contract.STANDARD_SCALE_FACTOR();
  }

  /**
   * Binding for `getBondingRequestByID` on the Autonity contract.
   *
   * Returns the bonding request corresponding to bonding ID.
   * @param {ethers.BigNumberish} _id - the ID of the bonding request
   */
  async getBondingRequestByID(
    _id: ethers.BigNumberish
  ): Promise<AutonityTypes.BondingRequest> {
    const bondingRequest = await this.contract.getBondingRequestByID(_id);
    return AutonityTypes.mapBondingRequest(bondingRequest);
  }

  /**
   * Binding for `getUnbondingRequestByID` on the Autonity contract.
   *
   * Returns the unbonding request corresponding to unbonding ID.
   * @param {ethers.BigNumberish} _id - the ID of the unbonding request
   * @returns {Promise<AutonityTypes.UnbondingRequest>} - the unbonding request object
   */
  async getUnbondingRequestByID(
    _id: ethers.BigNumberish
  ): Promise<AutonityTypes.UnbondingRequest> {
    const unbondingRequest = await this.contract.getUnbondingRequestByID(_id);
    return AutonityTypes.mapUnbondingRequest(unbondingRequest);
  }

  /**
   * Binding for `getConfig` on the Autonity contract.
   *
   * Returns the current contract config
   * @returns {Promise<AutonityTypes.AutonityConfig>} - the current Autonity config
   */
  async getConfig(): Promise<AutonityTypes.AutonityConfig> {
    const config = await this.contract.getConfig();
    return AutonityTypes.mapAutonityConfig(config);
  }

  /**
   * Binding for `getVersion` on the Autonity contract.
   *
   * Returns the current contract version.
   */
  async getVersion(): Promise<bigint> {
    return this.contract.getVersion();
  }

  /**
   * Binding for `getCurrentCommitteeSize` on the Autonity contract.
   *
   * Returns the current size of the consensus committee.
   */
  async getCurrentCommitteeSize(): Promise<bigint> {
    return this.contract.getCurrentCommitteeSize();
  }

  /**
   * Binding for `getEpochID` on the Autonity contract.
   *
   * Returns the current epoch ID
   */
  async getEpochID(): Promise<bigint> {
    return this.contract.getEpochID();
  }

  /**
   * Binding for `getEpochInfo` on the Autonity contract.
   *
   * Returns the current epoch info of the chain.
   */
  async getEpochInfo(): Promise<AutonityTypes.EpochInfo> {
    const epochInfo = await this.contract.getEpochInfo();
    return AutonityTypes.mapEpochInfo(epochInfo);
  }

  /**
   * Binding for `getEpochByHeight` on the Autonity contract.
   *
   * Returns the epoch info of the height.
   * @param {ethers.BigNumberish} _height - the input block height.
   * @returns {Promise<AutonityTypes.EpochInfo>} - the epoch info
   */
  async getEpochByHeight(
    _height: ethers.BigNumberish
  ): Promise<AutonityTypes.EpochInfo> {
    const epochInfo = await this.contract.getEpochByHeight(_height);
    return AutonityTypes.mapEpochInfo(epochInfo);
  }

  /**
   * Binding for `getEpochTotalBondedStake` on the Autonity contract.
   *
   * Returns the current epoch total bonded stake
   */
  async getEpochTotalBondedStake(): Promise<bigint> {
    return this.contract.getEpochTotalBondedStake();
  }

  /**
   * Binding for `getEpochFromBlock` on the Autonity contract.
   *
   * Returns epoch associated to the block number.
   * @param {BigNumberish} _block - the input block number.
   */
  async getEpochFromBlock(_block: ethers.BigNumberish): Promise<bigint> {
    return this.contract.getEpochFromBlock(_block);
  }

  /**
   * Binding for `getEpochPeriod` on the Autonity contract.
   *
   * Returns the epoch period. If there will be an update at epoch end, the new epoch period is returned
   */
  async getEpochPeriod(): Promise<bigint> {
    return this.contract.getEpochPeriod();
  }

  /**
   * Binding for `getCurrentEpochPeriod` on the Autonity contract.
   *
   * Returns the epoch period of the current epoch
   */
  async getCurrentEpochPeriod(): Promise<bigint> {
    return this.contract.getCurrentEpochPeriod();
  }

  /**
   * Binding for `getLastEpochBlock` on the Autonity contract.
   *
   * Returns the last epoch's end block height.
   */
  async getLastEpochBlock(): Promise<bigint> {
    return this.contract.getLastEpochBlock();
  }

  /**
   * Binding for `getLastEpochTime` on the Autonity contract.
   *
   * Returns the last epoch's end block timestamp
   * @returns {Promise<bigint>} - the last epoch's end block timestamp
   */
  async getLastEpochTime(): Promise<bigint> {
    return this.contract.getLastEpochTime();
  }

  /**
   * Binding for `getNextEpochBlock` on the Autonity contract.
   *
   * Returns the next epoch block.
   * @returns {Promise<bigint>} - the next epoch block height
   */
  async getNextEpochBlock(): Promise<bigint> {
    return this.contract.getNextEpochBlock();
  }

  /**
   * Binding for `getClientConfig` on the Autonity contract.
   *
   * Returns the current client aware config
   * @returns {Promise<AutonityTypes.ClientConfig>} - the current client config
   */
  async getClientConfig(): Promise<AutonityTypes.ClientConfig> {
    const config = await this.contract.getClientConfig();
    return AutonityTypes.mapClientConfig(config);
  }

  /**
   * Binding for `getCommittee` on the Autonity contract.
   *
   * Returns the block committee.
   * @returns {Promise<AutonityTypes.Committee[]>}  array of committee members

   */
  async getCommittee(): Promise<AutonityTypes.Committee[]> {
    const committee = await this.contract.getCommittee();
    return committee.map(AutonityTypes.mapCommittee);
  }

  /**
   * Binding for `getCommitteeEnodes` on the Autonity contract.
   *
   * Returns the consensus committee enodes.
   * @returns {Promise<string[]>} - array of enodes of the current committee
   */
  async getCommitteeEnodes(): Promise<string[]> {
    return this.contract.getCommitteeEnodes();
  }

  /**
   * Binding for `getMaxCommitteeSize` on the Autonity contract.
   *
   * Returns the maximum size of the consensus committee.
   * @returns {Promise<bigint>} - the maximum committee size
   */
  async getMaxCommitteeSize(): Promise<bigint> {
    return this.contract.getMaxCommitteeSize();
  }

  /**
   * Binding for `getBlockPeriod` on the Autonity contract.
   *
   * Returns the block period.
   * @returns {Promise<bigint>} - the block period
   */
  async getBlockPeriod(): Promise<bigint> {
    return this.contract.getBlockPeriod();
  }

  /**
   * Binding for `getMinimumBaseFee` on the Autonity contract.
   *
   * Returns the minimum gas price.
   *
   * Autonity transaction's gas price must be greater or equal to the minimum gas price.
   * @returns {Promise<bigint>} - the minimum base fee
   */
  async getMinimumBaseFee(): Promise<bigint> {
    return this.contract.getMinimumBaseFee();
  }

  /**
   * Binding for `getUnbondingPeriod` on the Autonity contract.
   *
   * Returns the un-bonding period.
   * @returns {Promise<bigint>} - the un-bonding period
   */
  async getUnbondingPeriod(): Promise<bigint> {
    return this.contract.getUnbondingPeriod();
  }

  /**
   * Binding for `getMaxScheduleDuration` on the Autonity contract.
   *
   * Returns the max allowed duration of any schedule or contract.
   * @returns {Promise<bigint>} - amount max schedule duration
   */
  async getMaxScheduleDuration(): Promise<bigint> {
    return this.contract.getMaxScheduleDuration();
  }

  /**
   * Binding for `getTreasuryAccount` on the Autonity contract.
   *
   * Returns the current treasury account.
   * @returns {Promise<string>} - the treasury account address
   */
  async getTreasuryAccount(): Promise<string> {
    return this.contract.getTreasuryAccount();
  }

  /**
   * Binding for `getTreasuryFee` on the Autonity contract.
   *
   * Returns the current treasury fee.
   * @returns {Promise<bigint>} - the treasury fee amount
   */
  async getTreasuryFee(): Promise<bigint> {
    return this.contract.getTreasuryFee();
  }

  /**
   * Binding for `getInflationReserve` on the Autonity contract.
   *
   * Returns the current inflation reserve
   * @returns {Promise<bigint>} - the inflation reserve amount
   */
  async getInflationReserve(): Promise<bigint> {
    return this.contract.getInflationReserve();
  }

  /**
   * Binding for `getOperator` on the Autonity contract.
   *
   * Returns the current operator account.
   * @returns {Promise<string>} - the operator account address
   */
  async getOperator(): Promise<string> {
    return this.contract.getOperator();
  }

  /**
   * Binding for `getOracle` on the Autonity contract.
   *
   * Returns the current Oracle account.
   * @returns {Promise<string>} - the oracle contract address
   */
  async getOracle(): Promise<string> {
    return this.contract.getOracle();
  }

  /**
   * Binding for `getSlasher` on the Autonity contract.
   *
   * Returns the slasher contract address
   * @returns {Promise<string>} - the slasher contract address
   */
  async getSlasher(): Promise<string> {
    return this.contract.getSlasher();
  }

  /**
   * Binding for `getLiquidLogicContract` on the Autonity contract.
   *
   * Returns the liquid logic contract
   * @returns {Promise<string>} - the liquid logic contract address
   */
  async getLiquidLogicContract(): Promise<string> {
    return this.contract.getLiquidLogicContract();
  }

  /**
   * Binding for `getNewContract` on the Autonity contract.
   *
   * Getter to retrieve a new Autonity contract bytecode and ABI when an upgrade is initiated.
   * @returns {[string, string]}
   * - **_0**: `bytecode` the new contract bytecode.
   * - **_1**: `contractAbi` the new contract ABI.
   */
  async getNewContract(): Promise<[string, string]> {
    return this.contract.getNewContract();
  }

  /**
   * Binding for `getSchedule` on the Autonity contract.
   *
   * Returns the schedule at index = `_id` in the `vaultSchedules[_vault]` array.
   * @param {AddressLike} vault - address of the vault for the schedule
   * @param {BigNumberish} id - index of the schedule
   * @returns {Promise<AutonityTypes.Schedule>} - the schedule object
   */
  async getSchedule(
    vault: AddressLike,
    id: ethers.BigNumberish
  ): Promise<AutonityTypes.Schedule> {
    const schedule = await this.contract.getSchedule(vault, id);
    return AutonityTypes.mapSchedule(schedule);
  }

  /**
   * Binding for `getTotalSchedules` on the Autonity contract.
   *
   * Returns total number of schedules for the vault at address `_vault`.
   * @param {AddressLike} vault - address of the vault for the schedules
   * @returns {Promise<bigint>} - the total number of schedules for the vault
   */
  async getTotalSchedules(vault: AddressLike): Promise<bigint> {
    return this.contract.getTotalSchedules(vault);
  }

  /**
   * Binding for `getValidator` on the Autonity contract.
   *
   * Returns the validator object associated with `_addr`.
   * @param {AddressLike} addr - address of the validator
   * @returns {Promise<AutonityTypes.Validator>} - the validator object
   */
  async getValidator(addr: AddressLike): Promise<AutonityTypes.Validator> {
    const validator = await this.contract.getValidator(addr);
    return AutonityTypes.mapValidator(validator);
  }

  /**
   * Binding for `getValidators` on the Autonity contract.
   *
   * Returns the current list of validators.
   * @returns {Promise<string[]>} - an array of validator addresses
   */
  async getValidators(): Promise<string[]> {
    return this.contract.getValidators();
  }

  /**
   * Binding for `getValidatorState` on the Autonity contract.
   *
   * Returns the state of the validator associated with `_addr`.
   * @param {AddressLike} addr - address of the validator
   * @returns {Promise<bigint>} - the state of the validator
   */
  async getValidatorState(addr: AddressLike): Promise<bigint> {
    return this.contract.getValidatorState(addr);
  }

  /**
   * Binding for `getUnbondingShare` on the Autonity contract.
   *
   * Returns the unbonding share after the unbonding request is applied at epoch end.
   * @param {BigNumberish} unbondingID - id of the unbonding request in unbonding queue
   * @returns {Promise<bigint>} - the unbonding share amount
   */
  async getUnbondingShare(unbondingID: ethers.BigNumberish): Promise<bigint> {
    return this.contract.getUnbondingShare(unbondingID);
  }

  /**
   * Binding for `isUnbondingReleased` on the Autonity contract.
   *
   * @param {BigNumberish} unbondingID - id of the unbonding request in unbonding queue
   * @returns {Promise<boolean>} - `true` if the unbonding request is released, `false` otherwise
   */
  async isUnbondingReleased(
    unbondingID: ethers.BigNumberish
  ): Promise<boolean> {
    return this.contract.isUnbondingReleased(unbondingID);
  }
}
