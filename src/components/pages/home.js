import Container from 'react-bootstrap/Container';
import UncontrolledExample from '../carrousel';
import ProductsGroup from '../products';
import ContentBlock from '../contentblock';


function home(){
    return(
        <Container fluid>
            <UncontrolledExample/>
            <ContentBlock/>
            <ProductsGroup/>
        </Container>
    );
}
export default home;