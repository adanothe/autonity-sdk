import { Network, initContract, piccadilly, AUTONITY_CONTRACT } from "../utils";
import { Autonity, Autonity__factory } from "../typechain";
import { ethers } from "ethers";

const VALIDATOR_STATE: Record<number, string> = {
  0: "active",
  1: "paused",
  2: "jailed",
  3: "jailbound",
};

type PolicyStruct = Autonity.PolicyStructOutput;
type ContractsStruct = Autonity.ContractsStructOutput;
type ProtocolStruct = Autonity.ProtocolStructOutput;
type ConfigStruct = [PolicyStruct, ContractsStruct, ProtocolStruct, bigint];
type ValidatorStruct = Autonity.ValidatorStructOutput;
type CommitteeStruct = Autonity.CommitteeMemberStructOutput;

interface ConfigInterface {
  policy: {
    treasuryFee: string;
    minBaseFee: string;
    delegationRate: string;
    unbondingPeriod: string;
    initialInflationReserve: string;
    treasuryAccount: string;
  };
  contracts: {
    accountabilityContract: string;
    oracleContract: string;
    acuContract: string;
    supplyControlContract: string;
    stabilizationContract: string;
    upgradeManagerContract: string;
    inflationControllerContract: string;
    nonStakableVestingContract: string;
  };
  protocol: {
    operatorAccount: string;
    epochPeriod: string;
    blockPeriod: string;
    committeeSize: string;
  };
  contractVersion: string;
}

const configEntity = (config: ConfigStruct): ConfigInterface => ({
  policy: {
    treasuryFee: config[0].treasuryFee.toString(),
    minBaseFee: config[0].minBaseFee.toString(),
    delegationRate: config[0].delegationRate.toString(),
    unbondingPeriod: config[0].unbondingPeriod.toString(),
    initialInflationReserve: config[0].initialInflationReserve.toString(),
    treasuryAccount: config[0].treasuryAccount,
  },
  contracts: {
    accountabilityContract: config[1].accountabilityContract,
    oracleContract: config[1].oracleContract,
    acuContract: config[1].acuContract,
    supplyControlContract: config[1].supplyControlContract,
    stabilizationContract: config[1].stabilizationContract,
    upgradeManagerContract: config[1].upgradeManagerContract,
    inflationControllerContract: config[1].inflationControllerContract,
    nonStakableVestingContract: config[1].nonStakableVestingContract,
  },
  protocol: {
    operatorAccount: config[2].operatorAccount,
    epochPeriod: config[2].epochPeriod.toString(),
    blockPeriod: config[2].blockPeriod.toString(),
    committeeSize: config[2].committeeSize.toString(),
  },
  contractVersion: config[3].toString(),
});

interface CommitteeInterface {
  addr: string;
  votingPower: string;
  consensusKey: string;
}

const committeeEntity = (committee: CommitteeStruct): CommitteeInterface => ({
  addr: committee.addr,
  votingPower: committee.votingPower.toString(),
  consensusKey: committee.consensusKey,
});

interface ValidatorInterface {
  treasury: string;
  nodeAddress: string;
  oracleAddress: string;
  enode: string;
  commissionRate: string;
  bondedStake: string;
  unbondingStake: string;
  unbondingShares: string;
  selfBondedStake: string;
  selfUnbondingStake: string;
  selfUnbondingShares: string;
  selfUnbondingStakeLocked: string;
  liquidContract: string;
  liquidSupply: string;
  registrationBlock: string;
  totalSlashed: string;
  jailReleaseBlock: string;
  provableFaultCount: string;
  consensusKey: string;
  state: string;
}

