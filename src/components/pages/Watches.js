
import Container from 'react-bootstrap/Container';
import WatchesGroup from '../watches';
import { Dataprovider } from '../../context/DataProvider';


function watches() {
   return (
      <Dataprovider>
         <Container fluid>
            <div className="App">
               <WatchesGroup />
            </div>
         </Container>
      </Dataprovider>
   );
}

export default watches;