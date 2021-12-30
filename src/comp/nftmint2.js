import { useState } from "react";
import { ethers } from 'ethers';
import '../App.css';
import { formatEther } from "@ethersproject/units";
import { useEthers, useEtherBalance } from "@usedapp/core";
import { useContractCall, useContractFunction } from "@usedapp/core";
import web3 from 'web3';
import simpleNftAbi from "../abi/NftMint.json";
import { Contract } from "@ethersproject/contracts";
import { ContractMethod, ContractNftMethod, MintNft } from "../hooks";

const simpleNftAddress = '0x0219d9922E4945D116fA657275B133C4C00256e3';


const simpleNftInterface = new ethers.utils.Interface(simpleNftAbi);
const contract = new Contract(simpleNftAddress, simpleNftInterface);

export default function NftMint2(props) {

    const { activateBrowserWallet, account } = useEthers();
    const etherBalance = useEtherBalance(account);

    const { state: too, uri, send: AwardItem } =
        ContractNftMethod("awardItem");



    function mintnft(){
        const urii = document.getElementById("input").value
            AwardItem(account, urii)

    }


    return (
        <>
            <div class="switch">
              <input id="cmn-toggle-1" className="cmn-toggle cmn-toggle-yes-no" type="checkbox" onClick={ () => props.handleClick('nftmint1')} />
              <label for="cmn-toggle-1" data-on="Fuck" data-off="Default uri"></label>
            </div>
            <input id='input' className="inputstyle" placeholder='Input uri...'  />
            <button onClick={mintnft} className='floatingbuttonnn'>Mint</button>
        </>

    )




}