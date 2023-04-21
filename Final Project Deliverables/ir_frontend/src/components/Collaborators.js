import NavBar from './NavBar';
import { Card, CardImg, CardBody, CardText, CardTitle, CardSubtitle, Row, Col } from 'reactstrap';


function Collaborators() {

  return (
    <div>
        <div>
        <NavBar></NavBar>
        </div>
        <h1 style={{textAlign:'center', margin:"2%"}}>Collaborators</h1>
        <div style={{margin:"0% 0%"}}>
        <Row xs="4" style={{margin:"7% 12%"}}>
            <Col>
            <Card style={{margin:"0% 16%", border:"None"}}>
                <CardImg src="srijan7.png" style={{borderRadius:"49%", border:"1px solid"}} onContextMenu={(e)=>e.preventDefault()}/>
                    <CardBody>
                        <CardTitle style={{textAlign:'center'}}><b>Srijan Garg</b></CardTitle>
                        <CardSubtitle style={{textAlign:'center'}}><a href="mailto:srijan19448@iiitd.ac.in">srijan19448@iiitd.ac.in</a></CardSubtitle>
                        <CardText style={{textAlign:'center'}}>Frontend, Backend</CardText>
                    </CardBody>
            </Card>
            </Col>
            <Col>
            <Card style={{margin:"0% 16%", border:"None"}}>
                <CardImg src="siraj.jpg" style={{borderRadius:"49%", border:"1px solid"}} onContextMenu={(e)=>e.preventDefault()}/>
                    <CardBody>
                        <CardTitle style={{textAlign:'center'}}><b>Siraj Ansari</b></CardTitle>
                        <CardSubtitle style={{textAlign:'center'}}><a href="mailto:siraj19176@iiitd.ac.in">siraj19176@iiitd.ac.in</a></CardSubtitle>
                        <CardText style={{textAlign:'center'}}>Content Based Image Retrieval</CardText>
                    </CardBody>
            </Card>
            </Col>
            <Col>
            <Card style={{margin:"0% 16%", border:"None"}}>
                <CardImg src="parth.jpg" style={{borderRadius:"49%", border:"1px solid"}} onContextMenu={(e)=>e.preventDefault()}/>
                    <CardBody>
                        <CardTitle style={{textAlign:'center'}}><b>Parth Chhabra</b></CardTitle>
                        <CardSubtitle style={{textAlign:'center'}}><a href="mailto:parth19069@iiitd.ac.in">parth19069@iiitd.ac.in</a></CardSubtitle>
                        <CardText style={{textAlign:'center'}}>Content Based Image Retrieval</CardText>
                    </CardBody>
            </Card>
            </Col>
            <Col>
            <Card style={{margin:"0% 16%", border:"None"}}>
                <CardImg src="moksh.jpg" style={{borderRadius:"49%", border:"1px solid"}} onContextMenu={(e)=>e.preventDefault()}/>
                    <CardBody>
                        <CardTitle style={{textAlign:'center',}}><b>Moksh Aggarwal</b></CardTitle>
                        <CardSubtitle style={{textAlign:'center'}}><a href="mailto:moksh19177@iiitd.ac.in">moksh19177@iiitd.ac.in</a></CardSubtitle>
                        <CardText style={{textAlign:'center'}}>Context Based Image Retrieval</CardText>
                    </CardBody>
            </Card>
            </Col>
            
        </Row>
        </div>
    </div>
  );
}

export default Collaborators;
