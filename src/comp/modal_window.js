import React, { Component } from 'react';
import blockcontent from '../style/App.css';
import '../style/App.css';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import meta from '../image/Meta.svg.png';
import Web3_pack from './Web3pack.js';
import cross from '../image/cross.png';

function Modal_window(){
  var subtitle;
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    <Content />

  }

  function closeModal(){
    setIsOpen(false);
  }


    return (
      <div>
        <button onClick={openModal} className='floatingbuttonnnn'><img src={meta} alt='circle' className='App-open' /></button>

        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
          className='blockcontent3'
          contentLabel="Example Modal"
          style={{
              overlay: {
                    }

          }}
        >
          <button onClick={closeModal} className='prikol1'><img src={cross} alt='circle' className='App-open1' /></button>
        <div className='top1'>
        </div>
        <div className='webwind'>
            <Web3_pack />
        </div>

        </Modal>
      </div>
    );
}


function Content() {
    return(
        <div className='blockcontent'>agfhkjgh</div>

    );

}

export default Modal_window;