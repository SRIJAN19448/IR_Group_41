import React from 'react'
import UploadModal from './UploadModal';
import TextInput from './TextInput';

function SearchBar({setImage, setText}){
    return(
        <div style={{"padding":"2% 20% 2% 20%", "display":"flex"}}>
            <TextInput changeText={setText} changeImage={setImage}></TextInput>
            <UploadModal changeImage= {setImage} changeText={setText}></UploadModal>
        </div>
    );
}

export default SearchBar