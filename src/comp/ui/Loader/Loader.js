import React from 'react';
import cl from './Loader.module.css';


const Loader = () => {
    return (
    <>
        <div className={cl.loader}>

        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <p className={cl.text}>Minting</p>
        </div>
    </>
    )

}

export default Loader;