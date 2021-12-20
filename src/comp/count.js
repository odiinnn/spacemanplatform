import { useState } from "react";
import { ethers } from 'ethers';
import '../style/App.css';
import { formatEther } from "@ethersproject/units";
import { useEthers, useEtherBalance } from "@usedapp/core";
import { useContractCall, useContractFunction } from "@usedapp/core";
import web3 from 'web3';
import simpleContractAbi from "../abi/SimpleContract.json";
import { Contract } from "@ethersproject/contracts";
import { ContractMethod, SetCount } from "../hooks";

const simpleContractAddress = '0xD61AE1027b150577b268273998031b56B226295e';

const nftTxn = '9'

const simpleContractInterface = new ethers.utils.Interface(simpleContractAbi);
const contract = new Contract(simpleContractAddress, simpleContractInterface);


export default function Count() {


    const { state, send: incrementCount } = ContractMethod("incrementCount");
    const { state: setCountState, send: setCount } =
        ContractMethod("setCount");
    const [input, setInput] = useState("");

    function handleIncrement(){
        incrementCount();
    }

    function handleSetCount() {
    console.log('input')
    const countt = document.getElementById("input").value
    console.log(countt)
    if (countt) {
        console.log(countt)
      setCount(countt);
    } else {console.log('fuck u')}
  }

  function handleInput(valueAsString: string, valueAsNumber: number) {
  console.log('asd')
    setInput(valueAsString);
  }


  try {

        const [count]: any = useContractCall({
        abi: simpleContractInterface,
        address: simpleContractAddress,
        method: "count",
        args: [],
      }) ?? [];
        return (
        <>
            <p>{count.toNumber()}</p>
            <button onClick={handleIncrement} className='floatingbuttonnn'>+1</button>
            <input id='input'
          onChange={handleInput}></input>
            <button onClick={handleSetCount} className='floatingbuttonnn'>SetCount</button>
        </>
        );



  } catch (err){
    console.log('dasd', err)
  }


    return (
        <p>addsa</p>

    )



}