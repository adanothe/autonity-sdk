# Contract registry

## Table of Contents

- [ContractValidationUtils](#contractvalidationutils)
- [ContractRegistry](#contractregistry)
- [ContractClient](#contractclient)
- [ContractClientConstructor](#contractclientconstructor)
- [ContractDefinition](#contractdefinition)

## ContractValidationUtils

**Signature:**
```typescript
class ContractValidationUtils { {
```

### Methods

#### validateDefinition

**Signature:**
```typescript
static validateDefinition<T extends ContractClient>(
```

**Parameters:**

| Parameter | Type | Description | Optional |
|-----------|------|-------------|----------|
| `definition` | `ContractDefinition<T>` | - |  |

**Returns:** `void`

#### validateNotRegistered

**Signature:**
```typescript
static validateNotRegistered(
```

**Parameters:**

| Parameter | Type | Description | Optional |
|-----------|------|-------------|----------|
| `contractName` | `string` | - |  |
| `contracts` | `Map<string, ContractDefinition>` | - |  |

**Returns:** `void`

## ContractRegistry

**Signature:**
```typescript
export class ContractRegistry { {
```

### Properties

| Property | Type | Description | Optional | Readonly |
|----------|------|-------------|----------|----------|
| `contracts` | `any` | - |  |  |
| `instances` | `any` | - |  |  |

### Methods

#### registerContract

Register a new contract type with validation

**Signature:**
```typescript
registerContract<T extends ContractClient>(
```

**Parameters:**

| Parameter | Type | Description | Optional |
|-----------|------|-------------|----------|
| `definition` | `ContractDefinition<T>` | - |  |

**Returns:** `void`

#### createContract

Create contract instance with validation and error handling

**Signature:**
```typescript
createContract<T extends ContractClient>(
```

**Parameters:**

| Parameter | Type | Description | Optional |
|-----------|------|-------------|----------|
| `contractName` | `string` | - |  |
| `provider` | `ethers.Provider` | - |  |
| `contractAddress` | `string` | - |  |
| `signer` | `ethers.Signer` | - | ✓ |

**Returns:** `T`

#### getRegisteredContracts

Get registered contract names

**Signature:**
```typescript
getRegisteredContracts(): string[] {
```

**Returns:** `string[]`

#### isRegistered

Check if contract is registered

**Signature:**
```typescript
isRegistered(contractName: string): boolean {
```

**Parameters:**

| Parameter | Type | Description | Optional |
|-----------|------|-------------|----------|
| `contractName` | `string` | - |  |

**Returns:** `boolean`

#### unregisterContract

Unregister a contract type

**Signature:**
```typescript
unregisterContract(contractName: string): boolean {
```

**Parameters:**

| Parameter | Type | Description | Optional |
|-----------|------|-------------|----------|
| `contractName` | `string` | - |  |

**Returns:** `boolean`

#### getContractDefinition

Get contract definition

**Signature:**
```typescript
getContractDefinition(contractName: string): ContractDefinition | undefined {
```

**Parameters:**

| Parameter | Type | Description | Optional |
|-----------|------|-------------|----------|
| `contractName` | `string` | - |  |

**Returns:** `ContractDefinition | undefined`

#### clearInstances

Clear all instances (useful for cleanup)

**Signature:**
```typescript
clearInstances(): void {
```

**Returns:** `void`

## ContractClient

**Signature:**
```typescript
export interface ContractClient { {
```

## ContractClientConstructor

**Signature:**
```typescript
export interface ContractClientConstructor< {
```

## ContractDefinition

**Signature:**
```typescript
export interface ContractDefinition<T extends ContractClient = ContractClient> { {
```

### Properties

| Property | Type | Description | Optional | Readonly |
|----------|------|-------------|----------|----------|
| `name` | `string` | - |  |  |
| `clientClass` | `ContractClientConstructor<T>` | - |  |  |
| `contractAddress` | `string` | - | ✓ |  |

