import React, { useState } from 'react'
import { Card, CardImg } from 'reactstrap';
import ImageModal from './ImageModal';

function ImageCard({src, width, style}){
    const [modal, setModal] = useState(false)

    const toggle = () => {
        setModal(!modal)
        console.log("ImageCard Toggle")
    }

    return(
        <Card style={style}>
            <CardImg  top width={width} src={src} alt="Card image cap" onClick={toggle}/>
            <ImageModal src={src} toggle={toggle} modal={modal}/>
        </Card>
    );
}

export default ImageCard