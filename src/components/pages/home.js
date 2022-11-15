import Container from 'react-bootstrap/Container';
import UncontrolledExample from '../carrousel';
import ProductsGroup from '../products';
function home(){
    return(
        <Container fluid>
            <UncontrolledExample/>
            <ProductsGroup/>
        </Container>
    );
}
export default home;