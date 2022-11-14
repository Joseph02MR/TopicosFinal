import './App.css';
import Container from 'react-bootstrap/Container';
import NavScrollExample from './components/navbar';
import UncontrolledExample from './components/carrousel';
import ProductsGroup from './components/products';
import Footer from './components/footer';
function App() {
  

  
  return (
    <Container fluid>
      <NavScrollExample/>
      <UncontrolledExample/>
      <ProductsGroup/>
      <Footer/>
    </Container>
  );
  
}

export default App;