import { Auton, accountability, oracle, liquid } from "./contract"; 
import {
  Network,
  piccadilly,
  AUTONITY_CONTRACT,
  ACCOUNTABILITY_CONTRACT,
  ORACLE_CONTRACT,
  LIQUID_CONTARCT,
} from "./utils"; 

export class Contract {
  public autonity: Auton;
  public oracle: oracle;
  public accountability: accountability;
  public liquid: liquid;

  constructor(
    networkOrRpcUrl: Network | string = piccadilly,
    liquidContractAddress: string = LIQUID_CONTARCT,
    privateKey?: string,
    oracleContractAddress: string = ORACLE_CONTRACT,
    accountabilityContractAddress: string = ACCOUNTABILITY_CONTRACT,
    autonityContractAddress: string = AUTONITY_CONTRACT,
  ) {
    const rpcUrl =
      typeof networkOrRpcUrl === "string"
        ? networkOrRpcUrl
        : networkOrRpcUrl.rpcUrl;

    this.autonity = new Auton(rpcUrl, autonityContractAddress, privateKey);
    this.oracle = new oracle(rpcUrl, oracleContractAddress, privateKey);
    this.accountability = new accountability(
      rpcUrl,
      accountabilityContractAddress,
      privateKey
    );

    this.liquid = new liquid(rpcUrl, liquidContractAddress, privateKey);
  }
}
