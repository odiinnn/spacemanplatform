import logo from '../image/logo.svg';
import '../style/Style1.css';
import Nav1 from './Nav1.js';
import Modal_window from './modal_window.js';
import Web3 from 'web3';
import arrows from '../image/arrows.png';
import Count from "./count.js";
import NftMint from "./nftmint.js";
import Spaceman1 from "../image/spaceman1.png";



const Home = (props) => (

<>

        <Nav1 />

        <div className='container'>
            <div className='contentt'>
                <div className='imgg'>
                    <img src={Spaceman1} />
                </div>
                <div className='contenttt'>
                    <h2>create your own spaceman!</h2>
                    <p>Just click button and confirm transaction in metamask</p>
                    <div className='borrder'></div>
                    <p>Contract address: </p>
                    <a href='https://testnet.bscscan.com/address/0x0219d9922E4945D116fA657275B133C4C00256e3'>0x0219d9922E4945D116fA657275B133C4C00256e3</a>
                    <NftMint />
                </div>
            </div>
        </div>
        <div>

        </div>
</>

        )

export default Home;