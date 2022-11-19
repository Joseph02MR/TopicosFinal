
import Container from 'react-bootstrap/Container';
import ElectronicsGroup from '../electronics';
import { Dataprovider } from '../../context/DataProvider';


function electronics() {
   return (
      <Dataprovider>
         <Container fluid>
            <div className="App">
               <ElectronicsGroup />
            </div>
         </Container>
      </Dataprovider>
   );
}

export default electronics;