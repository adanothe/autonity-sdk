"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.piccadilly = exports.bakerloo = exports.Network = void 0;
const ethers_1 = require("ethers");
// Network class definition
class Network {
    /**
     * A record of parameters of an Autonity network.
     *
     * @param chainId - The network's chain ID.
     * @param networkName - The network's name as available on ChainList.
     * @param rpcUrl - The URL of the JSON-RPC server for the network.
     * @param httpProvider - Web3 provider that connects to the default HTTPS JSON-RPC server on the network.
     */
    constructor(chainId, networkName, rpcUrl, httpProvider) {
        this.chainId = chainId;
        this.networkName = networkName;
        this.rpcUrl = rpcUrl;
        this.httpProvider = httpProvider;
    }
}
exports.Network = Network;
exports.bakerloo = new Network(65010003, "Autonity Bakerloo (Yamuna) Testnet", "https://rpc1.bakerloo.autonity.org/", new ethers_1.ethers.JsonRpcProvider("https://rpc1.bakerloo.autonity.org/"));
exports.piccadilly = new Network(65100003, "Autonity Piccadilly (Yamuna) Testnet", "https://rpc1.piccadilly.autonity.org/", new ethers_1.ethers.JsonRpcProvider("https://rpc1.piccadilly.autonity.org/"));
