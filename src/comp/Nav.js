import '../style/App.css';
import Modal_window from './modal_window.js';
//import { active, account, library, connector, activate, deactivate } from '@web3-react/injected-connector'
import Web3_pack from './Web3pack.js';
import Account from './account.js';



function Nav() {

    return (
    <>
    <Modal_window />
    <div className='prikol'>
    <header className="App-header">
      <div className='top'>
        <p className="texta">Spaceman Platform</p>
        <Account />
      </div>
      </header>
      </div>
    </>
    );
}

export default Nav;