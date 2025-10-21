import { ethers } from "ethers";
import { AutonityClient } from "./autonity";
import { OracleClient } from "./oracle";
import { AuctioneerClient } from "./auctioneer";
import { LiquidClient } from "./liquid";
import {
  ProviderManager,
  WalletManager,
  ContractRegistry,
  ConfigurationError,
  ValidationUtils,
} from "../core";

/**
 * Configuration interface for creating Contract instances.
 *
 * Either `rpcUrl` or `provider` must be specified, but not both.
 * Either `privateKey` or `signer` must be specified, but not both.
 *
 * @example
 * ```ts
 * const config: ContractConfig = {
 *   rpcUrl: "https://rpc.autonity.org",
 *   contractAddress: "0x1234567890123456789012345678901234567890",
 *   privateKey: "0xabcdef..."
 * };
 * ```
 */
export interface ContractConfig {
  /** RPC URL for connecting to the blockchain network */
  rpcUrl?: string;

  /** Pre-configured ethers Provider instance */
  provider?: ethers.Provider;

  /** The contract address for Autonity and Oracle contracts */
  contractAddress: string;

  /** Private key for creating a wallet signer */
  privateKey?: string;

  /** Pre-configured ethers Signer instance */
  signer?: ethers.Signer;
}

/**
 * Utility class for validating `ContractConfig`.
 *
 * @internal
 */
class ConfigValidator {
  static validateProviderConfig(config: ContractConfig): void {
    ValidationUtils.validateEitherOr(
      config,
      ["rpcUrl", "provider"],
      "Either 'rpcUrl' or 'provider' must be specified"
    );
  }

  static validateContractAddress(config: ContractConfig): void {
    ValidationUtils.validateAddress(config.contractAddress, "contractAddress");
  }

  static validateSignerConfig(config: ContractConfig): void {
    ValidationUtils.validateMutuallyExclusive(
      config,
      ["privateKey", "signer"],
      "Cannot specify both 'privateKey' and 'signer'"
    );
  }

  static validateAll(config: ContractConfig): void {
    this.validateProviderConfig(config);
    this.validateContractAddress(config);
    this.validateSignerConfig(config);
  }
}

/**
 * Main contract class providing unified access to Autonity and Oracle contracts.
 *
 * @example
 * ```ts
 * // Using RPC URL and private key
 * const contract = new Contract({
 *   rpcUrl: "https://rpc.autonity.org",
 *   contractAddress: "0x1234567890123456789012345678901234567890",
 *   privateKey: "0xabcdef..."
 * });
 *
 * // Access Autonity contract methods
 * const validators = await contract.autonity.getValidators();
 *
 * // Access Oracle contract methods
 * const oracleData = await contract.oracle.getLatestRoundData();
 * ```
 */
export class Contract {
  /** Autonity contract client instance */
  public readonly autonity: AutonityClient;

  /** Oracle contract client instance */
  public readonly oracle: OracleClient;

  /** Auctioneer contract client instance */
  public readonly auctioneer: AuctioneerClient;

  /** Liquid contract client instance */
  public readonly liquid: LiquidClient;

  /** Ethers provider instance */
  public readonly provider: ethers.Provider;

  private readonly providerManager: ProviderManager;
  private readonly walletManager: WalletManager;
  private readonly contractRegistry: ContractRegistry;

  /**
   * Creates a new Contract instance.
   *
   * @param config - Configuration for the contract
   * @throws ConfigurationError When initialization fails
   */
  constructor(config: ContractConfig) {
    ConfigValidator.validateAll(config);

    try {
      this.providerManager = new ProviderManager({
        rpcUrl: config.rpcUrl,
        provider: config.provider,
      });
      this.provider = this.providerManager.provider;

      this.walletManager = new WalletManager({
        provider: this.provider,
        privateKey: config.privateKey,
        signer: config.signer,
      });
      this.contractRegistry = new ContractRegistry();

      const signer = this.walletManager.signer;
      const address = config.contractAddress;

      this.autonity = this.contractRegistry.createContract<AutonityClient>(
        "autonity",
        this.provider,
        address,
        signer
      );
      this.oracle = this.contractRegistry.createContract<OracleClient>(
        "oracle",
        this.provider,
        address,
        signer
      );
      this.auctioneer = this.contractRegistry.createContract<AuctioneerClient>(
        "auctioneer",
        this.provider,
        address,
        signer
      );
      this.liquid = this.contractRegistry.createContract<LiquidClient>(
        "liquid",
        this.provider,
        address,
        signer
      );
    } catch (error) {
      throw new ConfigurationError(
        "Failed to initialize Contract instance",
        error instanceof Error ? error : undefined
      );
    }
  }

  /**
   * Async factory method to create a new Contract instance.
   *
   * @param config - Contract configuration
   * @returns A promise resolving to a new Contract
   */
  static async create(config: ContractConfig): Promise<Contract> {
    return new Contract(config);
  }
}

export default Contract;
