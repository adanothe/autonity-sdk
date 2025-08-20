/**
 * Base class for all SDK errors
 */
export abstract class AutonitySDKError extends Error {
  abstract readonly code: string;
  abstract readonly category: string;

  constructor(message: string, public readonly cause?: Error) {
    super(message);
    this.name = this.constructor.name;
    
    // Maintain proper stack trace
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }

  toJSON() {
    return {
      name: this.name,
      message: this.message,
      code: this.code,
      category: this.category,
      cause: this.cause?.message,
      stack: this.stack,
    };
  }
}

/**
 * Configuration related errors
 */
export class ConfigurationError extends AutonitySDKError {
  readonly code = 'CONFIGURATION_ERROR';
  readonly category = 'configuration';

  constructor(message: string, cause?: Error) {
    super(message, cause);
  }
}

/**
 * Provider connection errors
 */
export class ProviderError extends AutonitySDKError {
  readonly code = 'PROVIDER_ERROR';
  readonly category = 'provider';

  constructor(message: string, cause?: Error) {
    super(message, cause);
  }
}

/**
 * Wallet/Signer related errors
 */
export class WalletError extends AutonitySDKError {
  readonly code = 'WALLET_ERROR';
  readonly category = 'wallet';

  constructor(message: string, cause?: Error) {
    super(message, cause);
  }
}

/**
 * Contract related errors
 */
export class ContractError extends AutonitySDKError {
  readonly code = 'CONTRACT_ERROR';
  readonly category = 'contract';

  constructor(message: string, public readonly contractName?: string, cause?: Error) {
    super(message, cause);
  }
}

/**
 * Network/Connection related errors
 */
export class NetworkError extends AutonitySDKError {
  readonly code = 'NETWORK_ERROR';
  readonly category = 'network';

  constructor(message: string, cause?: Error) {
    super(message, cause);
  }
}

/**
 * Validation errors
 */
export class ValidationError extends AutonitySDKError {
  readonly code = 'VALIDATION_ERROR';
  readonly category = 'validation';

  constructor(message: string, public readonly field?: string, cause?: Error) {
    super(message, cause);
  }
}
