import '../style/App.css';
import Nav1 from './Nav1.js';

const Create = (props) => (
<>
        <Nav1 />
        <div className="content">

                    <p className='texta1'>Create ypur own BEP-721 token</p>
                    <div className='content1'>
                        <div className="blockcontent1">
                            <p className='texta4'>Enter the name of your collection:</p>
                            <input className="inputstyle" placeholder='My first collection' />
                            <p className='texta4'>Enter the name of your item:</p>
                            <input className="inputstyle" placeholder='CryptoKitties' />
                            <p className='texta4'>Enter your item description:</p>
                            <input className="inputstyle" placeholder='This item is...' />
                            <p className='texta4'>Input link to image:</p>
                            <input className="inputstyle" placeholder='https://' />
                            <div className='content'>
                                <a type="submit" className="floatingbuttonnn" href ='#' >Create</a>
                            </div>
                        </div>
                    </div>
        </div>
</>

        );

export default Create;