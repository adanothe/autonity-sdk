import { type ContractRunner } from "ethers";
import type { Accountability, AccountabilityInterface } from "../Accountability";
export declare class Accountability__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address payable";
            readonly name: "_autonity";
            readonly type: "address";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "innocenceProofSubmissionWindow";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "baseSlashingRateLow";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "baseSlashingRateMid";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "collusionFactor";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "historyFactor";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "jailFactor";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "slashingRatePrecision";
                readonly type: "uint256";
            }];
            readonly internalType: "struct Accountability.Config";
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
            readonly name: "_offender";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "_id";
            readonly type: "uint256";
        }];
        readonly name: "InnocenceProven";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "_offender";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "_severity";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "_id";
            readonly type: "uint256";
        }];
        readonly name: "NewAccusation";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "_offender";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "_severity";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "_id";
            readonly type: "uint256";
        }];
        readonly name: "NewFaultProof";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "validator";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "releaseBlock";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "isJailbound";
            readonly type: "bool";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "eventId";
            readonly type: "uint256";
        }];
        readonly name: "SlashingEvent";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "beneficiaries";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_offender";
            readonly type: "address";
        }, {
            readonly internalType: "enum Accountability.Rule";
            readonly name: "_rule";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint256";
            readonly name: "_block";
            readonly type: "uint256";
        }];
        readonly name: "canAccuse";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "_result";
            readonly type: "bool";
        }, {
            readonly internalType: "uint256";
            readonly name: "_deadline";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_offender";
            readonly type: "address";
        }, {
            readonly internalType: "enum Accountability.Rule";
            readonly name: "_rule";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint256";
            readonly name: "_block";
            readonly type: "uint256";
        }];
        readonly name: "canSlash";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "config";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "innocenceProofSubmissionWindow";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "baseSlashingRateLow";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "baseSlashingRateMid";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "collusionFactor";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "historyFactor";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "jailFactor";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "slashingRatePrecision";
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
            readonly name: "_ntnReward";
            readonly type: "uint256";
        }];
        readonly name: "distributeRewards";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "epochPeriod";
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
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "events";
        readonly outputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "chunks";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint8";
            readonly name: "chunkId";
            readonly type: "uint8";
        }, {
            readonly internalType: "enum Accountability.EventType";
            readonly name: "eventType";
            readonly type: "uint8";
        }, {
            readonly internalType: "enum Accountability.Rule";
            readonly name: "rule";
            readonly type: "uint8";
        }, {
            readonly internalType: "address";
            readonly name: "reporter";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "offender";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "rawProof";
            readonly type: "bytes";
        }, {
            readonly internalType: "uint256";
            readonly name: "id";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "block";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "epoch";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "reportingBlock";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "messageHash";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bool";
            readonly name: "_epochEnd";
            readonly type: "bool";
        }];
        readonly name: "finalize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_val";
            readonly type: "address";
        }];
        readonly name: "getValidatorAccusation";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint8";
                readonly name: "chunks";
                readonly type: "uint8";
            }, {
                readonly internalType: "uint8";
                readonly name: "chunkId";
                readonly type: "uint8";
            }, {
                readonly internalType: "enum Accountability.EventType";
                readonly name: "eventType";
                readonly type: "uint8";
            }, {
                readonly internalType: "enum Accountability.Rule";
                readonly name: "rule";
                readonly type: "uint8";
            }, {
                readonly internalType: "address";
                readonly name: "reporter";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "offender";
                readonly type: "address";
            }, {
                readonly internalType: "bytes";
                readonly name: "rawProof";
                readonly type: "bytes";
            }, {
                readonly internalType: "uint256";
                readonly name: "id";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "block";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "epoch";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "reportingBlock";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "messageHash";
                readonly type: "uint256";
            }];
            readonly internalType: "struct Accountability.Event";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_val";
            readonly type: "address";
        }];
        readonly name: "getValidatorFaults";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint8";
                readonly name: "chunks";
                readonly type: "uint8";
            }, {
                readonly internalType: "uint8";
                readonly name: "chunkId";
                readonly type: "uint8";
            }, {
                readonly internalType: "enum Accountability.EventType";
                readonly name: "eventType";
                readonly type: "uint8";
            }, {
                readonly internalType: "enum Accountability.Rule";
                readonly name: "rule";
                readonly type: "uint8";
            }, {
                readonly internalType: "address";
                readonly name: "reporter";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "offender";
                readonly type: "address";
            }, {
                readonly internalType: "bytes";
                readonly name: "rawProof";
                readonly type: "bytes";
            }, {
                readonly internalType: "uint256";
                readonly name: "id";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "block";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "epoch";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "reportingBlock";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "messageHash";
                readonly type: "uint256";
            }];
            readonly internalType: "struct Accountability.Event[]";
            readonly name: "";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint8";
                readonly name: "chunks";
                readonly type: "uint8";
            }, {
                readonly internalType: "uint8";
                readonly name: "chunkId";
                readonly type: "uint8";
            }, {
                readonly internalType: "enum Accountability.EventType";
                readonly name: "eventType";
                readonly type: "uint8";
            }, {
                readonly internalType: "enum Accountability.Rule";
                readonly name: "rule";
                readonly type: "uint8";
            }, {
                readonly internalType: "address";
                readonly name: "reporter";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "offender";
                readonly type: "address";
            }, {
                readonly internalType: "bytes";
                readonly name: "rawProof";
                readonly type: "bytes";
            }, {
                readonly internalType: "uint256";
                readonly name: "id";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "block";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "epoch";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "reportingBlock";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "messageHash";
                readonly type: "uint256";
            }];
            readonly internalType: "struct Accountability.Event";
            readonly name: "_event";
            readonly type: "tuple";
        }];
        readonly name: "handleEvent";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_newPeriod";
            readonly type: "uint256";
        }];
        readonly name: "setEpochPeriod";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "slashingHistory";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): AccountabilityInterface;
    static connect(address: string, runner?: ContractRunner | null): Accountability;
}
