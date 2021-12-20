import { ethers } from "ethers";
import simpleContractAbi from "../abi/SimpleContract.json";
import { Contract } from "@ethersproject/contracts";
import { useContractCall, useContractFunction } from "@usedapp/core";
import simpleNftAbi from "../abi/NftMint.json";

const simpleContractAddress = '0xD61AE1027b150577b268273998031b56B226295e';
const simpleNftAddress = '0x0219d9922E4945D116fA657275B133C4C00256e3';
const simpleContractInterface = new ethers.utils.Interface(simpleContractAbi);
const simpleNftInterface = new ethers.utils.Interface(simpleNftAbi);
const contract = new Contract(simpleContractAddress ,simpleContractInterface);
const contractnft = new Contract(simpleNftAddress ,simpleNftInterface);

export function useCount() {
  const [count]: any = useContractCall({
    abi: simpleContractInterface,
    address: simpleContractAddress,
    method: "count",
    args: [],
  }) ?? [];
  return count;
}

export function ContractMethod(methodName: string) {
  const { state, send } = useContractFunction(contract, methodName, {});
  return { state, send };
}

export function ContractNftMethod(methodName: string) {
  const { state, send } = useContractFunction(contractnft, methodName, {});
  return { state, send };
}

export function SetCount() {
  const { state, send } = useContractFunction(contract, "setCount", {});
  return { state, send };
}

export function AwardItem() {
  const { state, send } = useContractFunction(contractnft, "awardItem", {});
  return { state, send };
}
