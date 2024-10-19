import { ethers } from "ethers";
export declare class Network {
    readonly chainId: number;
    readonly networkName: string;
    readonly rpcUrl: string;
    readonly httpProvider: ethers.JsonRpcProvider;
    /**
     * A record of parameters of an Autonity network.
     *
     * @param chainId - The network's chain ID.
     * @param networkName - The network's name as available on ChainList.
     * @param rpcUrl - The URL of the JSON-RPC server for the network.
     * @param httpProvider - Web3 provider that connects to the default HTTPS JSON-RPC server on the network.
     */
    constructor(chainId: number, networkName: string, rpcUrl: string, httpProvider: ethers.JsonRpcProvider);
}
export declare const bakerloo: Network;
export declare const piccadilly: Network;
