import "./App.css";
import Home from "./components/pages/home";
import Products from "./components/pages/products";
import Accesories from "./components/pages/Accessories";
import Clothing from "./components/pages/Clothing";
import Electronics from "./components/pages/Electronics";
import Miscelaneus from "./components/pages/Miscelaneus";
import Skincare from "./components/pages/Skincare";
import Groceries from "./components/pages/Groceries";
import Shoes from "./components/pages/Shoes";
import Watches from "./components/pages/Watches";
import Vehicles from "./components/pages/Vehicles";
import Login from "./components/pages/login";
import NavScrollExample from "./components/navbar";
import Footer from "./components/footer";
import Cart from "./components/pages/cart";
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
          <Route path="/products/Accessories" exact element={<Accesories />} />
          <Route path="/products/Clothing" exact element={<Clothing />} />
          <Route path="/products/Electronics" exact element={<Electronics />} />
          <Route path="/products/Miscelaneus" exact element={<Miscelaneus />} />
          <Route path="/products/Skincare" exact element={<Skincare />} />
          <Route path="/products/Groceries" exact element={<Groceries />} />
          <Route path="/products/Shoes" exact element={<Shoes />} />
          <Route path="/products/Watches" exact element={<Watches />} />
          <Route path="/products/Vehicles" exact element={<Vehicles />} />
        </Routes>
        <Footer />
      </Router>
    </Dataprovider>
  );
}

export default App;
