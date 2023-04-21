import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import ImageCard from './ImageCard';


function ImageModal({src, toggle, modal}){

  const handleSubmit= ()=>{

    const link = document.createElement('a');
    link.href = src;
    link.download = "download";
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toggle()
  }

    return (
      <div>
        <Modal centered isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Download Image</ModalHeader>
          <ModalBody>
            <ImageCard src={src} ></ImageCard>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={handleSubmit}>Download</Button>
            <Button color="danger" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }

export default ImageModal;