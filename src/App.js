import './App.css';
import Container from 'react-bootstrap/Container';
import NavScrollExample from './components/navbar';
import DarkVariantExample from './components/carrousel';
import ProductsGroup from './components/products';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavScrollExample/>
        <Switch>
          <Route path='/' exact component={ProductsGroup}/>
        </Switch>
      </Router>
      <DarkVariantExample/>
      <ProductsGroup/>
    </div>
  );
}

export default App;