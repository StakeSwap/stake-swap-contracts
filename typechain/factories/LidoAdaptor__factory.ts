/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { LidoAdaptor, LidoAdaptorInterface } from "../LidoAdaptor";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "ethAmount",
        type: "uint256",
      },
    ],
    name: "Deposited",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "ethAmount",
        type: "uint256",
      },
    ],
    name: "Withdrawn",
    type: "event",
  },
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
    name: "BalancerV2_rETH_ETH_POOL_ID",
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
    name: "Curve_frxETH_ETH_POOL_ADDRESS",
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
    name: "Curve_frxETH_ETH_POOL_LP_TOKEN_ADDRESS",
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
    name: "Curve_frxETH_ETH_POOL_TOKEN_INDEX_ETH",
    outputs: [
      {
        internalType: "int128",
        name: "",
        type: "int128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "Curve_frxETH_ETH_POOL_TOKEN_INDEX_frxETH",
    outputs: [
      {
        internalType: "int128",
        name: "",
        type: "int128",
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
    name: "Curve_stETH_ETH_POOL_TOKEN_INDEX_ETH",
    outputs: [
      {
        internalType: "int128",
        name: "",
        type: "int128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "Curve_stETH_ETH_POOL_TOKEN_INDEX_stETH",
    outputs: [
      {
        internalType: "int128",
        name: "",
        type: "int128",
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
        internalType: "uint256",
        name: "fromTokenAmount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        internalType: "int128",
        name: "fromTokenIndex",
        type: "int128",
      },
      {
        internalType: "int128",
        name: "toTokenIndex",
        type: "int128",
      },
    ],
    name: "Curve_swap",
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
    name: "PRECISION",
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
    inputs: [],
    name: "adaptorName",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "buyToken",
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
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "canDeposit",
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
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "canWithdraw",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "deposit",
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
    name: "getAPR",
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
        name: "tokenAmount",
        type: "uint256",
      },
    ],
    name: "getETHAmount",
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
        name: "ethAmount",
        type: "uint256",
      },
    ],
    name: "getTokenAmount",
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
    name: "getTokens",
    outputs: [
      {
        internalType: "address",
        name: "token0",
        type: "address",
      },
      {
        internalType: "address",
        name: "token1",
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
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "sellToken",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
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
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
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
  "0x60a06040524260805234801561001457600080fd5b506001600055608051611759610032600039600050506117596000f3fe6080604052600436106101dc5760003560e01c8063ad5c464811610102578063ce06961411610095578063ef46b2ab11610064578063ef46b2ab14610498578063f2cd3a12146104b8578063f781b24e146104cd578063fbe85f06146104e257600080fd5b8063ce06961414610453578063d0e30db014610468578063d148d39214610470578063ebdfda5e1461048357600080fd5b8063c89d5b8b116100d1578063c89d5b8b14610414578063c9ac8c8e14610429578063ca8aa0e41461043e578063cbc74de7146101e857600080fd5b8063ad5c4648146103ca578063be78e8d9146102ff578063c1fe3e48146103df578063c2507ac1146103f457600080fd5b8063565d3e6e1161017a578063a482171911610149578063a48217191461035c578063aa6430c614610364578063aa6ca80814610379578063aaf5eb68146103ae57600080fd5b8063565d3e6e146102ea5780635a33bbbe146102ff578063698e0796146103145780638c9adb2d1461032957600080fd5b80632e1a7d4d116101b65780632e1a7d4d1461025857806339443b8e146102785780634aa07e64146102a85780634bc0dcb6146102d557600080fd5b8063020b627d146101e85780632397e4d71461021557806323c34a641461024357600080fd5b366101e357005b600080fd5b3480156101f457600080fd5b506101fd610503565b604051600f9190910b81526020015b60405180910390f35b34801561022157600080fd5b506102356102303660046114e4565b610553565b60405190815260200161020c565b34801561024f57600080fd5b50610235610602565b34801561026457600080fd5b506102356102733660046114e4565b610631565b34801561028457600080fd5b506102986102933660046114e4565b6106b3565b604051901515815260200161020c565b3480156102b457600080fd5b506102bd610788565b6040516001600160a01b03909116815260200161020c565b3480156102e157600080fd5b506102bd6107cc565b3480156102f657600080fd5b506102bd6107ef565b34801561030b57600080fd5b506101fd610833565b34801561032057600080fd5b506102bd610843565b34801561033557600080fd5b5060408051808201825260048152636c69646f60e01b6020820152905161020c9190611521565b610235610866565b34801561037057600080fd5b506102bd6108e6565b34801561038557600080fd5b5061038e610909565b604080516001600160a01b0393841681529290911660208301520161020c565b3480156103ba57600080fd5b50610235670de0b6b3a764000081565b3480156103d657600080fd5b506102bd61091a565b3480156103eb57600080fd5b506102bd61095e565b34801561040057600080fd5b5061023561040f3660046114e4565b6109a2565b34801561042057600080fd5b506102356109d7565b34801561043557600080fd5b506102bd610b2d565b34801561044a57600080fd5b506102bd610b50565b34801561045f57600080fd5b506102bd610b94565b610235610bd8565b61023561047e36600461157d565b610cd0565b34801561048f57600080fd5b506102bd610d84565b3480156104a457600080fd5b506102356104b33660046114e4565b610dc8565b3480156104c457600080fd5b50610235610e40565b3480156104d957600080fd5b506102bd610e6f565b3480156104ee57600080fd5b506102986104fd3660046114e4565b50600090565b6000466001036105135750600190565b60405162461bcd60e51b815260206004820152601060248201526f1d5b9adb9bdddb8818da185a5b881a5960821b60448201526064015b60405180910390fd5b600061055d610e92565b6000821161059b5760405162461bcd60e51b815260206004820152600b60248201526a16915493c8105353d5539560aa1b604482015260640161054a565b60006105a5610909565b9150506105b481333086610eeb565b60006105bf84610f5c565b604051909150339082156108fc029083906000818181858888f193505050501580156105ef573d6000803e3d6000fd5b509150506105fd6001600055565b919050565b60004660010361051357507f1e19cf2d73a72ef1332c882f20534b6519be027600020000000000000000011290565b600061063b610e92565b600082116106795760405162461bcd60e51b815260206004820152600b60248201526a16915493c8105353d5539560aa1b604482015260640161054a565b60405162461bcd60e51b815260206004820152600f60248201526e43414e4e4f5420574954484452415760881b604482015260640161054a565b6000816000036106c557506000919050565b60008060008060008060006106d861095e565b6001600160a01b031663665b4b0b6040518163ffffffff1660e01b815260040160e060405180830381865afa158015610715573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061073991906115eb565b9650965096509650965096509650861561075c5750600098975050505050505050565b851561077957848911156107795750600098975050505050505050565b50600198975050505050505050565b6000466001036107ab5750737f39c581f595b53c5cb19bd0b3f8da6c935e2ca090565b466005036105135750736320cd32aa674d2898a68ec82e869385fc5f7e2f90565b600046600103610513575073dc24316b9ae028f1497c275eb9192a3ea0f6702290565b6000466001036108125750735e8422345238f34275888049021821e8e08caa1f90565b466005036105135750733e04888b1c07a9805861c19551f7ed53145bd8d490565b6000466001036105135750600090565b60004660010361051357507306325440d014e39736583c165c2963ba99faf14e90565b6000610870610e92565b600034116108b25760405162461bcd60e51b815260206004820152600f60248201526e16915493c811551208105353d55395608a1b604482015260640161054a565b60006108bc611007565b905060006108c8610909565b9150506108d681338461113b565b5090506108e36001600055565b90565b600046600103610513575073a1f8a6807c402e4a15ef4eba36528a3fed24e57790565b600080610914610788565b90509091565b60004660010361093d575073c02aaa39b223fe8d0a0e5c4f27ead9083c756cc290565b46600503610513575073b4fbf271143f4fbf7b91a5ded31805e42b2208d690565b600046600103610981575073ae7ab96520de3a18e5e111b5eaab095312d7fe8490565b466005036105135750731643e812ae58766192cf7d2cf9567df2c37e9b7f90565b60006109b5670de0b6b3a7640000610dc8565b6109c783670de0b6b3a7640000611663565b6109d1919061167a565b92915050565b6000806109e2610788565b6001600160a01b031663035faf826040518163ffffffff1660e01b8152600401602060405180830381865afa158015610a1f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a43919061169c565b90506000610a4f61095e565b6001600160a01b031663ced72f876040518163ffffffff1660e01b8152600401602060405180830381865afa158015610a8c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ab091906116b5565b61ffff16905081600003610ac75760009250505090565b6000610ad7635fdbd4dc426116d9565b9050612710610ae683826116d9565b82610af9670de0b6b3a7640000876116d9565b610b07906301e187e0611663565b610b11919061167a565b610b1b9190611663565b610b25919061167a565b935050505090565b600046600103610812575073ac3e018457b222d93114458476f3e3416abbe38f90565b600046600103610b73575073ae78736cd615f374d3085123a210448e74fc639390565b46600503610513575073ae78736cd615f374d3085123a210448e74fc639390565b600046600103610bb7575073ba12222222228d8ba445958a75a0704d566bf2c890565b46600503610513575073ba12222222228d8ba445958a75a0704d566bf2c890565b6000610be2610e92565b60003411610c245760405162461bcd60e51b815260206004820152600f60248201526e16915493c811551208105353d55395608a1b604482015260640161054a565b610c2d346106b3565b610c6a5760405162461bcd60e51b815260206004820152600e60248201526d10d0539393d50811115413d4d25560921b604482015260640161054a565b6000610c74611170565b90506000610c80610909565b915050610c8e81338461113b565b60405182815233907f2da466a7b24304f47e87fa2e1e5a81b9831ce54fec19055ce277ca2f39ba42c49060200160405180910390a25090506108e36001600055565b6000806001600160a01b038716610ce8575034610cf3565b610cf38786886111ea565b604051630f7c084960e21b8152600f85810b600483015284900b602482015260448101879052600060648201526001600160a01b03861690633df0212490839060840160206040518083038185885af1158015610d54573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190610d79919061169c565b979650505050505050565b600046600103610da7575073bafa44efe7901e04e39dad13167d089c559c113890565b466005036105135750736421d1ca6cd35852362806a2ded2a49b6fa8bef590565b6000610dd2610788565b6001600160a01b031663bb2952fc836040518263ffffffff1660e01b8152600401610dff91815260200190565b602060405180830381865afa158015610e1c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109d1919061169c565b60004660010361051357507f32296969ef14eb0c6d29669c550d4a044913023000020000000000000000008090565b600046600103610513575073f43211935c781d5ca1a41d2041f397b8a7366c7a90565b600260005403610ee45760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015260640161054a565b6002600055565b6040516001600160a01b0380851660248301528316604482015260648101829052610f569085906323b872dd60e01b906084015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909316929092179091526112ff565b50505050565b600080610f67610788565b6001600160a01b031663de0e9a3e846040518263ffffffff1660e01b8152600401610f9491815260200190565b6020604051808303816000875af1158015610fb3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fd7919061169c565b90506000610fff610fe661095e565b83610fef6107cc565b610ff7610503565b61047e610833565b949350505050565b6000806110286000346110186107cc565b611020610833565b61047e610503565b905061103261095e565b6001600160a01b031663095ea7b3611048610788565b6040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602481018490526044016020604051808303816000875af1158015611095573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110b991906116ec565b5060006110c4610788565b6001600160a01b031663ea598cb0836040518263ffffffff1660e01b81526004016110f191815260200190565b6020604051808303816000875af1158015611110573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611134919061169c565b9392505050565b6040516001600160a01b03831660248201526044810182905261116b90849063a9059cbb60e01b90606401610f1f565b505050565b60008061117b61095e565b60405163a1903eab60e01b8152600060048201526001600160a01b03919091169063a1903eab90349060240160206040518083038185885af11580156111c5573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190611028919061169c565b8015806112645750604051636eb1769f60e11b81523060048201526001600160a01b03838116602483015284169063dd62ed3e90604401602060405180830381865afa15801561123e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611262919061169c565b155b6112cf5760405162461bcd60e51b815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527520746f206e6f6e2d7a65726f20616c6c6f77616e636560501b606482015260840161054a565b6040516001600160a01b03831660248201526044810182905261116b90849063095ea7b360e01b90606401610f1f565b6000611354826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166113d19092919063ffffffff16565b80519091501561116b578080602001905181019061137291906116ec565b61116b5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b606482015260840161054a565b6060610fff848460008585600080866001600160a01b031685876040516113f89190611707565b60006040518083038185875af1925050503d8060008114611435576040519150601f19603f3d011682016040523d82523d6000602084013e61143a565b606091505b5091509150610d7987838387606083156114b55782516000036114ae576001600160a01b0385163b6114ae5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161054a565b5081610fff565b610fff83838151156114ca5781518083602001fd5b8060405162461bcd60e51b815260040161054a9190611521565b6000602082840312156114f657600080fd5b5035919050565b60005b83811015611518578181015183820152602001611500565b50506000910152565b60208152600082518060208401526115408160408501602087016114fd565b601f01601f19169190910160400192915050565b80356001600160a01b03811681146105fd57600080fd5b8035600f81900b81146105fd57600080fd5b600080600080600060a0868803121561159557600080fd5b61159e86611554565b9450602086013593506115b360408701611554565b92506115c16060870161156b565b91506115cf6080870161156b565b90509295509295909350565b805180151581146105fd57600080fd5b600080600080600080600060e0888a03121561160657600080fd5b61160f886115db565b965061161d602089016115db565b604089015160608a015160808b015160a08c015160c0909c01519a9d939c50919a90999198509650945092505050565b634e487b7160e01b600052601160045260246000fd5b80820281158282048414176109d1576109d161164d565b60008261169757634e487b7160e01b600052601260045260246000fd5b500490565b6000602082840312156116ae57600080fd5b5051919050565b6000602082840312156116c757600080fd5b815161ffff8116811461113457600080fd5b818103818111156109d1576109d161164d565b6000602082840312156116fe57600080fd5b611134826115db565b600082516117198184602087016114fd565b919091019291505056fea264697066735822122004886c6268ed7684e210ba40c73bcbc5c68752d7e87955cd29fcd730ad38d28e64736f6c63430008110033";

type LidoAdaptorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LidoAdaptorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LidoAdaptor__factory extends ContractFactory {
  constructor(...args: LidoAdaptorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<LidoAdaptor> {
    return super.deploy(overrides || {}) as Promise<LidoAdaptor>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): LidoAdaptor {
    return super.attach(address) as LidoAdaptor;
  }
  override connect(signer: Signer): LidoAdaptor__factory {
    return super.connect(signer) as LidoAdaptor__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LidoAdaptorInterface {
    return new utils.Interface(_abi) as LidoAdaptorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LidoAdaptor {
    return new Contract(address, _abi, signerOrProvider) as LidoAdaptor;
  }
}
