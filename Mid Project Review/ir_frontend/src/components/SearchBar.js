import React from 'react'
import {Form, FormGroup, Input} from 'reactstrap'
import ImageModal from './ImageModal';

function SearchBar({setImage}){
    return(
        <div style={{"padding":"2% 10% 2% 18%", "display":"flex"}}>
            {/* <Form>
                <FormGroup> */}
                    <Input style={{"borderRadius":"20px", "height":"50px", "width":"80%", "margin":"0% 1% 0% 0%"}} type="text" placeholder="Search Images ..."></Input>
                {/* </FormGroup>
                <FormGroup> */}
                    <ImageModal changeImage= {setImage} buttonLabel="Upload"></ImageModal>
                {/* </FormGroup>
            </Form> */}
        
        </div>
    );
}

export default SearchBar