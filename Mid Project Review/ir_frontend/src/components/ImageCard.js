import React from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
  
function ImageCard({src, width, style}){

    return(
        <Card style={style}>
            <CardImg  top width={width} src={src} alt="Card image cap" />
            {/* <CardBody> */}
                {/* <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText> */}
                {/* <Button>Button</Button> */}
            {/* </CardBody> */}
        </Card>
    );
}

export default ImageCard