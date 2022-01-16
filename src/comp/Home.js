import React, { useState } from 'react'
import '../style/Style1.css';
import Nav1 from './Nav1.js';
import NftMint from "./nftmint.js";
import NftMint2 from "./nftmint2.js";
import Spaceman1 from "../image/spaceman1.png";
import GoodMint from './GoodMint.js';



function Home(props) {

    const [game, setGame] = useState('start')
    const handleClick = (gameState) => {
    setGame(gameState)
  }
    return(
    <>

        <Nav1 />

        <div className='container'>
            <div className='contentt'>
                <div className='imgg'>
                    <img src={Spaceman1} alt='' />
                </div>
                <div className='contenttt'>
                    <h2>create your own spaceman!</h2>
                    <p>Just click button and confirm transaction in metamask</p>
                    <div className='borrder'></div>
                    <p>Contract address: </p>
                    <a href='https://testnet.bscscan.com/address/0x0219d9922E4945D116fA657275B133C4C00256e3'>0x0219d9922E4945D116fA657275B133C4C00256e3</a>

                    {(() => {
                        switch (game) {
                          case 'nftmint1':
                            return <NftMint  handleClick={handleClick}/>
                          case 'nftmint2':
                            return <NftMint2  handleClick={handleClick}/>

                            default:
                            return <NftMint  handleClick={handleClick}/>
                                  }
                      })()}
                <GoodMint />

                </div>
            </div>
        </div>
        <div>

        </div>
</>

        )}

export default Home;