# Autonity SDK

A TypeScript SDK for interacting with the Autonity network, providing a simple and type-safe interface for smart contract interactions.

## Installation

```bash
npm install autonity-sdk
```

## Overview

The Autonity SDK provides a unified `Contract` class that simplifies interaction with Autonity and Oracle contracts on the Autonity network. The SDK handles provider management, wallet integration, and contract instantiation with built-in error handling and connection testing.

## Quick Start

### Basic Usage

```typescript
import { Contract } from 'autonity-sdk';

// Create a contract instance with RPC URL
const contract = await Contract.create({
  rpcUrl: 'https://rpc1.bakerloo.autonity.org',
  contractAddress: '0x47e9Fbef8C83A1714F1951F142132E6e90F5fa5D'
});

// Get network information
const network = await contract.getNetwork();
console.log(`Connected to: ${network.name}`);

// Check connection status
const isConnected = await contract.isConnected();
console.log(`Connection status: ${isConnected}`);
```

### With Wallet Integration

```typescript
import { Contract } from 'autonity-sdk';

// Create contract with private key for transaction signing
const contract = await Contract.create({
  rpcUrl: 'https://rpc1.bakerloo.autonity.org',
  contractAddress: '0x47e9Fbef8C83A1714F1951F142132E6e90F5fa5D',
  privateKey: 'your-private-key-here'
});

// Check wallet address and balance
const address = await contract.getWalletAddress();
const balance = await contract.getWalletBalance();
console.log(`Wallet: ${address}, Balance: ${balance} wei`);
```

## Configuration Options

### ContractConfig Interface

```typescript
interface ContractConfig {
  // Provider options (choose one)
  rpcUrl?: string;           // RPC endpoint URL
  provider?: ethers.Provider; // Custom ethers provider

  // Contract address (required)
  contractAddress: string;   // Smart contract address

  // Signer options (optional, choose one)
  privateKey?: string;       // Private key for signing
  signer?: ethers.Signer;    // Custom ethers signer

  // Connection options
  testConnection?: boolean;  // Test connection on init (default: true)
}
```

### Configuration Examples

#### Using RPC URL
```typescript
const contract = await Contract.create({
  rpcUrl: 'https://rpc1.bakerloo.autonity.org',
  contractAddress: '0x47e9Fbef8C83A1714F1951F142132E6e90F5fa5D'
});
```

#### Using Custom Provider
```typescript
import { ethers } from 'ethers';

const provider = new ethers.JsonRpcProvider('https://rpc1.bakerloo.autonity.org');
const contract = await Contract.create({
  provider: provider,
  contractAddress: '0x47e9Fbef8C83A1714F1951F142132E6e90F5fa5D'
});
```

#### With Custom Signer
```typescript
import { ethers } from 'ethers';

const provider = new ethers.JsonRpcProvider('https://rpc1.bakerloo.autonity.org');
const wallet = new ethers.Wallet('your-private-key', provider);

const contract = await Contract.create({
  provider: provider,
  contractAddress: '0x47e9Fbef8C83A1714F1951F142132E6e90F5fa5D',
  signer: wallet
});
```

#### Skip Connection Testing
```typescript
const contract = await Contract.create({
  rpcUrl: 'https://rpc1.bakerloo.autonity.org',
  contractAddress: '0x47e9Fbef8C83A1714F1951F142132E6e90F5fa5D',
  testConnection: false  // Skip initial connection test
});
```

## Built-in Contract Clients

The SDK comes with pre-configured contract clients for Autonity and Oracle contracts:

### Autonity Contract

```typescript
// Access Autonity contract methods
const totalSupply = await contract.autonity.totalSupply();
const validators = await contract.autonity.getValidators();

// If you have a signer, you can call state-changing methods
if (contract.hasWallet()) {
  const tx = await contract.autonity.transfer(recipientAddress, amount);
  await tx.wait();
}
```

### Oracle Contract

```typescript
// Access Oracle contract methods
const round = await contract.oracle.latestRound();
const roundData = await contract.oracle.getRoundData(round);

// Submit oracle data (requires signer)
if (contract.hasWallet()) {
  const tx = await contract.oracle.submit(round, data);
  await tx.wait();
}
```

## Contract Registry and Custom Contracts

The SDK supports registering and creating custom contract types:

### Registering Custom Contracts

```typescript
import { ContractClient } from 'autonity-sdk';

// Define your custom contract client
class MyCustomClient extends ContractClient {
  // Your custom contract methods here
}

// Register the contract type
contract.registerContract({
  name: 'myCustomContract',
  clientClass: MyCustomClient
});

// Create instances of your custom contract
const customContract = contract.createContract<MyCustomClient>('myCustomContract', customContractAddress);
```

## Network and Provider Methods

### Connection Management

