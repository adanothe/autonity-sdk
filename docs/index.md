---
layout: default
title: Home
nav_order: 0
description: "Autonity SDK - TypeScript library for interacting with the Autonity blockchain"
permalink: /
---

# Autonity SDK Documentation
{: .fs-9 }

A comprehensive TypeScript library for interacting with the Autonity blockchain network.
{: .fs-6 .fw-300 }

[Get started now](installation.md){: .btn .btn-primary .fs-5 .mb-4 .mb-md-0 .mr-2 } [View it on GitHub](https://github.com/adanothe/autonity-sdk){: .btn .fs-5 .mb-4 .mb-md-0 }

---

## Quick Navigation

<div class="code-example" markdown="1">

**🚀 [Installation & Setup](installation.md)** - Get started with installation and configuration

**📚 [API Reference](api/)** - Complete API documentation for all classes and methods

**📝 [Examples](examples/)** - Practical usage examples and integration guides  

**🏷️ [Types](types/)** - TypeScript type definitions and interfaces

</div>

## Features

- **🔥 Type-safe** - Full TypeScript support with comprehensive type definitions
- **🚀 Easy to use** - Simple, intuitive API for all Autonity operations  
- **📦 Modular** - Import only what you need
- **🛠️ Well-tested** - Comprehensive test coverage
- **📚 Well-documented** - Extensive documentation and examples
- **⚡ High Performance** - Optimized for production use
- **🔄 Event Support** - Real-time event listening and filtering
- **🛡️ Error Handling** - Comprehensive error types and handling

## Quick Start

### Installation

```bash
npm install autonity-sdk ethers
```

### Basic Usage

```typescript
import { Contract } from 'autonity-sdk';

// Create a contract instance
const contract = new Contract({
  rpcUrl: 'https://rpc.autonity.org',
  contractAddress: '0x...' // Autonity contract address
});

// Get validator information
const validators = await contract.autonity.getValidators();
console.log('Validators:', validators);

// Get oracle data
const latestRound = await contract.oracle.getLatestRoundData('USD-ATN');
console.log('Latest round data:', latestRound);
```

## Core Components

### Contract Class
The main entry point that provides unified access to both Autonity and Oracle functionality.

### AutonityClient
Handles all Autonity protocol operations including validator management, staking, delegation, and token operations.

### OracleClient  
Manages Oracle price feed operations including price data retrieval and symbol management.

## Use Cases

### Validator Operations
Get validator information, check states, and manage validator lifecycle.

### Staking & Delegation
Bond and unbond tokens, manage delegation requests, and track rewards.

### Price Data
Access real-time and historical price data from the Autonity Oracle.

### Event Monitoring
Listen for blockchain events in real-time with built-in filtering.

---

## Next Steps

1. **[Install the SDK](installation.md)** - Complete installation and setup guide
2. **[Try Basic Examples](examples/basic-usage.md)** - Get hands-on with simple examples
3. **[Explore the API](api/)** - Dive deep into the full API reference
4. **[Advanced Usage](examples/advanced-usage.md)** - Learn advanced patterns and best practices

## Community & Support

- **GitHub**: [autonity-sdk](https://github.com/adanothe/autonity-sdk)
- **Issues**: [Report bugs or request features](https://github.com/adanothe/autonity-sdk/issues)

## License

This project is licensed under the MIT License.

---

*This documentation is automatically generated from TypeScript source code using JSDoc comments.*
