# Autonity type

## Table of Contents

- [ValidatorState](#validatorstate)
- [BondingRequest](#bondingrequest)
- [UnbondingRequest](#unbondingrequest)
- [Committee](#committee)
- [Eip1559Config](#eip1559config)
- [Accountability](#accountability)
- [ClientConfig](#clientconfig)
- [Schedule](#schedule)
- [PolicyConfig](#policyconfig)
- [ContractsConfig](#contractsconfig)
- [ProtocolConfig](#protocolconfig)
- [AutonityConfig](#autonityconfig)
- [EpochInfo](#epochinfo)
- [Validator](#validator)
- [AutonityTypes](#autonitytypes)

## ValidatorState

**Signature:**
```typescript
export type ValidatorState = AutonityTypes.ValidatorState;
```

## BondingRequest

**Signature:**
```typescript
export type BondingRequest = AutonityTypes.BondingRequest;
```

## UnbondingRequest

**Signature:**
```typescript
export type UnbondingRequest = AutonityTypes.UnbondingRequest;
```

## Committee

**Signature:**
```typescript
export type Committee = AutonityTypes.Committee;
```

## Eip1559Config

**Signature:**
```typescript
export type Eip1559Config = AutonityTypes.Eip1559Config;
```

## Accountability

**Signature:**
```typescript
export type Accountability = AutonityTypes.Accountability;
```

## ClientConfig

**Signature:**
```typescript
export type ClientConfig = AutonityTypes.ClientConfig;
```

## Schedule

**Signature:**
```typescript
export type Schedule = AutonityTypes.Schedule;
```

## PolicyConfig

**Signature:**
```typescript
export type PolicyConfig = AutonityTypes.PolicyConfig;
```

## ContractsConfig

**Signature:**
```typescript
export type ContractsConfig = AutonityTypes.ContractsConfig;
```

## ProtocolConfig

**Signature:**
```typescript
export type ProtocolConfig = AutonityTypes.ProtocolConfig;
```

## AutonityConfig

**Signature:**
```typescript
export type AutonityConfig = AutonityTypes.AutonityConfig;
```

## EpochInfo

**Signature:**
```typescript
export type EpochInfo = AutonityTypes.EpochInfo;
```

## Validator

**Signature:**
```typescript
export type Validator = AutonityTypes.Validator;
```

## AutonityTypes

### Members

## BaseRequest

**Signature:**
```typescript
interface BaseRequest { {
```

### Properties

| Property | Type | Description | Optional | Readonly |
|----------|------|-------------|----------|----------|
| `delegator` | `string` | - |  |  |
| `delegatee` | `string` | - |  |  |
| `amount` | `bigint` | - |  |  |
| `requestBlock` | `bigint` | - |  |  |

## BondingRequest

**Signature:**
```typescript
export interface BondingRequest extends BaseRequest {} {
```

## UnbondingRequest

**Signature:**
```typescript
export interface UnbondingRequest extends BaseRequest { {
```

### Properties

| Property | Type | Description | Optional | Readonly |
|----------|------|-------------|----------|----------|
| `unbondingShare` | `bigint` | - |  |  |
| `unlocked` | `boolean` | - |  |  |
| `released` | `boolean` | - |  |  |
| `selfDelegation` | `boolean` | - |  |  |

## Committee

**Signature:**
```typescript
export interface Committee { {
```

### Properties

| Property | Type | Description | Optional | Readonly |
|----------|------|-------------|----------|----------|
| `addr` | `string` | - |  |  |
| `votingPower` | `bigint` | - |  |  |
| `consensusKey` | `string` | - |  |  |

## Eip1559Config

**Signature:**
```typescript
export interface Eip1559Config { {
```

### Properties

| Property | Type | Description | Optional | Readonly |
|----------|------|-------------|----------|----------|
| `minBaseFee` | `bigint` | - |  |  |
| `baseFeeChangeDenominator` | `bigint` | - |  |  |
| `elasticityMultiplier` | `bigint` | - |  |  |
| `gasLimitBoundDivisor` | `bigint` | - |  |  |

## Accountability

**Signature:**
```typescript
export interface Accountability { {
```

### Properties

| Property | Type | Description | Optional | Readonly |
|----------|------|-------------|----------|----------|
| `range` | `bigint` | - |  |  |
| `delta` | `bigint` | - |  |  |
| `gracePeriod` | `bigint` | - |  |  |

## ClientConfig

**Signature:**
```typescript
export interface ClientConfig { {
```

### Properties

| Property | Type | Description | Optional | Readonly |
|----------|------|-------------|----------|----------|
| `epochPeriod` | `bigint` | - |  |  |
| `blockPeriod` | `bigint` | - |  |  |
| `gasLimit` | `bigint` | - |  |  |
| `clusteringThreshold` | `bigint` | - |  |  |
| `accountability` | `Accountability` | - |  |  |
| `eip1559` | `Eip1559Config` | - |  |  |

## Schedule

**Signature:**
```typescript
export interface Schedule { {
```

### Properties

| Property | Type | Description | Optional | Readonly |
|----------|------|-------------|----------|----------|
| `totalAmount` | `bigint` | - |  |  |
| `unlockedAmount` | `bigint` | - |  |  |
| `start` | `bigint` | - |  |  |
| `totalDuration` | `bigint` | - |  |  |
| `lastUnlockTime` | `bigint` | - |  |  |

## PolicyConfig

**Signature:**
```typescript
export interface PolicyConfig { {
```

### Properties

| Property | Type | Description | Optional | Readonly |
|----------|------|-------------|----------|----------|
| `treasuryFee` | `bigint` | - |  |  |
| `minBaseFee` | `bigint` | - |  |  |
| `delegationRate` | `bigint` | - |  |  |
| `unbondingPeriod` | `bigint` | - |  |  |
| `initialInflationReserve` | `bigint` | - |  |  |
| `withholdingThreshold` | `bigint` | - |  |  |
| `proposerRewardRate` | `bigint` | - |  |  |
| `oracleRewardRate` | `bigint` | - |  |  |
| `withheldRewardsPool` | `string` | - |  |  |
| `treasuryAccount` | `string` | - |  |  |
| `elasticityMultiplier` | `bigint` | - |  |  |

## ContractsConfig

**Signature:**
```typescript
export interface ContractsConfig { {
```

### Properties

| Property | Type | Description | Optional | Readonly |
|----------|------|-------------|----------|----------|
| `accountabilityContract` | `string` | - |  |  |
| `oracleContract` | `string` | - |  |  |
| `acuContract` | `string` | - |  |  |
| `supplyControlContract` | `string` | - |  |  |
| `stabilizationContract` | `string` | - |  |  |
| `upgradeManagerContract` | `string` | - |  |  |
| `inflationControllerContract` | `string` | - |  |  |
| `omissionAccountabilityContract` | `string` | - |  |  |
| `auctioneerContract` | `string` | - |  |  |

## ProtocolConfig

**Signature:**
```typescript
export interface ProtocolConfig { {
```

### Properties

| Property | Type | Description | Optional | Readonly |
|----------|------|-------------|----------|----------|
| `operatorAccount` | `string` | - |  |  |
| `epochPeriod` | `bigint` | - |  |  |
| `blockPeriod` | `bigint` | - |  |  |
| `committeeSize` | `bigint` | - |  |  |
| `maxScheduleDuration` | `bigint` | - |  |  |
| `gasLimit` | `bigint` | - |  |  |
| `gasLimitBoundDivisor` | `bigint` | - |  |  |
| `clusteringThreshold` | `bigint` | - |  |  |

## AutonityConfig

**Signature:**
```typescript
export interface AutonityConfig { {
```

### Properties

| Property | Type | Description | Optional | Readonly |
|----------|------|-------------|----------|----------|
| `policy` | `PolicyConfig` | - |  |  |
| `contracts` | `ContractsConfig` | - |  |  |
| `protocol` | `ProtocolConfig` | - |  |  |
| `contractVersion` | `bigint` | - |  |  |

## EpochInfo

**Signature:**
```typescript
export interface EpochInfo { {
```

### Properties

| Property | Type | Description | Optional | Readonly |
|----------|------|-------------|----------|----------|
| `committee` | `Committee[]` | - |  |  |
| `previousEpochBlock` | `bigint` | - |  |  |
| `epochBlock` | `bigint` | - |  |  |
| `nextEpochBlock` | `bigint` | - |  |  |
| `omissionDelta` | `bigint` | - |  |  |
| `eip1559` | `Eip1559Config` | - |  |  |

## Validator

**Signature:**
```typescript
export interface Validator { {
```

### Properties

| Property | Type | Description | Optional | Readonly |
|----------|------|-------------|----------|----------|
| `treasury` | `string` | - |  |  |
| `nodeAddress` | `string` | - |  |  |
| `oracleAddress` | `string` | - |  |  |
| `enode` | `string` | - |  |  |
| `commissionRate` | `bigint` | - |  |  |
| `bondedStake` | `bigint` | - |  |  |
| `unbondingStake` | `bigint` | - |  |  |
| `unbondingShares` | `bigint` | - |  |  |
| `selfBondedStake` | `bigint` | - |  |  |
| `selfUnbondingStake` | `bigint` | - |  |  |
| `selfUnbondingShares` | `bigint` | - |  |  |
| `selfUnbondingStakeLocked` | `bigint` | - |  |  |
| `liquidStateContract` | `string` | - |  |  |
| `liquidSupply` | `bigint` | - |  |  |
| `registrationBlock` | `bigint` | - |  |  |
| `totalSlashed` | `bigint` | - |  |  |
| `jailReleaseBlock` | `bigint` | - |  |  |
| `consensusKey` | `string` | - |  |  |
| `state` | `ValidatorState` | - |  |  |
| `conversionRatio` | `bigint` | - |  |  |

## CommitteeStruct

**Signature:**
```typescript
type CommitteeStruct = IAutonity.CommitteeMemberStructOutput;
```

## PolicyStruct

**Signature:**
```typescript
type PolicyStruct = IAutonity.PolicyStructOutput;
```

## ContractsStruct

**Signature:**
```typescript
type ContractsStruct = IAutonity.ContractsStructOutput;
```

## ProtocolStruct

**Signature:**
```typescript
type ProtocolStruct = IAutonity.ProtocolStructOutput;
```

## EpochInfoStruct

**Signature:**
```typescript
type EpochInfoStruct = IAutonity.EpochInfoStructOutput;
```

## ScheduleStruct

**Signature:**
```typescript
type ScheduleStruct = IScheduleController.ScheduleStructOutput;
```

## ValidatorStruct

**Signature:**
```typescript
type ValidatorStruct = IAutonity.ValidatorStructOutput;
```

## Eip1559StructOutput

**Signature:**
```typescript
type Eip1559StructOutput = IAutonity.Eip1559StructOutput;
```

## ClientAwareConfigStructOutput

**Signature:**
```typescript
type ClientAwareConfigStructOutput = IAutonity.ClientAwareConfigStructOutput;
```

## AccountabilityStructOutput

**Signature:**
```typescript
type AccountabilityStructOutput = IAutonity.AccountabilityStructOutput;
```

## UnbondingRequestStructOutput

**Signature:**
```typescript
type UnbondingRequestStructOutput = IAutonity.UnbondingRequestStructOutput;
```

## BondingRequestStructOutput

**Signature:**
```typescript
type BondingRequestStructOutput = IAutonity.BondingRequestStructOutput;
```

## ConfigStruct

**Signature:**
```typescript
type ConfigStruct = [PolicyStruct, ContractsStruct, ProtocolStruct, bigint];
```

