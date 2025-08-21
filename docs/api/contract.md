---
layout: default
title: Contract
parent: API Reference
nav_order: 1
---

# Contract
{: .no_toc }

Main entry point for interacting with Autonity contracts. Provides unified access to both Autonity and Oracle functionality.
{: .fs-6 .fw-300 }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## ConfigValidator

Configuration validation utilities for Contract instances. Contains static methods to validate different aspects of ContractConfig.

**Signature:**
```typescript
class ConfigValidator {
 {
```

### Methods

#### validateProviderConfig

Validates that either rpcUrl or provider is specified, but not both.

**Signature:**
```typescript
static validateProviderConfig(config: ContractConfig): void {
```

**Parameters:**

| Parameter | Type | Description | Optional |
|-----------|------|-------------|----------|
| `config` | `ContractConfig` | - |  |

**Returns:** `void`

#### validateContractAddress

Validates that the contract address is a valid Ethereum address.

**Signature:**
```typescript
static validateContractAddress(config: ContractConfig): void {
```

**Parameters:**

| Parameter | Type | Description | Optional |
|-----------|------|-------------|----------|
| `config` | `ContractConfig` | - |  |

**Returns:** `void`

#### validateSignerConfig

Validates that privateKey and signer are not both specified.

**Signature:**
```typescript
static validateSignerConfig(config: ContractConfig): void {
```

**Parameters:**

| Parameter | Type | Description | Optional |
|-----------|------|-------------|----------|
| `config` | `ContractConfig` | - |  |

**Returns:** `void`

#### validateAll

Performs complete validation of the configuration.

**Signature:**
```typescript
static validateAll(config: ContractConfig): void {
```

**Parameters:**

| Parameter | Type | Description | Optional |
|-----------|------|-------------|----------|
| `config` | `ContractConfig` | - |  |

**Returns:** `void`

## Contract

Main contract class that provides unified access to Autonity and Oracle contracts. This class serves as the primary entry point for interacting with the Autonity blockchain, handling provider management, wallet management, and contract instantiation.

**Signature:**
```typescript
export class Contract {
 {
```

### Properties

| Property | Type | Description | Optional | Readonly |
|----------|------|-------------|----------|----------|
| `autonity` | `AutonityClient` | The Autonity contract client instance |  | ✓ |
| `oracle` | `OracleClient` | The Oracle contract client instance |  | ✓ |
| `provider` | `ethers.Provider` | The underlying ethers Provider instance |  | ✓ |
| `providerManager` | `ProviderManager` | - |  | ✓ |
| `walletManager` | `WalletManager` | - |  | ✓ |
| `contractRegistry` | `ContractRegistry` | - |  | ✓ |

### Methods

#### create

Static factory method to create a new Contract instance. This method is provided for consistency with async patterns, though the current implementation is synchronous.

**Signature:**
```typescript
static async create(config: ContractConfig): Promise<Contract> {
```

**Parameters:**

| Parameter | Type | Description | Optional |
|-----------|------|-------------|----------|
| `config` | `ContractConfig` | - |  |

**Returns:** `{Promise<Contract>} A promise that resolves to a new Contract instance
   *`

**Example:**

```typescript
const contract = await Contract.create({
     rpcUrl: "https://rpc.autonity.org",
     contractAddress: "0x1234567890123456789012345678901234567890",
     privateKey: "0xabcdef..."
   });
   
   /
```

### Examples

```typescript
// Using RPC URL and private key
 const contract = new Contract({
   rpcUrl: "https://rpc.autonity.org",
   contractAddress: "0x1234567890123456789012345678901234567890",
   privateKey: "0xabcdef..."
 });
 
 // Using existing provider and signer
 const contract = new Contract({
   provider: existingProvider,
   contractAddress: "0x1234567890123456789012345678901234567890",
   signer: existingSigner
 });
 
 // Access Autonity contract methods
 const validators = await contract.autonity.getValidators();
 
 // Access Oracle contract methods
 const oracleData = await contract.oracle.getLatestRoundData();
 
 /
```

## ContractConfig

Configuration interface for creating Contract instances.

**Signature:**
```typescript
export interface ContractConfig {
 {
```

### Properties

| Property | Type | Description | Optional | Readonly |
|----------|------|-------------|----------|----------|
| `rpcUrl` | `string` | RPC URL for connecting to the blockchain network. Either rpcUrl or provider must be specified, but not both. | ✓ |  |
| `provider` | `ethers.Provider` | Pre-configured ethers Provider instance. Either rpcUrl or provider must be specified, but not both. | ✓ |  |
| `contractAddress` | `string` | The contract address for both Autonity and Oracle contracts. Must be a valid Ethereum address. |  |  |
| `privateKey` | `string` | Private key for creating a wallet signer. Optional - either privateKey or signer can be specified, but not both. | ✓ |  |
| `signer` | `ethers.Signer` | Pre-configured ethers Signer instance. Optional - either privateKey or signer can be specified, but not both. | ✓ |  |

### Examples

```typescript
const config: ContractConfig = {
   rpcUrl: "https://rpc.autonity.org",
   contractAddress: "0x1234567890123456789012345678901234567890",
   privateKey: "0xabcdef..."
 };
 
 /
```

