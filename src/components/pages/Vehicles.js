
import Container from 'react-bootstrap/Container';
import VehiclesGroup from '../vehicles';
import { Dataprovider } from '../../context/DataProvider';


function vehicles() {
   return (
      <Dataprovider>
         <Container fluid>
            <div className="App">
               <VehiclesGroup />
            </div>
         </Container>
      </Dataprovider>
   );
}

export default vehicles;