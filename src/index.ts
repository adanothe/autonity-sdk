import { ethers } from "ethers";
import { AutonityClient, OracleClient } from "./contracts";
import {
  ProviderManager,
  WalletManager,
  ContractRegistry,
  ConfigurationError,
  NetworkError,
  ContractClient,
  TypeSafeContractClientConstructor,
} from "./core";

// Re-export for backward compatibility and convenience
export { AutonityClient, OracleClient } from "./contracts";
export * from "./type";
export * from "./core";

export interface ContractConfig {
  // Provider options (choose one)
  rpcUrl?: string;
  provider?: ethers.Provider;

  // Contract address
  contractAddress: string;

  // Signer options (optional)
  privateKey?: string;
  signer?: ethers.Signer;

  // Connection options
  testConnection?: boolean; // Default: true
}

export class Contract {
  public readonly autonity: AutonityClient;
  public readonly oracle: OracleClient;
  public readonly provider: ethers.Provider;

  private readonly providerManager: ProviderManager;
  private readonly walletManager: WalletManager;
  private readonly contractRegistry: ContractRegistry;
  private readonly defaultContractAddress: string;

  /**
   * Create a new Contract instance with connection testing
   */
  static async create(config: ContractConfig): Promise<Contract> {
    const contract = new Contract(config);

    // Test the connection by default unless explicitly disabled
    if (config.testConnection !== false) {
      try {
        await contract.providerManager.testConnection();
      } catch (error) {
        throw new NetworkError(
          "Failed to establish connection during initialization",
          error instanceof Error ? error : undefined
        );
      }
    }

    return contract;
  }

  /**
   * Create a new Contract instance
   * @param config - Configuration object for the contract
   * @param config.rpcUrl - RPC URL for blockchain connection (either this or provider required)
   * @param config.provider - Ethers provider instance (either this or rpcUrl required)
   * @param config.contractAddress - The contract address (required)
   * @param config.privateKey - Private key for signing transactions (optional)
   * @param config.signer - Ethers signer instance (optional)
   * @param config.testConnection - Whether to test connection on initialization (default: true)
   */
  constructor(config: ContractConfig) {
    this.validateConfig(config);

    // Store default contract address
    this.defaultContractAddress = config.contractAddress;

    try {
      // Initialize provider manager
      this.providerManager = new ProviderManager({
        rpcUrl: config.rpcUrl,
        provider: config.provider,
      });

      this.provider = this.providerManager.provider;

      // Initialize wallet manager
      this.walletManager = new WalletManager({
        provider: this.provider,
        privateKey: config.privateKey,
        signer: config.signer,
      });

      // Initialize contract registry
      this.contractRegistry = new ContractRegistry();

      // Create contract instances
      this.autonity = this.contractRegistry.createContract<AutonityClient>(
        "autonity",
        this.provider,
        config.contractAddress,
        this.walletManager.signer
      );

      this.oracle = this.contractRegistry.createContract<OracleClient>(
        "oracle",
        this.provider,
        config.contractAddress,
        this.walletManager.signer
      );
    } catch (error) {
      throw new ConfigurationError(
        "Failed to initialize Contract instance",
        error instanceof Error ? error : undefined
      );
    }
  }

  private validateConfig(config: ContractConfig): void {
    // Must have either rpcUrl or provider
    if (!config.rpcUrl && !config.provider) {
      throw new ConfigurationError(
        "Either 'rpcUrl' or 'provider' must be specified"
      );
    }

    // Cannot have both rpcUrl and provider
    if (config.rpcUrl && config.provider) {
      throw new ConfigurationError(
        "Cannot specify both 'rpcUrl' and 'provider', choose one"
      );
    }

    // Contract address is required
    if (!config.contractAddress) {
      throw new ConfigurationError("Contract address is required");
    }

    if (!ethers.isAddress(config.contractAddress)) {
      throw new ConfigurationError("Invalid contract address format");
    }

    // Cannot have both privateKey and signer
    if (config.privateKey && config.signer) {
      throw new ConfigurationError(
        "Cannot specify both 'privateKey' and 'signer', choose one"
      );
    }
  }

  /**
   * Check if the provider connection is working
   */
  async isConnected(): Promise<boolean> {
    return this.providerManager.isConnected();
  }

  /**
   * Get the current network information
   */
  async getNetwork(): Promise<ethers.Network> {
    return this.providerManager.getNetwork();
  }

  /**
   * Get the current block number
   */
  async getBlockNumber(): Promise<number> {
    return this.providerManager.getBlockNumber();
  }

  /**
   * Get wallet address if available
   */
  async getWalletAddress(): Promise<string | null> {
    return this.walletManager.getAddress();
  }

  /**
   * Get wallet balance if available
   */
  async getWalletBalance(): Promise<bigint | null> {
    return this.walletManager.getBalance();
  }

  /**
   * Check if wallet/signer is available
   */
  hasWallet(): boolean {
    return this.walletManager.hasSigner;
  }

  /**
   * Register a new contract type for future instances (type-safe)
   */
  registerContract<T extends ContractClient>(definition: {
    name: string;
    clientClass: TypeSafeContractClientConstructor<T>;
  }): void {
    this.contractRegistry.registerContract(definition);
  }

  /**
   * Register a new contract type (legacy method for backward compatibility)
   */
  registerContractLegacy<T>(definition: {
    name: string;
    clientClass: any;
  }): void {
    this.contractRegistry.registerContractLegacy(definition);
  }

  /**
   * Create a new contract instance of registered type
   */
  createContract<T>(contractName: string, contractAddress?: string): T {
    const address = contractAddress || this.defaultContractAddress;
    return this.contractRegistry.createContract<T>(
      contractName,
      this.provider,
      address,
      this.walletManager.signer
    );
  }

  /**
   * Get list of registered contract types
   */
  getRegisteredContracts(): string[] {
    return this.contractRegistry.getRegisteredContracts();
  }

  /**
   * Clean up resources properly
   */
  async dispose(): Promise<void> {
    // Clear contract instances first
    this.contractRegistry.clearInstances();

    // Properly dispose provider if needed
    await this.providerManager.dispose();
  }

  /**
   * Synchronous cleanup for immediate resource clearing
   */
  disposeSync(): void {
    this.contractRegistry.clearInstances();
    // Note: Provider disposal is async, use dispose() for complete cleanup
  }
}

export default Contract;
