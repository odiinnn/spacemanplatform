import React, { Component } from 'react';
import blockcontent from '../style/App.css';
import '../style/App.css';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import meta from '../image/Meta.svg.png';
import Web3_pack from './Web3pack.js';
import NewMintItem from './NewMintItem.js';
import cross from '../image/cross.png';
import Loader from './ui/Loader/Loader.js';
import axios from 'axios';

var response = ''
var uri = 'https://raw.githubusercontent.com/odiinnn/nfttest/main/0.json';


function GoodMint(props){

  const [modalIsOpen,setIsOpen] = React.useState(props.state);
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


        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
          className='goodMint'
          contentLabel="Example Modal"
          style={{
              overlay: {
                    }

          }}
        >

        <div className='top1'>
        </div>
        {props.state2
                ?   <div style={{marginBottom: '20%'}}>
                        <Loader />
                    </div>
                : <div style={{marginBottom: '20%'}}>
                        <NewMintItem
                            uri={props.uri}
                        />
                    </div>
            }

        </Modal>
      </div>
    );
}


function Content() {
    return(
        <div className='blockcontent'>agfhkjgh</div>

    );

}

export default GoodMint;