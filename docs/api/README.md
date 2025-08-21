---
layout: default
title: API Reference
nav_order: 2
has_children: true
permalink: /api/
---

# API Reference
{: .no_toc }

Complete API documentation for all classes and methods in the Autonity SDK.
{: .fs-6 .fw-300 }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Core Classes

### [Contract](contract.md)
Main entry point for interacting with Autonity contracts. Provides unified access to both Autonity and Oracle functionality.

### [AutonityClient](autonity.md)
Client for Autonity protocol operations including validator management, staking, delegation, and governance.

### [OracleClient](oracle.md)
Client for Oracle price feed operations including price data retrieval and historical data access.

## Core Utilities

### [ProviderManager](provider-manager.md)
Manages Ethereum providers with automatic failover and connection handling.

### [WalletManager](wallet-manager.md)
Manages wallet and signer instances with support for various wallet types.

### [ContractRegistry](contract-registry.md)
Registry for contract instances with caching and lifecycle management.

### [ValidationUtils](validation-utils.md)
Validation utilities and helpers for input validation and error handling.

---

## Quick Navigation

- **Getting Started**: Check out the [Basic Usage](../examples/basic-usage.md) guide
- **Advanced Features**: See [Advanced Usage](../examples/advanced-usage.md) examples
- **Type Definitions**: Browse [Type Documentation](../types/)
- **Error Handling**: Learn about [Error Types and Handling](../examples/error-handling.md)
