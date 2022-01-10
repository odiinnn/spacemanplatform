import React from 'react';
import axios from 'axios';
import { useState, useEffect } from "react";
import Loader from './ui/Loader/Loader.js';
import '../style/App.css';


var uri = 'https://raw.githubusercontent.com/odiinnn/nfttest/main/0.json';


const NewMintItem = (props) => {
    uri = props.uri
    var response = ''
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
    const imageLink = props.img

    return (
        <>
        {load
            ?   <div className='newMintItem'>
                    <div className='newMintItem2'>
                        <img className='newMintItem3' src={link} />
                    </div>
                    <div className='newMintItem1'>
                        <p className='nftText'>Name:</p>
                        <p className='nftText'>{nftName}</p>
                        <p className='nftText'>Description:</p>
                        <p className='nftText'>{nftDes}</p>
                        <p className='nftText'>Contract address:</p>
                        <a  href='https://testnet.bscscan.com/address/0x0219d9922E4945D116fA657275B133C4C00256e3' className='nftText'>0x0219d9922E4945D116fA657275B133C4C00256e3</a>
                        <p className='nftText'>ID:</p>
                        <p className='nftText'>None yet</p>
                    </div>
                </div>
            :   <Loader />
        }

        </>
    )

}

export default NewMintItem;