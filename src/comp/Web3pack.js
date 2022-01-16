import { useEthers } from "@usedapp/core";
import '../style/App.css';


function Web3_pack() {

    const { activateBrowserWallet, account } = useEthers();
    function handleConnectWallet() {
    activateBrowserWallet();
    }

    const { deactivate } = useEthers();
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