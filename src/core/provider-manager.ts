import { ethers } from "ethers";
import { ProviderError, ValidationError, NetworkError } from "./errors";

export interface ProviderConfig {
  rpcUrl?: string;
  provider?: ethers.Provider;
}

export class ProviderManager {
  private _provider: ethers.Provider;
  private _shouldDisposeProvider: boolean = false; // Track if we should dispose the provider

  constructor(config: ProviderConfig) {
    this._provider = this.initializeProvider(config);
  }

  get provider(): ethers.Provider {
    return this._provider;
  }

  private initializeProvider(config: ProviderConfig): ethers.Provider {
  const { rpcUrl, provider } = config;

  // Kalau user kasih provider langsung
  if (provider) {
    this.validateProvider(provider);
    this._shouldDisposeProvider = false;
    return provider;
  }

  // Kalau user kasih rpcUrl
  if (rpcUrl) {
    this.validateRpcUrl(rpcUrl);
    try {
      this._shouldDisposeProvider = true;

      if (rpcUrl.startsWith("ws://") || rpcUrl.startsWith("wss://")) {
        return new ethers.WebSocketProvider(rpcUrl);
      } else {
        return new ethers.JsonRpcProvider(rpcUrl);
      }
    } catch (error) {
      throw new ProviderError(
        `Failed to create provider with URL: ${rpcUrl}`,
        error instanceof Error ? error : undefined
      );
    }
  }

  throw new ValidationError(
    "Either 'provider' or 'rpcUrl' must be provided in ProviderConfig"
  );
}


  private validateProvider(provider: ethers.Provider): void {
    if (!provider || typeof provider.getNetwork !== 'function') {
      throw new ValidationError("Invalid provider: must implement ethers.Provider interface", "provider");
    }
  }

  private validateRpcUrl(rpcUrl: string): void {
    if (!rpcUrl || typeof rpcUrl !== "string" || !rpcUrl.trim()) {
      throw new ValidationError("Invalid rpcUrl: must be a non-empty string", "rpcUrl");
    }

    // Basic URL validation
    try {
      new URL(rpcUrl);
    } catch (error) {
      throw new ValidationError("Invalid rpcUrl: must be a valid URL", "rpcUrl", error instanceof Error ? error : undefined);
    }
  }

  /**
   * Test the provider connection
   */
  async testConnection(): Promise<void> {
    try {
      await this._provider.getNetwork();
    } catch (error) {
      throw new NetworkError(
        "Provider connection test failed",
        error instanceof Error ? error : undefined
      );
    }
  }

  /**
   * Get network information
   */
  async getNetwork(): Promise<ethers.Network> {
    try {
      return await this._provider.getNetwork();
    } catch (error) {
      throw new NetworkError(
        "Failed to get network information",
        error instanceof Error ? error : undefined
      );
    }
  }

  /**
   * Check if provider is connected
   */
  async isConnected(): Promise<boolean> {
    try {
      await this._provider.getNetwork();
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Get current block number
   */
  async getBlockNumber(): Promise<number> {
    try {
      return await this._provider.getBlockNumber();
    } catch (error) {
      throw new NetworkError(
        "Failed to get current block number",
        error instanceof Error ? error : undefined
      );
    }
  }

  /**
   * Check if this provider should be disposed
   */
  get shouldDisposeProvider(): boolean {
    return this._shouldDisposeProvider;
  }

  /**
   * Properly dispose of the provider if it was created by this manager
   */
  async dispose(): Promise<void> {
    if (!this._shouldDisposeProvider) {
      return; // Don't dispose user-provided providers
    }

    try {
      // Check if it's a WebSocketProvider and has destroy method
      if ('destroy' in this._provider && typeof (this._provider as any).destroy === 'function') {
        await (this._provider as any).destroy();
      }
      
      // Check if it's a JsonRpcProvider with destroy method
      if ('destroy' in this._provider && typeof (this._provider as any).destroy === 'function') {
        await (this._provider as any).destroy();
      }

      // For WebSocket-like providers, try to close connection
      if ('websocket' in this._provider && this._provider.websocket) {
        const ws = (this._provider as any).websocket;
        if (ws && typeof ws.close === 'function' && ws.readyState === 1) {
          ws.close();
        }
      }

      // Try generic _cleanup if exists
      if ('_cleanup' in this._provider && typeof (this._provider as any)._cleanup === 'function') {
        await (this._provider as any)._cleanup();
      }

    } catch (error) {
      // Log but don't throw - disposal shouldn't break the application
      console.warn('Warning: Failed to properly dispose provider:', error);
    }
  }
}
