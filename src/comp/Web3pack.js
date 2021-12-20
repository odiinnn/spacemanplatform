import { useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { injected } from "./Coonnector";
import { formatEther } from "@ethersproject/units";
import { useEthers, useEtherBalance } from "@usedapp/core";
import '../style/App.css';
import llink from '../image/link.png'


function Web3_pack() {



  const { activateBrowserWallet, account } = useEthers();
  const etherBalance = useEtherBalance(account);
  function handleConnectWallet() {
    activateBrowserWallet();
  }

  const { accountt, deactivate } = useEthers();
  function handleDeactivateAccount() {
    deactivate();
  }

    return(

       <div className='tokensalenamee'>

        {account ?
        <>

            <button onClick={handleDeactivateAccount} type="submit" className="floatingbuttonnnnn">Disconnect</button>


        </>: <button onClick={handleConnectWallet} type="submit" className="floatingbuttonnn">Connect</button>}



        <div className='hide'>

        </div>
      </div>

    );
}

export default Web3_pack;