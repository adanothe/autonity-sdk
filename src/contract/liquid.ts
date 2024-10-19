import { Network, initContract, piccadilly } from "../utils"; // Sekarang menggunakan `index.ts`
import { Liquid, Liquid__factory } from "../typechain";
import { ethers } from "ethers";

export class liquid {
  private contract: Liquid;
  constructor(
    networkOrRpcUrl: Network | string = piccadilly,  
    contractAddress: string,       
    privateKey?: string,
    signerOrProvider?: ethers.Wallet | ethers.JsonRpcProvider
  ) {
    const rpcUrl =
      typeof networkOrRpcUrl === "string"
        ? networkOrRpcUrl
        : networkOrRpcUrl.rpcUrl; 
    this.contract = initContract(
      Liquid__factory,
      contractAddress,
      rpcUrl,
      privateKey,
      signerOrProvider
    );
  }

  async allowance(
    _owner: ethers.AddressLike,
    _spender: ethers.AddressLike
  ): Promise<bigint> {
    return await this.contract.allowance(_owner, _spender);
  }

  async Approval(
    startBlock?: number,
    endBlock?: number
  ): Promise<
    {
      owner: ethers.AddressLike;
      spender: ethers.AddressLike;
      value: ethers.BigNumberish;
      blockNumber: number;
      transactionHash: string;
    }[]
  > {
    try {
      const filter = this.contract.filters.Approval();
      const events = await this.contract.queryFilter(
        filter,
        startBlock,
        endBlock
      );

      return events.map((event) => ({
        owner: event.args?.owner,
        spender: event.args?.spender,
        value: event.args?.value,
        blockNumber: event.blockNumber,
        transactionHash: event.transactionHash,
      }));
    } catch (error) {
      console.error(`Failed to filter Approval events:`, error);
      throw new Error(
        `Failed to filter Approval events: ` + (error as Error).message
      );
    }
  }

  async balanceOf(_delegator: ethers.AddressLike): Promise<bigint> {
    return await this.contract.balanceOf(_delegator);
  }

  async claimRewards(): Promise<ethers.ContractTransactionResponse> {
    try {
      const transactionResponse = await this.contract.claimRewards();
      return transactionResponse;
    } catch (error) {
      console.error(`Failed to claim rewards`, error);
      throw new Error(`Failed to claim rewards: ` + (error as Error).message);
    }
  }

  async commissionRate(): Promise<bigint> {
    return await this.contract.commissionRate();
  }

  async decimals(): Promise<bigint> {
    return await this.contract.decimals();
  }

  async feeFactorUnitRecip(): Promise<bigint> {
    return await this.contract.FEE_FACTOR_UNIT_RECIP();
  }

  async getPrecision(): Promise<bigint> {
    return await this.contract.COMMISSION_RATE_PRECISION();
  }

  async lockedBalanceOf(_delegator: ethers.AddressLike): Promise<bigint> {
    return await this.contract.lockedBalanceOf(_delegator);
  }

  async name(): Promise<string> {
    return await this.contract.name();
  }

  async symbol(): Promise<string> {
    return await this.contract.symbol();
  }

  async totalSupply(): Promise<bigint> {
    return await this.contract.totalSupply();
  }

  async transfer(
    _to: ethers.AddressLike,
    _amount: ethers.BigNumberish
  ): Promise<ethers.ContractTransactionResponse> {
    try {
      const txResponse = await this.contract.transfer(_to, _amount);
      return txResponse;
    } catch (error) {
      console.error(
        `Failed to transfer ${_amount} to recipient ${_to}:`,
        error
      );
      throw new Error(
        `Failed to transfer ${_amount} to recipient ${_to}: ` +
          (error as Error).message
      );
    }
  }

  async transferFrom(
    _sender: ethers.AddressLike,
    _recipient: ethers.AddressLike,
    _amount: ethers.BigNumberish
  ): Promise<ethers.ContractTransactionResponse> {
    try {
      const txResponse = await this.contract.transferFrom(
        _sender,
        _recipient,
        _amount
      );
      return txResponse;
    } catch (error) {
      console.error(
        `Failed to transfer ${_amount} from sender ${_sender} to recipient ${_recipient}:`,
        error
      );
      throw new Error(
        `Failed to transfer ${_amount} from sender ${_sender} to recipient ${_recipient}: ` +
          (error as Error).message
      );
    }
  }

  async treasury(): Promise<string> {
    return await this.contract.treasury();
  }

  async unclaimedRewards(
    _account: ethers.AddressLike
  ): Promise<{ unclaimedATN: bigint; unclaimedNTN: bigint }> {
    const [_unclaimedATN, _unclaimedNTN] = await this.contract.unclaimedRewards(
      _account
    );
    return {
      unclaimedATN: _unclaimedATN,
      unclaimedNTN: _unclaimedNTN,
    };
  }

  async unlockedBalanceOf(_delegator: ethers.AddressLike): Promise<bigint> {
    return await this.contract.unlockedBalanceOf(_delegator);
  }

  async validator(): Promise<string> {
    return await this.contract.validator();
  }
}
