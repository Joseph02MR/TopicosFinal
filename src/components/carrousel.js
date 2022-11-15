import { Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <Row >
    <Carousel >
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.claroshop.com/c/iphone-14/img/Mob/IphoneMob.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.claroshop.com/c/iphone-14/img/Mob/IphoneMob.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.claroshop.com/c/iphone-14/img/Mob/IphoneMob.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Row>
  );
}

export default UncontrolledExample;