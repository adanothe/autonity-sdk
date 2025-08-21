# Wallet manager

## Table of Contents

- [WalletManager](#walletmanager)
- [WalletConfig](#walletconfig)

## WalletManager

**Signature:**
```typescript
export class WalletManager { {
```

### Properties

| Property | Type | Description | Optional | Readonly |
|----------|------|-------------|----------|----------|
| `_signer` | `ethers.Signer` | - | ✓ |  |

### Methods

#### initializeSigner

**Signature:**
```typescript
private initializeSigner(config: WalletConfig): ethers.Signer | undefined {
```

**Parameters:**

| Parameter | Type | Description | Optional |
|-----------|------|-------------|----------|
| `config` | `WalletConfig` | - |  |

**Returns:** `ethers.Signer | undefined`

#### validateSigner

**Signature:**
```typescript
private validateSigner(signer: ethers.Signer): void {
```

**Parameters:**

| Parameter | Type | Description | Optional |
|-----------|------|-------------|----------|
| `signer` | `ethers.Signer` | - |  |

**Returns:** `void`

#### createWalletFromPrivateKey

**Signature:**
```typescript
private createWalletFromPrivateKey(
```

**Parameters:**

| Parameter | Type | Description | Optional |
|-----------|------|-------------|----------|
| `privateKey` | `string` | - |  |
| `provider` | `ethers.Provider` | - |  |

**Returns:** `ethers.Wallet`

#### getAddress

Get signer address if available

**Signature:**
```typescript
async getAddress(): Promise<string | null> {
```

**Returns:** `Promise<string | null>`

#### getBalance

Get signer balance if available

**Signature:**
```typescript
async getBalance(): Promise<bigint | null> {
```

**Returns:** `Promise<bigint | null>`

## WalletConfig

**Signature:**
```typescript
export interface WalletConfig { {
```

### Properties

| Property | Type | Description | Optional | Readonly |
|----------|------|-------------|----------|----------|
| `provider` | `ethers.Provider` | - |  |  |
| `privateKey` | `string` | - | ✓ |  |
| `signer` | `ethers.Signer` | - | ✓ |  |

