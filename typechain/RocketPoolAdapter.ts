/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface RocketPoolAdapterInterface extends utils.Interface {
  functions: {
    "BalancerV2Vault()": FunctionFragment;
    "PRECISION()": FunctionFragment;
    "WETH()": FunctionFragment;
    "adaptorName()": FunctionFragment;
    "buyToken()": FunctionFragment;
    "canDeposit(uint256)": FunctionFragment;
    "canWithdraw()": FunctionFragment;
    "deposit()": FunctionFragment;
    "getAPR()": FunctionFragment;
    "getRocketDAOProtocolSettingsDeposit()": FunctionFragment;
    "getRocketDrocketDepositPool()": FunctionFragment;
    "getRocketPoolContractAddresst(string)": FunctionFragment;
    "getRocketVault()": FunctionFragment;
    "getTokens()": FunctionFragment;
    "rETH()": FunctionFragment;
    "rocketPoolStorage()": FunctionFragment;
    "sellToken(uint256)": FunctionFragment;
    "withdraw(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "BalancerV2Vault"
      | "PRECISION"
      | "WETH"
      | "adaptorName"
      | "buyToken"
      | "canDeposit"
      | "canWithdraw"
      | "deposit"
      | "getAPR"
      | "getRocketDAOProtocolSettingsDeposit"
      | "getRocketDrocketDepositPool"
      | "getRocketPoolContractAddresst"
      | "getRocketVault"
      | "getTokens"
      | "rETH"
      | "rocketPoolStorage"
      | "sellToken"
      | "withdraw"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "BalancerV2Vault",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "PRECISION", values?: undefined): string;
  encodeFunctionData(functionFragment: "WETH", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "adaptorName",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "buyToken", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "canDeposit",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "canWithdraw",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "deposit", values?: undefined): string;
  encodeFunctionData(functionFragment: "getAPR", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getRocketDAOProtocolSettingsDeposit",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRocketDrocketDepositPool",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRocketPoolContractAddresst",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getRocketVault",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getTokens", values?: undefined): string;
  encodeFunctionData(functionFragment: "rETH", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "rocketPoolStorage",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "sellToken",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "BalancerV2Vault",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "PRECISION", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "WETH", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "adaptorName",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "buyToken", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "canDeposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "canWithdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getAPR", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRocketDAOProtocolSettingsDeposit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRocketDrocketDepositPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRocketPoolContractAddresst",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRocketVault",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getTokens", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "rETH", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "rocketPoolStorage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "sellToken", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "Deposited(address,uint256)": EventFragment;
    "Withdrawn(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Deposited"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdrawn"): EventFragment;
}

export interface DepositedEventObject {
  account: string;
  ethAmount: BigNumber;
}
export type DepositedEvent = TypedEvent<
  [string, BigNumber],
  DepositedEventObject
>;

export type DepositedEventFilter = TypedEventFilter<DepositedEvent>;

export interface WithdrawnEventObject {
  account: string;
  ethAmount: BigNumber;
}
export type WithdrawnEvent = TypedEvent<
  [string, BigNumber],
  WithdrawnEventObject
>;

export type WithdrawnEventFilter = TypedEventFilter<WithdrawnEvent>;

export interface RocketPoolAdapter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: RocketPoolAdapterInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    BalancerV2Vault(overrides?: CallOverrides): Promise<[string]>;

    PRECISION(overrides?: CallOverrides): Promise<[BigNumber]>;

    WETH(overrides?: CallOverrides): Promise<[string]>;

    adaptorName(overrides?: CallOverrides): Promise<[string]>;

    buyToken(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    canDeposit(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    canWithdraw(overrides?: CallOverrides): Promise<[boolean]>;

    deposit(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getAPR(overrides?: CallOverrides): Promise<[BigNumber]>;

    getRocketDAOProtocolSettingsDeposit(
      overrides?: CallOverrides
    ): Promise<[string]>;

    getRocketDrocketDepositPool(overrides?: CallOverrides): Promise<[string]>;

    getRocketPoolContractAddresst(
      _contractName: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getRocketVault(overrides?: CallOverrides): Promise<[string]>;

    getTokens(
      overrides?: CallOverrides
    ): Promise<
      [string, string, string] & {
        token0: string;
        token1: string;
        token2: string;
      }
    >;

    rETH(overrides?: CallOverrides): Promise<[string]>;

    rocketPoolStorage(overrides?: CallOverrides): Promise<[string]>;

    sellToken(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  BalancerV2Vault(overrides?: CallOverrides): Promise<string>;

  PRECISION(overrides?: CallOverrides): Promise<BigNumber>;

  WETH(overrides?: CallOverrides): Promise<string>;

  adaptorName(overrides?: CallOverrides): Promise<string>;

  buyToken(
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  canDeposit(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  canWithdraw(overrides?: CallOverrides): Promise<boolean>;

  deposit(
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getAPR(overrides?: CallOverrides): Promise<BigNumber>;

  getRocketDAOProtocolSettingsDeposit(
    overrides?: CallOverrides
  ): Promise<string>;

  getRocketDrocketDepositPool(overrides?: CallOverrides): Promise<string>;

  getRocketPoolContractAddresst(
    _contractName: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  getRocketVault(overrides?: CallOverrides): Promise<string>;

  getTokens(
    overrides?: CallOverrides
  ): Promise<
    [string, string, string] & {
      token0: string;
      token1: string;
      token2: string;
    }
  >;

  rETH(overrides?: CallOverrides): Promise<string>;

  rocketPoolStorage(overrides?: CallOverrides): Promise<string>;

  sellToken(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    BalancerV2Vault(overrides?: CallOverrides): Promise<string>;

    PRECISION(overrides?: CallOverrides): Promise<BigNumber>;

    WETH(overrides?: CallOverrides): Promise<string>;

    adaptorName(overrides?: CallOverrides): Promise<string>;

    buyToken(overrides?: CallOverrides): Promise<BigNumber>;

    canDeposit(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    canWithdraw(overrides?: CallOverrides): Promise<boolean>;

    deposit(overrides?: CallOverrides): Promise<BigNumber>;

    getAPR(overrides?: CallOverrides): Promise<BigNumber>;

    getRocketDAOProtocolSettingsDeposit(
      overrides?: CallOverrides
    ): Promise<string>;

    getRocketDrocketDepositPool(overrides?: CallOverrides): Promise<string>;

    getRocketPoolContractAddresst(
      _contractName: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    getRocketVault(overrides?: CallOverrides): Promise<string>;

    getTokens(
      overrides?: CallOverrides
    ): Promise<
      [string, string, string] & {
        token0: string;
        token1: string;
        token2: string;
      }
    >;

    rETH(overrides?: CallOverrides): Promise<string>;

    rocketPoolStorage(overrides?: CallOverrides): Promise<string>;

    sellToken(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdraw(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    "Deposited(address,uint256)"(
      account?: PromiseOrValue<string> | null,
      ethAmount?: null
    ): DepositedEventFilter;
    Deposited(
      account?: PromiseOrValue<string> | null,
      ethAmount?: null
    ): DepositedEventFilter;

    "Withdrawn(address,uint256)"(
      account?: PromiseOrValue<string> | null,
      ethAmount?: null
    ): WithdrawnEventFilter;
    Withdrawn(
      account?: PromiseOrValue<string> | null,
      ethAmount?: null
    ): WithdrawnEventFilter;
  };

  estimateGas: {
    BalancerV2Vault(overrides?: CallOverrides): Promise<BigNumber>;

    PRECISION(overrides?: CallOverrides): Promise<BigNumber>;

    WETH(overrides?: CallOverrides): Promise<BigNumber>;

    adaptorName(overrides?: CallOverrides): Promise<BigNumber>;

    buyToken(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    canDeposit(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    canWithdraw(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getAPR(overrides?: CallOverrides): Promise<BigNumber>;

    getRocketDAOProtocolSettingsDeposit(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRocketDrocketDepositPool(overrides?: CallOverrides): Promise<BigNumber>;

    getRocketPoolContractAddresst(
      _contractName: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRocketVault(overrides?: CallOverrides): Promise<BigNumber>;

    getTokens(overrides?: CallOverrides): Promise<BigNumber>;

    rETH(overrides?: CallOverrides): Promise<BigNumber>;

    rocketPoolStorage(overrides?: CallOverrides): Promise<BigNumber>;

    sellToken(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdraw(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    BalancerV2Vault(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    PRECISION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    WETH(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    adaptorName(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    buyToken(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    canDeposit(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    canWithdraw(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deposit(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getAPR(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getRocketDAOProtocolSettingsDeposit(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRocketDrocketDepositPool(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRocketPoolContractAddresst(
      _contractName: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRocketVault(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTokens(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rETH(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rocketPoolStorage(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    sellToken(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
