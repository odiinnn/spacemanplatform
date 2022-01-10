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
import GoodMint from './GoodMint.js';


const simpleNftAddress = '0x0219d9922E4945D116fA657275B133C4C00256e3';

var urii = ''
var state = true;
var state2 = true;


const simpleNftInterface = new ethers.utils.Interface(simpleNftAbi);
const contract = new Contract(simpleNftAddress, simpleNftInterface);

export default function NftMint2(props) {

    const { activateBrowserWallet, account } = useEthers();
    const etherBalance = useEtherBalance(account);

    const { state: too, uri, send: AwardItem } =
        ContractNftMethod("awardItem");

    const [isMinting, setIsMinting] = useState(false)



    async function mintnft(){
        setIsMinting(true);
        state = true
        urii = document.getElementById("input").value
        await AwardItem(account, urii)
        state2 = false
    }


    return (
        <>
            <div class="switch">
              <input id="cmn-toggle-1" className="cmn-toggle cmn-toggle-yes-no" type="checkbox" onClick={ () => props.handleClick('nftmint1')} />
              <label for="cmn-toggle-1" data-on="Fuck" data-off="Default uri"></label>
            </div>
            <input id='input' className="inputstyle" placeholder='Input uri...'  />
            <button onClick={mintnft} className='floatingbuttonnn'>Mint</button>
            {isMinting
                ? <GoodMint
                    state={state}
                    state2={state2}
                    uri={urii}
                      />
                : <></>
            }
        </>

    )




}