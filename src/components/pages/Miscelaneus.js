
import Container from 'react-bootstrap/Container';
import MiscelaneusGroup from '../miscelaneus';
import { Dataprovider } from '../../context/DataProvider';


function miscelaneus() {
   return (
      <Dataprovider>
         <Container fluid>
            <div className="App">
               <MiscelaneusGroup />
            </div>
         </Container>
      </Dataprovider>
   );
}

export default miscelaneus;