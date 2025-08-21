---
layout: default
title: AutonityClient
parent: API Reference
nav_order: 2
---

# AutonityClient
{: .no_toc }

Client for Autonity protocol operations including validator management, staking, delegation, and governance.
{: .fs-6 .fw-300 }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## AutonityClient

Proof-of-Stake Autonity Contract  · kind: dev · version: 1 Auto-generated from devdoc: autonity-doc.json

**Signature:**
```typescript
export class AutonityClient implements ContractClient {
 {
```

### Properties

| Property | Type | Description | Optional | Readonly |
|----------|------|-------------|----------|----------|
| `contract` | `Autonity` | - |  |  |

### Methods

#### ActivatedValidator

Binding for `ActivatedValidator` on the Autonity contract. emitted when a validator is activated, validator starts accepting delegation and becomes eligible  for committee inclusion

**Signature:**
```typescript
async ActivatedValidator(
```

**Parameters:**

| Parameter | Type | Description | Optional |
|-----------|------|-------------|----------|
| `startBlock` | `number` | - | ✓ |
| `endBlock` | `number` | - | ✓ |
| `addr` | `AddressLike` | - | ✓ |

**Returns:** `Promise<AutonityEvents.ActivatedValidator[]>`

#### Approval

Binding for `Approval` on the Autonity contract. See {IERC20-approve}. Emits an {Approval} event.

**Signature:**
```typescript
async Approval(
```

**Parameters:**

| Parameter | Type | Description | Optional |
|-----------|------|-------------|----------|
| `startBlock` | `number` | - | ✓ |
| `endBlock` | `number` | - | ✓ |
| `owner` | `AddressLike` | - | ✓ |
| `spender` | `AddressLike` | - | ✓ |

**Returns:** `Promise<AutonityEvents.Approval[]>`

#### EnodeUpdate

Binding for `EnodeUpdate` on the Autonity contract. Emitted after updating a enode address of a validator

**Signature:**
```typescript
async EnodeUpdate(
```

**Parameters:**

| Parameter | Type | Description | Optional |
|-----------|------|-------------|----------|
| `startBlock` | `number` | - | ✓ |
| `endBlock` | `number` | - | ✓ |
| `validator` | `AddressLike` | - | ✓ |

**Returns:** `Promise<AutonityEvents.EnodeUpdate[]>`

#### NewBondingRequest

Binding for `NewBondingRequest` on the Autonity contract. This event is emitted when a bonding request to a validator node has been registered. This request will only be effective at the end of the current epoch however the stake will be put in custody immediately from the delegator's account.

**Signature:**
```typescript
async NewBondingRequest(
```

**Parameters:**

| Parameter | Type | Description | Optional |
|-----------|------|-------------|----------|
| `startBlock` | `number` | - | ✓ |
| `endBlock` | `number` | - | ✓ |
| `validator` | `AddressLike` | - | ✓ |

**Returns:** `Promise<AutonityEvents.NewBondingRequest[]>`

#### NewUnbondingRequest

Binding for `NewUnbondingRequest` on the Autonity contract. This event is emitted when an unbonding request to a validator node has been registered. This request will only be effective after the unbonding period, rounded to the next epoch. Please note that because of potential slashing events during this delay period, the released amount may or may not be correspond to the amount requested.

**Signature:**
```typescript
async NewUnbondingRequest(
```

**Parameters:**

| Parameter | Type | Description | Optional |
|-----------|------|-------------|----------|
| `startBlock` | `number` | - | ✓ |
| `endBlock` | `number` | - | ✓ |
| `validator` | `AddressLike` | - | ✓ |

**Returns:** `Promise<AutonityEvents.NewUnbondingRequest[]>`

#### MintedStake

Binding for `MintedStake` on the Autonity contract.

**Signature:**
```typescript
async MintedStake(
```

**Parameters:**

| Parameter | Type | Description | Optional |
|-----------|------|-------------|----------|
| `startBlock` | `number` | - | ✓ |
| `endBlock` | `number` | - | ✓ |
| `addr` | `AddressLike` | - | ✓ |

**Returns:** `Promise<AutonityEvents.MintedStake[]>`

#### activateValidator

Binding for `activateValidator` on the Autonity contract. Re-activate the specified validator.

**Signature:**
```typescript
async activateValidator(
```

**Parameters:**

| Parameter | Type | Description | Optional |
|-----------|------|-------------|----------|
| `_address` | `AddressLike` | - |  |

**Returns:** `Promise<ContractTransactionResponse>`

