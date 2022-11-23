import { Button, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React, {useContext, useRef, useState} from 'react';
import { Datacontext } from '../context/DataProvider';
import { Input } from '@mui/material';


const prods_pp = 20; //productos por pagina

function ProductsGroup() {
  const quantityPageRef = useRef(12);
  const [currentIndex,setCurrentIndex] = useState(0);
  const [endPosition, setEndPosition] = useState(12);
  const value = useContext(Datacontext);
  const[productos] = value.productos;
  //console.log(productos);

  const handlePagination = (index) => {

    setEndPosition( (index + 1 ) * quantityPageRef.current);
    setCurrentIndex( (index + 1 ) * quantityPageRef.current - quantityPageRef.current );

  }
    return (
      <Container fluid style={{ textAlign:'center'}}>
        <Row xs={1} sm={2} md={3} lg={4} className="g-2">
        {productos.slice(currentIndex,endPosition).map((product)=>(
            <Col style={{ padding:15 }}>
              <Card class="card" style={{ objectFit:'contain', Height:350, textAlign:"center" }} >
                <><Card.Img style={{ objectFit:'contain', height:250 }} variant="top" class="cards-img" src={product.images[0]} /><Card.Body>
                  <Card.Title style={{ height:50 }} >{product.title}</Card.Title>
                  <Card.Text style={{ height:150 }}>
                    {product.description}
                  </Card.Text>
                  <Button variant="primary"> Add to cart!</Button>{' '}
                </Card.Body></>
              </Card>
            </Col>
            ))}
        </Row>
        {Array(Math.ceil(productos.length / quantityPageRef.current)).fill(null).map((_,index) =>(
          
            <Button  variant="outline-primary" style={{ margin:2, marginLeft:10, marginBottom:15}} className={`${currentIndex === 0 && index === currentIndex ? 'active' : index === currentIndex/quantityPageRef.current && "active"  }`} onClick={()=>handlePagination(index)}>{index + 1}</Button>
          
        ))}
        </Container>
         


         


      );
}

export default ProductsGroup;