import React from 'react';
import axios from 'axios';
import { useState, useEffect } from "react";
import Loader from './ui/Loader/Loader.js';
import '../style/App.css';


var uri = 'https://raw.githubusercontent.com/odiinnn/nfttest/main/0.json';
var hash = ''
const contractAddress = '0x0219d9922E4945D116fA657275B133C4C00256e3'

const NewMintItem = (props) => {
    uri = props.uri
    var response = ''
    hash = props.hash
    const [link, setLink] = useState('')
    const [nftName, setNftName] = useState('')
    const [nftDes, setNftDes] = useState('')
    const [load, setLoad] = useState(false)
    useEffect(() => {
        fetchUri()
    },[])
    async function fetchUri() {
        response = await axios.get(uri)
        setLink(response.data.image)
        setNftName(response.data.name)
        setNftDes(response.data.description)
        setLoad(true)
        return(response.data.image)
    }

    return (
        <>
        {load
            ?   <div className='newMintItem'>
                    <div className='newMintItem2'>
                        <img className='newMintItem3' src={link} alt='' />
                    </div>
                    <div className='newMintItem1'>
                        <p className='nftText'>Name: {nftName}</p>
                        <p className='nftText'>Description: {nftDes}</p>
                        <p className='nftText'>Contract address:
                        <a  href={'https://testnet.bscscan.com/address/'+contractAddress} className='nftText'>
                        {contractAddress &&
                              `${contractAddress.slice(0, 10)}...${contractAddress.slice(
                                contractAddress.length - 10,
                                contractAddress.length
                          )}`}
                        </a>
                        </p>
                        <p className='nftText'>Transaction hash:
                        <a  href={'https://testnet.bscscan.com/tx/'+hash} className='nftText'>
                        {hash &&
                              `${hash.slice(0, 10)}...${hash.slice(
                                hash.length - 10,
                                hash.length
                          )}`}
                        </a>
                        </p>
                    </div>
                </div>
            :   <Loader
                    tekst={'Minting'}
                />
        }

        </>
    )

}

export default NewMintItem;