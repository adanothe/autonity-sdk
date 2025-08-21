---
layout: default
title: Error Handling
parent: Examples
nav_order: 3
---

# Error Handling
{: .no_toc }

Comprehensive guide to error handling in the Autonity SDK.
{: .fs-6 .fw-300 }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Error Types

The Autonity SDK provides specific error types to help you handle different failure scenarios:

### ConfigurationError

Thrown when there are issues with SDK configuration:

```typescript
import { ConfigurationError } from 'autonity-sdk';

try {
  const contract = new Contract({
    // Missing required configuration
  });
} catch (error) {
  if (error instanceof ConfigurationError) {
    console.error('Configuration error:', error.message);
    // Handle configuration issues
  }
}
```

### ContractCallError

Thrown when contract calls fail:

```typescript
try {
  const validators = await contract.autonity.getValidators();
} catch (error) {
  if (error.code === 'CALL_EXCEPTION') {
    console.error('Contract call failed:', error.reason);
    // Handle contract call failures
  }
}
```

### Network Errors

Handle network connectivity issues:

```typescript
try {
  const balance = await contract.autonity.balanceOf('0x...');
} catch (error) {
  if (error.code === 'NETWORK_ERROR') {
    console.error('Network connection failed');
    // Implement retry logic or fallback
  }
}
```

## Error Handling Patterns

### Try-Catch with Specific Error Types

```typescript
import { Contract, ConfigurationError } from 'autonity-sdk';

async function initializeContract() {
  try {
    const contract = new Contract({
      rpcUrl: process.env.RPC_URL,
      contractAddress: process.env.CONTRACT_ADDRESS
    });
    
    const validators = await contract.autonity.getValidators();
    return validators;
    
  } catch (error) {
    if (error instanceof ConfigurationError) {
      console.error('Configuration error:', error.message);
      throw new Error('Invalid SDK configuration');
    }
    
    if (error.code === 'NETWORK_ERROR') {
      console.error('Network error:', error.message);
      throw new Error('Unable to connect to network');
    }
    
    if (error.code === 'CALL_EXCEPTION') {
      console.error('Contract call failed:', error.reason);
      throw new Error('Contract interaction failed');
    }
    
    // Unknown error
    console.error('Unexpected error:', error);
    throw error;
  }
}
```

### Retry Logic

```typescript
async function withRetry<T>(
  operation: () => Promise<T>, 
  maxRetries: number = 3,
  delay: number = 1000
): Promise<T> {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await operation();
    } catch (error) {
      if (attempt === maxRetries) {
        throw error;
      }
      
      // Only retry on network errors
      if (error.code === 'NETWORK_ERROR' || error.code === 'TIMEOUT') {
        console.warn(`Attempt ${attempt} failed, retrying in ${delay}ms...`);
        await new Promise(resolve => setTimeout(resolve, delay));
        delay *= 2; // Exponential backoff
      } else {
        throw error; // Don't retry on other error types
      }
    }
  }
}

// Usage
const validators = await withRetry(() => 
  contract.autonity.getValidators()
);
```

### Graceful Degradation

```typescript
async function getValidatorInfo(address: string) {
  const result = {
    address,
    exists: false,
    details: null,
    state: null,
    error: null
  };
  
  try {
    // Check if validator exists
    const validators = await contract.autonity.getValidators();
    result.exists = validators.includes(address);
    
    if (result.exists) {
      // Get detailed information
      try {
        result.details = await contract.autonity.getValidator(address);
      } catch (detailError) {
        console.warn('Could not fetch validator details:', detailError.message);
      }
      
      try {
        result.state = await contract.autonity.getValidatorState(address);
      } catch (stateError) {
        console.warn('Could not fetch validator state:', stateError.message);
      }
    }
    
  } catch (error) {
    result.error = error.message;
    console.error('Failed to get validator info:', error);
  }
  
  return result;
}
```

### Transaction Error Handling