#### autobond

Binding for `autobond` on the Autonity contract. Create a bonding(delegation) request with the caller as delegator. This function is used to automatically bond a validator with self-bond and delegated amount.

**Signature:**
```typescript
async autobond(
```

**Parameters:**

| Parameter | Type | Description | Optional |
|-----------|------|-------------|----------|
| `_validator` | `AddressLike` | - |  |
| `_selfBond` | `BigNumberish` | - |  |
| `_delegated` | `BigNumberish` | - |  |

**Returns:** `Promise<ContractTransactionResponse>`

#### pauseValidator

Binding for `pauseValidator` on the Autonity contract. Pause the validator and stop it accepting delegations. emit a {DisabledValidator} event.

**Signature:**
```typescript
async pauseValidator(
```

**Parameters:**

| Parameter | Type | Description | Optional |
|-----------|------|-------------|----------|
| `_address` | `AddressLike` | - |  |

**Returns:** `{ContractTransactionResponse} - the transaction response`

#### registerValidator

Binding for `registerValidator` on the Autonity contract. - Assigns caller as the validator's treasury account. - Deploys a "Liquid Stake" token. - Emits {RegisteredValidator} event.

**Signature:**
```typescript
async registerValidator(
```

**Parameters:**

| Parameter | Type | Description | Optional |
|-----------|------|-------------|----------|
| `_enode` | `string` | - |  |
| `_oracleAddress` | `AddressLike` | - |  |
| `_consensusKey` | `ethers.BytesLike` | - |  |
| `_signatures` | `ethers.BytesLike` | - |  |

**Returns:** `{ContractTransactionResponse} - the transaction response`

#### changeCommissionRate

Binding for `changeCommissionRate` on the Autonity contract. Change commission rate for the specified validator.

**Signature:**
```typescript
async changeCommissionRate(
```

**Parameters:**

| Parameter | Type | Description | Optional |
|-----------|------|-------------|----------|
| `_validator` | `AddressLike` | - |  |
| `_rate` | `ethers.BigNumberish` | - |  |

**Returns:** `{ContractTransactionResponse} - the transaction response`

#### updateEnode

Binding for `updateEnode` on the Autonity contract. Update enode of a registered validator. This function updates the network connection information (IP or/and port) of a registered validator. you cannot change the validator's address (pubkey part of the enode)

**Signature:**
```typescript
async updateEnode(
```

**Parameters:**

| Parameter | Type | Description | Optional |
|-----------|------|-------------|----------|
| `_nodeAddress` | `AddressLike` | - |  |
| `_enode` | `string` | - |  |

**Returns:** `{ContractTransactionResponse} - the transaction response`

#### bond

Binding for `bond` on the Autonity contract. Create a bonding(delegation) request with the caller as delegator.

**Signature:**
```typescript
async bond(
```

**Parameters:**

| Parameter | Type | Description | Optional |
|-----------|------|-------------|----------|
| `_validator` | `AddressLike` | - |  |
| `_amount` | `ethers.BigNumberish` | - |  |

**Returns:** `{ContractTransactionResponse} - the transaction response`

#### bondFrom

Binding for `bondFrom` on the Autonity contract. Create a bonding(delegation) request with the `_account` as delegator. The caller needs to have required bonding-allowance (NTN) from the `_account`.

**Signature:**
```typescript
async bondFrom(
```

**Parameters:**

| Parameter | Type | Description | Optional |
|-----------|------|-------------|----------|
| `_account` | `AddressLike` | - |  |
| `_validator` | `AddressLike` | - |  |
| `_amount` | `ethers.BigNumberish` | - |  |

**Returns:** `{ContractTransactionResponse} - the transaction response`

#### unbond

Binding for `unbond` on the Autonity contract. Create an unbonding request with the caller as delegator.

**Signature:**
```typescript
async unbond(
```

**Parameters:**

| Parameter | Type | Description | Optional |
|-----------|------|-------------|----------|
| `_validator` | `AddressLike` | - |  |
| `_amount` | `ethers.BigNumberish` | - |  |

**Returns:** `{ContractTransactionResponse} - the transaction response`

#### unbondFrom

Binding for `unbondFrom` on the Autonity contract. Create an unbonding request with the `_account` as delegator. The caller needs to have required unbonding-allowance to unbond LNTN from the `_account`.

**Signature:**
```typescript
async unbondFrom(
```

**Parameters:**

| Parameter | Type | Description | Optional |
|-----------|------|-------------|----------|
| `_account` | `AddressLike` | - |  |
| `_validator` | `AddressLike` | - |  |
| `_amount` | `ethers.BigNumberish` | - |  |

