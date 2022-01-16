import React from 'react';
import '../style/App.css';
import Modal from 'react-modal';
import NewMintItem from './NewMintItem.js';
import Loader from './ui/Loader/Loader.js';


function GoodMint(props){

  const [modalIsOpen,setIsOpen] = React.useState(props.state);

    function afterOpenModal() {
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
                            hash={props.hash}
                        />
                    </div>
            }

        </Modal>
      </div>
    );
}


function Content() {
    return(
        <div className='blockcontent'>Test</div>

    );

}

export default GoodMint;