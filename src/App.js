import './App.css';
import Container from 'react-bootstrap/Container';
import NavScrollExample from './components/navbar';
import DarkVariantExample from './components/carrousel';
import ProductsGroup from './components/products';
import { Dataprovider } from './context/DataProvider'
function App() {
  return (
    <Dataprovider>
    <Container fluid>
    <div className="App">
      <NavScrollExample/>
      <DarkVariantExample/>
      <ProductsGroup/>
    </div>
    </Container>
    </Dataprovider>
  );
}

export default App;