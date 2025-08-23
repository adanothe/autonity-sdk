import { Auctioneer, Auctioneer__factory } from "../typechain";
import {
  ethers,
  AddressLike,
  ContractTransactionResponse,
  BigNumberish,
} from "ethers";
import { ContractClient } from "../core/contract-registry";
import { AuctioneerTypes } from "../types";

/**
 * Auctioneer contract client for interacting with the Autonity Protocol Auctioneer.
 *
 * Provides methods to bid on debt liquidations and interest auctions, and read auction data.
 *
 * @example
 * ```ts
 * const auctioneerClient = new AuctioneerClient(provider, contractAddress, signer);
 * const config = await auctioneerClient.getConfig();
 * const openAuctions = await auctioneerClient.openAuctions();
 * ```
 */
export class AuctioneerClient implements ContractClient {
  /** Underlying connected Auctioneer contract */
  private contract: Auctioneer;

  /**
   * Creates a new Auctioneer client instance.
   *
   * @param provider - ethers provider for blockchain connection
   * @param contractAddress - address of the deployed Auctioneer contract
   * @param signer - optional ethers signer for write operations
   * @throws Error if provider or contractAddress is invalid
   */
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
        ? Auctioneer__factory.connect(contractAddress, signer)
        : Auctioneer__factory.connect(contractAddress, provider);
    } catch (error) {
      throw new Error(
        `Failed to connect to Auctioneer contract: ${
          error instanceof Error ? error.message : "Unknown error"
        }`
      );
    }
  }

  /**
   * Place a bid to liquidate a CDP that is undercollateralized.
   *
   * The caller must send the debt amount in ATN (via msg.value), and ntnAmount must be less than
   * or equal to maxLiquidationReturn for the caller to successfully execute a liquidation.
   *
   * @param debtor - The address of the CDP owner
   * @param liquidatableRound - The earliest round in which the CDP was liquidatable
   * @param ntnAmount - The amount of NTN to receive in exchange for paying off the debt
   * @returns Promise resolving to the transaction response
   */
  async bidDebt(
    debtor: AddressLike,
    liquidatableRound: BigNumberish,
    ntnAmount: BigNumberish
  ): Promise<ContractTransactionResponse> {
    return this.contract.bidDebt(debtor, liquidatableRound, ntnAmount);
  }

  /**
   * Place a bid on an interest auction.
   *
   * @param auction - The ID of the auction
   * @param ntnAmount - The amount of NTN to pay for the interest (must be greater than or equal to minInterestPayment)
   * @returns Promise resolving to the transaction response
   */
  async bidInterest(
    auction: BigNumberish,
    ntnAmount: BigNumberish
  ): Promise<ContractTransactionResponse> {
    return this.contract.bidInterest(auction, ntnAmount);
  }

  // read methods

  /**
   * Get an auction by ID.
   *
   * @param auction - The ID of the auction
   * @returns Promise resolving to the auction data
   */
  async getAuction(
    auction: ethers.BigNumberish
  ): Promise<AuctioneerTypes.Auction> {
    const auctionData = await this.contract.getAuction(auction);
    return AuctioneerTypes.mapAuction(auctionData);
  }

  /**
   * Get the current Auctioneer configuration.
   *
   * @returns Promise resolving to the current configuration
   */
  async getConfig(): Promise<AuctioneerTypes.Config> {
    const configData = await this.contract.getConfig();
    return AuctioneerTypes.mapConfig(configData);
  }

  /**
   * Get the address of the collateral token.
   *
   * @returns Promise resolving to the address of the collateral token
   */
  async getCollateralToken(): Promise<string> {
    return this.contract.getCollateralToken();
  }

  /**
   * Get the proceed address.
   *
   * @returns Promise resolving to the proceed address
   */
  async getProceedAddress(): Promise<string> {
    return this.contract.getProceedAddress();
  }

  /**
   * Get the maximum amount of NTN that can be returned to a liquidator for a given CDP.
   *
   * @param debtor - The address of the CDP owner
   * @param liquidatableRounds - The earliest round in which the CDP was liquidatable
   * @returns Promise resolving to the maximum liquidation return amount
   */
  async maxLiquidationReturn(
    debtor: AddressLike,
    liquidatableRounds: BigNumberish
  ): Promise<bigint> {
    return this.contract.maxLiquidationReturn(debtor, liquidatableRounds);
  }

  /**
   * Get the minimum amount of NTN that can be paid for an interest auction.
   *
   * @param auction - The ID of the auction
   * @returns Promise resolving to the minimum interest payment amount
   */
  async minInterestPayment(auction: BigNumberish): Promise<bigint> {
    return this.contract.minInterestPayment(auction);
  }

  /**
   * Get all open interest auctions.
   *
   * @returns Promise resolving to an array of all open interest auctions
   */
  async openAuctions(): Promise<AuctioneerTypes.Auction[]> {
    const auctionData = await this.contract.openAuctions();
    return auctionData.map(AuctioneerTypes.mapAuction);
  }
}
