import { Button, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React, {useContext} from 'react';
import { Datacontext } from '../context/DataProvider';

function ProductsGroup() {
    return (
      <Container fluid>
        <Row xs={1} sm={2} md={3} lg={4} className="g-2">
          {Array.from({ length: 24 }).map((_, idx) => (
            <Col style={{ padding:15 }}>
              <Card class="card" >
                <Card.Img variant="top" class="cards-img" src="https://www.att.com.mx/content/dam/ATT/devices/apple/iphone-14-pro-max/ng3_iPhone_14_Pro_Max_Space_Black_PDP_Image_Position-2_MXLA.png" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <Button variant="primary">Buy Now!</Button>{' '}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        </Container>
      );
}

export default ProductsGroup;