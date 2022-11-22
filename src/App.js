import "./App.css";
import Home from "./components/pages/home";
import Products from "./components/pages/products";
import Login from "./components/pages/login";
import Profile from "./components/pages/profile";
import NavScrollExample from "./components/navbar";
import Footer from "./components/footer";
import Cart from "./components/pages/cart";
import Register from './components/pages/register';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dataprovider } from "./context/DataProvider";
function App() {
  return (
    <Dataprovider>
      <Router>
        <NavScrollExample />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/products" exact element={<Products />} />
          <Route path="/login" exact element={<Login/>}/>
          <Route path="/cart" exact element={<Cart />} />
          <Route path='/register' exact element={<Register/>}/>
          <Route path='/profile' exact element={<Profile/>}/>
        </Routes>
        <Footer />
      </Router>
    </Dataprovider>
  );
}

export default App;
