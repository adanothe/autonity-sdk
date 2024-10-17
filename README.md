# Autonity SDK

**Autonity SDK** is a JavaScript library for interacting with Autonity network

## Features

- Interact with smart contracts using easy-to-use methods.
- Support for custom RPC and smart contracts.
- Simple usage with TypeScript and Node.js.

## Installation

You can install Autonity SDK using NPM with the following command:

```bash
npm install autonity-sdk
```

## Usage

Here’s an example of how to use the Autonity SDK in TypeScript and Node.js:

### TypeScript

```typescript
// Import Autonity SDK
import { Contract, utils } from 'autonity-sdk';

// Initialize provider or signer
// const rpcUrl = utils.RPC; // can use custom RPC or the RPC from utils
// const contract = utils.AUTONITY_CONTRACT; // can use custom contract or the contract from the utils class
// const privateKey = 'your-private-key'; // Replace with the private key for wallet access

// Initialize the contract with the required parameters
const contract = new Contract(); // default
// const contract = new Contract(rpcUrl, contract); // if you want to use custom
// const contract = new Contract(rpcUrl, contract, privateKey); // if you want to use transaction functions

// Example of calling the getCommittee function from the Autonity contract
contract.autonity.getCommittee() 
  .then(result => {
    console.log('Result from contract call:', result);
  })
  .catch(error => {
    console.error('Error while calling contract:', error);
  });
```

### Node.js

```javascript
// Import Autonity SDK
const { Contract, utils } = require('autonity-sdk');

// Initialize provider or signer
// const rpcUrl = utils.RPC; // can use  custom RPC or the RPC from utils
// const contract = utils.AUTONITY_CONTRACT; // can use custom contract or the contract from the utils class
// const privateKey = "your-private-key"; // Replace with the private key for wallet access

// Initialize the contract with the required parameters
const contract = new Contract(); // default
// const contract = new Contract(rpcUrl, contract); // if you want to use custom
// const contract = new Contract(rpcUrl, contract, privateKey); // if you want to use transaction functions

// Example of calling the getCommittee function from the Autonity contract
contract.autonity.getCommittee() // 
  .then(result => {
    console.log('Result from contract call:', result);
  })
  .catch(error => {
    console.error('Error while calling contract:', error);
  });
```
