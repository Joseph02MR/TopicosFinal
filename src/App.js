import './App.css';
import Home from './components/pages/home';
import Products from './components/pages/products';
import Login from './components/pages/login';
import NavScrollExample from './components/navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {  
  return (
    <Router>
      <NavScrollExample/>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/products' exact element={<Products/>}/>
        <Route path='/login' exact element={<Login/>}/>
      </Routes>
    </Router>
  );
  
}

export default App;