const validatorEntity = (validator: ValidatorStruct): ValidatorInterface => ({
  treasury: validator.treasury,
  nodeAddress: validator.nodeAddress,
  oracleAddress: validator.oracleAddress,
  enode: validator.enode,
  commissionRate: validator.commissionRate.toString(),
  bondedStake: validator.bondedStake.toString(),
  unbondingStake: validator.unbondingStake.toString(),
  unbondingShares: validator.unbondingShares.toString(),
  selfBondedStake: validator.selfBondedStake.toString(),
  selfUnbondingStake: validator.selfUnbondingStake.toString(),
  selfUnbondingShares: validator.selfUnbondingShares.toString(),
  selfUnbondingStakeLocked: validator.selfUnbondingStakeLocked.toString(),
  liquidContract: validator.liquidContract,
  liquidSupply: validator.liquidSupply.toString(),
  registrationBlock: validator.registrationBlock.toString(),
  totalSlashed: validator.totalSlashed.toString(),
  jailReleaseBlock: validator.jailReleaseBlock.toString(),
  provableFaultCount: validator.provableFaultCount.toString(),
  consensusKey: validator.consensusKey,
  state: VALIDATOR_STATE[Number(validator.state)] || "unknown",
});

export class Auton {
  private contract: Autonity;
  constructor(
    networkOrRpcUrl: Network | string = piccadilly,
    contractAddress: string = AUTONITY_CONTRACT,
    privateKey?: string,
    signerOrProvider?: ethers.Wallet | ethers.JsonRpcProvider
  ) {
    const rpcUrl =
      typeof networkOrRpcUrl === "string"
        ? networkOrRpcUrl
        : networkOrRpcUrl.rpcUrl;
    this.contract = initContract(
      Autonity__factory,
      contractAddress,
      rpcUrl,
      privateKey,
      signerOrProvider
    );
  }

  async activateValidator(
    _address: ethers.AddressLike
  ): Promise<ethers.ContractTransactionResponse> {
    try {
      const transactionResponse = await this.contract.activateValidator(
        _address
      );
      return transactionResponse;
    } catch (error) {
      console.error(
        `Failed to activate validator for address ${_address}:`,
        error
      );
      throw new Error(
        `Failed to activate validator for address ${_address}: ` +
          (error as Error).message
      );
    }
  }

  async approve(
    spender: ethers.AddressLike,
    amount: ethers.BigNumberish
  ): Promise<ethers.ContractTransactionResponse> {
    try {
      const txResponse = await this.contract.approve(spender, amount);
      return txResponse;
    } catch (error) {
      console.error(
        `Failed to approve ${amount} for spender ${spender}:`,
        error
      );
      throw new Error(
        `Failed to approve ${amount} for spender ${spender}: ` +
          (error as Error).message
      );
    }
  }

  async bond(
    _validator: ethers.AddressLike,
    _amount: ethers.BigNumberish
  ): Promise<ethers.ContractTransactionResponse> {
    try {
      const transactionResponse = await this.contract.bond(_validator, _amount);
      return transactionResponse;
    } catch (error) {
      console.error(`Failed to bond for ${_validator}`, error);
      throw new Error(
        `Failed to bond for ${_validator} ` + (error as Error).message
      );
    }
  }

  async changeCommissionRate(
    _validator: ethers.AddressLike,
    _rate: ethers.BigNumberish
  ): Promise<ethers.ContractTransactionResponse> {
    try {
      const transactionResponse = await this.contract.changeCommissionRate(
        _validator,
        _rate
      );
      return transactionResponse;
    } catch (error) {
      console.error(`Failed to change commission ${_validator}`, error);
      throw new Error(
        `Failed to change commission ${_validator} ` + (error as Error).message
      );
    }
  }

  async pauseValidator(
    _address: ethers.AddressLike
  ): Promise<ethers.ContractTransactionResponse> {
    try {
      const txResponse = await this.contract.pauseValidator(_address);
      return txResponse;
    } catch (error) {
      console.error(`Failed to pause validator ${_address}`, error);
      throw new Error(
        `Failed to pause validator ${_address} ` + (error as Error).message
      );
    }
  }

