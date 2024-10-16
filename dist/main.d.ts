import { Auton } from "./contract/autonity";
import { oracle } from "./contract/oracle";
import { initProviderOrSigner } from "./utils/utils";
export declare class Contract {
    autonity: Auton;
    oracle: oracle;
    constructor(rpcUrl?: string, contractAddressAutonity?: string, contractAddressOracle?: string, privateKey?: string, signerOrProvider?: ReturnType<typeof initProviderOrSigner>);
}
