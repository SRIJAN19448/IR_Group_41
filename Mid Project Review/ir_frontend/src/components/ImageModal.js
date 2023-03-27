import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import ImageList from './ImageList';
import {useState, useContext, createContext} from 'react'
import ImageCard from './ImageCard';

export const ImageContext=createContext(null)

function ImageModal({buttonLabel, changeImage}){
  const [modal, setModal] = useState(false);

  const [image, setImage] = useState(null)

  const [temp, setTemp] = useState(null)

  // const img=useContext(ImageContext)

  const toggle = () => {
    setModal(!modal);
  }

  const handleCancel= ()=>{
    setTemp(null)
    setModal(!modal)
  }

  const handleSubmit= ()=>{
    setImage(temp)
    changeImage(temp)
    setTemp(null)
    setModal(!modal)
  }
  
  const handleChange = (e) => {
    console.log(e.target.files[0].name); // use the input value here
    setTemp(e.target.files[0].name)
    
  }

    return (
      <ImageContext.Provider value={image}>
      <div>
        <Button color="primary" onClick={toggle} style={{"height":"50px", "borderRadius":"20px"}}>{buttonLabel}</Button>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Upload Image</ModalHeader>
          <ModalBody>
            <Input type="file" onChange={handleChange}></Input>
            {temp!=null &&
              <ImageCard src={"GPR_dataset\\"+temp}></ImageCard>
            }
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={handleSubmit}>Upload</Button>
            <Button color="danger" onClick={handleCancel}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
      </ImageContext.Provider>
    );
  }

export default ImageModal;