```typescript
async function bondToValidator(validatorAddress: string, amount: string) {
  try {
    // Validate inputs first
    if (!ethers.isAddress(validatorAddress)) {
      throw new Error('Invalid validator address');
    }
    
    const parsedAmount = ethers.parseEther(amount);
    if (parsedAmount <= 0) {
      throw new Error('Amount must be greater than 0');
    }
    
    // Check balance
    const balance = await contract.autonity.balanceOf(await contract.autonity.contract.getAddress());
    if (balance < parsedAmount) {
      throw new Error('Insufficient balance');
    }
    
    // Execute transaction
    const tx = await contract.autonity.bond(validatorAddress, parsedAmount);
    console.log('Transaction sent:', tx.hash);
    
    // Wait for confirmation
    const receipt = await tx.wait();
    console.log('Transaction confirmed in block:', receipt.blockNumber);
    
    return receipt;
    
  } catch (error) {
    if (error.code === 'INSUFFICIENT_FUNDS') {
      throw new Error('Insufficient funds for transaction and gas');
    }
    
    if (error.code === 'UNPREDICTABLE_GAS_LIMIT') {
      throw new Error('Transaction would fail - check validator status and amount');
    }
    
    if (error.code === 'USER_REJECTED') {
      throw new Error('Transaction was rejected by user');
    }
    
    throw error;
  }
}
```

## Best Practices

### 1. Always Use Try-Catch

Never call async SDK methods without proper error handling:

```typescript
// ❌ Bad
const validators = await contract.autonity.getValidators();

// ✅ Good
try {
  const validators = await contract.autonity.getValidators();
  // Handle success
} catch (error) {
  // Handle error
}
```

### 2. Validate Inputs Early

```typescript
function validateAddress(address: string): void {
  if (!address) {
    throw new Error('Address is required');
  }
  if (!ethers.isAddress(address)) {
    throw new Error('Invalid Ethereum address');
  }
}

async function getValidator(address: string) {
  validateAddress(address); // Validate early
  return await contract.autonity.getValidator(address);
}
```

### 3. Provide Meaningful Error Messages

```typescript
try {
  const validator = await contract.autonity.getValidator(address);
} catch (error) {
  if (error.code === 'CALL_EXCEPTION') {
    throw new Error(`Failed to get validator ${address}: validator may not exist`);
  }
  throw new Error(`Failed to get validator ${address}: ${error.message}`);
}
```

### 4. Log Errors for Debugging

```typescript
async function safeOperation<T>(operation: () => Promise<T>, context: string): Promise<T | null> {
  try {
    return await operation();
  } catch (error) {
    console.error(`Error in ${context}:`, {
      message: error.message,
      code: error.code,
      stack: error.stack
    });
    return null;
  }
}
```

### 5. Use Type Guards

```typescript
function isNetworkError(error: any): boolean {
  return error.code === 'NETWORK_ERROR' || 
         error.code === 'TIMEOUT' || 
         error.message?.includes('network');
}

function isContractError(error: any): boolean {
  return error.code === 'CALL_EXCEPTION' ||
         error.code === 'UNPREDICTABLE_GAS_LIMIT';
}
```

## Error Recovery Strategies

### Circuit Breaker Pattern

```typescript
class CircuitBreaker {
  private failures = 0;
  private lastFailureTime = 0;
  private readonly threshold = 5;
  private readonly timeout = 60000; // 1 minute
  
  async execute<T>(operation: () => Promise<T>): Promise<T> {
    if (this.isOpen()) {
      throw new Error('Circuit breaker is open');
    }
    
    try {
      const result = await operation();
      this.onSuccess();
      return result;
    } catch (error) {
      this.onFailure();
      throw error;
    }
  }
  
  private isOpen(): boolean {
    return this.failures >= this.threshold && 
           (Date.now() - this.lastFailureTime) < this.timeout;
  }
  
  private onSuccess(): void {
    this.failures = 0;
  }
  
  private onFailure(): void {
    this.failures++;
    this.lastFailureTime = Date.now();
  }
}
```

### Fallback Providers

```typescript
class FallbackContract {
  private providers: string[];
  private currentIndex = 0;
  
  constructor(providers: string[], contractAddress: string) {
    this.providers = providers;
    this.contracts = providers.map(rpcUrl => 
      new Contract({ rpcUrl, contractAddress })
    );
  }
  
  async callWithFallback<T>(operation: (contract: Contract) => Promise<T>): Promise<T> {
    for (let i = 0; i < this.providers.length; i++) {
      try {
        const contract = this.contracts[this.currentIndex];
        return await operation(contract);
      } catch (error) {
        console.warn(`Provider ${this.currentIndex} failed:`, error.message);
        this.currentIndex = (this.currentIndex + 1) % this.providers.length;
        
        if (i === this.providers.length - 1) {
          throw new Error('All providers failed');
        }
      }
    }
    
    throw new Error('No providers available');
  }
}
```
