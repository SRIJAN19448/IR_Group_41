import NavBar from './NavBar';
import { Card, CardBody, CardText } from 'reactstrap';

function Description() {

  return (
    <div>
    <div>
      <NavBar></NavBar>
    </div>
    <h1 style={{textAlign:'center', margin:"2%"}}>OASIS: An Image Retrieval System</h1>
    <div style={{margin:"0% 0%"}}>
        <Card style={{margin:"0% 16%", border:"None"}}>
                <CardBody>
                    <CardText style={{fontSize:"24px"}}>The portal that we have created implements content as well as context based image retrieval. Content based image retrieval means retrieving images similar to a given query image where as context based image retrieval means retrieving images that can be described by the text provided in the query.
                    </CardText>
                </CardBody>
        </Card>
        <Card style={{margin:"0% 16%", border:"None"}}>
                <CardBody>
                    <CardText style={{fontSize:"24px"}}>For content based image retrieval, we use a combination of multiple DL as well as non-DL based methodologies. For context-based image retrieval, we use CLIP embeddings to embed text and images in a similar latent space.
                    </CardText>
                </CardBody>
        </Card>
        <Card style={{margin:"0% 16%", border:"None"}}>
                <CardBody>
                    <CardText style={{fontSize:"24px"}}>To use this portal, there are two options given on homepage :<br/> A searchbar which allows users to enter text to get similiar images based on context. <br/> An upload button which allows users to upload an image to get similar images based on content.
                    </CardText>
                </CardBody>
        </Card>
        
    </div>
    </div>
  );
}

export default Description;
