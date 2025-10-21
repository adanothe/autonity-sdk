import { Liquid, Liquid__factory } from "../typechain";
import {
  ethers,
  AddressLike,
  ContractTransactionResponse,
  BigNumberish,
  BytesLike,
} from "ethers";
import { ContractClient } from "../core/contract-registry";

export class LiquidClient implements ContractClient {
  private contract: Liquid;
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
        ? Liquid__factory.connect(contractAddress, signer)
        : Liquid__factory.connect(contractAddress, provider);
    } catch (error) {
      throw new Error(
        `Failed to connect to Liquid contract: ${
          error instanceof Error ? error.message : "Unknown error"
        }`
      );
    }
  }

  async allowance(_owner: AddressLike, _spender: AddressLike): Promise<bigint> {
    return this.contract.allowance(_owner, _spender);
  }

  async balanceOf(_address: AddressLike): Promise<bigint> {
    return this.contract.balanceOf(_address);
  }

  async commissionRateDecimals(): Promise<bigint> {
    return this.contract.COMMISSION_RATE_DECIMALS();
  }

  async commissionRateScaleFactor(): Promise<bigint> {
    return this.contract.COMMISSION_RATE_SCALE_FACTOR();
  }

  async decimals(): Promise<bigint> {
    return this.contract.decimals();
  }

  async feeFactorUnitRecip(): Promise<bigint> {
    return this.contract.FEE_FACTOR_UNIT_RECIP();
  }

  async feeFactorUnitRecipDecimals(): Promise<bigint> {
    return this.contract.FEE_FACTOR_UNIT_RECIP_DECIMALS();
  }

  async getCommissionRate(): Promise<bigint> {
    return this.contract.getCommissionRate();
  }

  async getTreasury(): Promise<string> {
    return this.contract.getTreasury();
  }

  async getTreasuryUnclaimedATN(): Promise<bigint> {
    return this.contract.getTreasuryUnclaimedATN();
  }

  async getValidator(): Promise<string> {
    return this.contract.getValidator();
  }

  async name(): Promise<string> {
    return this.contract.name();
  }

  async symbol(): Promise<string> {
    return this.contract.symbol();
  }

  async totalSupply(): Promise<bigint> {
    return this.contract.totalSupply();
  }

  async unclaimedRewards(_account: AddressLike): Promise<bigint> {
    return this.contract.unclaimedRewards(_account);
  }

  async unlockedBalanceOf(_delegator: AddressLike): Promise<bigint> {
    return this.contract.unlockedBalanceOf(_delegator);
  }
}
