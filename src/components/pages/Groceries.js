
import Container from 'react-bootstrap/Container';
import GroceriesGroup from '../groceries';
import { Dataprovider } from '../../context/DataProvider';


function groceries() {
   return (
      <Dataprovider>
         <Container fluid>
            <div className="App">
               <GroceriesGroup />
            </div>
         </Container>
      </Dataprovider>
   );
}

export default groceries;