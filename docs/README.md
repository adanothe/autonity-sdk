---
layout: default
title: Home
nav_order: 1
description: "Autonity SDK - TypeScript library for interacting with the Autonity blockchain"
permalink: /
---

# Autonity SDK Documentation
{: .fs-9 }

A comprehensive TypeScript library for interacting with the Autonity blockchain network.
{: .fs-6 .fw-300 }

[Get started now](#quick-start){: .btn .btn-primary .fs-5 .mb-4 .mb-md-0 .mr-2 } [View it on GitHub](https://github.com/adanothe/autonity-sdk){: .btn .fs-5 .mb-4 .mb-md-0 }

---

## Features

- **🔥 Type-safe** - Full TypeScript support with comprehensive type definitions
- **🚀 Easy to use** - Simple, intuitive API for all Autonity operations
- **📦 Modular** - Import only what you need
- **🛠️ Well-tested** - Comprehensive test coverage
- **📚 Well-documented** - Extensive documentation and examples

## Quick Start

### Installation

Install the Autonity SDK using npm or yarn:

```bash
npm install autonity-sdk
```

```bash
yarn add autonity-sdk
```

### Basic Usage

```typescript
import { Contract } from 'autonity-sdk';

// Create a contract instance
const contract = new Contract({
  rpcUrl: 'https://rpc.autonity.org',
  contractAddress: '0x...' // Autonity contract address
});

// Get validator information
const validators = await contract.autonity.getValidators();
console.log('Validators:', validators);

// Get oracle data
const latestRound = await contract.oracle.getLatestRoundData('USD-ATN');
console.log('Latest round data:', latestRound);
```

## Configuration

The Autonity SDK supports various configuration options:

### Basic Configuration

```typescript
import { Contract } from 'autonity-sdk';

const contract = new Contract({
  rpcUrl: 'https://rpc.autonity.org',
  contractAddress: '0x...'
});
```

### With Signer (for transactions)

```typescript
import { Contract } from 'autonity-sdk';
import { ethers } from 'ethers';

// Using private key
const contract = new Contract({
  rpcUrl: 'https://rpc.autonity.org',
  contractAddress: '0x...',
  privateKey: '0x...'
});

// Using existing provider and signer
const provider = new ethers.JsonRpcProvider('https://rpc.autonity.org');
const signer = new ethers.Wallet('0x...', provider);

const contract = new Contract({
  provider: provider,
  contractAddress: '0x...',
  signer: signer
});
```

### Configuration Options

| Option | Type | Required | Description |
|--------|------|----------|-------------|
| `rpcUrl` | `string` | Yes* | RPC endpoint URL |
| `provider` | `ethers.Provider` | Yes* | Pre-configured ethers provider |
| `contractAddress` | `string` | Yes | Autonity contract address |
| `privateKey` | `string` | No | Private key for transaction signing |
| `signer` | `ethers.Signer` | No | Pre-configured ethers signer |

*Either `rpcUrl` or `provider` must be specified.

## API Overview

### Core Classes

- **[Contract](api/contract.md)** - Main entry point for interacting with Autonity contracts
- **[AutonityClient](api/autonity.md)** - Client for Autonity protocol operations  
- **[OracleClient](api/oracle.md)** - Client for Oracle price feed operations

### Core Utilities

- **[ProviderManager](api/provider-manager.md)** - Manages Ethereum providers
- **[WalletManager](api/wallet-manager.md)** - Manages wallet and signer instances
- **[ContractRegistry](api/contract-registry.md)** - Registry for contract instances
- **[ValidationUtils](api/validation-utils.md)** - Validation utilities and helpers

## Examples

### Reading Blockchain Data

```typescript
// Get committee information
const committee = await contract.autonity.getCommittee();

// Get validator details
const validator = await contract.autonity.getValidator('0x...');

// Get latest oracle price
const priceData = await contract.oracle.getLatestRoundData('USD-ATN');
```

### Sending Transactions

```typescript
// Bond to a validator (requires signer)
const tx = await contract.autonity.bond('0x...', { 
  value: ethers.parseEther('1.0') 
});
await tx.wait();

// Unbond from validator
const unbondTx = await contract.autonity.unbond('0x...', ethers.parseEther('0.5'));
await unbondTx.wait();
```

### Event Listening

```typescript
// Listen for new epoch events
contract.autonity.contract.on('NewEpoch', (epochId, blockNumber) => {
  console.log(`New epoch ${epochId} at block ${blockNumber}`);
});

// Listen for bonding events
contract.autonity.contract.on('BondingRewarded', (validator, delegator, amount) => {
  console.log(`Bonding reward: ${amount} for delegator ${delegator}`);
});
```

## Error Handling

The SDK provides comprehensive error handling:

```typescript
import { ConfigurationError, ContractCallError } from 'autonity-sdk';

try {
  const validators = await contract.autonity.getValidators();
} catch (error) {
  if (error instanceof ConfigurationError) {
    console.error('Configuration error:', error.message);
  } else if (error instanceof ContractCallError) {
    console.error('Contract call failed:', error.message);
  } else {
    console.error('Unexpected error:', error);
  }
}
```

## TypeScript Support

The SDK is written in TypeScript and provides full type safety:

```typescript
import { AutonityTypes, OracleTypes } from 'autonity-sdk';

// All return types are properly typed
const validators: AutonityTypes.Validator[] = await contract.autonity.getValidators();
const priceData: OracleTypes.RoundData = await contract.oracle.getLatestRoundData('USD-ATN');
```

## Contributing

We welcome contributions! Please see our [Contributing Guide](https://github.com/adanothe/autonity-sdk/blob/main/CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/adanothe/autonity-sdk/blob/main/LICENSE) file for details.

---

*This documentation is automatically generated from TypeScript source code using JSDoc comments.*
