import React, { useState } from 'react'
import ImageCard from '../components/ImageCard';
import {Row, Col} from 'reactstrap'
import axios from 'axios'
// import { ImageContext } from './UploadModal';
import { useEffect } from 'react';

 



function ImageList({image, text}){

    const [images, setImages]=useState(null)

    const getImages=async(image, text)=>{
        setImages(null)
        console.log(image!=null, text!=null)
        let images
        if(image==null && text==null){
            await axios.get('http://127.0.0.1:5000/shuffle').then(response => {
                console.log('Data received:', response.data);
                images=response.data.images
                })
                .catch(error => {
                console.error('Error fetching data:', error);
                });
            let chunk_images=[]
            let chunkSize=8
            for (let i = 0; i < images?.length; i += chunkSize) {
                const chunk = images.slice(i, i + chunkSize);
                chunk_images.push(chunk)
            }
            console.log("Images ready",chunk_images)
            setImages(chunk_images)
        }
        else if(image!=null){
            const formData = new FormData();
            formData.append('image', image);
            formData.append('image_name', image.name)
            await axios.post('http://127.0.0.1:5000/upload', formData)
            .then(response => console.log("upload",response.data))
            .catch(error => console.log(error));

            const params={
                path:image.name
            }
            await axios.get('http://127.0.0.1:5000/uploadSearch', {params}).then(response => {
                console.log('Data received:', response.data);
                images=response.data.images
                })
                .catch(error => {
                console.error('Error fetching data:', error);
                });
            let chunk_images=[]
            let chunkSize=8
            for (let i = 0; i < images?.slice(0,100).length; i += chunkSize) {
                const chunk = images.slice(i, i + chunkSize);
                chunk_images.push(chunk)
            }
            console.log("Images ready",chunk_images)
            setImages(chunk_images)
        }
        else if(text!=null){
            const params={
                phrase: text
            }
            await axios.get('http://127.0.0.1:5000/textSearch', {params}).then(response => {
                console.log('Data received:', response.data);
                images=response.data.images
                })
                .catch(error => {
                console.error('Error fetching data:', error);
                });
            let chunk_images=[]
            let chunkSize=8
            for (let i = 0; i < images?.length; i += chunkSize) {
                const chunk = images.slice(i, i + chunkSize);
                chunk_images.push(chunk)
            }
            console.log("Images ready",chunk_images)
            setImages(chunk_images)
        }
    
    }
    

    useEffect(()=>{
        getImages(image, text)
    },[image, text])

    
    return(
        <div>
            {image!=null &&
            <div>
                <ImageCard style={{"width":"20%", "margin":"0% 6%"}} src={URL.createObjectURL(image)}></ImageCard>
            </div>}
            {images==null &&
            <div style={{display:"flex", justifyContent:"center"}}>
                <img style={{"width":"10%", "margin":"5%"}} src={"loading.gif"} alt="Loading..."></img>
            </div>
            }
            {text==null && images!=null &&
            <div>
                {images.map((chunk_image, index1) => (
                    <Row xs="8" key={index1} style={{"padding":"0% 0%", "margin":"0% 5%"}}>
                    {chunk_image.map((image, index )=> {
                        return (
                        <Col key={index} style={{"margin":"1% 1%", "padding":"0.0%"}}>
                        <ImageCard src={`data:image/jpeg;base64,${image}`}></ImageCard>
                        </Col>
                    )})}
                    </Row>
                ))}
            </div>}
            {text!=null && images!=null &&
            <div>
                {images.map((chunk_image, index1) => (
                    <Row xs="8" key={index1} style={{"padding":"0% 0%", "margin":"0% 5%"}}>
                    {chunk_image.map((image, index )=> {
                        return (
                        <Col style={{"margin":"1% 1%", "padding":"0.0%"}}>
                        <ImageCard src={`data:image/jpeg;base64,${image}`}></ImageCard>
                        </Col>
                    )})}
                    </Row>
                ))}
            </div>}
        </div>
    );
}


export default ImageList