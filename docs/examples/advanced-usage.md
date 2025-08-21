# Advanced Usage

This guide covers advanced features and patterns for using the Autonity SDK.

## Custom Provider Configuration

```typescript
import { Contract } from 'autonity-sdk';
import { ethers } from 'ethers';

// Using a custom provider
const provider = new ethers.JsonRpcProvider('https://rpc.autonity.org');
const signer = new ethers.Wallet('0x...', provider);

const contract = new Contract({
  provider: provider,
  contractAddress: '0x...',
  signer: signer
});
```

## Event Listening

```typescript
// Listen for new epoch events
contract.autonity.contract.on('NewEpoch', (epochId, blockNumber) => {
  console.log(`New epoch ${epochId} at block ${blockNumber}`);
});

// Listen for bonding events
contract.autonity.contract.on('BondingRewarded', (validator, delegator, amount) => {
  console.log(`Bonding reward: ${amount} for delegator ${delegator}`);
});
```

## Error Handling

```typescript
try {
  const validators = await contract.autonity.getValidators();
  console.log('Validators:', validators);
} catch (error) {
  if (error.code === 'NETWORK_ERROR') {
    console.error('Network connection failed');
  } else if (error.code === 'CALL_EXCEPTION') {
    console.error('Contract call failed:', error.reason);
  } else {
    console.error('Unexpected error:', error);
  }
}
```

## Batch Operations

```typescript
// Execute multiple read operations in parallel
const [validators, committee, totalSupply] = await Promise.all([
  contract.autonity.getValidators(),
  contract.autonity.getCommittee(),
  contract.autonity.totalSupply()
]);

console.log('Validators:', validators.length);
console.log('Committee size:', committee.length);
console.log('Total supply:', totalSupply);
```

## Working with Oracle Data

```typescript
// Get all available symbols
const symbols = await contract.oracle.getSymbols();

// Get latest data for all symbols
const priceData = await Promise.all(
  symbols.map(symbol => 
    contract.oracle.getLatestRoundData(symbol)
  )
);

// Display price information
symbols.forEach((symbol, index) => {
  const data = priceData[index];
  console.log(`${symbol}: ${data.price} (Round ${data.roundId})`);
});
```
