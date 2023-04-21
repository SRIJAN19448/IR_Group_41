// import logo from './logo.svg';
// import './App.css';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import { useState } from 'react';

// const ImageContext= createContext(null)



function Homepage() {
  const [image, setImage] =useState(null)
  const [text, setText]=useState(null)
  const changeImage = (image)=>{
    setImage(image)
    console.log("image",image)
  }
  const changeText=(text)=>{
    setText(text)
    console.log("text", text)
  }

  return (
    <div>
      <NavBar></NavBar>
      <SearchBar setImage={changeImage} setText={changeText}></SearchBar>
      <ImageList image= {image} text={text}></ImageList>
    </div>
  );
}

export default Homepage;
