import { ethers } from "ethers";
import { ValidationError } from "./errors";

/**
 * Shared validation utilities for common validation patterns
 */
export class ValidationUtils {
  /**
   * Validate Ethereum address format
   */
  static validateAddress(address: string, fieldName: string = "address"): void {
    if (!address) {
      throw new ValidationError(`${fieldName} is required`);
    }

    if (!ethers.isAddress(address)) {
      throw new ValidationError(`Invalid ${fieldName} format: ${address}`);
    }
  }

  /**
   * Validate required string field
   */
  static validateRequiredString(value: string, fieldName: string): void {
    if (!value || typeof value !== "string") {
      throw new ValidationError(`${fieldName} must be a valid string`);
    }
  }

  /**
   * Validate required function
   */
  static validateRequiredFunction(value: Function, fieldName: string): void {
    if (!value || typeof value !== "function") {
      throw new ValidationError(`${fieldName} must be a valid function`);
    }
  }

  /**
   * Validate either/or configuration - exactly one must be provided
   */
  static validateEitherOr<T>(
    options: { [K in keyof T]: T[K] },
    optionNames: (keyof T)[],
    errorMessage?: string
  ): void {
    const providedOptions = optionNames.filter(name => options[name] != null);
    
    if (providedOptions.length === 0) {
      throw new ValidationError(
        errorMessage || `One of the following must be specified: ${optionNames.join(", ")}`
      );
    }

    if (providedOptions.length > 1) {
      throw new ValidationError(
        errorMessage || `Cannot specify multiple options: ${providedOptions.join(", ")}`
      );
    }
  }

  /**
   * Validate mutually exclusive options - only one can be provided
   */
  static validateMutuallyExclusive<T>(
    options: { [K in keyof T]: T[K] },
    optionNames: (keyof T)[],
    errorMessage?: string
  ): void {
    const providedOptions = optionNames.filter(name => options[name] != null);
    
    if (providedOptions.length > 1) {
      throw new ValidationError(
        errorMessage || `Cannot specify both: ${providedOptions.join(" and ")}`
      );
    }
  }
}
