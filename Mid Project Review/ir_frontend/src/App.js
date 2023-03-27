import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import { createContext, useState } from 'react';

// const ImageContext= createContext(null)



function App() {
  const [image, setImage] =useState(null)
  const changeImage = (image)=>{
    setImage(image)
    console.log("image",image)
  }

  const images = ["https://cdn-icons-png.flaticon.com/512/919/919851.png", "https://cdn-icons-png.flaticon.com/512/919/919851.png", "https://cdn-icons-png.flaticon.com/512/919/919851.png", "https://cdn-icons-png.flaticon.com/512/919/919851.png", "https://cdn-icons-png.flaticon.com/512/919/919851.png", "https://cdn-icons-png.flaticon.com/512/919/919851.png", "https://cdn-icons-png.flaticon.com/512/919/919851.png", "https://cdn-icons-png.flaticon.com/512/919/919851.png", "https://cdn-icons-png.flaticon.com/512/919/919851.png", "https://cdn-icons-png.flaticon.com/512/919/919851.png", "https://cdn-icons-png.flaticon.com/512/919/919851.png", "https://cdn-icons-png.flaticon.com/512/919/919851.png", "https://cdn-icons-png.flaticon.com/512/919/919851.png", "https://cdn-icons-png.flaticon.com/512/919/919851.png", "https://cdn-icons-png.flaticon.com/512/919/919851.png", "https://cdn-icons-png.flaticon.com/512/919/919851.png"];

  return (
    <div>
      <NavBar></NavBar>
      <SearchBar setImage={changeImage}></SearchBar>
      <ImageList image= {image} images={images}></ImageList>
    </div>
  );
}

export default App;
