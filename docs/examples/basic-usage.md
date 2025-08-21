---
layout: default
title: Basic Usage
parent: Examples
nav_order: 1
---

# Basic Usage
{: .no_toc }

This guide shows you how to get started with the Autonity SDK.
{: .fs-6 .fw-300 }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Installation

```bash
npm install autonity-sdk
```

## Quick Start

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
```

## Reading Data

```typescript
// Get committee
const committee = await contract.autonity.getCommittee();

// Get validator details
const validator = await contract.autonity.getValidator('0x...');

// Get oracle prices
const latestRound = await contract.oracle.getLatestRoundData('USD-ATN');
```

## Sending Transactions

```typescript
import { Contract } from 'autonity-sdk';

// Create contract with private key for signing
const contract = new Contract({
  rpcUrl: 'https://rpc.autonity.org',
  contractAddress: '0x...',
  privateKey: '0x...' // Your private key
});

// Bond to a validator
const tx = await contract.autonity.bond('0x...', { value: '1000000000000000000' }); // 1 ATN
await tx.wait();

// Unbond from a validator
const unbondTx = await contract.autonity.unbond('0x...', '500000000000000000'); // 0.5 ATN
await unbondTx.wait();
```