**Returns:** `{ContractTransactionResponse} - the transaction response`

#### approveBonding

Binding for `approveBonding` on the Autonity contract. Sets `_amount` as the bonding-allowance (NTN) of `_caller` over the caller's tokens. Returns a boolean value indicating whether the operation succeeded. Emits an {BondingApproval} event.

**Signature:**
```typescript
async approveBonding(
```

**Parameters:**

| Parameter | Type | Description | Optional |
|-----------|------|-------------|----------|
| `_caller` | `AddressLike` | - |  |
| `_amount` | `ethers.BigNumberish` | - |  |

**Returns:** `{ContractTransactionResponse} - the transaction response`

#### approve

Binding for `approve` on the Autonity contract. See {IERC20-approve}. Requirements: - `spender` cannot be the zero address.

**Signature:**
```typescript
async approve(
```

**Parameters:**

| Parameter | Type | Description | Optional |
|-----------|------|-------------|----------|
| `spender` | `AddressLike` | - |  |
| `amount` | `ethers.BigNumberish` | - |  |

**Returns:** `{ContractTransactionResponse} - the transaction response`

#### transfer

Binding for `transfer` on the Autonity contract. Moves `amount` NTN stake tokens from the caller's account to `recipient`. Emits a {Transfer} event. Implementation of {IERC20 transfer}

**Signature:**
```typescript
async transfer(
```

**Parameters:**

| Parameter | Type | Description | Optional |
|-----------|------|-------------|----------|
| `_recipient` | `AddressLike` | - |  |
| `_amount` | `ethers.BigNumberish` | - |  |

**Returns:** `{ContractTransactionResponse} - the transaction response
   *`

#### transferFrom

Binding for `transferFrom` on the Autonity contract. See {IERC20-transferFrom}. Emits an {Approval} event indicating the updated allowance. Requirements: - `sender` and `recipient` must be allowed to hold stake. - `sender` must have a balance of at least `amount`. - the caller must have allowance for ``sender``'s tokens of at least `amount`.

**Signature:**
```typescript
async transferFrom(
```

**Parameters:**

| Parameter | Type | Description | Optional |
|-----------|------|-------------|----------|
| `_sender` | `AddressLike` | - |  |
| `_recipient` | `AddressLike` | - |  |
| `_amount` | `ethers.BigNumberish` | - |  |

**Returns:** `Promise<ContractTransactionResponse>`

#### balanceOf

Binding for `balanceOf` on the Autonity contract. Returns the amount of unbonded Newton token held by the account (ERC-20).

**Signature:**
```typescript
async balanceOf(_address: AddressLike): Promise<bigint> {
```

**Parameters:**

| Parameter | Type | Description | Optional |
|-----------|------|-------------|----------|
| `_address` | `AddressLike` | - |  |

**Returns:** `Promise<bigint>`

#### allowance

Binding for `allowance` on the Autonity contract. See {IERC20-allowance}.

**Signature:**
```typescript
async allowance(owner: AddressLike, spender: AddressLike): Promise<bigint> {
```

**Parameters:**

| Parameter | Type | Description | Optional |
|-----------|------|-------------|----------|
| `owner` | `AddressLike` | - |  |
| `spender` | `AddressLike` | - |  |

**Returns:** `Promise<bigint>`

#### bondingAllowance

Binding for `bondingAllowance` on the Autonity contract. Returns the remaining number of NTN that `_caller` will be allowed to bond on behalf of `_owner` through `bondFrom`. This is zero by default.

**Signature:**
```typescript
async bondingAllowance(
```

**Parameters:**

| Parameter | Type | Description | Optional |
|-----------|------|-------------|----------|
| `_owner` | `AddressLike` | - |  |
| `_caller` | `AddressLike` | - |  |

**Returns:** `Promise<bigint>`

#### decimals

Binding for `decimals` on the Autonity contract. ERC-20 Optional.

**Signature:**
```typescript
async decimals(): Promise<bigint> {
```

**Returns:** `{bigint} the number of decimals the NTN token uses.`

#### name

Binding for `name` on the Autonity contract. ERC-20 Optional.

**Signature:**
```typescript
async name(): Promise<string> {
```

**Returns:** `{string} the name of the stake token.`

#### symbol

Binding for `symbol` on the Autonity contract. ERC-20 Optional.

**Signature:**
```typescript
async symbol(): Promise<string> {
```

