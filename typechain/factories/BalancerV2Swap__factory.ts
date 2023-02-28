/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  BalancerV2Swap,
  BalancerV2SwapInterface,
} from "../BalancerV2Swap";

const _abi = [
  {
    inputs: [],
    name: "BalancerV2Vault",
    outputs: [
      {
        internalType: "contract BalancerV2VaultInterface",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "BalancerV2_wstETH_WETH_POOL_ID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "Curve_stETH_ETH_POOL_ADDRESS",
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
    inputs: [],
    name: "Curve_stETH_ETH_POOL_LP_TOKEN_ADDRESS",
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
    inputs: [],
    name: "WETH",
    outputs: [
      {
        internalType: "contract WETHInterface",
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
        name: "fromToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "toToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "fromTokenAmount",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "poolId",
        type: "bytes32",
      },
    ],
    name: "balancer_swap",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "frxETH",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "frxETHMinter",
    outputs: [
      {
        internalType: "contract frxETHMinter",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rETH",
    outputs: [
      {
        internalType: "contract IrETH",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "sfrxETH",
    outputs: [
      {
        internalType: "contract sfrxETH",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "stETH",
    outputs: [
      {
        internalType: "contract ILido",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "wstETH",
    outputs: [
      {
        internalType: "contract IWstETH",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610ec6806100206000396000f3fe6080604052600436106100ab5760003560e01c8063c1fe3e4811610064578063c1fe3e481461015e578063c9ac8c8e14610173578063ca8aa0e414610188578063ce0696141461019d578063ebdfda5e146101b2578063f2cd3a12146101c757600080fd5b80634aa07e64146100b75780634bc0dcb6146100e9578063565d3e6e146100fe578063698e079614610113578063ad5c464814610128578063bf8ab2801461013d57600080fd5b366100b257005b600080fd5b3480156100c357600080fd5b506100cc6101dc565b6040516001600160a01b0390911681526020015b60405180910390f35b3480156100f557600080fd5b506100cc610260565b34801561010a57600080fd5b506100cc610283565b34801561011f57600080fd5b506100cc6102c7565b34801561013457600080fd5b506100cc6102ea565b61015061014b366004610ad5565b61032e565b6040519081526020016100e0565b34801561016a57600080fd5b506100cc610626565b34801561017f57600080fd5b506100cc61066a565b34801561019457600080fd5b506100cc61068d565b3480156101a957600080fd5b506100cc6106d1565b3480156101be57600080fd5b506100cc610715565b3480156101d357600080fd5b50610150610759565b6000466001036101ff5750737f39c581f595b53c5cb19bd0b3f8da6c935e2ca090565b466005036102205750736320cd32aa674d2898a68ec82e869385fc5f7e2f90565b60405162461bcd60e51b815260206004820152601060248201526f1d5b9adb9bdddb8818da185a5b881a5960821b60448201526064015b60405180910390fd5b600046600103610220575073dc24316b9ae028f1497c275eb9192a3ea0f6702290565b6000466001036102a65750735e8422345238f34275888049021821e8e08caa1f90565b466005036102205750733e04888b1c07a9805861c19551f7ed53145bd8d490565b60004660010361022057507306325440d014e39736583c165c2963ba99faf14e90565b60004660010361030d575073c02aaa39b223fe8d0a0e5c4f27ead9083c756cc290565b46600503610220575073b4fbf271143f4fbf7b91a5ded31805e42b2208d690565b6000806103396106d1565b60408051600180825281830190925291925060009190816020015b6103896040518060a0016040528060008019168152602001600081526020016000815260200160008152602001606081525090565b8152602001906001900390816103545790505090506040518060a00160405280858152602001600081526020016001815260200186815260200160405180602001604052806000815250815250816000815181106103e9576103e9610b2d565b602090810291909101015260408051600280825260608201909252600091816020016020820280368337019050509050878160008151811061042d5761042d610b2d565b60200260200101906001600160a01b031690816001600160a01b031681525050868160018151811061046157610461610b2d565b6001600160a01b039290921660209283029190910182015260408051600280825260608201835260009391929091830190803683370190505090506001600160ff1b03816000815181106104b7576104b7610b2d565b6020026020010181815250506001600160ff1b03816001815181106104de576104de610b2d565b602090810291909101015260006001600160a01b038a1661050057503461050b565b61050b8a868a610788565b60408051608081018252308082526000602083018190528284019190915260608201819052915163945bcec960e01b81526001600160a01b0388169163945bcec99185916105669186918b918b91908b904290600401610c07565b60006040518083038185885af1158015610584573d6000803e3d6000fd5b50505050506040513d6000823e601f3d908101601f191682016040526105ad9190810190610d37565b90506000816001815181106105c4576105c4610b2d565b6020026020010151126105f157806001815181106105e4576105e4610b2d565b6020026020010151610615565b8060018151811061060457610604610b2d565b602002602001015161061590610df5565b96505050505050505b949350505050565b600046600103610649575073ae7ab96520de3a18e5e111b5eaab095312d7fe8490565b466005036102205750731643e812ae58766192cf7d2cf9567df2c37e9b7f90565b6000466001036102a6575073ac3e018457b222d93114458476f3e3416abbe38f90565b6000466001036106b0575073ae78736cd615f374d3085123a210448e74fc639390565b46600503610220575073ae78736cd615f374d3085123a210448e74fc639390565b6000466001036106f4575073ba12222222228d8ba445958a75a0704d566bf2c890565b46600503610220575073ba12222222228d8ba445958a75a0704d566bf2c890565b600046600103610738575073bafa44efe7901e04e39dad13167d089c559c113890565b466005036102205750736421d1ca6cd35852362806a2ded2a49b6fa8bef590565b60004660010361022057507f32296969ef14eb0c6d29669c550d4a044913023000020000000000000000008090565b8015806108025750604051636eb1769f60e11b81523060048201526001600160a01b03838116602483015284169063dd62ed3e90604401602060405180830381865afa1580156107dc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108009190610e1f565b155b61086d5760405162461bcd60e51b815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527520746f206e6f6e2d7a65726f20616c6c6f77616e636560501b6064820152608401610257565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b1790526108bf9084906108c4565b505050565b6000610919826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166109969092919063ffffffff16565b8051909150156108bf57808060200190518101906109379190610e38565b6108bf5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610257565b606061061e848460008585600080866001600160a01b031685876040516109bd9190610e61565b60006040518083038185875af1925050503d80600081146109fa576040519150601f19603f3d011682016040523d82523d6000602084013e6109ff565b606091505b5091509150610a1087838387610a1b565b979650505050505050565b60608315610a8a578251600003610a83576001600160a01b0385163b610a835760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610257565b508161061e565b61061e8383815115610a9f5781518083602001fd5b8060405162461bcd60e51b81526004016102579190610e7d565b80356001600160a01b0381168114610ad057600080fd5b919050565b60008060008060808587031215610aeb57600080fd5b610af485610ab9565b9350610b0260208601610ab9565b93969395505050506040820135916060013590565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b60005b83811015610b5e578181015183820152602001610b46565b50506000910152565b60008151808452610b7f816020860160208601610b43565b601f01601f19169290920160200192915050565b600081518084526020808501945080840160005b83811015610bcc5781516001600160a01b031687529582019590820190600101610ba7565b509495945050505050565b600081518084526020808501945080840160005b83811015610bcc57815187529582019590820190600101610beb565b600061012080830160028a10610c2d57634e487b7160e01b600052602160045260246000fd5b89845260208085019290925288519081905261014080850192600583901b8601909101918a820160005b82811015610cba5787850361013f190186528151805186528481015185870152604080820151908701526060808201519087015260809081015160a091870182905290610ca681880183610b67565b978601979650505090830190600101610c57565b505050508381036040850152610cd08189610b93565b915050610d10606084018780516001600160a01b039081168352602080830151151590840152604080830151909116908301526060908101511515910152565b82810360e0840152610d228186610bd7565b91505082610100830152979650505050505050565b60006020808385031215610d4a57600080fd5b825167ffffffffffffffff80821115610d6257600080fd5b818501915085601f830112610d7657600080fd5b815181811115610d8857610d88610b17565b8060051b604051601f19603f83011681018181108582111715610dad57610dad610b17565b604052918252848201925083810185019188831115610dcb57600080fd5b938501935b82851015610de957845184529385019392850192610dd0565b98975050505050505050565b6000600160ff1b8201610e1857634e487b7160e01b600052601160045260246000fd5b5060000390565b600060208284031215610e3157600080fd5b5051919050565b600060208284031215610e4a57600080fd5b81518015158114610e5a57600080fd5b9392505050565b60008251610e73818460208701610b43565b9190910192915050565b602081526000610e5a6020830184610b6756fea26469706673582212201efe146e82e54248404b60fed81b177c243c1a8e6c06930d98611c752320642464736f6c63430008110033";

type BalancerV2SwapConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BalancerV2SwapConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BalancerV2Swap__factory extends ContractFactory {
  constructor(...args: BalancerV2SwapConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<BalancerV2Swap> {
    return super.deploy(overrides || {}) as Promise<BalancerV2Swap>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): BalancerV2Swap {
    return super.attach(address) as BalancerV2Swap;
  }
  override connect(signer: Signer): BalancerV2Swap__factory {
    return super.connect(signer) as BalancerV2Swap__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BalancerV2SwapInterface {
    return new utils.Interface(_abi) as BalancerV2SwapInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BalancerV2Swap {
    return new Contract(address, _abi, signerOrProvider) as BalancerV2Swap;
  }
}