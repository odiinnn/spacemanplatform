import '../style/App.css';
import Modal_window from './modal_window.js';
import Account from './account.js';

function Nav1() {

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
      <a href='/' type="submit" className="floatingbuttonnnnn">Main</a>
      </div>
    </>
    );
}

export default Nav1;