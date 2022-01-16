import { useState } from "react";
import '../App.css';
import { useEthers } from "@usedapp/core";
import { ContractNftMethod, Hash, Error } from "../hooks";
import GoodMint from './GoodMint.js';

var state = true;
var state2 = true;
var hash = '';
var errorr

const urii = 'https://raw.githubusercontent.com/odiinnn/nfttest/main/0.json';


export default function NftMint(props) {

    const { account } = useEthers();

    const { state: too, uri, send: AwardItem } =
        ContractNftMethod("awardItem");

    const [isMinting, setIsMinting] = useState(false)


    async function mintnft(){
        setIsMinting(true);
        state = true
        await AwardItem(account, 'https://raw.githubusercontent.com/odiinnn/nfttest/main/0.json')
        try {
            hash = Hash()
            try{
                errorr = Error()
                if (errorr === '') {
                    console.log('if', errorr)
                    state2 = false
                }
                else {
                    console.log('else', errorr)
                    state2 = true
                    setIsMinting(false)
                }
            } catch(e){
                console.log('catch', e)
            }
        } catch(e)
        {
            console.log('error', e)
        }


    }


    return (
    <>
        <div class="switch">
          <input id="cmn-toggle-2" className="cmn-toggle cmn-toggle-yes-no" type="checkbox" onClick={ () => props.handleClick('nftmint2')} />
          <label for="cmn-toggle-2" data-on="Create default" data-off="Your uri"></label>
        </div>
        <button onClick={mintnft} className='floatingbuttonnn'>Mint</button>
            {isMinting
                ? <GoodMint
                    state={state}
                    state2={state2}
                    uri={urii}
                    hash={hash}
                      />
                : <p>{errorr}</p>
            }

    </>
    )




}