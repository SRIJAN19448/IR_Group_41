import React, { useState } from 'react'
import ImageCard from '../components/ImageCard';
import {Row, Col} from 'reactstrap'
import axios from 'axios'
import { ImageContext } from './ImageModal';
import { useEffect } from 'react';

 



function ImageList({image}){

    const getImages=async(image)=>{
        const params={
            path: "C:\\Users\\srija\\Desktop\\"+image
        }
        let images
        if(image==null){
            await axios.get('http://127.0.0.1:5000/shuffle').then(response => {
                console.log('Data received:', response.data);
                images=response.data.images
                // setImages(response.data.images)
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
            console.log(chunk_images)
            setImages(chunk_images)
        }
        else{
            const params={
                path:image
            }
            await axios.get('http://127.0.0.1:5000/uploadSearch', {params}).then(response => {
                console.log('Data received:', response.data);
                images=response.data.images
                // setImages(response.data.images)
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
            console.log(chunk_images)
            setImages(chunk_images)
        }
    
    }

    const [images, setImages]=useState([])
    // const [chunkimages, setChunkimages]=useState([])

    // this.getImages()
    // console.log("hi",this.state.images)
    // var image=this.state.image
    
    

    useEffect(()=>{
        getImages(image)
    },[image])

    
    return(
        <div>
            {image!=null &&
            <div>
                <ImageCard style={{"width":"20%", "margin":"0% 6%"}} src={"GPR_dataset\\"+image}></ImageCard>
            </div>}
            <div>
                {images.map((chunk_image, index1) => (
                    <Row xs="8" key={index1} style={{"padding":"0% 0%", "margin":"0% 5%"}}>
                    {chunk_image.map((image, index )=> {
                        // console.log("..\\GPR_dataset\\"+image)
                        return (
                        <Col style={{"margin":"1% 1%", "padding":"0.0%"}}>
                        <ImageCard src={"GPR_dataset\\"+image}></ImageCard>
                        </Col>
                    )})}
                    </Row>
                ))}
            </div>
        </div>
    );
}


export default ImageList