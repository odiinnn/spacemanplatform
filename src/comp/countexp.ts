import { useState } from "react";
import { ethers } from 'ethers';
import '../App.css';
import { formatEther } from "@ethersproject/units";
import { useEthers, useEtherBalance } from "@usedapp/core";
import { useContractCall, useContractFunction } from "@usedapp/core";
import web3 from 'web3';
import simpleContractAbi from "../abi/SimpleContract.json";
import { Contract } from "@ethersproject/contracts";
const simpleContractAddress = '0xD61AE1027b150577b268273998031b56B226295e';

const nftTxn = '9'

const simpleContractInterface = new ethers.utils.Interface(simpleContractAbi);
const contract = new Contract(simpleContractAddress, simpleContractInterface);


export function useContractMethod(methodName: string) {
  const { state, send } = useContractFunction(contract, methodName, {});
  return { state, send };
}

export function useIncrement() {
  const { state, send } = useContractFunction(contract, "incrementCount", {});
  return { state, send };
}

