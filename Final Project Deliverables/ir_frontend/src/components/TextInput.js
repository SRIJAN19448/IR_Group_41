import React from 'react'
import { Input ,Form} from 'reactstrap';
import {useState} from 'react'

function TextInput({changeText, changeImage}){

    
    const [text, setText]=useState(null)
  
    const handleChange = (e) =>{
        setText(e.target.value)
        console.log("Query text",e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        changeText(text)
        changeImage(null)
        
    }

    return (
        <Form style={{"width":"100%"}} onSubmit={handleSubmit}>
        <Input style={{"borderRadius":"20px", "height":"50px", "width":"95%", "margin":"0% 1% 0% 0%"}} type="text" placeholder="Search Images ..." onChange={handleChange}></Input>
        </Form>
    );
  }

export default TextInput;