
import Container from 'react-bootstrap/Container';
import AccesoriossGroup from '../accesories';
import { Dataprovider } from '../../context/DataProvider';


function accesories() {
   return (
      <Dataprovider>
         <Container fluid>
            <div className="App">
               <AccesoriossGroup />
            </div>
         </Container>
      </Dataprovider>
   );
}

export default accesories;