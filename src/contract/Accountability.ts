import {
  Network,
  initContract,
  piccadilly,
  ACCOUNTABILITY_CONTRACT,
} from "../utils";
import { Accountability, Accountability__factory } from "../typechain";
import { ethers } from "ethers";

type ConfigStructOutput = Accountability.ConfigStructOutput;

interface config {
  innocenceProofSubmissionWindow: bigint;
  baseSlashingRateLow: bigint;
  baseSlashingRateMid: bigint;
  collusionFactor: bigint;
  historyFactor: bigint;
  jailFactor: bigint;
  slashingRatePrecision: bigint;
}

const configEntity = (data: ConfigStructOutput): config => ({
  innocenceProofSubmissionWindow: data.innocenceProofSubmissionWindow,
  baseSlashingRateLow: data.baseSlashingRateLow,
  baseSlashingRateMid: data.baseSlashingRateMid,
  collusionFactor: data.collusionFactor,
  historyFactor: data.historyFactor,
  jailFactor: data.jailFactor,
  slashingRatePrecision: data.slashingRatePrecision,
});

export class accountability {
  private contract: Accountability;
  constructor(
    networkOrRpcUrl: Network | string = piccadilly,
    contractAddress: string = ACCOUNTABILITY_CONTRACT,
    privateKey?: string,
    signerOrProvider?: ethers.Wallet | ethers.JsonRpcProvider
  ) {
    const rpcUrl =
      typeof networkOrRpcUrl === "string"
        ? networkOrRpcUrl
        : networkOrRpcUrl.rpcUrl;
    this.contract = initContract(
      Accountability__factory,
      contractAddress,
      rpcUrl,
      privateKey,
      signerOrProvider
    );
  }

  async getValidatorAccusation(
    _val: ethers.AddressLike
  ): Promise<Accountability.EventStructOutput | string> {
    try {
      return await this.contract.getValidatorAccusation(_val);
    } catch (error) {
      if (error instanceof Error && error.message.includes("no accusation")) {
        return "no accusation";
      } else {
        throw error;
      }
    }
  }

  async getSlashingHistory(
    _validator: ethers.AddressLike,
    _id: ethers.BigNumberish
  ): Promise<bigint> {
    return await this.contract.slashingHistory(_validator, _id);
  }

  async canSlash(
    _offender: ethers.AddressLike,
    _rule: ethers.BigNumberish,
    _block: ethers.BigNumberish
  ): Promise<boolean> {
    return await this.contract.canSlash(_offender, _rule, _block);
  }

  async canAccuse(
    _offender: ethers.AddressLike,
    _rule: ethers.BigNumberish,
    _block: ethers.BigNumberish
  ): Promise<{ result: boolean; deadline: bigint }> {
    const [result, deadline] = await this.contract.canAccuse(
      _offender,
      _rule,
      _block
    );
    return { result, deadline };
  }

  async getConfig(): Promise<config> {
    const data: ConfigStructOutput = await this.contract.config();
    if (!data) {
      throw new Error(`failed to get config`);
    }

    return configEntity(data);
  }

  async getEpochPeriod(): Promise<bigint> {
    return await this.contract.epochPeriod();
  }

  async beneficiaries(address: ethers.AddressLike): Promise<string> {
    return await this.contract.beneficiaries(address);
  }

  async SlashingEvent(
    startBlock?: number,
    endBlock?: number
  ): Promise<
    {
      validator: ethers.AddressLike;
      amount: ethers.BigNumberish;
      releaseBlock: ethers.BigNumberish;
      isJailbound: boolean;
      eventId: ethers.BigNumberish;
    }[]
  > {
    try {
      const filter = this.contract.filters.SlashingEvent();
      const events = await this.contract.queryFilter(
        filter,
        startBlock,
        endBlock
      );
      return events.map((event) => ({
        validator: event.args?.validator,
        amount: event.args?.amount,
        releaseBlock: event.args?.releaseBlock,
        isJailbound: event.args?.isJailbound,
        eventId: event.args?.eventId,
        blockNumber: event.blockNumber,
        transactionHash: event.transactionHash,
      }));
    } catch (error) {
      console.error(`Failed to filter NewBondingRequest events`, error);
      throw new Error(
        `Failed to filter SlashingEvent: ` + (error as Error).message
      );
    }
  }

  async InnocenceProven(
    startBlock?: number,
    endBlock?: number
  ): Promise<
    {
      _offender: ethers.AddressLike;
      _id: ethers.BigNumberish;
    }[]
  > {
    try {
      const filter = this.contract.filters.InnocenceProven();
      const events = await this.contract.queryFilter(
        filter,
        startBlock,
        endBlock
      );
      return events.map((event) => ({
        _offender: event.args?._offender,
        _id: event.args?._id,
        blockNumber: event.blockNumber,
        transactionHash: event.transactionHash,
      }));
    } catch (error) {
      console.error(`Failed to filter InnocenceProven events`, error);
      throw new Error(
        `Failed to filter InnocenceProven: ` + (error as Error).message
      );
    }
  }

  async NewAccusation(
    startBlock?: number,
    endBlock?: number
  ): Promise<
    {
      _offender: ethers.AddressLike;
      _severity: ethers.BigNumberish;
      _id: ethers.BigNumberish;
    }[]
  > {
    try {
      const filter = this.contract.filters.NewAccusation();
      const events = await this.contract.queryFilter(
        filter,
        startBlock,
        endBlock
      );
      return events.map((event) => ({
        _offender: event.args?._offender,
        _id: event.args?._id,
        _severity: event.args?._severity,
        blockNumber: event.blockNumber,
        transactionHash: event.transactionHash,
      }));
    } catch (error) {
      console.error(`Failed to filter InnocenceProven events`, error);
      throw new Error(
        `Failed to filter InnocenceProven: ` + (error as Error).message
      );
    }
  }

  async NewFaultProof(
    startBlock?: number,
    endBlock?: number
  ): Promise<
    {
      _offender: ethers.AddressLike;
      _severity: ethers.BigNumberish;
      _id: ethers.BigNumberish;
    }[]
  > {
    try {
      const filter = this.contract.filters.NewFaultProof();
      const events = await this.contract.queryFilter(
        filter,
        startBlock,
        endBlock
      );
      return events.map((event) => ({
        _offender: event.args?._offender,
        _id: event.args?._id,
        _severity: event.args?._severity,
        blockNumber: event.blockNumber,
        transactionHash: event.transactionHash,
      }));
    } catch (error) {
      console.error(`Failed to filter InnocenceProven events`, error);
      throw new Error(
        `Failed to filter InnocenceProven: ` + (error as Error).message
      );
    }
  }
}
