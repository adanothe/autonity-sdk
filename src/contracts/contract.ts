import { ethers } from "ethers";
import { AutonityClient } from "./autonity";
import { OracleClient } from "./oracle";
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
 * @interface ContractConfig
 * @example
 * ```typescript
 * const config: ContractConfig = {
 *   rpcUrl: "https://rpc.autonity.org",
 *   contractAddress: "0x1234567890123456789012345678901234567890",
 *   privateKey: "0xabcdef..."
 * };
 * ```
 */
export interface ContractConfig {
  /**
   * RPC URL for connecting to the blockchain network.
   * Either rpcUrl or provider must be specified, but not both.
   */
  rpcUrl?: string;

  /**
   * Pre-configured ethers Provider instance.
   * Either rpcUrl or provider must be specified, but not both.
   */
  provider?: ethers.Provider;

  /**
   * The contract address for both Autonity and Oracle contracts.
   * Must be a valid Ethereum address.
   */
  contractAddress: string;

  /**
   * Private key for creating a wallet signer.
   * Optional - either privateKey or signer can be specified, but not both.
   */
  privateKey?: string;

  /**
   * Pre-configured ethers Signer instance.
   * Optional - either privateKey or signer can be specified, but not both.
   */
  signer?: ethers.Signer;
}

/**
 * Configuration validation utilities for Contract instances.
 * Contains static methods to validate different aspects of ContractConfig.
 *
 * @class ConfigValidator
 * @private
 */
class ConfigValidator {
  /**
   * Validates that either rpcUrl or provider is specified, but not both.
   *
   * @static
   * @param {ContractConfig} config - The configuration to validate
   * @throws {ValidationError} When validation fails
   */
  static validateProviderConfig(config: ContractConfig): void {
    ValidationUtils.validateEitherOr(
      config,
      ["rpcUrl", "provider"],
      "Either 'rpcUrl' or 'provider' must be specified"
    );
  }

  /**
   * Validates that the contract address is a valid Ethereum address.
   *
   * @static
   * @param {ContractConfig} config - The configuration to validate
   * @throws {ValidationError} When the address is invalid
   */
  static validateContractAddress(config: ContractConfig): void {
    ValidationUtils.validateAddress(config.contractAddress, "contractAddress");
  }

  /**
   * Validates that privateKey and signer are not both specified.
   *
   * @static
   * @param {ContractConfig} config - The configuration to validate
   * @throws {ValidationError} When both privateKey and signer are provided
   */
  static validateSignerConfig(config: ContractConfig): void {
    ValidationUtils.validateMutuallyExclusive(
      config,
      ["privateKey", "signer"],
      "Cannot specify both 'privateKey' and 'signer', choose one"
    );
  }

  /**
   * Performs complete validation of the configuration.
   *
   * @static
   * @param {ContractConfig} config - The configuration to validate
   * @throws {ValidationError} When any validation fails
   */
  static validateAll(config: ContractConfig): void {
    this.validateProviderConfig(config);
    this.validateContractAddress(config);
    this.validateSignerConfig(config);
  }
}

/**
 * Main contract class that provides unified access to Autonity and Oracle contracts.
 * This class serves as the primary entry point for interacting with the Autonity blockchain,
 * handling provider management, wallet management, and contract instantiation.
 *
 * @class Contract
 * @example
 * ```typescript
 * // Using RPC URL and private key
 * const contract = new Contract({
 *   rpcUrl: "https://rpc.autonity.org",
 *   contractAddress: "0x1234567890123456789012345678901234567890",
 *   privateKey: "0xabcdef..."
 * });
 *
 * // Using existing provider and signer
 * const contract = new Contract({
 *   provider: existingProvider,
 *   contractAddress: "0x1234567890123456789012345678901234567890",
 *   signer: existingSigner
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
  /** The Autonity contract client instance */
  public readonly autonity: AutonityClient;

  /** The Oracle contract client instance */
  public readonly oracle: OracleClient;

  /** The underlying ethers Provider instance */
  public readonly provider: ethers.Provider;

  /** @private Provider management utility */
  private readonly providerManager: ProviderManager;

  /** @private Wallet management utility */
  private readonly walletManager: WalletManager;

  /** @private Contract registry for creating contract instances */
  private readonly contractRegistry: ContractRegistry;

  /**
   * Static factory method to create a new Contract instance.
   * This method is provided for consistency with async patterns,
   * though the current implementation is synchronous.
   *
   * @static
   * @param {ContractConfig} config - Configuration for the contract instance
   * @returns {Promise<Contract>} A promise that resolves to a new Contract instance
   * @example
   * ```typescript
   * const contract = await Contract.create({
   *   rpcUrl: "https://rpc.autonity.org",
   *   contractAddress: "0x1234567890123456789012345678901234567890",
   *   privateKey: "0xabcdef..."
   * });
   * ```
   */
  static async create(config: ContractConfig): Promise<Contract> {
    return new Contract(config);
  }

  /**
   * Creates a new Contract instance with the provided configuration.
   * Initializes all necessary managers and contract clients.
   *
   * @param {ContractConfig} config - Configuration for the contract instance
   * @throws {ConfigurationError} When configuration is invalid or initialization fails
   * @example
   * ```typescript
   * const contract = new Contract({
   *   rpcUrl: "https://rpc.autonity.org",
   *   contractAddress: "0x1234567890123456789012345678901234567890",
   *   privateKey: "0xabcdef..."
   * });
   * ```
   */
  constructor(config: ContractConfig) {
    ConfigValidator.validateAll(config);

    try {
      // Initialize core managers
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

      // Create contract instances using registry
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
    } catch (error) {
      throw new ConfigurationError(
        "Failed to initialize Contract instance",
        error instanceof Error ? error : undefined
      );
    }
  }
}

export default Contract;
