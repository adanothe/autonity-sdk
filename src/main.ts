import { Auton } from "./contract/autonity";
import { oracle } from "./contract/oracle";
import { initProviderOrSigner } from "./utils/utils";

export class Contract {
  public autonity: Auton;
  public oracle: oracle;

  constructor(
    rpcUrl?: string,
    contractAddressAutonity?: string,
    contractAddressOracle?: string,
    privateKey?: string,
    signerOrProvider?: ReturnType<typeof initProviderOrSigner>
  ) {
    const providerOrSigner =
      signerOrProvider ?? initProviderOrSigner(privateKey, rpcUrl);

    this.autonity = new Auton(
      rpcUrl,
      contractAddressAutonity,
      privateKey,
      providerOrSigner
    );

    this.oracle = new oracle(
      rpcUrl,
      contractAddressOracle,
      privateKey,
      providerOrSigner
    );
  }
}
