import { ethers } from "ethers";
import { WalletError, ValidationError, NetworkError } from "./errors";

export interface WalletConfig {
  provider: ethers.Provider;
  privateKey?: string;
  signer?: ethers.Signer;
}

export class WalletManager {
  private _signer?: ethers.Signer;

  constructor(config: WalletConfig) {
    this._signer = this.initializeSigner(config);
  }

  get signer(): ethers.Signer | undefined {
    return this._signer;
  }

  get hasSigner(): boolean {
    return !!this._signer;
  }

  private initializeSigner(config: WalletConfig): ethers.Signer | undefined {
    const { provider, privateKey, signer } = config;

    // If signer is directly provided, validate and return it
    if (signer) {
      this.validateSigner(signer);
      return signer;
    }

    // If private key is provided, create wallet
    if (privateKey) {
      return this.createWalletFromPrivateKey(privateKey, provider);
    }

    // No signer configuration provided
    return undefined;
  }

  private validateSigner(signer: ethers.Signer): void {
    if (!signer || typeof signer.getAddress !== 'function') {
      throw new ValidationError("Invalid signer: must implement ethers.Signer interface", "signer");
    }
  }

  private createWalletFromPrivateKey(
    privateKey: string,
    provider: ethers.Provider
  ): ethers.Wallet {
    if (!privateKey || typeof privateKey !== 'string') {
      throw new ValidationError("Invalid private key: must be a non-empty string", "privateKey");
    }

    try {
      return new ethers.Wallet(privateKey, provider);
    } catch (error) {
      throw new WalletError(
        "Failed to create wallet from private key",
        error instanceof Error ? error : undefined
      );
    }
  }

  /**
   * Get signer address if available
   */
  async getAddress(): Promise<string | null> {
    if (!this._signer) {
      return null;
    }

    try {
      return await this._signer.getAddress();
    } catch (error) {
      throw new WalletError(
        "Failed to get signer address",
        error instanceof Error ? error : undefined
      );
    }
  }

  /**
   * Get signer balance if available
   */
  async getBalance(): Promise<bigint | null> {
    if (!this._signer) {
      return null;
    }

    try {
      const address = await this._signer.getAddress();
      return await this._signer.provider!.getBalance(address);
    } catch (error) {
      throw new NetworkError(
        "Failed to get signer balance",
        error instanceof Error ? error : undefined
      );
    }
  }
}
