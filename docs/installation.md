---
layout: default
title: Installation & Setup
nav_order: 1
---

# Installation & Setup
{: .no_toc }

Complete guide to installing and configuring the Autonity SDK.
{: .fs-6 .fw-300 }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Requirements

- **Node.js**: Version 16.0.0 or higher
- **npm**: Version 7.0.0 or higher (or yarn equivalent)
- **TypeScript**: Version 4.5.0 or higher (optional, for TypeScript projects)

## Installation

### Using npm

```bash
npm install autonity-sdk
```

### Using yarn

```bash
yarn add autonity-sdk
```

### Using pnpm

```bash
pnpm add autonity-sdk
```

## Peer Dependencies

The Autonity SDK has a peer dependency on `ethers`:

```bash
npm install ethers@^6.13.2
```

If you're using TypeScript, you might also want to install type definitions:

```bash
npm install --save-dev @types/node
```

## Quick Start

### Basic Setup

```typescript
import { Contract } from 'autonity-sdk';

// Create a contract instance
const contract = new Contract({
  rpcUrl: 'https://rpc.autonity.org',
  contractAddress: '0x...' // Autonity contract address
});

// Use the contract
const validators = await contract.autonity.getValidators();
console.log('Validators:', validators);
```

### With Environment Variables

Create a `.env` file in your project root:

```env
AUTONITY_RPC_URL=https://rpc.autonity.org
AUTONITY_CONTRACT_ADDRESS=0x...
PRIVATE_KEY=0x... # Optional, for transactions
```

Then use it in your code:

```typescript
import { Contract } from 'autonity-sdk';
import dotenv from 'dotenv';

dotenv.config();

const contract = new Contract({
  rpcUrl: process.env.AUTONITY_RPC_URL!,
  contractAddress: process.env.AUTONITY_CONTRACT_ADDRESS!,
  privateKey: process.env.PRIVATE_KEY // Optional
});
```

## Configuration Options

### Basic Configuration

```typescript
const contract = new Contract({
  rpcUrl: 'https://rpc.autonity.org',
  contractAddress: '0x...'
});
```

### With Custom Provider

```typescript
import { ethers } from 'ethers';
import { Contract } from 'autonity-sdk';

const provider = new ethers.JsonRpcProvider('https://rpc.autonity.org');
const contract = new Contract({
  provider: provider,
  contractAddress: '0x...'
});
```

### With Signer for Transactions

```typescript
// Using private key
const contract = new Contract({
  rpcUrl: 'https://rpc.autonity.org',
  contractAddress: '0x...',
  privateKey: '0x...'
});

// Using custom signer
const provider = new ethers.JsonRpcProvider('https://rpc.autonity.org');
const signer = new ethers.Wallet('0x...', provider);

const contract = new Contract({
  provider: provider,
  contractAddress: '0x...',
  signer: signer
});
```

### Configuration Reference

| Option | Type | Required | Description |
|--------|------|----------|-------------|
| `rpcUrl` | `string` | Yes* | RPC endpoint URL |
| `provider` | `ethers.Provider` | Yes* | Pre-configured ethers provider |
| `contractAddress` | `string` | Yes | Autonity contract address |
| `privateKey` | `string` | No | Private key for transaction signing |
| `signer` | `ethers.Signer` | No | Pre-configured ethers signer |

*Either `rpcUrl` or `provider` must be specified.

## Network Configuration

### Mainnet

```typescript
const contract = new Contract({
  rpcUrl: 'https://rpc.autonity.org',
  contractAddress: '0x...' // Mainnet contract address
});
```

### Testnet

```typescript
const contract = new Contract({
  rpcUrl: 'https://rpc-testnet.autonity.org',
  contractAddress: '0x...' // Testnet contract address
});
```

### Local Development

```typescript
const contract = new Contract({
  rpcUrl: 'http://localhost:8545',
  contractAddress: '0x...' // Local contract address
});
```

## Framework Integration

### Next.js

Create `lib/autonity.ts`:

```typescript
import { Contract } from 'autonity-sdk';

export const autonityContract = new Contract({
  rpcUrl: process.env.NEXT_PUBLIC_RPC_URL!,
  contractAddress: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!
});
```

Use in pages:

