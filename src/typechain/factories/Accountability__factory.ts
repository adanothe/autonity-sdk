/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  Accountability,
  AccountabilityInterface,
} from "../Accountability";

const _abi = [
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_autonity",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "innocenceProofSubmissionWindow",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "baseSlashingRateLow",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "baseSlashingRateMid",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "collusionFactor",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "historyFactor",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "jailFactor",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "slashingRatePrecision",
            type: "uint256",
          },
        ],
        internalType: "struct Accountability.Config",
        name: "_config",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_offender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "InnocenceProven",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_offender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_severity",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "NewAccusation",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_offender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_severity",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "NewFaultProof",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "validator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "releaseBlock",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isJailbound",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "eventId",
        type: "uint256",
      },
    ],
    name: "SlashingEvent",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "beneficiaries",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_offender",
        type: "address",
      },
      {
        internalType: "enum Accountability.Rule",
        name: "_rule",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "_block",
        type: "uint256",
      },
    ],
    name: "canAccuse",
    outputs: [
      {
        internalType: "bool",
        name: "_result",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "_deadline",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_offender",
        type: "address",
      },
      {
        internalType: "enum Accountability.Rule",
        name: "_rule",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "_block",
        type: "uint256",
      },
    ],
    name: "canSlash",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "config",
    outputs: [
      {
        internalType: "uint256",
        name: "innocenceProofSubmissionWindow",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "baseSlashingRateLow",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "baseSlashingRateMid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "collusionFactor",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "historyFactor",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "jailFactor",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "slashingRatePrecision",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_validator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_ntnReward",
        type: "uint256",
      },
    ],
    name: "distributeRewards",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "epochPeriod",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "events",
    outputs: [
      {
        internalType: "uint8",
        name: "chunks",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "chunkId",
        type: "uint8",
      },
      {
        internalType: "enum Accountability.EventType",
        name: "eventType",
        type: "uint8",
      },
      {
        internalType: "enum Accountability.Rule",
        name: "rule",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "reporter",
        type: "address",
      },
      {
        internalType: "address",
        name: "offender",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "rawProof",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "block",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "epoch",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "reportingBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "messageHash",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_epochEnd",
        type: "bool",
      },
    ],
    name: "finalize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_val",
        type: "address",
      },
    ],
    name: "getValidatorAccusation",
    outputs: [
      {
        components: [
          {
            internalType: "uint8",
            name: "chunks",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "chunkId",
            type: "uint8",
          },
          {
            internalType: "enum Accountability.EventType",
            name: "eventType",
            type: "uint8",
          },
          {
            internalType: "enum Accountability.Rule",
            name: "rule",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "reporter",
            type: "address",
          },
          {
            internalType: "address",
            name: "offender",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "rawProof",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "block",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "epoch",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "reportingBlock",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "messageHash",
            type: "uint256",
          },
        ],
        internalType: "struct Accountability.Event",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_val",
        type: "address",
      },
    ],
    name: "getValidatorFaults",
    outputs: [
      {
        components: [
          {
            internalType: "uint8",
            name: "chunks",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "chunkId",
            type: "uint8",
          },
          {
            internalType: "enum Accountability.EventType",
            name: "eventType",
            type: "uint8",
          },
          {
            internalType: "enum Accountability.Rule",
            name: "rule",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "reporter",
            type: "address",
          },
          {
            internalType: "address",
            name: "offender",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "rawProof",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "block",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "epoch",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "reportingBlock",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "messageHash",
            type: "uint256",
          },
        ],
        internalType: "struct Accountability.Event[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint8",
            name: "chunks",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "chunkId",
            type: "uint8",
          },
          {
            internalType: "enum Accountability.EventType",
            name: "eventType",
            type: "uint8",
          },
          {
            internalType: "enum Accountability.Rule",
            name: "rule",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "reporter",
            type: "address",
          },
          {
            internalType: "address",
            name: "offender",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "rawProof",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "block",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "epoch",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "reportingBlock",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "messageHash",
            type: "uint256",
          },
        ],
        internalType: "struct Accountability.Event",
        name: "_event",
        type: "tuple",
      },
    ],
    name: "handleEvent",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_newPeriod",
        type: "uint256",
      },
    ],
    name: "setEpochPeriod",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "slashingHistory",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class Accountability__factory {
  static readonly abi = _abi;
  static createInterface(): AccountabilityInterface {
    return new Interface(_abi) as AccountabilityInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): Accountability {
    return new Contract(address, _abi, runner) as unknown as Accountability;
  }
}
