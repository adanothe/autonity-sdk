import { type ContractRunner } from "ethers";
import type { Autonity, AutonityInterface } from "../Autonity";
export declare class Autonity__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address payable";
                readonly name: "treasury";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "nodeAddress";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "oracleAddress";
                readonly type: "address";
            }, {
                readonly internalType: "string";
                readonly name: "enode";
                readonly type: "string";
            }, {
                readonly internalType: "uint256";
                readonly name: "commissionRate";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "bondedStake";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "unbondingStake";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "unbondingShares";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "selfBondedStake";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "selfUnbondingStake";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "selfUnbondingShares";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "selfUnbondingStakeLocked";
                readonly type: "uint256";
            }, {
                readonly internalType: "contract Liquid";
                readonly name: "liquidContract";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "liquidSupply";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "registrationBlock";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "totalSlashed";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "jailReleaseBlock";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "provableFaultCount";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "consensusKey";
                readonly type: "bytes";
            }, {
                readonly internalType: "enum ValidatorState";
                readonly name: "state";
                readonly type: "uint8";
            }];
            readonly internalType: "struct Autonity.Validator[]";
            readonly name: "_validators";
            readonly type: "tuple[]";
        }, {
            readonly components: readonly [{
                readonly components: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "treasuryFee";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "minBaseFee";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "delegationRate";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "unbondingPeriod";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "initialInflationReserve";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "address payable";
                    readonly name: "treasuryAccount";
                    readonly type: "address";
                }];
                readonly internalType: "struct Autonity.Policy";
                readonly name: "policy";
                readonly type: "tuple";
            }, {
                readonly components: readonly [{
                    readonly internalType: "contract IAccountability";
                    readonly name: "accountabilityContract";
                    readonly type: "address";
                }, {
                    readonly internalType: "contract IOracle";
                    readonly name: "oracleContract";
                    readonly type: "address";
                }, {
                    readonly internalType: "contract IACU";
                    readonly name: "acuContract";
                    readonly type: "address";
                }, {
                    readonly internalType: "contract ISupplyControl";
                    readonly name: "supplyControlContract";
                    readonly type: "address";
                }, {
                    readonly internalType: "contract IStabilization";
                    readonly name: "stabilizationContract";
                    readonly type: "address";
                }, {
                    readonly internalType: "contract UpgradeManager";
                    readonly name: "upgradeManagerContract";
                    readonly type: "address";
                }, {
                    readonly internalType: "contract IInflationController";
                    readonly name: "inflationControllerContract";
                    readonly type: "address";
                }, {
                    readonly internalType: "contract INonStakableVestingVault";
                    readonly name: "nonStakableVestingContract";
                    readonly type: "address";
                }];
                readonly internalType: "struct Autonity.Contracts";
                readonly name: "contracts";
                readonly type: "tuple";
            }, {
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "operatorAccount";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "epochPeriod";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "blockPeriod";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "committeeSize";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct Autonity.Protocol";
                readonly name: "protocol";
                readonly type: "tuple";
            }, {
                readonly internalType: "uint256";
                readonly name: "contractVersion";
                readonly type: "uint256";
            }];
            readonly internalType: "struct Autonity.Config";
            readonly name: "_config";
            readonly type: "tuple";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "treasury";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "addr";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "effectiveBlock";
            readonly type: "uint256";
        }];
        readonly name: "ActivatedValidator";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "validator";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "delegator";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "selfBonded";
            readonly type: "bool";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "AppliedUnbondingReverted";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "Approval";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "validator";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "delegator";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "enum ValidatorState";
            readonly name: "state";
            readonly type: "uint8";
        }];
        readonly name: "BondingRejected";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "validator";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "delegator";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "BondingReverted";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "addr";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "BurnedStake";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "validator";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "rate";
            readonly type: "uint256";
        }];
        readonly name: "CommissionRateChange";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "period";
            readonly type: "uint256";
        }];
        readonly name: "EpochPeriodUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "gasPrice";
            readonly type: "uint256";
        }];
        readonly name: "MinimumBaseFeeUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "addr";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "MintedStake";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "validator";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "delegator";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "selfBonded";
            readonly type: "bool";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "NewBondingRequest";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "epoch";
            readonly type: "uint256";
        }];
        readonly name: "NewEpoch";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "validator";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "delegator";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "selfBonded";
            readonly type: "bool";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "NewUnbondingRequest";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "treasury";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "addr";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "effectiveBlock";
            readonly type: "uint256";
        }];
        readonly name: "PausedValidator";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "treasury";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "addr";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "oracleAddress";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "enode";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "liquidContract";
            readonly type: "address";
        }];
        readonly name: "RegisteredValidator";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "validator";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "delegator";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "selfBonded";
            readonly type: "bool";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "ReleasedUnbondingReverted";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "addr";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "atnAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "ntnAmount";
            readonly type: "uint256";
        }];
        readonly name: "Rewarded";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "Transfer";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "validator";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "delegator";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "selfBonded";
            readonly type: "bool";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "UnbondingRejected";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "epochTime";
            readonly type: "uint256";
        }];
        readonly name: "UnlockingScheduleFailed";
        readonly type: "event";
    }, {
        readonly stateMutability: "payable";
        readonly type: "fallback";
    }, {
        readonly inputs: readonly [];
        readonly name: "COMMISSION_RATE_PRECISION";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_address";
            readonly type: "address";
        }];
        readonly name: "activateValidator";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }];
        readonly name: "allowance";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "approve";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "atnTotalRedistributed";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_addr";
            readonly type: "address";
        }];
        readonly name: "balanceOf";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_validator";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }];
        readonly name: "bond";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_addr";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }];
        readonly name: "burn";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_validator";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_rate";
            readonly type: "uint256";
        }];
        readonly name: "changeCommissionRate";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "completeContractUpgrade";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "computeCommittee";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "";
            readonly type: "address[]";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "config";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "treasuryFee";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "minBaseFee";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "delegationRate";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "unbondingPeriod";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "initialInflationReserve";
                readonly type: "uint256";
            }, {
                readonly internalType: "address payable";
                readonly name: "treasuryAccount";
                readonly type: "address";
            }];
            readonly internalType: "struct Autonity.Policy";
            readonly name: "policy";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "contract IAccountability";
                readonly name: "accountabilityContract";
                readonly type: "address";
            }, {
                readonly internalType: "contract IOracle";
                readonly name: "oracleContract";
                readonly type: "address";
            }, {
                readonly internalType: "contract IACU";
                readonly name: "acuContract";
                readonly type: "address";
            }, {
                readonly internalType: "contract ISupplyControl";
                readonly name: "supplyControlContract";
                readonly type: "address";
            }, {
                readonly internalType: "contract IStabilization";
                readonly name: "stabilizationContract";
                readonly type: "address";
            }, {
                readonly internalType: "contract UpgradeManager";
                readonly name: "upgradeManagerContract";
                readonly type: "address";
            }, {
                readonly internalType: "contract IInflationController";
                readonly name: "inflationControllerContract";
                readonly type: "address";
            }, {
                readonly internalType: "contract INonStakableVestingVault";
                readonly name: "nonStakableVestingContract";
                readonly type: "address";
            }];
            readonly internalType: "struct Autonity.Contracts";
            readonly name: "contracts";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "operatorAccount";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "epochPeriod";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "blockPeriod";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "committeeSize";
                readonly type: "uint256";
            }];
            readonly internalType: "struct Autonity.Protocol";
            readonly name: "protocol";
            readonly type: "tuple";
        }, {
            readonly internalType: "uint256";
            readonly name: "contractVersion";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "decimals";
        readonly outputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "deployer";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "epochID";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "epochReward";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "epochTotalBondedStake";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "finalize";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "addr";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "votingPower";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "consensusKey";
                readonly type: "bytes";
            }];
            readonly internalType: "struct Autonity.CommitteeMember[]";
            readonly name: "";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "finalizeInitialization";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getBlockPeriod";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getCommittee";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "addr";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "votingPower";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "consensusKey";
                readonly type: "bytes";
            }];
            readonly internalType: "struct Autonity.CommitteeMember[]";
            readonly name: "";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getCommitteeEnodes";
        readonly outputs: readonly [{
            readonly internalType: "string[]";
            readonly name: "";
            readonly type: "string[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_block";
            readonly type: "uint256";
        }];
        readonly name: "getEpochFromBlock";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getEpochPeriod";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getLastEpochBlock";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getMaxCommitteeSize";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getMinimumBaseFee";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getNewContract";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }, {
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getOperator";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getOracle";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "height";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "round";
            readonly type: "uint256";
        }];
        readonly name: "getProposer";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_unbondingID";
            readonly type: "uint256";
        }];
        readonly name: "getRevertingAmount";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getTreasuryAccount";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getTreasuryFee";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getUnbondingPeriod";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_unbondingID";
            readonly type: "uint256";
        }];
        readonly name: "getUnbondingReleaseState";
        readonly outputs: readonly [{
            readonly internalType: "enum Autonity.UnbondingReleaseState";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_addr";
            readonly type: "address";
        }];
        readonly name: "getValidator";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address payable";
                readonly name: "treasury";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "nodeAddress";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "oracleAddress";
                readonly type: "address";
            }, {
                readonly internalType: "string";
                readonly name: "enode";
                readonly type: "string";
            }, {
                readonly internalType: "uint256";
                readonly name: "commissionRate";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "bondedStake";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "unbondingStake";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "unbondingShares";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "selfBondedStake";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "selfUnbondingStake";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "selfUnbondingShares";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "selfUnbondingStakeLocked";
                readonly type: "uint256";
            }, {
                readonly internalType: "contract Liquid";
                readonly name: "liquidContract";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "liquidSupply";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "registrationBlock";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "totalSlashed";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "jailReleaseBlock";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "provableFaultCount";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "consensusKey";
                readonly type: "bytes";
            }, {
                readonly internalType: "enum ValidatorState";
                readonly name: "state";
                readonly type: "uint8";
            }];
            readonly internalType: "struct Autonity.Validator";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getValidators";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "";
            readonly type: "address[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getVersion";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "inflationReserve";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "lastEpochBlock";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "lastEpochTime";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "maxBondAppliedGas";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "maxRewardsDistributionGas";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "maxUnbondAppliedGas";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "maxUnbondReleasedGas";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_addr";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }];
        readonly name: "mint";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "name";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_address";
            readonly type: "address";
        }];
        readonly name: "pauseValidator";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "receiveATN";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "_enode";
            readonly type: "string";
        }, {
            readonly internalType: "address";
            readonly name: "_oracleAddress";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "_consensusKey";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "_signatures";
            readonly type: "bytes";
        }];
        readonly name: "registerValidator";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "resetContractUpgrade";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IAccountability";
            readonly name: "_address";
            readonly type: "address";
        }];
        readonly name: "setAccountabilityContract";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IACU";
            readonly name: "_address";
            readonly type: "address";
        }];
        readonly name: "setAcuContract";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_size";
            readonly type: "uint256";
        }];
        readonly name: "setCommitteeSize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_period";
            readonly type: "uint256";
        }];
        readonly name: "setEpochPeriod";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IInflationController";
            readonly name: "_address";
            readonly type: "address";
        }];
        readonly name: "setInflationControllerContract";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_gas";
            readonly type: "uint256";
        }];
        readonly name: "setMaxBondAppliedGas";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_gas";
            readonly type: "uint256";
        }];
        readonly name: "setMaxRewardsDistributionGas";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_gas";
            readonly type: "uint256";
        }];
        readonly name: "setMaxUnbondAppliedGas";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_gas";
            readonly type: "uint256";
        }];
        readonly name: "setMaxUnbondReleasedGas";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_price";
            readonly type: "uint256";
        }];
        readonly name: "setMinimumBaseFee";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract INonStakableVestingVault";
            readonly name: "_address";
            readonly type: "address";
        }];
        readonly name: "setNonStakableVestingContract";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_account";
            readonly type: "address";
        }];
        readonly name: "setOperatorAccount";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address payable";
            readonly name: "_address";
            readonly type: "address";
        }];
        readonly name: "setOracleContract";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IStabilization";
            readonly name: "_address";
            readonly type: "address";
        }];
        readonly name: "setStabilizationContract";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_price";
            readonly type: "uint256";
        }];
        readonly name: "setStakingGasPrice";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISupplyControl";
            readonly name: "_address";
            readonly type: "address";
        }];
        readonly name: "setSupplyControlContract";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address payable";
            readonly name: "_account";
            readonly type: "address";
        }];
        readonly name: "setTreasuryAccount";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_treasuryFee";
            readonly type: "uint256";
        }];
        readonly name: "setTreasuryFee";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_period";
            readonly type: "uint256";
        }];
        readonly name: "setUnbondingPeriod";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract UpgradeManager";
            readonly name: "_address";
            readonly type: "address";
        }];
        readonly name: "setUpgradeManagerContract";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "stakingGasPrice";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "symbol";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "totalSupply";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_recipient";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }];
        readonly name: "transfer";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_sender";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_recipient";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }];
        readonly name: "transferFrom";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_validator";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }];
        readonly name: "unbond";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_nodeAddress";
            readonly type: "address";
        }, {
            readonly internalType: "string";
            readonly name: "_enode";
            readonly type: "string";
        }];
        readonly name: "updateEnode";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address payable";
                readonly name: "treasury";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "nodeAddress";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "oracleAddress";
                readonly type: "address";
            }, {
                readonly internalType: "string";
                readonly name: "enode";
                readonly type: "string";
            }, {
                readonly internalType: "uint256";
                readonly name: "commissionRate";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "bondedStake";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "unbondingStake";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "unbondingShares";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "selfBondedStake";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "selfUnbondingStake";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "selfUnbondingShares";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "selfUnbondingStakeLocked";
                readonly type: "uint256";
            }, {
                readonly internalType: "contract Liquid";
                readonly name: "liquidContract";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "liquidSupply";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "registrationBlock";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "totalSlashed";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "jailReleaseBlock";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "provableFaultCount";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "consensusKey";
                readonly type: "bytes";
            }, {
                readonly internalType: "enum ValidatorState";
                readonly name: "state";
                readonly type: "uint8";
            }];
            readonly internalType: "struct Autonity.Validator";
            readonly name: "_val";
            readonly type: "tuple";
        }];
        readonly name: "updateValidatorAndTransferSlashedFunds";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "_bytecode";
            readonly type: "bytes";
        }, {
            readonly internalType: "string";
            readonly name: "_abi";
            readonly type: "string";
        }];
        readonly name: "upgradeContract";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly stateMutability: "payable";
        readonly type: "receive";
    }];
    static createInterface(): AutonityInterface;
    static connect(address: string, runner?: ContractRunner | null): Autonity;
}
