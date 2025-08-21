# Validation utils

## ValidationUtils

Shared validation utilities for common validation patterns

**Signature:**
```typescript
export class ValidationUtils { {
```

### Methods

#### validateAddress

Validate Ethereum address format

**Signature:**
```typescript
static validateAddress(address: string, fieldName: string = "address"): void {
```

**Parameters:**

| Parameter | Type | Description | Optional |
|-----------|------|-------------|----------|
| `address` | `string` | - |  |
| `fieldName` | `string` | - |  |

**Returns:** `void`

#### validateRequiredString

Validate required string field

**Signature:**
```typescript
static validateRequiredString(value: string, fieldName: string): void {
```

**Parameters:**

| Parameter | Type | Description | Optional |
|-----------|------|-------------|----------|
| `value` | `string` | - |  |
| `fieldName` | `string` | - |  |

**Returns:** `void`

#### validateRequiredFunction

Validate required function

**Signature:**
```typescript
static validateRequiredFunction(value: Function, fieldName: string): void {
```

**Parameters:**

| Parameter | Type | Description | Optional |
|-----------|------|-------------|----------|
| `value` | `Function` | - |  |
| `fieldName` | `string` | - |  |

**Returns:** `void`

#### validateEitherOr

Validate either/or configuration - exactly one must be provided

**Signature:**
```typescript
static validateEitherOr<T>(
```

**Parameters:**

| Parameter | Type | Description | Optional |
|-----------|------|-------------|----------|
| `options` | `{ [K in keyof T]: T[K] }` | - |  |
| `optionNames` | `(keyof T)[]` | - |  |
| `errorMessage` | `string` | - | ✓ |

**Returns:** `void`

#### validateMutuallyExclusive

Validate mutually exclusive options - only one can be provided

**Signature:**
```typescript
static validateMutuallyExclusive<T>(
```

**Parameters:**

| Parameter | Type | Description | Optional |
|-----------|------|-------------|----------|
| `options` | `{ [K in keyof T]: T[K] }` | - |  |
| `optionNames` | `(keyof T)[]` | - |  |
| `errorMessage` | `string` | - | ✓ |

**Returns:** `void`

