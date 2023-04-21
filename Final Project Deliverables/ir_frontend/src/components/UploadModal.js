import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import {useState} from 'react'
import ImageCard from './ImageCard';


function UploadModal({changeImage, changeText}){
  const [modal, setModal] = useState(false);

  const [image, setImage] = useState(null)

  const toggle = () => {
    setModal(!modal);
  }

  const handleCancel= ()=>{
    setImage(null)
    setModal(!modal)
  }

  const handleSubmit= ()=>{
    changeText(null)
    changeImage(image)
    setImage(null)
    setModal(!modal)
  }
  
  const handleChange = (e) => {
    console.log(e.target.files[0]); // use the input value here
    setImage(e.target.files[0])
    
  }

    return (
      <div>
        <Button color="primary" onClick={toggle} style={{"height":"50px", "borderRadius":"20px"}}>Upload</Button>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Upload Image</ModalHeader>
          <ModalBody>
            <Input type="file" onChange={handleChange}></Input>
            {image!=null &&
              <ImageCard src={URL.createObjectURL(image)}></ImageCard>
            }
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={handleSubmit}>Upload</Button>
            <Button color="danger" onClick={handleCancel}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }

export default UploadModal;