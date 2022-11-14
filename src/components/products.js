import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React, {useContext} from 'react';
import { Datacontext } from '../context/DataProvider';

function ProductsGroup() {
  
  const value = useContext(Datacontext);
  const [productos] = value.productos;
  console.log(productos);
  return (
    
    <Row xs={1} md={3} className="g-2">
      {productos.map((product) => (
        <Col>
          <Card key={product.id}>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default ProductsGroup;