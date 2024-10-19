import { ethers } from "ethers";

// Network class definition
export class Network {
  /**
   * A record of parameters of an Autonity network.
   *
   * @param chainId - The network's chain ID.
   * @param networkName - The network's name as available on ChainList.
   * @param rpcUrl - The URL of the JSON-RPC server for the network.
   * @param httpProvider - Web3 provider that connects to the default HTTPS JSON-RPC server on the network.
   */
  constructor(
    public readonly chainId: number,
    public readonly networkName: string,
    public readonly rpcUrl: string,
    public readonly httpProvider: ethers.JsonRpcProvider
  ) {}
}

// Inisialisasi jaringan Bakerloo
export const bakerloo = new Network(
  65010003,
  "Autonity Bakerloo (Yamuna) Testnet",
  "https://rpc1.bakerloo.autonity.org/",
  new ethers.JsonRpcProvider("https://rpc1.bakerloo.autonity.org/")
);

// Inisialisasi jaringan Piccadilly
export const piccadilly = new Network(
  65100003,
  "Autonity Piccadilly (Yamuna) Testnet",
  "https://rpc1.piccadilly.autonity.org/",
  new ethers.JsonRpcProvider("https://rpc1.piccadilly.autonity.org/")
);
