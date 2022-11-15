import { left } from "@popperjs/core";
import { Col, Container, Image, Row } from "react-bootstrap";

function Contentblock() {
    return (
        <Container style={{ height:'70vh', backgroundColor: 'black'}} fluid>
            <Row fluid xs={1} sm={1} md={2} lg={2} style={{ height:'100%' }}  >
                <Col md={6} style={{ textAlign:'center', margin:'auto' }} >
                    <Image style={{ objectFit:'contain', width:'80%' }} src="https://www.pngall.com/wp-content/uploads/13/Nothing-Phone-1-PNG-Free-Image.png"></Image>
                </Col>
                <Col md={6} style={{ textAlign:'center', margin:'auto'}} >
                    <h1 style={{ color:'white', font:"revert", fontSize:"200%",  marginLeft:55, marginRight:55 }}>¡Aprovecha las nuevas ofertas!</h1>
                    <br></br>
                    <h2 style={{ color:'white', font:"revert", fontSize:"100%", margin:15 }}>¡Llevate cualquier articulo y nosotros te pagamos el primer envio!</h2>
                </Col>
            </Row>
        </Container>

    );


}

export default Contentblock;