  async registerValidator(
    _enode: string,
    _oracleAddress: ethers.AddressLike,
    _consensusKey: ethers.BytesLike,
    _signatures: ethers.BytesLike
  ): Promise<ethers.ContractTransactionResponse> {
    try {
      const txResponse = await this.contract.registerValidator(
        _enode,
        _oracleAddress,
        _consensusKey,
        _signatures
      );
      return txResponse;
    } catch (error) {
      console.error(`Failed to register validator`, error);
      throw new Error(
        `Failed to register validator ` + (error as Error).message
      );
    }
  }

  async updateEnode(
    _nodeAddress: ethers.AddressLike,
    _enode: string
  ): Promise<ethers.ContractTransactionResponse> {
    try {
      const txResponse = await this.contract.updateEnode(_nodeAddress, _enode);
      return txResponse;
    } catch (error) {
      console.error(`Failed to update enode`, error);
      throw new Error(`Failed to update enode ` + (error as Error).message);
    }
  }

  // Filter methode
  async NewBondingRequest(
    startBlock?: number,
    endBlock?: number
  ): Promise<
    {
      validator: string;
      delegator: string;
      selfBonded: boolean;
      amount: bigint;
      blockNumber: number;
      transactionHash: string;
    }[]
  > {
    try {
      const filter = this.contract.filters.NewBondingRequest();
      const events = await this.contract.queryFilter(
        filter,
        startBlock,
        endBlock
      );

      return events.map((event) => ({
        validator: event.args?.validator,
        delegator: event.args?.delegator,
        selfBonded: event.args?.selfBonded,
        amount: event.args?.amount,
        blockNumber: event.blockNumber,
        transactionHash: event.transactionHash,
      }));
    } catch (error) {
      console.error(`Failed to filter NewBondingRequest events`, error);
      throw new Error(
        `Failed to filter NewBondingRequest events: ` + (error as Error).message
      );
    }
  }

  async NewEpoch(
    startBlock?: number,
    endBlock?: number
  ): Promise<
    { epoch: bigint; blockNumber: number; transactionHash: string }[]
  > {
    try {
      const filter = this.contract.filters.NewEpoch();
      const events = await this.contract.queryFilter(
        filter,
        startBlock,
        endBlock
      );

      return events.map((event) => ({
        epoch: event.args?.epoch,
        blockNumber: event.blockNumber,
        transactionHash: event.transactionHash,
      }));
    } catch (error) {
      console.error(`Failed to filter NewEpoch events`, error);
      throw new Error(
        `Failed to filter NewEpoch events: ` + (error as Error).message
      );
    }
  }

  async NewUnbondingRequest(
    startBlock?: number,
    endBlock?: number
  ): Promise<
    {
      validator: string;
      delegator: string;
      selfBonded: boolean;
      amount: bigint;
      blockNumber: number;
      transactionHash: string;
    }[]
  > {
    try {
      const filter = this.contract.filters.NewUnbondingRequest();
      const events = await this.contract.queryFilter(
        filter,
        startBlock,
        endBlock
      );

      return events.map((event) => ({
        validator: event.args?.validator,
        delegator: event.args?.delegator,
        selfBonded: event.args?.selfBonded,
        amount: event.args?.amount,
        blockNumber: event.blockNumber,
        transactionHash: event.transactionHash,
      }));
    } catch (error) {
      console.error(`Failed to filter NewBondingRequest events`, error);
      throw new Error(
        `Failed to filter NewBondingRequest events: ` + (error as Error).message
      );
    }
  }

  async CommissionRateChange(
    startBlock?: number,
    endBlock?: number
  ): Promise<
    {
      validator: string;
      rate: bigint;
      blockNumber: number;
      transactionHash: string;
    }[]
  > {
    try {
      const filter = this.contract.filters.CommissionRateChange();
      const events = await this.contract.queryFilter(
        filter,
        startBlock,
        endBlock
      );
      return events.map((event) => ({
        validator: event.args?.validator,
        rate: event.args?.rate,
        blockNumber: event.blockNumber,
        transactionHash: event.transactionHash,
      }));
    } catch (error) {
      console.error(`Failed to filter CommissionRateChange events`, error);
      throw new Error(
        `Failed to filter CommissionRateChange events: ` +
          (error as Error).message
      );
    }
  }

