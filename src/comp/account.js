import { formatEther } from "@ethersproject/units";
import { useEthers, useEtherBalance } from "@usedapp/core";
import '../style/App.css';
import llink from '../image/link.png'


function Account() {


  const { account } = useEthers();
  const etherBalance = useEtherBalance(account);



    return(
    <div className='account'>
       <div className='texta3'>

        {account ?
        <>
 <p>Connected with MetaMask  </p>
            <div className='blockcontent5'>



                <div className='blockcontent4'>
                    <div className='row_mode1'>

                        <img src={llink} className='link' alt='' />
                        <a href={'https://bscscan.com/addres/'+account} className='texta3'>
                        {account &&
                              `${account.slice(0, 6)}...${account.slice(
                                account.length - 6,
                                account.length
                          )}`}
                        </a>

                    </div>
                </div>
                <p>Your balance: {etherBalance && parseFloat(formatEther(etherBalance)).toFixed(3)} BNB</p>
            </div>



        </>: <></>}



        <div className='hide'>

        </div>
      </div>
    </div>
    );
}

export default Account;