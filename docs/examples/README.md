---
layout: default
title: Examples
nav_order: 4
has_children: true
permalink: /examples/
---

# Examples
{: .no_toc }

Practical examples and guides for using the Autonity SDK in real-world scenarios.
{: .fs-6 .fw-300 }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Getting Started

### [Basic Usage](basic-usage.md)
Learn the fundamentals of using the Autonity SDK including installation, setup, and basic operations.

### [Advanced Usage](advanced-usage.md)
Explore advanced features like custom providers, event listening, batch operations, and error handling.

## Common Use Cases

### Validator Operations

```typescript
// Get all validators
const validators = await contract.autonity.getValidators();

// Get validator details
const validator = await contract.autonity.getValidator('0x...');

// Check validator state
const state = await contract.autonity.getValidatorState('0x...');
```

### Staking and Delegation

```typescript
// Bond to a validator
const bondTx = await contract.autonity.bond(validatorAddress, amount);
await bondTx.wait();

// Unbond from a validator
const unbondTx = await contract.autonity.unbond(validatorAddress, amount);
await unbondTx.wait();
```

### Oracle Data

```typescript
// Get latest price data
const priceData = await contract.oracle.getLatestRoundData('USD-ATN');

// Get historical data
const historicalData = await contract.oracle.getRoundData('USD-ATN', roundId);
```

## Integration Patterns

### React Integration

```typescript
import { useEffect, useState } from 'react';
import { Contract } from 'autonity-sdk';

function ValidatorList() {
  const [validators, setValidators] = useState([]);
  
  useEffect(() => {
    const contract = new Contract({
      rpcUrl: 'https://rpc.autonity.org',
      contractAddress: '0x...'
    });
    
    contract.autonity.getValidators()
      .then(setValidators)
      .catch(console.error);
  }, []);
  
  return (
    <ul>
      {validators.map(validator => (
        <li key={validator}>{validator}</li>
      ))}
    </ul>
  );
}
```

### Node.js Server

```typescript
import express from 'express';
import { Contract } from 'autonity-sdk';

const app = express();
const contract = new Contract({
  rpcUrl: process.env.RPC_URL,
  contractAddress: process.env.CONTRACT_ADDRESS
});

app.get('/validators', async (req, res) => {
  try {
    const validators = await contract.autonity.getValidators();
    res.json(validators);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000);
```

---

## Best Practices

1. **Error Handling**: Always wrap async calls in try-catch blocks
2. **Resource Management**: Reuse contract instances when possible
3. **Type Safety**: Use TypeScript for better development experience
4. **Gas Optimization**: Batch operations when possible
5. **Event Monitoring**: Use event listeners for real-time updates
