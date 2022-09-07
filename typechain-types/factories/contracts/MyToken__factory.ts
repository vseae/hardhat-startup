/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { MyToken, MyTokenInterface } from "../../contracts/MyToken";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280600781526020017f4d79546f6b656e000000000000000000000000000000000000000000000000008152506040518060400160405280600381526020017f4d544b0000000000000000000000000000000000000000000000000000000000815250816003908051906020019062000096929190620002f5565b508060049080519060200190620000af929190620002f5565b505050620000e67f04fa41641bf2538a337412e889bf5936fc3d65228867f98330ab65e25d31d26460001b6200016f60201b60201c565b6200011a7f40dedab03d01afe731f145e4bb8063d68542c647fbb684bb5b6f235e0595524960001b6200016f60201b60201c565b6200014e7f25cfa1a5561269d1d4a1c33c686305ab2477ab2e0e8e21606463866f8b748a3360001b6200016f60201b60201c565b6200016933683635c9adc5dea000006200017260201b60201c565b62000551565b50565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415620001e5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620001dc9062000406565b60405180910390fd5b620001f960008383620002eb60201b60201c565b80600260008282546200020d919062000461565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825462000264919062000461565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051620002cb9190620004cf565b60405180910390a3620002e760008383620002f060201b60201c565b5050565b505050565b505050565b82805462000303906200051b565b90600052602060002090601f01602090048101928262000327576000855562000373565b82601f106200034257805160ff191683800117855562000373565b8280016001018555821562000373579182015b828111156200037257825182559160200191906001019062000355565b5b50905062000382919062000386565b5090565b5b80821115620003a157600081600090555060010162000387565b5090565b600082825260208201905092915050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6000620003ee601f83620003a5565b9150620003fb82620003b6565b602082019050919050565b600060208201905081810360008301526200042181620003df565b9050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006200046e8262000428565b91506200047b8362000428565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115620004b357620004b262000432565b5b828201905092915050565b620004c98162000428565b82525050565b6000602082019050620004e66000830184620004be565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200053457607f821691505b602082108114156200054b576200054a620004ec565b5b50919050565b61128880620005616000396000f3fe608060405234801561001057600080fd5b50600436106100c95760003560e01c80633950935111610081578063a457c2d71161005b578063a457c2d714610206578063a9059cbb14610236578063dd62ed3e14610266576100c9565b8063395093511461018857806370a08231146101b857806395d89b41146101e8576100c9565b806318160ddd116100b257806318160ddd1461011c57806323b872dd1461013a578063313ce5671461016a576100c9565b806306fdde03146100ce578063095ea7b3146100ec575b600080fd5b6100d6610296565b6040516100e39190610b42565b60405180910390f35b61010660048036038101906101019190610bfd565b610328565b6040516101139190610c58565b60405180910390f35b61012461034b565b6040516101319190610c82565b60405180910390f35b610154600480360381019061014f9190610c9d565b610355565b6040516101619190610c58565b60405180910390f35b610172610384565b60405161017f9190610d0c565b60405180910390f35b6101a2600480360381019061019d9190610bfd565b61038d565b6040516101af9190610c58565b60405180910390f35b6101d260048036038101906101cd9190610d27565b6103c4565b6040516101df9190610c82565b60405180910390f35b6101f061040c565b6040516101fd9190610b42565b60405180910390f35b610220600480360381019061021b9190610bfd565b61049e565b60405161022d9190610c58565b60405180910390f35b610250600480360381019061024b9190610bfd565b610515565b60405161025d9190610c58565b60405180910390f35b610280600480360381019061027b9190610d54565b610538565b60405161028d9190610c82565b60405180910390f35b6060600380546102a590610dc3565b80601f01602080910402602001604051908101604052809291908181526020018280546102d190610dc3565b801561031e5780601f106102f35761010080835404028352916020019161031e565b820191906000526020600020905b81548152906001019060200180831161030157829003601f168201915b5050505050905090565b6000806103336105bf565b90506103408185856105c7565b600191505092915050565b6000600254905090565b6000806103606105bf565b905061036d858285610792565b61037885858561081e565b60019150509392505050565b60006012905090565b6000806103986105bf565b90506103b98185856103aa8589610538565b6103b49190610e24565b6105c7565b600191505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60606004805461041b90610dc3565b80601f016020809104026020016040519081016040528092919081815260200182805461044790610dc3565b80156104945780601f1061046957610100808354040283529160200191610494565b820191906000526020600020905b81548152906001019060200180831161047757829003601f168201915b5050505050905090565b6000806104a96105bf565b905060006104b78286610538565b9050838110156104fc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104f390610eec565b60405180910390fd5b61050982868684036105c7565b60019250505092915050565b6000806105206105bf565b905061052d81858561081e565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610637576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161062e90610f7e565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156106a7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161069e90611010565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516107859190610c82565b60405180910390a3505050565b600061079e8484610538565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610818578181101561080a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108019061107c565b60405180910390fd5b61081784848484036105c7565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561088e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108859061110e565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156108fe576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108f5906111a0565b60405180910390fd5b610909838383610a9f565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508181101561098f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161098690611232565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610a229190610e24565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610a869190610c82565b60405180910390a3610a99848484610aa4565b50505050565b505050565b505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610ae3578082015181840152602081019050610ac8565b83811115610af2576000848401525b50505050565b6000601f19601f8301169050919050565b6000610b1482610aa9565b610b1e8185610ab4565b9350610b2e818560208601610ac5565b610b3781610af8565b840191505092915050565b60006020820190508181036000830152610b5c8184610b09565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610b9482610b69565b9050919050565b610ba481610b89565b8114610baf57600080fd5b50565b600081359050610bc181610b9b565b92915050565b6000819050919050565b610bda81610bc7565b8114610be557600080fd5b50565b600081359050610bf781610bd1565b92915050565b60008060408385031215610c1457610c13610b64565b5b6000610c2285828601610bb2565b9250506020610c3385828601610be8565b9150509250929050565b60008115159050919050565b610c5281610c3d565b82525050565b6000602082019050610c6d6000830184610c49565b92915050565b610c7c81610bc7565b82525050565b6000602082019050610c976000830184610c73565b92915050565b600080600060608486031215610cb657610cb5610b64565b5b6000610cc486828701610bb2565b9350506020610cd586828701610bb2565b9250506040610ce686828701610be8565b9150509250925092565b600060ff82169050919050565b610d0681610cf0565b82525050565b6000602082019050610d216000830184610cfd565b92915050565b600060208284031215610d3d57610d3c610b64565b5b6000610d4b84828501610bb2565b91505092915050565b60008060408385031215610d6b57610d6a610b64565b5b6000610d7985828601610bb2565b9250506020610d8a85828601610bb2565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610ddb57607f821691505b60208210811415610def57610dee610d94565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610e2f82610bc7565b9150610e3a83610bc7565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610e6f57610e6e610df5565b5b828201905092915050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b6000610ed6602583610ab4565b9150610ee182610e7a565b604082019050919050565b60006020820190508181036000830152610f0581610ec9565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000610f68602483610ab4565b9150610f7382610f0c565b604082019050919050565b60006020820190508181036000830152610f9781610f5b565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b6000610ffa602283610ab4565b915061100582610f9e565b604082019050919050565b6000602082019050818103600083015261102981610fed565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b6000611066601d83610ab4565b915061107182611030565b602082019050919050565b6000602082019050818103600083015261109581611059565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b60006110f8602583610ab4565b91506111038261109c565b604082019050919050565b60006020820190508181036000830152611127816110eb565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b600061118a602383610ab4565b91506111958261112e565b604082019050919050565b600060208201905081810360008301526111b98161117d565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b600061121c602683610ab4565b9150611227826111c0565b604082019050919050565b6000602082019050818103600083015261124b8161120f565b905091905056fea2646970667358221220589ab171dab2a35d225ae98623c72a6ea7854f8b8b4ae0503a262549eda7bf7764736f6c634300080c0033";

type MyTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MyTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MyToken__factory extends ContractFactory {
  constructor(...args: MyTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MyToken> {
    return super.deploy(overrides || {}) as Promise<MyToken>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MyToken {
    return super.attach(address) as MyToken;
  }
  override connect(signer: Signer): MyToken__factory {
    return super.connect(signer) as MyToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MyTokenInterface {
    return new utils.Interface(_abi) as MyTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MyToken {
    return new Contract(address, _abi, signerOrProvider) as MyToken;
  }
}
