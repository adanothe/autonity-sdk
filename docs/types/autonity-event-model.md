# Autonity event model

## Table of Contents

- [ActivatedValidator](#activatedvalidator)
- [Approval](#approval)
- [BondingApproval](#bondingapproval)
- [BondingRejected](#bondingrejected)
- [BurnedStake](#burnedstake)
- [CallFailed](#callfailed)
- [CommissionRateChange](#commissionratechange)
- [ConfigUpdateAddress](#configupdateaddress)
- [ConfigUpdateBool](#configupdatebool)
- [ConfigUpdateInt](#configupdateint)
- [ConfigUpdateUint](#configupdateuint)
- [Eip1559ParamsUpdate](#eip1559paramsupdate)
- [EnodeUpdate](#enodeupdate)
- [EpochPeriodUpdated](#epochperiodupdated)
- [MintedStake](#mintedstake)
- [NewBondingRequest](#newbondingrequest)
- [NewEpoch](#newepoch)
- [NewSchedule](#newschedule)
- [NewUnbondingRequest](#newunbondingrequest)
- [PausedValidator](#pausedvalidator)
- [RegisteredValidator](#registeredvalidator)
- [Rewarded](#rewarded)
- [Transfer](#transfer)
- [AutonityEvent](#autonityevent)
- [EventType](#eventtype)
- [EventMappers](#eventmappers)
- [AutonityEvents](#autonityevents)

## ActivatedValidator

**Signature:**
```typescript
export type ActivatedValidator = AutonityEvents.ActivatedValidator;
```

## Approval

**Signature:**
```typescript
export type Approval = AutonityEvents.Approval;
```

## BondingApproval

**Signature:**
```typescript
export type BondingApproval = AutonityEvents.BondingApproval;
```

## BondingRejected

**Signature:**
```typescript
export type BondingRejected = AutonityEvents.BondingRejected;
```

## BurnedStake

**Signature:**
```typescript
export type BurnedStake = AutonityEvents.BurnedStake;
```

## CallFailed

**Signature:**
```typescript
export type CallFailed = AutonityEvents.CallFailed;
```

## CommissionRateChange

**Signature:**
```typescript
export type CommissionRateChange = AutonityEvents.CommissionRateChange;
```

## ConfigUpdateAddress

**Signature:**
```typescript
export type ConfigUpdateAddress = AutonityEvents.ConfigUpdateAddress;
```

## ConfigUpdateBool

**Signature:**
```typescript
export type ConfigUpdateBool = AutonityEvents.ConfigUpdateBool;
```

## ConfigUpdateInt

**Signature:**
```typescript
export type ConfigUpdateInt = AutonityEvents.ConfigUpdateInt;
```

## ConfigUpdateUint

**Signature:**
```typescript
export type ConfigUpdateUint = AutonityEvents.ConfigUpdateUint;
```

## Eip1559ParamsUpdate

**Signature:**
```typescript
export type Eip1559ParamsUpdate = AutonityEvents.Eip1559ParamsUpdate;
```

## EnodeUpdate

**Signature:**
```typescript
export type EnodeUpdate = AutonityEvents.EnodeUpdate;
```

## EpochPeriodUpdated

**Signature:**
```typescript
export type EpochPeriodUpdated = AutonityEvents.EpochPeriodUpdated;
```

## MintedStake

**Signature:**
```typescript
export type MintedStake = AutonityEvents.MintedStake;
```

## NewBondingRequest

**Signature:**
```typescript
export type NewBondingRequest = AutonityEvents.NewBondingRequest;
```

## NewEpoch

**Signature:**
```typescript
export type NewEpoch = AutonityEvents.NewEpoch;
```

## NewSchedule

**Signature:**
```typescript
export type NewSchedule = AutonityEvents.NewSchedule;
```

## NewUnbondingRequest

**Signature:**
```typescript
export type NewUnbondingRequest = AutonityEvents.NewUnbondingRequest;
```

## PausedValidator

**Signature:**
```typescript
export type PausedValidator = AutonityEvents.PausedValidator;
```

## RegisteredValidator

**Signature:**
```typescript
export type RegisteredValidator = AutonityEvents.RegisteredValidator;
```

## Rewarded

**Signature:**
```typescript
export type Rewarded = AutonityEvents.Rewarded;
```

## Transfer

**Signature:**
```typescript
export type Transfer = AutonityEvents.Transfer;
```

## AutonityEvent

**Signature:**
```typescript
export type AutonityEvent = AutonityEvents.AutonityEvent;
```

## EventType

**Signature:**
```typescript
export type EventType = AutonityEvents.EventType;
```

## EventMappers

**Signature:**
```typescript
export type EventMappers = AutonityEvents.EventMappers;
```

## AutonityEvents

### Members

## EventBase

**Signature:**
```typescript
interface EventBase { {
```

### Properties

| Property | Type | Description | Optional | Readonly |
|----------|------|-------------|----------|----------|
| `blockNumber` | `number` | - |  |  |
| `transactionHash` | `string` | - |  |  |

## IActivatedValidator

**Signature:**
```typescript
export interface IActivatedValidator extends EventBase { {
```

### Properties

| Property | Type | Description | Optional | Readonly |
|----------|------|-------------|----------|----------|
| `treasury` | `string` | - |  |  |
| `addr` | `string` | - |  |  |
| `effectiveBlock` | `bigint` | - |  |  |

## IApproval

**Signature:**
```typescript
export interface IApproval extends EventBase { {
```

### Properties

| Property | Type | Description | Optional | Readonly |
|----------|------|-------------|----------|----------|
| `owner` | `string` | - |  |  |
| `spender` | `string` | - |  |  |
| `value` | `bigint` | - |  |  |

## IBondingApproval

**Signature:**
```typescript
export interface IBondingApproval extends EventBase { {
```

### Properties

| Property | Type | Description | Optional | Readonly |
|----------|------|-------------|----------|----------|
| `_owner` | `string` | - |  |  |
| `_caller` | `string` | - |  |  |
| `_value` | `bigint` | - |  |  |

## IBondingRejected

**Signature:**
```typescript
export interface IBondingRejected extends EventBase { {
```

### Properties

| Property | Type | Description | Optional | Readonly |
|----------|------|-------------|----------|----------|
| `validator` | `string` | - |  |  |
| `delegator` | `string` | - |  |  |
| `amount` | `bigint` | - |  |  |
| `state` | `bigint` | - |  |  |

## IBurnedStake

**Signature:**
```typescript
export interface IBurnedStake extends EventBase { {
```

### Properties

| Property | Type | Description | Optional | Readonly |
|----------|------|-------------|----------|----------|
| `addr` | `string` | - |  |  |
| `amount` | `bigint` | - |  |  |

## ICallFailed

**Signature:**
```typescript
export interface ICallFailed extends EventBase { {
```

### Properties

| Property | Type | Description | Optional | Readonly |
|----------|------|-------------|----------|----------|
| `to` | `string` | - |  |  |
| `methodSignature` | `string` | - |  |  |
| `returnData` | `string` | - |  |  |

## ICommissionRateChange

**Signature:**
```typescript
export interface ICommissionRateChange extends EventBase { {
```

### Properties

| Property | Type | Description | Optional | Readonly |
|----------|------|-------------|----------|----------|
| `validator` | `string` | - |  |  |
| `rate` | `bigint` | - |  |  |

## IConfigUpdateAddress

**Signature:**
```typescript
export interface IConfigUpdateAddress extends EventBase { {
```

### Properties

| Property | Type | Description | Optional | Readonly |
|----------|------|-------------|----------|----------|
| `name` | `string` | - |  |  |
| `oldValue` | `string` | - |  |  |
| `newValue` | `string` | - |  |  |
| `appliesAtHeight` | `bigint` | - |  |  |

## IConfigUpdateBool

**Signature:**
```typescript
export interface IConfigUpdateBool extends EventBase { {
```

### Properties

| Property | Type | Description | Optional | Readonly |
|----------|------|-------------|----------|----------|
| `name` | `string` | - |  |  |
| `oldValue` | `boolean` | - |  |  |
| `newValue` | `boolean` | - |  |  |
| `appliesAtHeight` | `bigint` | - |  |  |

## IConfigUpdateInt

**Signature:**
```typescript
export interface IConfigUpdateInt extends EventBase { {
```

### Properties

| Property | Type | Description | Optional | Readonly |
|----------|------|-------------|----------|----------|
| `name` | `string` | - |  |  |
| `oldValue` | `bigint` | - |  |  |
| `newValue` | `bigint` | - |  |  |
| `appliesAtHeight` | `bigint` | - |  |  |

## IConfigUpdateUint

**Signature:**
```typescript
export interface IConfigUpdateUint extends EventBase { {
```

### Properties

| Property | Type | Description | Optional | Readonly |
|----------|------|-------------|----------|----------|
| `name` | `string` | - |  |  |
| `oldValue` | `bigint` | - |  |  |
| `newValue` | `bigint` | - |  |  |
| `appliesAtHeight` | `bigint` | - |  |  |

## IEip1559ParamsUpdate

**Signature:**
```typescript
export interface IEip1559ParamsUpdate extends EventBase { {
```

### Properties

| Property | Type | Description | Optional | Readonly |
|----------|------|-------------|----------|----------|
| `oldParams` | `{
      minBaseFee: bigint;
      gasLimitBoundDivisor: bigint;
      elasticityMultiplier: bigint;
      baseFeeChangeDenominator: bigint;
    }` | - |  |  |
| `newParams` | `{
      minBaseFee: bigint;
      gasLimitBoundDivisor: bigint;
      elasticityMultiplier: bigint;
      baseFeeChangeDenominator: bigint;
    }` | - |  |  |

## IEnodeUpdate

**Signature:**
```typescript
export interface IEnodeUpdate extends EventBase { {
```

### Properties

| Property | Type | Description | Optional | Readonly |
|----------|------|-------------|----------|----------|
| `validator` | `string` | - |  |  |
| `oldEnode` | `string` | - |  |  |
| `newEnode` | `string` | - |  |  |

## IEpochPeriodUpdated

**Signature:**
```typescript
export interface IEpochPeriodUpdated extends EventBase { {
```

### Properties

| Property | Type | Description | Optional | Readonly |
|----------|------|-------------|----------|----------|
| `period` | `bigint` | - |  |  |
| `appliedAtBlock` | `bigint` | - |  |  |

## IMintedStake

**Signature:**
```typescript
export interface IMintedStake extends EventBase { {
```

### Properties

| Property | Type | Description | Optional | Readonly |
|----------|------|-------------|----------|----------|
| `addr` | `string` | - |  |  |
| `amount` | `bigint` | - |  |  |

## INewBondingRequest

**Signature:**
```typescript
export interface INewBondingRequest extends EventBase { {
```

### Properties

| Property | Type | Description | Optional | Readonly |
|----------|------|-------------|----------|----------|
| `validator` | `string` | - |  |  |
| `delegator` | `string` | - |  |  |
| `caller` | `string` | - |  |  |
| `selfBonded` | `boolean` | - |  |  |
| `amount` | `bigint` | - |  |  |
| `headBondingID` | `bigint` | - |  |  |

## INewEpoch

**Signature:**
```typescript
export interface INewEpoch extends EventBase { {
```

### Properties

| Property | Type | Description | Optional | Readonly |
|----------|------|-------------|----------|----------|
| `epoch` | `bigint` | - |  |  |
| `inflationReserve` | `bigint` | - |  |  |
| `stakeCirculating` | `bigint` | - |  |  |

## INewSchedule

**Signature:**
```typescript
export interface INewSchedule extends EventBase { {
```

### Properties

| Property | Type | Description | Optional | Readonly |
|----------|------|-------------|----------|----------|
| `scheduleVault` | `string` | - |  |  |
| `amount` | `bigint` | - |  |  |
| `start` | `bigint` | - |  |  |
| `totalDuration` | `bigint` | - |  |  |

## INewUnbondingRequest

**Signature:**
```typescript
export interface INewUnbondingRequest extends EventBase { {
```

### Properties

| Property | Type | Description | Optional | Readonly |
|----------|------|-------------|----------|----------|
| `validator` | `string` | - |  |  |
| `delegator` | `string` | - |  |  |
| `caller` | `string` | - |  |  |
| `selfBonded` | `boolean` | - |  |  |
| `amount` | `bigint` | - |  |  |
| `headUnbondingID` | `bigint` | - |  |  |

## IPausedValidator

**Signature:**
```typescript
export interface IPausedValidator extends EventBase { {
```

### Properties

| Property | Type | Description | Optional | Readonly |
|----------|------|-------------|----------|----------|
| `treasury` | `string` | - |  |  |
| `addr` | `string` | - |  |  |
| `effectiveBlock` | `bigint` | - |  |  |

## IRegisteredValidator

**Signature:**
```typescript
export interface IRegisteredValidator extends EventBase { {
```

### Properties

| Property | Type | Description | Optional | Readonly |
|----------|------|-------------|----------|----------|
| `treasury` | `string` | - |  |  |
| `addr` | `string` | - |  |  |
| `oracleAddress` | `string` | - |  |  |
| `enode` | `string` | - |  |  |
| `liquidStateContract` | `string` | - |  |  |

## IRewarded

**Signature:**
```typescript
export interface IRewarded extends EventBase { {
```

### Properties

| Property | Type | Description | Optional | Readonly |
|----------|------|-------------|----------|----------|
| `addr` | `string` | - |  |  |
| `atnSelfAmount` | `bigint` | - |  |  |
| `atnDelegatedAmount` | `bigint` | - |  |  |
| `ntnSelfAmount` | `bigint` | - |  |  |
| `ntnDelegatedAmount` | `bigint` | - |  |  |

## ITransfer

**Signature:**
```typescript
export interface ITransfer extends EventBase { {
```

### Properties

| Property | Type | Description | Optional | Readonly |
|----------|------|-------------|----------|----------|
| `from` | `string` | - |  |  |
| `to` | `string` | - |  |  |
| `value` | `bigint` | - |  |  |

## EventMappers

**Signature:**
```typescript
export interface EventMappers { {
```

### Properties

| Property | Type | Description | Optional | Readonly |
|----------|------|-------------|----------|----------|
| `ActivatedValidator` | `typeof mapActivatedValidator` | - |  |  |
| `Approval` | `typeof mapApproval` | - |  |  |
| `BondingApproval` | `typeof mapBondingApproval` | - |  |  |
| `BondingRejected` | `typeof mapBondingRejected` | - |  |  |
| `BurnedStake` | `typeof mapBurnedStake` | - |  |  |
| `CallFailed` | `typeof mapCallFailed` | - |  |  |
| `CommissionRateChange` | `typeof mapCommissionRateChange` | - |  |  |
| `ConfigUpdateAddress` | `typeof mapConfigUpdateAddress` | - |  |  |
| `ConfigUpdateBool` | `typeof mapConfigUpdateBool` | - |  |  |
| `ConfigUpdateInt` | `typeof mapConfigUpdateInt` | - |  |  |
| `ConfigUpdateUint` | `typeof mapConfigUpdateUint` | - |  |  |
| `Eip1559ParamsUpdate` | `typeof mapEip1559ParamsUpdate` | - |  |  |
| `EnodeUpdate` | `typeof mapEnodeUpdate` | - |  |  |
| `EpochPeriodUpdated` | `typeof mapEpochPeriodUpdated` | - |  |  |
| `MintedStake` | `typeof mapMintedStake` | - |  |  |
| `NewBondingRequest` | `typeof mapNewBondingRequest` | - |  |  |
| `NewEpoch` | `typeof mapNewEpoch` | - |  |  |
| `NewSchedule` | `typeof mapNewSchedule` | - |  |  |
| `NewUnbondingRequest` | `typeof mapNewUnbondingRequest` | - |  |  |
| `PausedValidator` | `typeof mapPausedValidator` | - |  |  |
| `RegisteredValidator` | `typeof mapRegisteredValidator` | - |  |  |
| `Rewarded` | `typeof mapRewarded` | - |  |  |
| `Transfer` | `typeof mapTransfer` | - |  |  |

## ActivatedValidator

**Signature:**
```typescript
export type ActivatedValidator = IActivatedValidator;
```

## Approval

**Signature:**
```typescript
export type Approval = IApproval;
```

## BondingApproval

**Signature:**
```typescript
export type BondingApproval = IBondingApproval;
```

## BondingRejected

**Signature:**
```typescript
export type BondingRejected = IBondingRejected;
```

## BurnedStake

**Signature:**
```typescript
export type BurnedStake = IBurnedStake;
```

## CallFailed

**Signature:**
```typescript
export type CallFailed = ICallFailed;
```

## CommissionRateChange

**Signature:**
```typescript
export type CommissionRateChange = ICommissionRateChange;
```

## ConfigUpdateAddress

**Signature:**
```typescript
export type ConfigUpdateAddress = IConfigUpdateAddress;
```

## ConfigUpdateBool

**Signature:**
```typescript
export type ConfigUpdateBool = IConfigUpdateBool;
```

## ConfigUpdateInt

**Signature:**
```typescript
export type ConfigUpdateInt = IConfigUpdateInt;
```

## ConfigUpdateUint

**Signature:**
```typescript
export type ConfigUpdateUint = IConfigUpdateUint;
```

## Eip1559ParamsUpdate

**Signature:**
```typescript
export type Eip1559ParamsUpdate = IEip1559ParamsUpdate;
```

## EnodeUpdate

**Signature:**
```typescript
export type EnodeUpdate = IEnodeUpdate;
```

## EpochPeriodUpdated

**Signature:**
```typescript
export type EpochPeriodUpdated = IEpochPeriodUpdated;
```

## MintedStake

**Signature:**
```typescript
export type MintedStake = IMintedStake;
```

## NewBondingRequest

**Signature:**
```typescript
export type NewBondingRequest = INewBondingRequest;
```

## NewEpoch

**Signature:**
```typescript
export type NewEpoch = INewEpoch;
```

## NewSchedule

**Signature:**
```typescript
export type NewSchedule = INewSchedule;
```

## NewUnbondingRequest

**Signature:**
```typescript
export type NewUnbondingRequest = INewUnbondingRequest;
```

## PausedValidator

**Signature:**
```typescript
export type PausedValidator = IPausedValidator;
```

## RegisteredValidator

**Signature:**
```typescript
export type RegisteredValidator = IRegisteredValidator;
```

## Rewarded

**Signature:**
```typescript
export type Rewarded = IRewarded;
```

## Transfer

**Signature:**
```typescript
export type Transfer = ITransfer;
```

## AutonityEvent

**Signature:**
```typescript
export type AutonityEvent =
    | ActivatedValidator
    | Approval
    | BondingApproval
    | BondingRejected
    | BurnedStake
    | CallFailed
    | CommissionRateChange
    | ConfigUpdateAddress
    | ConfigUpdateBool
    | ConfigUpdateInt
    | ConfigUpdateUint
    | Eip1559ParamsUpdate
    | EnodeUpdate
    | EpochPeriodUpdated
    | MintedStake
    | NewBondingRequest
    | NewEpoch
    | NewSchedule
    | NewUnbondingRequest
    | PausedValidator
    | RegisteredValidator
    | Rewarded
    | Transfer;
```

## EventType

**Signature:**
```typescript
export type EventType =
    | "ActivatedValidator"
    | "Approval"
    | "BondingApproval"
    | "BondingRejected"
    | "BurnedStake"
    | "CallFailed"
    | "CommissionRateChange"
    | "ConfigUpdateAddress"
    | "ConfigUpdateBool"
    | "ConfigUpdateInt"
    | "ConfigUpdateUint"
    | "Eip1559ParamsUpdate"
    | "EnodeUpdate"
    | "EpochPeriodUpdated"
    | "MintedStake"
    | "NewBondingRequest"
    | "NewEpoch"
    | "NewSchedule"
    | "NewUnbondingRequest"
    | "PausedValidator"
    | "RegisteredValidator"
    | "Rewarded"
    | "Transfer";
```

