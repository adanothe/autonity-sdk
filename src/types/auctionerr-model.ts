import { AuctioneerClient } from "../contracts";
import { AuctionLib, Auctioneer } from "../typechain/Auctioneer";

export namespace AuctioneerTypes {
  type AuctionStruct = AuctionLib.AuctionStructOutput;
  type ConfigStruct = Auctioneer.ConfigStructOutput;

  export interface Auction {
    id: bigint;
    amount: bigint;
    startPrice: bigint;
    startTimestamp: bigint;
  }

  export interface Config {
    liquidationAuctionDuration: bigint;
    interestAuctionDuration: bigint;
    interestAuctionDiscount: bigint;
    interestAuctionThreshold: bigint;
  }

  function createStructMapper<TStruct, TResult>(
    mapper: (struct: TStruct) => TResult
  ): (struct: TStruct) => TResult {
    return mapper;
  }

  export const mapAuction = createStructMapper(
    (struct: AuctionStruct): Auction => ({
      id: struct.id,
      amount: struct.amount,
      startPrice: struct.startPrice,
      startTimestamp: struct.startTimestamp,
    })
  );

  export const mapConfig = createStructMapper(
    (struct: ConfigStruct): Config => ({
      liquidationAuctionDuration: struct.liquidationAuctionDuration,
      interestAuctionDuration: struct.interestAuctionDuration,
      interestAuctionDiscount: struct.interestAuctionDiscount,
      interestAuctionThreshold: struct.interestAuctionThreshold,
    })
  );
}