  async EpochPeriodUpdated(
    startBlock?: number,
    endBlock?: number
  ): Promise<
    { period: bigint; blockNumber: number; transactionHash: string }[]
  > {
    try {
      const filter = this.contract.filters.EpochPeriodUpdated();
      const events = await this.contract.queryFilter(
        filter,
        startBlock,
        endBlock
      );

      return events.map((event) => ({
        period: event.args?.period,
        blockNumber: event.blockNumber,
        transactionHash: event.transactionHash,
      }));
    } catch (error) {
      console.error(`Failed to filter EpochPeriodUpdated events`, error);
      throw new Error(
        `Failed to filter EpochPeriodUpdated events: ` +
          (error as Error).message
      );
    }
  }

  async MinimumBaseFeeUpdated(
    startBlock?: number,
    endBlock?: number
  ): Promise<
    { gasPrice: bigint; blockNumber: number; transactionHash: string }[]
  > {
    try {
      const filter = this.contract.filters.MinimumBaseFeeUpdated();
      const events = await this.contract.queryFilter(
        filter,
        startBlock,
        endBlock
      );

      return events.map((event) => ({
        gasPrice: event.args?.gasPrice,
        blockNumber: event.blockNumber,
        transactionHash: event.transactionHash,
      }));
    } catch (error) {
      console.error(`Failed to filter MinimumBaseFeeUpdated events`, error);
      throw new Error(
        `Failed to filter MinimumBaseFeeUpdated events: ` +
          (error as Error).message
      );
    }
  }

  // View methode
  async allowance(
    owner: ethers.AddressLike,
    spender: ethers.AddressLike
  ): Promise<bigint> {
    try {
      return await this.contract.allowance(owner, spender);
    } catch (error) {
      throw new Error(
        `Failed to fetch allowance for owner ${owner} and spender ${spender}: ` +
          (error as Error).message
      );
    }
  }

  async atnTotal_redistributed(): Promise<bigint> {
    try {
      return await this.contract.atnTotalRedistributed();
    } catch (error) {
      throw new Error(
        "Failed to fetch ATN total redistributed: " + (error as Error).message
      );
    }
  }

  async balanceOf(address: ethers.AddressLike): Promise<bigint> {
    try {
      return await this.contract.balanceOf(address);
    } catch (error) {
      throw new Error(
        `Failed to fetch balance for address ${address}: ` +
          (error as Error).message
      );
    }
  }

  async commissionRatePrecision(): Promise<bigint> {
    try {
      return await this.contract.COMMISSION_RATE_PRECISION();
    } catch (error) {
      throw new Error(
        "Failed to fetch COMMISSION_RATE_PRECISION: " + (error as Error).message
      );
    }
  }

  async config(): Promise<ConfigInterface> {
    try {
      const config: ConfigStruct = await this.contract.config();
      return configEntity(config);
    } catch (error) {
      throw new Error("Failed to fetch config: " + (error as Error).message);
    }
  }

  async decimals(): Promise<bigint> {
    try {
      return await this.contract.decimals();
    } catch (error) {
      throw new Error("Failed to fetch decimals: " + (error as Error).message);
    }
  }

  async deployer(): Promise<string> {
    try {
      return await this.contract.deployer();
    } catch (error) {
      throw new Error(
        "Failed to fetch deployer address: " + (error as Error).message
      );
    }
  }

  async epochID(): Promise<bigint> {
    try {
      return await this.contract.epochID();
    } catch (error) {
      throw new Error("Failed to fetch epoch ID: " + (error as Error).message);
    }
  }

  async epochReward(): Promise<bigint> {
    try {
      return await this.contract.epochReward();
    } catch (error) {
      throw new Error(
        "Failed to fetch epoch reward: " + (error as Error).message
      );
    }
  }

