import { Col, Container, Image, Row } from "react-bootstrap";

function Contentblock_prods() {
    return (
        <Container style={{ height:'70vh', backgroundColor: 'black'}} fluid>
            <Row fluid xs={1} sm={1} md={2} lg={2} style={{ height:'100%' }}  >
                <Col md={6} style={{ textAlign:'center', margin:'auto' }} >
                    <Image style={{ objectFit:'contain', width:'80%' }} src="https://qiubo.mx/mi-portal/wp-content/uploads/2018/02/visa.png"></Image>
                </Col>
                <Col md={6} style={{ textAlign:'center', margin:'auto'}} >
                    <h1 style={{ color:'white', font:"revert", fontSize:"200%",  marginLeft:55, marginRight:55 }}>¡Let's buy something!</h1>
                    <br></br>
                    <h2 style={{ color:'white', font:"revert", fontSize:"100%", margin:15 }}>¡Now pay with credit cards is available!</h2>
                </Col>
            </Row>
        </Container>

    );


}

export default Contentblock_prods;