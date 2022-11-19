
import Container from 'react-bootstrap/Container';
import ClothingGroup from '../clothing';
import { Dataprovider } from '../../context/DataProvider';


function clothing() {
   return (
      <Dataprovider>
         <Container fluid>
            <div className="App">
               <ClothingGroup />
            </div>
         </Container>
      </Dataprovider>
   );
}

export default clothing;