import { Auton, accountability, oracle, liquid } from "./contract";
import { Network } from "./utils";
export declare class Contract {
    autonity: Auton;
    oracle: oracle;
    accountability: accountability;
    liquid: liquid;
    constructor(networkOrRpcUrl?: Network | string, liquidContractAddress?: string, privateKey?: string, oracleContractAddress?: string, accountabilityContractAddress?: string, autonityContractAddress?: string);
}