**Returns:** `{string} the Stake token's symbol.`

#### totalSupply

Binding for `totalSupply` on the Autonity contract. Returns the total amount of stake token issued.

**Signature:**
```typescript
async totalSupply(): Promise<bigint> {
```

**Returns:** `Promise<bigint>`

#### circulatingSupply

Binding for `circulatingSupply` on the Autonity contract. Returns the amount of tokens circulating in the network.

**Signature:**
```typescript
async circulatingSupply(): Promise<bigint> {
```

**Returns:** `Promise<bigint>`

#### STANDARD_DECIMALS

Binding for `STANDARD_DECIMALS` on the Autonity contract.

**Signature:**
```typescript
async STANDARD_DECIMALS(): Promise<bigint> {
```

**Returns:** `Promise<bigint>`

#### STANDARD_SCALE_FACTOR

Binding for `STANDARD_SCALE_FACTOR` on the Autonity contract.

**Signature:**
```typescript
async STANDARD_SCALE_FACTOR(): Promise<bigint> {
```

**Returns:** `Promise<bigint>`

#### getBondingRequestByID

Binding for `getBondingRequestByID` on the Autonity contract. Returns the bonding request corresponding to bonding ID.

**Signature:**
```typescript
async getBondingRequestByID(
```

**Parameters:**

| Parameter | Type | Description | Optional |
|-----------|------|-------------|----------|
| `_id` | `ethers.BigNumberish` | - |  |

**Returns:** `Promise<AutonityTypes.BondingRequest>`

#### getUnbondingRequestByID

Binding for `getUnbondingRequestByID` on the Autonity contract. Returns the unbonding request corresponding to unbonding ID.

**Signature:**
```typescript
async getUnbondingRequestByID(
```

**Parameters:**

| Parameter | Type | Description | Optional |
|-----------|------|-------------|----------|
| `_id` | `ethers.BigNumberish` | - |  |

**Returns:** `{Promise<AutonityTypes.UnbondingRequest>} - the unbonding request object`

#### getConfig

Binding for `getConfig` on the Autonity contract. Returns the current contract config

**Signature:**
```typescript
async getConfig(): Promise<AutonityTypes.AutonityConfig> {
```

**Returns:** `{Promise<AutonityTypes.AutonityConfig>} - the current Autonity config`

#### getVersion

Binding for `getVersion` on the Autonity contract. Returns the current contract version.

**Signature:**
```typescript
async getVersion(): Promise<bigint> {
```

**Returns:** `Promise<bigint>`

#### getCurrentCommitteeSize

Binding for `getCurrentCommitteeSize` on the Autonity contract. Returns the current size of the consensus committee.

**Signature:**
```typescript
async getCurrentCommitteeSize(): Promise<bigint> {
```

**Returns:** `Promise<bigint>`

#### getEpochID

Binding for `getEpochID` on the Autonity contract. Returns the current epoch ID

**Signature:**
```typescript
async getEpochID(): Promise<bigint> {
```

**Returns:** `Promise<bigint>`

#### getEpochInfo

Binding for `getEpochInfo` on the Autonity contract. Returns the current epoch info of the chain.

**Signature:**
```typescript
async getEpochInfo(): Promise<AutonityTypes.EpochInfo> {
```

**Returns:** `Promise<AutonityTypes.EpochInfo>`

#### getEpochByHeight

Binding for `getEpochByHeight` on the Autonity contract. Returns the epoch info of the height.

**Signature:**
```typescript
async getEpochByHeight(
```

**Parameters:**

| Parameter | Type | Description | Optional |
|-----------|------|-------------|----------|
| `_height` | `ethers.BigNumberish` | - |  |

**Returns:** `{Promise<AutonityTypes.EpochInfo>} - the epoch info`

#### getEpochTotalBondedStake

Binding for `getEpochTotalBondedStake` on the Autonity contract. Returns the current epoch total bonded stake

**Signature:**
```typescript
async getEpochTotalBondedStake(): Promise<bigint> {
```

**Returns:** `Promise<bigint>`

#### getEpochFromBlock

Binding for `getEpochFromBlock` on the Autonity contract. Returns epoch associated to the block number.

**Signature:**
```typescript
async getEpochFromBlock(_block: ethers.BigNumberish): Promise<bigint> {
```

**Parameters:**

| Parameter | Type | Description | Optional |
|-----------|------|-------------|----------|
| `_block` | `ethers.BigNumberish` | - |  |

**Returns:** `Promise<bigint>`

#### getEpochPeriod

