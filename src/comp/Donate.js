import React, { useState, useEffect, useContext } from "react";
import { useEthers } from "@usedapp/core";
import { utils } from 'ethers';
import '../style/Style.css';
import Nav1 from './Nav1.js';
import { FaEthereum } from 'react-icons/fa';
import { SiBinance } from 'react-icons/si';
import { SenddTransaction, Error } from "../hooks";
import Loader from './ui/Loader/Loader.js';




var valueInput
var errorr
var chainName = 'Undefined'
var chainMessage = 'Please connect your wallet'
const addressOfDonation = '0x7b7850Ef7C43ee0F55B94E87ff29025DE675F208'
const fontStyles1 = {color: '#000000', fontSize: '30px'};
const fontStyles2 = {color: 'blue', fontSize: '40px'};
const fontStyles3 = {color: 'yellow', fontSize: '40px'};


const chains = {
  bsc: {
    chain: "Binance",
    msg: "Please change network to Ethereum"
  },
  eth: {
    chain: "Ethereum",
    msg: "Please change network to Binance"
  }
};

const ChainContext = React.createContext(chains);

function Donate() {

    const { chainId } = useEthers();

    const { state: too, amountttt, sendTransaction: sendTransaction } = SenddTransaction()

    const [correctInput,setCorrectInput] = useState(true)
    const [goodTransaction,setGoodTransaction] = useState(false)
    const [badTransaction,setBadTransaction] = useState(false)
    const [border, setBorder] = useState(true)
    const [load, setLoad] = useState(false)
    const [disabled, setDisabled] = useState(false)

    const chainInfo = useContext(ChainContext);

    useEffect(() => {
        fetchChain()
    },[chainId, border])



    function fetchChain(){
        setDisabled(true)
        if ((chainId === '56')){ ///here you can swap 56 to 97 and check scripts for bsc testnet network
            if((border === true)){
                setDisabled(false)
                chainName = chainInfo.bsc.chain
                chainMessage = ''
            } else if((border !== true)){
                chainName = chainInfo.bsc.chain
                chainMessage = chainInfo.bsc.msg
            }
        }else if ((chainId === '1')){
            if((border !== true)){
                setDisabled(false)
                chainName = chainInfo.eth.chain
                chainMessage = ''
            } else if((border === true)){
                chainName = chainInfo.eth.chain
                chainMessage = chainInfo.eth.msg
            }
        }
    }

    async function donate(){
        setCorrectInput(true)
        valueInput = document.getElementById("valueOf").value
        let check = valueInput/1
        if (check !== valueInput ) {
            setCorrectInput(false)
        } else {
            setCorrectInput(true)
            sendTokens(addressOfDonation, check)
        }
    }

    async function sendTokens(to, amount){
        setBadTransaction(false)
        setGoodTransaction(false)
        errorr = ''
        let amountT = String(amount)
        try{
            setDisabled(true)
            setLoad(true)
            let valueOfTransaction = utils.parseEther(amountT)
            await sendTransaction({to: addressOfDonation, value: valueOfTransaction})
            try {
                errorr = Error()
                if (errorr === '') {
                    setGoodTransaction(true)
                    setDisabled(false)
                    setLoad(false)
                    }
                    else {
                    setBadTransaction(true)
                    setDisabled(false)
                    setLoad(false)
                    }
            } catch(e)
            {
                console.log('error', e)
                setDisabled(false)
                setLoad(false)
            }

        } catch(error){
            setGoodTransaction(false)
            setBadTransaction(true)
            setDisabled(false)
            setLoad(false)
            console.log('error', error)
        }


    }

    return (
    <>
    <Nav1 />
    <body>
            <div className='donateWindow'>
                <div className='donateWindow1'>
                    <p className='texta'>There you can donate me for some reason you want</p>

                    <div className='selectCurrency'>
                    {border
                        ?<>
                            <button className='currency' >
                                <SiBinance style={fontStyles3} />
                            </button>
                            <button className='currency' onClick={() => setBorder(false)}>
                                <FaEthereum style={fontStyles1} />
                            </button>
                         </>
                        :<>
                            <button className='currency' onClick={() => setBorder(true)}>
                                <SiBinance style={fontStyles1} />
                            </button>
                            <button className='currency' >
                                <FaEthereum style={fontStyles2} />
                            </button>
                         </>
                    }

                    </div>
                    <input type='text' pattern="[0-9]*" className="inputstyle" placeholder='Input amount...' id='valueOf' disabled={disabled} />
                    {correctInput
                       ?<></>
                       :<p className='texta'>Please enter right data</p>
                    }
                    <button onClick={donate} className='floatingbuttonnn' disabled={disabled}>Donate</button>
                    <div className='infoLoad'>
                        {load
                            ?<Loader
                                tekst={'Processing'}
                            />
                            :<div style={{marginTop: '3%'}}>
                                {goodTransaction
                                   ?<p className='texta'>Thanks for your donation :)</p>
                                   :<p className='texta'></p>
                                }
                                {badTransaction
                                   ?<>
                                        <p className='texta'>smt going wrong...woops...</p>
                                        <p className='texta'>{errorr}</p>
                                                                </>
                                   :<p className='texta'></p>
                                }
                                </div>
                        }
                    </div>
                    <p className='texta'>You connect to {chainName} network</p>
                    <p className='texta'>{chainMessage}</p>
                </div>

            </div>



    </body>





    </>
    );
}

export default Donate;