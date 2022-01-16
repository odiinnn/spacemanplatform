import React from 'react';
import BNB from './bnb.png'
import cl from './BNBIcon.module.css';


const BNBIcon = () => {
    return (
    <>
        <div className={cl.bnb}>
            <img src={BNB} alt='' />
        </div>
    </>
    )

}

export default BNBIcon;