Binding for `getEpochPeriod` on the Autonity contract. Returns the epoch period. If there will be an update at epoch end, the new epoch period is returned

**Signature:**
```typescript
async getEpochPeriod(): Promise<bigint> {
```

**Returns:** `Promise<bigint>`

#### getCurrentEpochPeriod

Binding for `getCurrentEpochPeriod` on the Autonity contract. Returns the epoch period of the current epoch

**Signature:**
```typescript
async getCurrentEpochPeriod(): Promise<bigint> {
```

**Returns:** `Promise<bigint>`

#### getLastEpochBlock

Binding for `getLastEpochBlock` on the Autonity contract. Returns the last epoch's end block height.

**Signature:**
```typescript
async getLastEpochBlock(): Promise<bigint> {
```

**Returns:** `Promise<bigint>`

#### getLastEpochTime

Binding for `getLastEpochTime` on the Autonity contract. Returns the last epoch's end block timestamp

**Signature:**
```typescript
async getLastEpochTime(): Promise<bigint> {
```

**Returns:** `{Promise<bigint>} - the last epoch's end block timestamp`

#### getNextEpochBlock

Binding for `getNextEpochBlock` on the Autonity contract. Returns the next epoch block.

**Signature:**
```typescript
async getNextEpochBlock(): Promise<bigint> {
```

**Returns:** `{Promise<bigint>} - the next epoch block height`

#### getClientConfig

Binding for `getClientConfig` on the Autonity contract. Returns the current client aware config

**Signature:**
```typescript
async getClientConfig(): Promise<AutonityTypes.ClientConfig> {
```

**Returns:** `{Promise<AutonityTypes.ClientConfig>} - the current client config`

#### getCommittee

Binding for `getCommittee` on the Autonity contract. Returns the block committee.

**Signature:**
```typescript
async getCommittee(): Promise<AutonityTypes.Committee[]> {
```

**Returns:** `{Promise<AutonityTypes.Committee[]>}  array of committee members`

#### getCommitteeEnodes

Binding for `getCommitteeEnodes` on the Autonity contract. Returns the consensus committee enodes.

**Signature:**
```typescript
async getCommitteeEnodes(): Promise<string[]> {
```

**Returns:** `{Promise<string[]>} - array of enodes of the current committee`

#### getMaxCommitteeSize

Binding for `getMaxCommitteeSize` on the Autonity contract. Returns the maximum size of the consensus committee.

**Signature:**
```typescript
async getMaxCommitteeSize(): Promise<bigint> {
```

**Returns:** `{Promise<bigint>} - the maximum committee size`

#### getBlockPeriod

Binding for `getBlockPeriod` on the Autonity contract. Returns the block period.

**Signature:**
```typescript
async getBlockPeriod(): Promise<bigint> {
```

**Returns:** `{Promise<bigint>} - the block period`

#### getMinimumBaseFee

Binding for `getMinimumBaseFee` on the Autonity contract. Returns the minimum gas price. Autonity transaction's gas price must be greater or equal to the minimum gas price.

**Signature:**
```typescript
async getMinimumBaseFee(): Promise<bigint> {
```

**Returns:** `{Promise<bigint>} - the minimum base fee`

#### getUnbondingPeriod

Binding for `getUnbondingPeriod` on the Autonity contract. Returns the un-bonding period.

**Signature:**
```typescript
async getUnbondingPeriod(): Promise<bigint> {
```

**Returns:** `{Promise<bigint>} - the un-bonding period`

#### getMaxScheduleDuration

Binding for `getMaxScheduleDuration` on the Autonity contract. Returns the max allowed duration of any schedule or contract.

**Signature:**
```typescript
async getMaxScheduleDuration(): Promise<bigint> {
```

**Returns:** `{Promise<bigint>} - amount max schedule duration`

#### getTreasuryAccount

Binding for `getTreasuryAccount` on the Autonity contract. Returns the current treasury account.

**Signature:**
```typescript
async getTreasuryAccount(): Promise<string> {
```

**Returns:** `{Promise<string>} - the treasury account address`

#### getTreasuryFee

Binding for `getTreasuryFee` on the Autonity contract. Returns the current treasury fee.

**Signature:**
```typescript
async getTreasuryFee(): Promise<bigint> {
```

**Returns:** `{Promise<bigint>} - the treasury fee amount`

#### getInflationReserve

Binding for `getInflationReserve` on the Autonity contract. Returns the current inflation reserve

**Signature:**
```typescript
async getInflationReserve(): Promise<bigint> {
```

