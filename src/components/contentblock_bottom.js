import { Button, Col, Container, Image, Row } from "react-bootstrap";

function Contentblock_bottom() {
    return (
        <Container style={{filter: 'grayscale(100%)', height:'70vh',backgroundSize:'cover' ,backgroundImage:"url('https://www.bbva.mx/content/dam/public-web/mexico/images/edufin-/persona/marquee-edufin/2021/febrero/Como-se-hacen-las-compras-por-internet-en-el-2021.jpg.img.3200.1667229500468.jpg')"}} fluid>
            <Row fluid xs={1} sm={1} md={2} lg={2} style={{ height:'100%' }}  >
                <Col md={12} style={{ textAlign:'center', margin:'auto'}} >
                    <h1 style={{ color:'white', font:"revert", fontSize:"200%",  marginLeft:55, marginRight:55, zIndex:3 }}>Do you have any question?</h1>
                    <br></br>
                    <h2 style={{ color:'white', font:"revert", fontSize:"100%", margin:15 }}>¡Contact us, let's get in touch!</h2>
                    <br></br>
                    <Button size="lg" variant="outline-warning">Come on and telas</Button>
                </Col>
            </Row>
        </Container>

    );


}

export default Contentblock_bottom;