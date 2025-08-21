---
layout: default
title: OracleClient
parent: API Reference
nav_order: 3
---

# OracleClient
{: .no_toc }

Client for Oracle price feed operations including price data retrieval and historical data access.
{: .fs-6 .fw-300 }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## OracleClient

Autonity Protocol - Oracle Contract · kind: dev · version: 1 Auto-generated from devdoc: oracle-doc.json

**Signature:**
```typescript
export class OracleClient implements ContractClient {
 {
```

### Properties

| Property | Type | Description | Optional | Readonly |
|----------|------|-------------|----------|----------|
| `contract` | `Oracle` | - |  |  |

### Methods

#### getConfig

Binding for `getConfig` on the Oracle contract.

**Signature:**
```typescript
async getConfig(): Promise<Oracle.ConfigStruct> {
```

**Returns:** `{Oracle.ConfigStruct} config, the current oracle config`

#### getDecimals

Binding for `getDecimals` on the Oracle contract. Decimal places to be used with price reports

**Signature:**
```typescript
async getDecimals(): Promise<bigint> {
```

**Returns:** `{bigint} the number of decimal places`

#### getNewVoters

Binding for `getNewVoters` on the Oracle contract. Retrieve the list of new participants in the Oracle process.

**Signature:**
```typescript
async getNewVoters(): Promise<string[]> {
```

**Returns:** `{Promise<string[]>} the list of new voters`

#### getNonRevealThreshold

Binding for `getNonRevealThreshold` on the Oracle contract. Returns the tolerance for missed reveal count before the voter gets punished.

**Signature:**
```typescript
async getNonRevealThreshold(): Promise<bigint> {
```

**Returns:** `{bigint} the non-reveal threshold`

#### getRound

Binding for `getRound` on the Oracle contract. Retrieve the current round ID.

**Signature:**
```typescript
async getRound(): Promise<bigint> {
```

**Returns:** `{bigint} the current round ID`

#### getRoundData

Binding for `getRoundData` on the Oracle contract. Return price data for a specific round. IOracle interface method

**Signature:**
```typescript
async getRoundData(
```

**Parameters:**

| Parameter | Type | Description | Optional |
|-----------|------|-------------|----------|
| `_round` | `BigNumberish` | - |  |
| `_symbol` | `string` | - |  |

**Returns:** `{Promise<IOracle.RoundDataStruct>} the round data for the specified round and symbol`

#### getRewardPeriodPerformance

Binding for `getRewardPeriodPerformance` on the Oracle contract. Retrieve the performance for a voter in this reward (epoch) period.

**Signature:**
```typescript
async getRewardPeriodPerformance(_voter: AddressLike): Promise<bigint> {
```

**Parameters:**

| Parameter | Type | Description | Optional |
|-----------|------|-------------|----------|
| `_voter` | `AddressLike` | - |  |

**Returns:** `{Promise<bigint>} the performance of the voter in the current reward`

#### getReports

Binding for `getReports` on the Oracle contract.

**Signature:**
```typescript
async getReports(
```

**Parameters:**

| Parameter | Type | Description | Optional |
|-----------|------|-------------|----------|
| `_symbol` | `string` | - |  |
| `_voter` | `AddressLike` | - |  |

**Returns:** `{OracleTypes.Report} the latest report of that voter for that symbol`

#### getSymbols

Binding for `getSymbols` on the Oracle contract. Retrieve the lists of symbols to be voted on.

**Signature:**
```typescript
async getSymbols(): Promise<string[]> {
```

**Returns:** `{Promise<string[]>} the list of symbols`

#### getSymbolUpdatedRound

Binding for `getSymbolUpdatedRound` on the Oracle contract.

**Signature:**
```typescript
async getSymbolUpdatedRound(): Promise<bigint> {
```

**Returns:** `{bigint} the round at which the symbols got updated`

#### getVotePeriod

Binding for `getVotePeriod` on the Oracle contract. Retrieve the vote period.

**Signature:**
```typescript
async getVotePeriod(): Promise<bigint> {
```

**Returns:** `{Promise<bigint>} the current vote period`

#### getVoters

Binding for `getVoters` on the Oracle contract. Retrieve the list of participants in the Oracle process.

**Signature:**
```typescript
async getVoters(): Promise<string[]> {
```

**Returns:** `{Promise<string[]>} the list of voters`

#### getLastRoundBlock

Binding for `getLastRoundBlock` on the Oracle contract.

**Signature:**
```typescript
async getLastRoundBlock(): Promise<bigint> {
```

**Returns:** `{bigint} the block at which the last completed round ended`

#### getNewVotePeriod

Binding for `getNewVotePeriod` on the Oracle contract. Retrieve the new vote period that is going to be applied at the end of the vote round.

**Signature:**
```typescript
async getNewVotePeriod(): Promise<bigint> {
```

**Returns:** `{Promise<bigint>} the new vote period`

#### getLatestRoundData

Binding for `getLatestRoundData` on the Oracle contract. Return latest available price data.

**Signature:**
```typescript
async getLatestRoundData(_symbol: string): Promise<IOracle.RoundDataStruct> {
```

**Parameters:**

| Parameter | Type | Description | Optional |
|-----------|------|-------------|----------|
| `_symbol` | `string` | - |  |

**Returns:** `Promise<IOracle.RoundDataStruct>`

#### getVoterInfo

Binding for `getVoterInfo` on the Oracle contract.

**Signature:**
```typescript
async getVoterInfo(_voter: AddressLike): Promise<OracleTypes.VoterInfo> {
```

**Parameters:**

| Parameter | Type | Description | Optional |
|-----------|------|-------------|----------|
| `_voter` | `AddressLike` | - |  |

**Returns:** `{OracleTypes.VoterInfo} the related voter information`

#### getVoterTreasuries

Binding for `getVoterTreasuries` on the Oracle contract.

**Signature:**
```typescript
async getVoterTreasuries(_oracleAddress: AddressLike): Promise<string> {
```

**Parameters:**

| Parameter | Type | Description | Optional |
|-----------|------|-------------|----------|
| `_oracleAddress` | `AddressLike` | - |  |

**Returns:** `{string} this treasury address`

#### getVoterValidators

Binding for `getVoterValidators` on the Oracle contract.

**Signature:**
```typescript
async getVoterValidators(_oracleAddress: AddressLike): Promise<string> {
```

**Parameters:**

| Parameter | Type | Description | Optional |
|-----------|------|-------------|----------|
| `_oracleAddress` | `AddressLike` | - |  |

**Returns:** `{string} this node address`

