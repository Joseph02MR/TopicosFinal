
import Container from 'react-bootstrap/Container';
import ProductsGroup from '../products';
import { Dataprovider } from '../../context/DataProvider';
import Contentblock_prods from '../contentblock_prods';


function products() {
   return (
      <Dataprovider>
         <Container fluid>
            <Contentblock_prods />
            <ProductsGroup />
         </Container>
      </Dataprovider>
   );
}

export default products;