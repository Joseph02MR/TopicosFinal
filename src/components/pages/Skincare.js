
import Container from 'react-bootstrap/Container';
import SkincareGroup from '../skincare';
import { Dataprovider } from '../../context/DataProvider';


function skincare() {
   return (
      <Dataprovider>
         <Container fluid>
            <div className="App">
               <SkincareGroup />
            </div>
         </Container>
      </Dataprovider>
   );
}

export default skincare;