**Returns:** `{Promise<bigint>} - the inflation reserve amount`

#### getOperator

Binding for `getOperator` on the Autonity contract. Returns the current operator account.

**Signature:**
```typescript
async getOperator(): Promise<string> {
```

**Returns:** `{Promise<string>} - the operator account address`

#### getOracle

Binding for `getOracle` on the Autonity contract. Returns the current Oracle account.

**Signature:**
```typescript
async getOracle(): Promise<string> {
```

**Returns:** `{Promise<string>} - the oracle contract address`

#### getSlasher

Binding for `getSlasher` on the Autonity contract. Returns the slasher contract address

**Signature:**
```typescript
async getSlasher(): Promise<string> {
```

**Returns:** `{Promise<string>} - the slasher contract address`

#### getLiquidLogicContract

Binding for `getLiquidLogicContract` on the Autonity contract. Returns the liquid logic contract

**Signature:**
```typescript
async getLiquidLogicContract(): Promise<string> {
```

**Returns:** `{Promise<string>} - the liquid logic contract address`

#### getNewContract

Binding for `getNewContract` on the Autonity contract. Getter to retrieve a new Autonity contract bytecode and ABI when an upgrade is initiated.

**Signature:**
```typescript
async getNewContract(): Promise<[string, string]> {
```

**Returns:** `{[string, string]}
   * - **_0**: `bytecode` the new contract bytecode.
   * - **_1**: `contractAbi` the new contract ABI.`

#### getSchedule

Binding for `getSchedule` on the Autonity contract. Returns the schedule at index = `_id` in the `vaultSchedules[_vault]` array.

**Signature:**
```typescript
async getSchedule(
```

**Parameters:**

| Parameter | Type | Description | Optional |
|-----------|------|-------------|----------|
| `vault` | `AddressLike` | - |  |
| `id` | `ethers.BigNumberish` | - |  |

**Returns:** `{Promise<AutonityTypes.Schedule>} - the schedule object`

#### getTotalSchedules

Binding for `getTotalSchedules` on the Autonity contract. Returns total number of schedules for the vault at address `_vault`.

**Signature:**
```typescript
async getTotalSchedules(vault: AddressLike): Promise<bigint> {
```

**Parameters:**

| Parameter | Type | Description | Optional |
|-----------|------|-------------|----------|
| `vault` | `AddressLike` | - |  |

**Returns:** `{Promise<bigint>} - the total number of schedules for the vault`

#### getValidator

Binding for `getValidator` on the Autonity contract. Returns the validator object associated with `_addr`.

**Signature:**
```typescript
async getValidator(addr: AddressLike): Promise<AutonityTypes.Validator> {
```

**Parameters:**

| Parameter | Type | Description | Optional |
|-----------|------|-------------|----------|
| `addr` | `AddressLike` | - |  |

**Returns:** `{Promise<AutonityTypes.Validator>} - the validator object`

#### getValidators

Binding for `getValidators` on the Autonity contract. Returns the current list of validators.

**Signature:**
```typescript
async getValidators(): Promise<string[]> {
```

**Returns:** `{Promise<string[]>} - an array of validator addresses`

#### getValidatorState

Binding for `getValidatorState` on the Autonity contract. Returns the state of the validator associated with `_addr`.

**Signature:**
```typescript
async getValidatorState(addr: AddressLike): Promise<bigint> {
```

**Parameters:**

| Parameter | Type | Description | Optional |
|-----------|------|-------------|----------|
| `addr` | `AddressLike` | - |  |

**Returns:** `{Promise<bigint>} - the state of the validator`

#### getUnbondingShare

Binding for `getUnbondingShare` on the Autonity contract. Returns the unbonding share after the unbonding request is applied at epoch end.

**Signature:**
```typescript
async getUnbondingShare(unbondingID: ethers.BigNumberish): Promise<bigint> {
```

**Parameters:**

| Parameter | Type | Description | Optional |
|-----------|------|-------------|----------|
| `unbondingID` | `ethers.BigNumberish` | - |  |

**Returns:** `{Promise<bigint>} - the unbonding share amount`

#### isUnbondingReleased

Binding for `isUnbondingReleased` on the Autonity contract.

**Signature:**
```typescript
async isUnbondingReleased(
```

**Parameters:**

| Parameter | Type | Description | Optional |
|-----------|------|-------------|----------|
| `unbondingID` | `ethers.BigNumberish` | - |  |

**Returns:** `{Promise<boolean>} - `true` if the unbonding request is released, `false` otherwise`