```typescript
// pages/validators.tsx
import { autonityContract } from '../lib/autonity';
import { GetServerSideProps } from 'next';

export default function ValidatorsPage({ validators }: { validators: string[] }) {
  return (
    <div>
      <h1>Validators</h1>
      <ul>
        {validators.map(validator => (
          <li key={validator}>{validator}</li>
        ))}
      </ul>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const validators = await autonityContract.autonity.getValidators();
  return { props: { validators } };
};
```

### React

Create a hook for contract access:

```typescript
// hooks/useAutonity.ts
import { useMemo } from 'react';
import { Contract } from 'autonity-sdk';

export function useAutonity() {
  return useMemo(() => new Contract({
    rpcUrl: process.env.REACT_APP_RPC_URL!,
    contractAddress: process.env.REACT_APP_CONTRACT_ADDRESS!
  }), []);
}
```

Use in components:

```typescript
// components/ValidatorList.tsx
import { useEffect, useState } from 'react';
import { useAutonity } from '../hooks/useAutonity';

export function ValidatorList() {
  const contract = useAutonity();
  const [validators, setValidators] = useState<string[]>([]);

  useEffect(() => {
    contract.autonity.getValidators()
      .then(setValidators)
      .catch(console.error);
  }, [contract]);

  return (
    <ul>
      {validators.map(validator => (
        <li key={validator}>{validator}</li>
      ))}
    </ul>
  );
}
```

### Express.js

```typescript
// server.ts
import express from 'express';
import { Contract } from 'autonity-sdk';

const app = express();
const contract = new Contract({
  rpcUrl: process.env.RPC_URL!,
  contractAddress: process.env.CONTRACT_ADDRESS!
});

app.get('/api/validators', async (req, res) => {
  try {
    const validators = await contract.autonity.getValidators();
    res.json({ validators });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

## TypeScript Configuration

### tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "lib": ["ES2020"],
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "moduleResolution": "node"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

### Type-only Imports

For better performance with bundlers:

```typescript
import type { AutonityTypes, OracleTypes } from 'autonity-sdk';
import { Contract } from 'autonity-sdk';

const contract = new Contract({...});

// Types are available for annotation
const validators: AutonityTypes.Validator[] = await contract.autonity.getValidators();
```

## Build Tools

### Webpack

If using Webpack, you might need to configure polyfills:

```javascript
// webpack.config.js
module.exports = {
  resolve: {
    fallback: {
      "crypto": require.resolve("crypto-browserify"),
      "stream": require.resolve("stream-browserify"),
      "buffer": require.resolve("buffer")
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
    })
  ]
};
```

### Vite

For Vite projects:

```javascript
// vite.config.js
import { defineConfig } from 'vite';
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';

export default defineConfig({
  define: {
    global: 'globalThis',
  },
  optimizeDeps: {
    include: ['buffer'],
  },
  plugins: [
    NodeGlobalsPolyfillPlugin({
      buffer: true
    })
  ]
});
```

## Troubleshooting

### Common Issues

1. **Module not found errors**: Make sure all dependencies are installed
2. **BigInt serialization**: Use `JSON.stringify(value, (key, val) => typeof val === 'bigint' ? val.toString() : val)`
3. **Buffer not defined**: Install buffer polyfill for browser environments
4. **Network errors**: Check RPC URL and network connectivity

### Debug Mode

Enable debug logging:

```typescript
import { Contract } from 'autonity-sdk';

// Enable debug mode (if available)
const contract = new Contract({
  rpcUrl: 'https://rpc.autonity.org',
  contractAddress: '0x...',
  // debug: true // If supported
});
```

### Environment Variables Validation

```typescript
function validateEnv() {
  const required = ['AUTONITY_RPC_URL', 'AUTONITY_CONTRACT_ADDRESS'];
  
  for (const key of required) {
    if (!process.env[key]) {
      throw new Error(`Missing required environment variable: ${key}`);
    }
  }
}

validateEnv();
```

## Next Steps

1. Read the [Basic Usage](examples/basic-usage.md) guide
2. Explore the [API Reference](api/)
3. Check out [Advanced Usage](examples/advanced-usage.md) patterns
4. Learn about [Error Handling](examples/error-handling.md)
