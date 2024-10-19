import { Auton, accountability, oracle, liquid } from "./contract"; // Import class-class contract
import {
  Network,
  piccadilly,
  AUTONITY_CONTRACT,
  ACCOUNTABILITY_CONTRACT,
  ORACLE_CONTRACT,
  LIQUID_CONTARCT,
} from "./utils"; // Atau path yang sesuai

export class Contract {
  public autonity: Auton;
  public oracle: oracle;
  public accountability: accountability;
  public liquid: liquid;

  constructor(
    networkOrRpcUrl: Network | string = piccadilly,
    privateKey?: string,
    oracleContractAddress: string = ORACLE_CONTRACT,
    accountabilityContractAddress: string = ACCOUNTABILITY_CONTRACT,
    autonityContractAddress: string = AUTONITY_CONTRACT,
    liquidContractAddress: string = LIQUID_CONTARCT
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
