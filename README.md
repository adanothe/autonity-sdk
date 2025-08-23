## Quick Start

### Installation

Install the Autonity SDK using npm, yarn or pnpm:

```bash
npm install autonity-sdk
````

```bash
yarn add autonity-sdk
```

```bash
pnpm add autonity-sdk ethers
# Note: pnpm does not automatically install peer dependencies, so you also need to install ethers:
```


### Basic Usage (View-only)

```typescript
import { Contract } from 'autonity-sdk';

// Create a contract instance (read-only)
const contract = new Contract({
  rpcUrl: "https://rpc.autonity.org",
  contractAddress: "0x..." 
});
```

---

### Using Private Key (Automatic Signer)

```typescript
import { Contract } from 'autonity-sdk';

// Create a contract instance with private key
const contract = new Contract({
  rpcUrl: "https://rpc.autonity.org",
  contractAddress: "0x...",
  privateKey: "0xYOUR_PRIVATE_KEY"
});

```

---

### Using Custom Signer

```typescript
import { Contract } from 'autonity-sdk';
import { ethers } from 'ethers';

// Create a provider and signer
const provider = new ethers.JsonRpcProvider('https://rpc.autonity.org');
const signer = new ethers.Wallet('0xYOUR_PRIVATE_KEY', provider);

// Create a contract instance with custom signer
const contract = new Contract({
  provider: provider,
  contractAddress: '0x...',
  signer: signer
});
```

---

## Configuration Options by Mode

### 1. View-only (read-only)

| Option            | Type            | Required | Description                               |
| ----------------- | --------------- | -------- | ----------------------------------------- |
| `rpcUrl`          | `string`        | Yes      | RPC endpoint URL for read-only operations |
| `contractAddress` | `string`        | Yes      | Autonity contract address                 |
| `privateKey`      | `string`        | No       | Not used in read-only mode                |
| `signer`          | `ethers.Signer` | No       | Not used in read-only mode                |

---

### 2. Using Private Key (automatic signer)

| Option            | Type            | Required | Description                               |
| ----------------- | --------------- | -------- | ----------------------------------------- |
| `rpcUrl`          | `string`        | Yes      | RPC endpoint URL for sending transactions |
| `contractAddress` | `string`        | Yes      | Autonity contract address                 |
| `privateKey`      | `string`        | Yes      | Private key used to create signer         |
| `signer`          | `ethers.Signer` | No       | Do not use together with privateKey       |

---

### 3. Using Signer (custom signer)

| Option            | Type              | Required | Description                                   |
| ----------------- | ----------------- | -------- | --------------------------------------------- |
| `provider`        | `ethers.Provider` | Yes      | Provider associated with the signer           |
| `contractAddress` | `string`          | Yes      | Autonity contract address                     |
| `signer`          | `ethers.Signer`   | Yes      | Pre-configured ethers signer for transactions |
| `rpcUrl`          | `string`          | No       | Optional if signer already has a provider     |
| `privateKey`      | `string`          | No       | Do not use together with signer               |


