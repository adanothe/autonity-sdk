# Oracle type

## Table of Contents

- [Report](#report)
- [VoterInfo](#voterinfo)
- [OracleConfig](#oracleconfig)
- [RoundData](#rounddata)
- [OracleTypes](#oracletypes)

## Report

**Signature:**
```typescript
export type Report = OracleTypes.Report;
```

## VoterInfo

**Signature:**
```typescript
export type VoterInfo = OracleTypes.VoterInfo;
```

## OracleConfig

**Signature:**
```typescript
export type OracleConfig = OracleTypes.OracleConfig;
```

## RoundData

**Signature:**
```typescript
export type RoundData = OracleTypes.RoundData;
```

## OracleTypes

### Members

## Report

**Signature:**
```typescript
export interface Report { {
```

### Properties

| Property | Type | Description | Optional | Readonly |
|----------|------|-------------|----------|----------|
| `price` | `bigint` | - |  |  |
| `confidence` | `bigint` | - |  |  |

## VoterInfo

**Signature:**
```typescript
export interface VoterInfo { {
```

### Properties

| Property | Type | Description | Optional | Readonly |
|----------|------|-------------|----------|----------|
| `round` | `bigint` | - |  |  |
| `commit` | `bigint` | - |  |  |
| `performance` | `bigint` | - |  |  |
| `nonRevealCount` | `bigint` | - |  |  |
| `isVoter` | `boolean` | - |  |  |
| `reportAvailable` | `boolean` | - |  |  |

## OracleConfig

**Signature:**
```typescript
export interface OracleConfig { {
```

### Properties

| Property | Type | Description | Optional | Readonly |
|----------|------|-------------|----------|----------|
| `autonity` | `string` | - |  |  |
| `operator` | `string` | - |  |  |
| `votePeriod` | `bigint` | - |  |  |
| `outlierDetectionThreshold` | `bigint` | - |  |  |
| `outlierSlashingThreshold` | `bigint` | - |  |  |
| `baseSlashingRate` | `bigint` | - |  |  |
| `nonRevealThreshold` | `bigint` | - |  |  |
| `revealResetInterval` | `bigint` | - |  |  |
| `slashingRateCap` | `bigint` | - |  |  |

## RoundData

**Signature:**
```typescript
export interface RoundData { {
```

### Properties

| Property | Type | Description | Optional | Readonly |
|----------|------|-------------|----------|----------|
| `round` | `bigint` | - |  |  |
| `price` | `bigint` | - |  |  |
| `timestamp` | `bigint` | - |  |  |
| `success` | `boolean` | - |  |  |

## ReportStruct

**Signature:**
```typescript
type ReportStruct = IOracle.ReportStruct;
```

## OracleConfigStruct

**Signature:**
```typescript
type OracleConfigStruct = Oracle.ConfigStructOutput;
```

## RoundDataStruct

**Signature:**
```typescript
type RoundDataStruct = IOracle.RoundDataStructOutput;
```

