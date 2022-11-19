import { Button, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React, {useContext} from 'react';
import { Datacontext } from '../context/DataProvider';

function MiscelaneusGroup() {
  const value = useContext(Datacontext);
  //const[productos] = value.productos;
  const[Miscelanues] = value.Miscelaneus;
    return (
      <Container fluid>
        <Row xs={1} sm={2} md={3} lg={4} className="g-2">
        {Miscelanues.map((misce)=>(
            <Col style={{ padding:15 }}>
              <Card class="card" style={{ objectFit:'contain', Height:350 }} >
                <><Card.Img style={{ objectFit:'contain', height:250 }} variant="top" class="cards-img" src={misce.images[0]} /><Card.Body>
                  <Card.Title style={{ height:50 }} >{misce.title}</Card.Title>
                  <Card.Text style={{ height:150 }}>
                    {misce.description}
                  </Card.Text>
                  <Button variant="primary">Buy Now!</Button>{' '}
                </Card.Body></>
              </Card>
            </Col>
            ))}
        </Row>
        </Container>
      );
}

export default MiscelaneusGroup;