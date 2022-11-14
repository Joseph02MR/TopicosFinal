import Container from 'react-bootstrap/Container';
import UncontrolledExample from '../carrousel';
import ProductsGroup from '../products';
import Footer from '../footer';

function home(){
    return(
        <Container fluid>
            <UncontrolledExample/>
            <ProductsGroup/>
            <Footer/>
        </Container>
    );
}
export default home;