  async epochTotalBondedStake(): Promise<bigint> {
    try {
      return await this.contract.epochTotalBondedStake();
    } catch (error) {
      throw new Error(
        "Failed to fetch epoch total bonded stake: " + (error as Error).message
      );
    }
  }

  async getBlockPeriod(): Promise<bigint> {
    try {
      return await this.contract.getBlockPeriod();
    } catch (error) {
      throw new Error(
        "Failed to fetch block period: " + (error as Error).message
      );
    }
  }

  async getCommittee(): Promise<CommitteeInterface[]> {
    try {
      const result = await this.contract.getCommittee();
      return result.map(committeeEntity);
    } catch (error) {
      throw new Error(
        "Failed to fetch committee members: " + (error as Error).message
      );
    }
  }

  async getCommitteeEnodes(): Promise<string[]> {
    try {
      return await this.contract.getCommitteeEnodes();
    } catch (error) {
      throw new Error(
        "Failed to fetch committee enodes: " + (error as Error).message
      );
    }
  }

  async getEpochFromBlock(_block: ethers.BigNumberish): Promise<bigint> {
    try {
      return await this.contract.getEpochFromBlock(_block);
    } catch (error) {
      throw new Error(
        `Failed to fetch epoch from block ${_block}: ` +
          (error as Error).message
      );
    }
  }

  async getEpochPeriod(): Promise<bigint> {
    try {
      return await this.contract.getEpochPeriod();
    } catch (error) {
      throw new Error(
        "Failed to fetch epoch period: " + (error as Error).message
      );
    }
  }

  async getLastEpochBlock(): Promise<bigint> {
    try {
      return await this.contract.getLastEpochBlock();
    } catch (error) {
      throw new Error(
        "Failed to fetch last epoch block: " + (error as Error).message
      );
    }
  }

  async getMaxCommitteeSize(): Promise<bigint> {
    try {
      return await this.contract.getMaxCommitteeSize();
    } catch (error) {
      throw new Error(
        "Failed to fetch max committee size: " + (error as Error).message
      );
    }
  }

  async getMinimumBaseFee(): Promise<bigint> {
    try {
      return await this.contract.getMinimumBaseFee();
    } catch (error) {
      throw new Error(
        "Failed to fetch minimum base fee: " + (error as Error).message
      );
    }
  }

  async getNewContract(): Promise<[string, string]> {
    try {
      return await this.contract.getNewContract();
    } catch (error) {
      throw new Error(
        "Failed to fetch new contract addresses: " + (error as Error).message
      );
    }
  }

  async getOperator(): Promise<string> {
    try {
      return await this.contract.getOperator();
    } catch (error) {
      throw new Error("Failed to fetch operator: " + (error as Error).message);
    }
  }

  async getOracle(): Promise<string> {
    try {
      return await this.contract.getOracle();
    } catch (error) {
      throw new Error(
        "Failed to fetch oracle address: " + (error as Error).message
      );
    }
  }

  async getProposer(
    height: ethers.BigNumberish,
    round: bigint
  ): Promise<string> {
    try {
      return await this.contract.getProposer(height, round);
    } catch (error) {
      throw new Error(
        `Failed to fetch proposer for height ${height} and round ${round}: ` +
          (error as Error).message
      );
    }
  }

  async getRevertingAmount(_unbondingID: ethers.BigNumberish): Promise<bigint> {
    try {
      return await this.contract.getRevertingAmount(_unbondingID);
    } catch (error) {
      throw new Error(
        `Failed to fetch reverting amount for unbonding ID ${_unbondingID}: ` +
          (error as Error).message
      );
    }
  }

  async getTreasuryAccount(): Promise<string> {
    try {
      return await this.contract.getTreasuryAccount();
    } catch (error) {
      throw new Error(
        "Failed to fetch treasury account: " + (error as Error).message
      );
    }
  }

  async getTreasuryFee(): Promise<bigint> {
    try {
      return await this.contract.getTreasuryFee();
    } catch (error) {
      throw new Error(
        "Failed to fetch treasury fee: " + (error as Error).message
      );
    }
  }

