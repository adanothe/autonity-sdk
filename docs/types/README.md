---
layout: default
title: Type Definitions
nav_order: 3
has_children: true
permalink: /types/
---

# Type Definitions
{: .no_toc }

Complete type definitions for all interfaces, types, and data structures used in the Autonity SDK.
{: .fs-6 .fw-300 }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Autonity Types

### [AutonityTypes](autonity-type.md)
Core type definitions for Autonity contract interactions including validators, epochs, bonding requests, and configuration.

### [AutonityEvents](autonity-event-model.md)
Event type definitions and event mappers for all Autonity contract events.

## Oracle Types

### [OracleTypes](oracle-type.md)
Type definitions for Oracle contract interactions including price data, round information, and symbol management.

---

## Type Safety

The Autonity SDK is built with TypeScript and provides full type safety for all operations:

```typescript
import { AutonityTypes, OracleTypes } from 'autonity-sdk';

// All return types are properly typed
const validators: AutonityTypes.Validator[] = await contract.autonity.getValidators();
const priceData: OracleTypes.RoundData = await contract.oracle.getLatestRoundData('USD-ATN');
```

## Common Patterns

### Working with BigInt Values

Many blockchain values are returned as `bigint` to handle large numbers safely:

```typescript
const balance: bigint = await contract.autonity.balanceOf('0x...');
const balanceInEther = ethers.formatEther(balance);
```

### Address Types

The SDK uses ethers `AddressLike` type which accepts:
- String addresses: `"0x1234..."`
- ENS names: `"vitalik.eth"`
- Contract instances with address property

### Optional Parameters

Many functions accept optional parameters for filtering and pagination:

```typescript
// Get events with optional filtering
const events = await contract.autonity.ActivatedValidator(
  startBlock,     // optional
  endBlock,       // optional
  validatorAddr   // optional filter
);
```
