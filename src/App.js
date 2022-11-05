import './App.css';
import Container from 'react-bootstrap/Container';
import NavScrollExample from './components/navbar';
import DarkVariantExample from './components/carrousel';
import ProductsGroup from './components/products';
function App() {
  return (
    <Container fluid>
    <div className="App">
      <NavScrollExample/>
      <DarkVariantExample/>
      <ProductsGroup/>
    </div>
    </Container>
  );
}

export default App;