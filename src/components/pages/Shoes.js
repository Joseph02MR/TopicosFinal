
import Container from 'react-bootstrap/Container';
import ShoesGroup from '../shoes';
import { Dataprovider } from '../../context/DataProvider';


function shoes() {
   return (
      <Dataprovider>
         <Container fluid>
            <div className="App">
               <ShoesGroup />
            </div>
         </Container>
      </Dataprovider>
   );
}

export default shoes;