  async getUnbondingPeriod(): Promise<bigint> {
    try {
      return await this.contract.getUnbondingPeriod();
    } catch (error) {
      throw new Error(
        "Failed to fetch unbonding period: " + (error as Error).message
      );
    }
  }

  async getUnbondingReleaseState(_unbondingID: bigint): Promise<bigint> {
    try {
      return await this.contract.getUnbondingReleaseState(_unbondingID);
    } catch (error) {
      throw new Error(
        `Failed to fetch unbonding release state for unbonding ID ${_unbondingID}: ` +
          (error as Error).message
      );
    }
  }

  async getVersion(): Promise<bigint> {
    try {
      return await this.contract.getVersion();
    } catch (error) {
      throw new Error("Failed to fetch version: " + (error as Error).message);
    }
  }

  async inflationReserve(): Promise<bigint> {
    try {
      return await this.contract.inflationReserve();
    } catch (error) {
      throw new Error(
        "Failed to fetch inflation reserve: " + (error as Error).message
      );
    }
  }

  async lastEpochBlock(): Promise<bigint> {
    try {
      return await this.contract.lastEpochBlock();
    } catch (error) {
      throw new Error(
        "Failed to fetch last epoch block: " + (error as Error).message
      );
    }
  }

  async lastEpochTime(): Promise<bigint> {
    try {
      return await this.contract.lastEpochTime();
    } catch (error) {
      throw new Error(
        "Failed to fetch last epoch time: " + (error as Error).message
      );
    }
  }

  async maxBondAppliedGas(): Promise<bigint> {
    try {
      return await this.contract.maxBondAppliedGas();
    } catch (error) {
      throw new Error(
        "Failed to fetch max bond applied gas: " + (error as Error).message
      );
    }
  }

  async maxRewardsDistributionGas(): Promise<bigint> {
    try {
      return await this.contract.maxRewardsDistributionGas();
    } catch (error) {
      throw new Error(
        "Failed to fetch max rewards distribution gas: " +
          (error as Error).message
      );
    }
  }

  async maxUnbondAppliedGas(): Promise<bigint> {
    try {
      return await this.contract.maxUnbondAppliedGas();
    } catch (error) {
      throw new Error(
        "Failed to fetch max unbond applied gas: " + (error as Error).message
      );
    }
  }

  async maxUnbondReleasedGas(): Promise<bigint> {
    try {
      return await this.contract.maxUnbondReleasedGas();
    } catch (error) {
      throw new Error(
        "Failed to fetch max unbond released gas: " + (error as Error).message
      );
    }
  }

  async name(): Promise<string> {
    try {
      return await this.contract.name();
    } catch (error) {
      throw new Error("Failed to fetch name: " + (error as Error).message);
    }
  }

  async stakingGasPrice(): Promise<bigint> {
    try {
      return await this.contract.stakingGasPrice();
    } catch (error) {
      throw new Error(
        "Failed to fetch staking gas price: " + (error as Error).message
      );
    }
  }

  async symbol(): Promise<string> {
    try {
      return await this.contract.symbol();
    } catch (error) {
      throw new Error("Failed to fetch symbol: " + (error as Error).message);
    }
  }

  async totalSupply(): Promise<bigint> {
    try {
      return await this.contract.totalSupply();
    } catch (error) {
      throw new Error(
        "Failed to fetch total supply: " + (error as Error).message
      );
    }
  }

  async getValidator(_addr: ethers.AddressLike): Promise<ValidatorInterface> {
    try {
      const result: ValidatorStruct = await this.contract.getValidator(_addr);
      return validatorEntity(result);
    } catch (error) {
      throw new Error(
        `Failed to fetch validator info for address ${_addr}: ` +
          (error as Error).message
      );
    }
  }

  async getValidators(): Promise<string[]> {
    try {
      return await this.contract.getValidators();
    } catch (error) {
      throw new Error(
        "Failed to fetch validators: " + (error as Error).message
      );
    }
  }
}
