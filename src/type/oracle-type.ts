import { Oracle, IOracle } from "../typechain";

export namespace OracleTypes {
  // Internal type aliases for typechain outputs
  type ReportStruct = IOracle.ReportStruct;
  type OracleConfigStruct = Oracle.ConfigStructOutput;
  type RoundDataStruct = IOracle.RoundDataStructOutput;

  export interface Report {
    price: bigint;
    confidence: bigint;
  }

  export interface VoterInfo {
    round: bigint;
    commit: bigint;
    performance: bigint;
    nonRevealCount: bigint;
    isVoter: boolean;
    reportAvailable: boolean;
  }

  export interface OracleConfig {
    autonity: string;
    operator: string;
    votePeriod: bigint;
    outlierDetectionThreshold: bigint;
    outlierSlashingThreshold: bigint;
    baseSlashingRate: bigint;
    nonRevealThreshold: bigint;
    revealResetInterval: bigint;
    slashingRateCap: bigint;
  }

  export interface RoundData {
    round: bigint;
    price: bigint;
    timestamp: bigint;
    success: boolean;
  }

  function createStructMapper<TStruct, TResult>(
    mapper: (struct: TStruct) => TResult
  ): (struct: TStruct) => TResult {
    return mapper;
  }

  export const mapVoterInfo = createStructMapper(
    (voter: [bigint, bigint, bigint, bigint, boolean, boolean]): VoterInfo => ({
      round: voter[0],
      commit: voter[1],
      performance: voter[2],
      nonRevealCount: voter[3],
      isVoter: voter[4],
      reportAvailable: voter[5],
    })
  );

  export const mapOracleConfig = createStructMapper(
    (config: OracleConfigStruct): OracleConfig => ({
      autonity: config[0],
      operator: config[1],
      votePeriod: config[2],
      outlierDetectionThreshold: config[3],
      outlierSlashingThreshold: config[4],
      baseSlashingRate: config[5],
      nonRevealThreshold: config[6],
      revealResetInterval: config[7],
      slashingRateCap: config[8],
    })
  );

  export const mapRoundData = createStructMapper(
    (round: RoundDataStruct): RoundData => ({
      round: round[0],
      price: round[1],
      timestamp: round[2],
      success: round[3],
    })
  );

  export const mapReport = createStructMapper(
    (report: ReportStruct): Report => ({
      price: BigInt(report.price),
      confidence: BigInt(report.confidence),
    })
  );
}

// Type aliases for backward compatibility and easier access
export type Report = OracleTypes.Report;
export type VoterInfo = OracleTypes.VoterInfo;
export type OracleConfig = OracleTypes.OracleConfig;
export type RoundData = OracleTypes.RoundData;

// Function aliases for backward compatibility
export const {
  mapVoterInfo,
  mapOracleConfig,
  mapRoundData,
  mapReport
} = OracleTypes;