```typescript
// Test if connection is working
const isConnected = await contract.isConnected();

// Get network information
const network = await contract.getNetwork();
console.log(`Chain ID: ${network.chainId}, Name: ${network.name}`);

// Get current block number
const blockNumber = await contract.getBlockNumber();
```

### Wallet Management

```typescript
// Check if wallet is available
const hasWallet = contract.hasWallet();

if (hasWallet) {
  // Get wallet address
  const address = await contract.getWalletAddress();
  
  // Get wallet balance
  const balance = await contract.getWalletBalance();
  
  console.log(`Address: ${address}`);
  console.log(`Balance: ${ethers.formatEther(balance)} ETH`);
}
```

## Error Handling

The SDK provides structured error handling with specific error types:

```typescript
import { Contract, ConfigurationError, NetworkError } from 'autonity-sdk';

try {
  const contract = await Contract.create({
    rpcUrl: 'https://invalid-url.com',
    contractAddress: '0x47e9Fbef8C83A1714F1951F142132E6e90F5fa5D'
  });
} catch (error) {
  if (error instanceof ConfigurationError) {
    console.error('Configuration error:', error.message);
  } else if (error instanceof NetworkError) {
    console.error('Network error:', error.message);
  } else {
    console.error('Unknown error:', error);
  }
}
```

### Common Error Types

- **ConfigurationError**: Invalid configuration parameters
- **NetworkError**: Network connection or RPC issues
- **ContractError**: Smart contract interaction errors

## Resource Management

### Proper Cleanup

```typescript
// Async cleanup (recommended)
await contract.dispose();

// Synchronous cleanup (immediate)
contract.disposeSync();
```

### Best Practices

```typescript
async function useContract() {
  let contract;
  
  try {
    contract = await Contract.create({
      rpcUrl: 'https://rpc1.bakerloo.autonity.org',
      contractAddress: '0x47e9Fbef8C83A1714F1951F142132E6e90F5fa5D'
    });
    
    // Use contract here
    const balance = await contract.autonity.totalSupply();
    return balance;
    
  } finally {
    // Always cleanup
    if (contract) {
      await contract.dispose();
    }
  }
}
```

## Advanced Usage

### Multiple Contract Addresses

```typescript
// Create contract with default address
const contract = await Contract.create({
  rpcUrl: 'https://rpc1.bakerloo.autonity.org',
  contractAddress: '0x47e9Fbef8C83A1714F1951F142132E6e90F5fa5D'
});

// Create instances for different addresses
const oracleContract = contract.createContract<OracleClient>('oracle', '0x...');
const autonityContract = contract.createContract<AutonityClient>('autonity', '0x...');
```

### Working with Transactions

```typescript
// For methods that change state, you need a wallet
const contract = await Contract.create({
  rpcUrl: 'https://rpc1.bakerloo.autonity.org',
  contractAddress: '0x47e9Fbef8C83A1714F1951F142132E6e90F5fa5D',
  privateKey: process.env.PRIVATE_KEY
});

// Submit a transaction
const tx = await contract.autonity.transfer(recipientAddress, amount);

// Wait for confirmation
const receipt = await tx.wait();
console.log(`Transaction confirmed in block ${receipt.blockNumber}`);
```

## Environment Variables

For security, store sensitive information in environment variables:

```bash
# .env file
PRIVATE_KEY=your-private-key-here
RPC_URL=https://rpc1.bakerloo.autonity.org
CONTRACT_ADDRESS=0x47e9Fbef8C83A1714F1951F142132E6e90F5fa5D
```

```typescript
import dotenv from 'dotenv';
dotenv.config();

const contract = await Contract.create({
  rpcUrl: process.env.RPC_URL,
  contractAddress: process.env.CONTRACT_ADDRESS,
  privateKey: process.env.PRIVATE_KEY
});
```

## TypeScript Support

The SDK is fully typed and provides excellent TypeScript support:

```typescript
import { Contract, ContractConfig, AutonityClient, OracleClient } from 'autonity-sdk';

// Full type safety
const config: ContractConfig = {
  rpcUrl: 'https://rpc1.bakerloo.autonity.org',
  contractAddress: '0x47e9Fbef8C83A1714F1951F142132E6e90F5fa5D'
};

const contract: Contract = await Contract.create(config);

// Type-safe contract interactions
const autonity: AutonityClient = contract.autonity;
const oracle: OracleClient = contract.oracle;
```

## Contributing

Contributions are welcome! Please read our contributing guidelines and submit pull requests to our [GitHub repository](https://github.com/adanothe/autonity-sdk).

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For issues and questions:
- GitHub Issues: [https://github.com/adanothe/autonity-sdk/issues](https://github.com/adanothe/autonity-sdk/issues)
- Documentation: [https://github.com/adanothe/autonity-sdk#readme](https://github.com/adanothe/autonity-sdk#readme)
