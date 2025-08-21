---
layout: default
title: ProviderManager
parent: API Reference
nav_order: 4
---

# ProviderManager
{: .no_toc }

Manages Ethereum providers with automatic failover and connection handling.
{: .fs-6 .fw-300 }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---
- [ProviderConfig](#providerconfig)

## ProviderManager

**Signature:**
```typescript
export class ProviderManager {
 {
```

### Properties

| Property | Type | Description | Optional | Readonly |
|----------|------|-------------|----------|----------|
| `_provider` | `ethers.Provider` | - |  |  |
| `_shouldDisposeProvider` | `boolean` | - |  |  |

### Methods

#### initializeProvider

**Signature:**
```typescript
private initializeProvider(config: ProviderConfig): ethers.Provider {
```

**Parameters:**

| Parameter | Type | Description | Optional |
|-----------|------|-------------|----------|
| `config` | `ProviderConfig` | - |  |

**Returns:** `ethers.Provider`

#### validateProvider

**Signature:**
```typescript
private validateProvider(provider: ethers.Provider): void {
```

**Parameters:**

| Parameter | Type | Description | Optional |
|-----------|------|-------------|----------|
| `provider` | `ethers.Provider` | - |  |

**Returns:** `void`

#### validateRpcUrl

**Signature:**
```typescript
private validateRpcUrl(rpcUrl: string): void {
```

**Parameters:**

| Parameter | Type | Description | Optional |
|-----------|------|-------------|----------|
| `rpcUrl` | `string` | - |  |

**Returns:** `void`

#### testConnection

Test the provider connection

**Signature:**
```typescript
async testConnection(): Promise<void> {
```

**Returns:** `Promise<void>`

#### getNetwork

Get network information

**Signature:**
```typescript
async getNetwork(): Promise<ethers.Network> {
```

**Returns:** `Promise<ethers.Network>`

#### isConnected

Check if provider is connected

**Signature:**
```typescript
async isConnected(): Promise<boolean> {
```

**Returns:** `Promise<boolean>`

#### getBlockNumber

Get current block number

**Signature:**
```typescript
async getBlockNumber(): Promise<number> {
```

**Returns:** `Promise<number>`

#### dispose

Properly dispose of the provider if it was created by this manager

**Signature:**
```typescript
async dispose(): Promise<void> {
```

**Returns:** `Promise<void>`

## ProviderConfig

**Signature:**
```typescript
export interface ProviderConfig {
 {
```

### Properties

| Property | Type | Description | Optional | Readonly |
|----------|------|-------------|----------|----------|
| `rpcUrl` | `string` | - | ✓ |  |
| `provider` | `ethers.Provider` | - | ✓ |  |

