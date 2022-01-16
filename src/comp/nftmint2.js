import { useState } from "react";
import '../App.css';
import { useEthers } from "@usedapp/core";
import { ContractNftMethod, Hash, Error } from "../hooks";
import GoodMint from './GoodMint.js';


var urii = ''
var state = true;
var state2 = true;
var hash = '';
var errorr

export default function NftMint2(props) {

    const { account } = useEthers();

    const { state: too, uri, send: AwardItem } =
        ContractNftMethod("awardItem");

    const [isMinting, setIsMinting] = useState(false)



    async function mintnft(){
        setIsMinting(true);
        state = true
        urii = document.getElementById("input").value
        await AwardItem(account, urii)
        try {
            hash = Hash()
            try{
                errorr = Error()
                if (errorr === '') {
                    state2 = false
                }
                else {
                    state2 = true
                    setIsMinting(false)
                }
            } catch(e){
                errorr = e
                setIsMinting(false)
                state2 = false
            }
        } catch(e)
        {
            console.log('error', e)
        }

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
                    hash={hash}
                      />
                : <p>{errorr}</p>
            }
        </>

    )




}