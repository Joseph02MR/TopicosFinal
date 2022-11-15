
import Container from 'react-bootstrap/Container';
import ProductsGroup from '../products';
import { Dataprovider } from '../../context/DataProvider';


function products() {
   return (
      <Dataprovider>
         <Container fluid>
            <div className="App">
               <ProductsGroup />
            </div>
         </Container>
      </Dataprovider>
   );
}

export default products;