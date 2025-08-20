import { ethers } from "ethers";
import { AutonityClient, OracleClient } from "../contracts";
import { ContractError, ValidationError } from "./errors";

export interface ContractClientConstructor<T = any> {
  new (provider: ethers.Provider, contractAddress: string, signer?: ethers.Signer): T;
}

export interface ContractDefinition<T = any> {
  name: string;
  clientClass: ContractClientConstructor<T>;
  contractAddress?: string; // Optional: can be overridden per contract
}

// Base interface that all contract clients should implement
export interface ContractClient {
  // This ensures all contract clients have a consistent interface
}

// Type-safe contract client constructor with proper constraints
export interface TypeSafeContractClientConstructor<T extends ContractClient> {
  new (provider: ethers.Provider, contractAddress: string, signer?: ethers.Signer): T;
}

export class ContractRegistry {
  private contracts = new Map<string, ContractDefinition<any>>();
  private instances = new Map<string, any>();

  constructor() {
    // Register default contracts
    this.registerContract({
      name: 'autonity',
      clientClass: AutonityClient,
    });

    this.registerContract({
      name: 'oracle',
      clientClass: OracleClient,
    });
  }

  /**
   * Register a new contract type with type safety
   */
  registerContract<T extends ContractClient>(definition: {
    name: string;
    clientClass: TypeSafeContractClientConstructor<T>;
    contractAddress?: string;
  }): void {
    if (!definition.name || typeof definition.name !== 'string') {
      throw new ValidationError("Contract definition must have a valid name", "name");
    }

    if (!definition.clientClass || typeof definition.clientClass !== 'function') {
      throw new ValidationError("Contract definition must have a valid clientClass", "clientClass");
    }

    if (this.contracts.has(definition.name)) {
      throw new ContractError(`Contract '${definition.name}' is already registered`, definition.name);
    }
    
    this.contracts.set(definition.name, definition as ContractDefinition);
  }

  /**
   * Register a new contract type (legacy method for backward compatibility)
   */
  registerContractLegacy<T>(definition: ContractDefinition<T>): void {
    if (!definition.name || typeof definition.name !== 'string') {
      throw new ValidationError("Contract definition must have a valid name", "name");
    }

    if (!definition.clientClass || typeof definition.clientClass !== 'function') {
      throw new ValidationError("Contract definition must have a valid clientClass", "clientClass");
    }

    if (this.contracts.has(definition.name)) {
      throw new ContractError(`Contract '${definition.name}' is already registered`, definition.name);
    }
    
    this.contracts.set(definition.name, definition);
  }

  /**
   * Create contract instance
   */
  createContract<T>(
    contractName: string,
    provider: ethers.Provider,
    contractAddress: string,
    signer?: ethers.Signer
  ): T {
    const definition = this.contracts.get(contractName);
    if (!definition) {
      throw new ContractError(`Contract '${contractName}' is not registered`, contractName);
    }

    if (!ethers.isAddress(contractAddress)) {
      throw new ValidationError(`Invalid contract address: ${contractAddress}`, "contractAddress");
    }

    try {
      const instance = new definition.clientClass(provider, contractAddress, signer);
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
  getContractDefinition(contractName: string): ContractDefinition<any> | undefined {
    return this.contracts.get(contractName);
  }

  /**
   * Clear all instances (useful for cleanup)
   */
  clearInstances(): void {
    this.instances.clear();
  }
}
