import { ethers } from "ethers";
import { AutonityClient, OracleClient, AuctioneerClient } from "../contracts";
import { ContractError, ValidationError } from "./errors";
import { ValidationUtils } from "./validation-utils";

// Base interface that all contract clients should implement
export interface ContractClient {
}

export interface ContractClientConstructor<
  T extends ContractClient = ContractClient
> {
  new (
    provider: ethers.Provider,
    contractAddress: string,
    signer?: ethers.Signer
  ): T;
}

export interface ContractDefinition<T extends ContractClient = ContractClient> {
  name: string;
  clientClass: ContractClientConstructor<T>;
  contractAddress?: string; // Optional: can be overridden per contract
}

// Configuration for default contracts
const DEFAULT_CONTRACTS: ContractDefinition[] = [
  {
    name: "autonity",
    clientClass: AutonityClient as ContractClientConstructor<AutonityClient>,
  },
  {
    name: "oracle",
    clientClass: OracleClient as ContractClientConstructor<OracleClient>,
  },
  {
    name: "auctioneer",
    clientClass: AuctioneerClient as ContractClientConstructor<AuctioneerClient>,
  },
];

// Contract-specific validation utilities
class ContractValidationUtils {
  static validateDefinition<T extends ContractClient>(
    definition: ContractDefinition<T>
  ): void {
    ValidationUtils.validateRequiredString(
      definition.name,
      "Contract definition name"
    );
    ValidationUtils.validateRequiredFunction(
      definition.clientClass,
      "Contract definition clientClass"
    );
  }

  static validateNotRegistered(
    contractName: string,
    contracts: Map<string, ContractDefinition>
  ): void {
    if (contracts.has(contractName)) {
      throw new ContractError(
        `Contract '${contractName}' is already registered`,
        contractName
      );
    }
  }
}

export class ContractRegistry {
  private contracts = new Map<string, ContractDefinition>();
  private instances = new Map<string, ContractClient>();

  constructor() {
    // Register default contracts
    DEFAULT_CONTRACTS.forEach((definition) => {
      this.registerContract(definition);
    });
  }

  /**
   * Register a new contract type with validation
   */
  registerContract<T extends ContractClient>(
    definition: ContractDefinition<T>
  ): void {
    ContractValidationUtils.validateDefinition(definition);
    ContractValidationUtils.validateNotRegistered(
      definition.name,
      this.contracts
    );

    this.contracts.set(definition.name, definition as ContractDefinition);
  }

  /**
   * Create contract instance with validation and error handling
   */
  createContract<T extends ContractClient>(
    contractName: string,
    provider: ethers.Provider,
    contractAddress: string,
    signer?: ethers.Signer
  ): T {
    const definition = this.contracts.get(contractName);
    if (!definition) {
      throw new ContractError(
        `Contract '${contractName}' is not registered`,
        contractName
      );
    }

    ValidationUtils.validateAddress(contractAddress, "contractAddress");

    try {
      const instance = new definition.clientClass(
        provider,
        contractAddress,
        signer
      ) as T;

      this.instances.set(`${contractName}:${contractAddress}`, instance);
      return instance;
    } catch (error) {
      throw new ContractError(
        `Failed to create '${contractName}' contract instance`,
        contractName,
        error instanceof Error ? error : undefined
      );
    }
  }

  /**
   * Get registered contract names
   */
  getRegisteredContracts(): string[] {
    return Array.from(this.contracts.keys());
  }

  /**
   * Check if contract is registered
   */
  isRegistered(contractName: string): boolean {
    return this.contracts.has(contractName);
  }

  /**
   * Unregister a contract type
   */
  unregisterContract(contractName: string): boolean {
    return this.contracts.delete(contractName);
  }

  /**
   * Get contract definition
   */
  getContractDefinition(contractName: string): ContractDefinition | undefined {
    return this.contracts.get(contractName);
  }

  /**
   * Clear all instances (useful for cleanup)
   */
  clearInstances(): void {
    this.instances.clear();
  }
}
