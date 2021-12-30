import '../style/Style.css';
import Spaceman1 from "../image/spaceman1.png";
import Spaceman2 from "../image/spaceman2.png";
import Nav from './Nav.js';
import Deploy from './dpl.js';



function MainPage() {

    return (
    <>
    <Nav />
    <body>
    <div className='container'>
        <div className='spaceman'>
            <div className='content'>
                <h2>Hello! SpaceMan 1!</h2>
                <p>Hello world! I am SpaceMan number 1! Nice to meet you :)</p>
                <p>Here you can create your own spaceman</p>
                <a href='create'>Create</a>
            </div>
            <img src={Spaceman1} />
        </div>
        <div className='spaceman'>
            <div className='content'>
                <h2>Hello! SpaceMan 2!</h2>
                <p>Hello world! I am SpaceMan number 2! Nice to meet you :)</p>
                <p>I cannot do anything yet ((</p>
                <a href='#'>Sorry...</a>
            </div>
            <img src={Spaceman2} />
        </div>
    </div>
    </body>
    <Deploy />
    </>
    );
}

export default MainPage;