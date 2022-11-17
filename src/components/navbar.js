import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/logo_store.png";
import { Link, NavLink } from "react-router-dom";
import { padding } from "@mui/system";
function NavScrollExample() {
  return (
    <Navbar sticky="top" bg="light" expand="md">
      <Container fluid>
        <Navbar.Brand href="#"><NavLink style={{ color:"gray" , padding:15, textDecoration:"none"}} to="/" end><img style={{ height:"70px" }} alt="logo-LeJose" src={logo}/></NavLink></Navbar.Brand>
        <Navbar.Toggle aria-controls=""  style={{  marginRight: 20 }}/>
        <Navbar.Collapse id="navbarScroll" style={{ textAlign:'center', paddingRight: 10 }} >
          <Nav
            
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "250px" }}
            navbarScroll
          >
            <NavLink style={{ color:"gray" , padding:15, textDecoration:"none"}} to="/" end>Home</NavLink> 
            <NavLink style={{ color:"gray" , padding:15, textDecoration:"none"}} class="NavButtons" to="/products" end>Products</NavLink> 
            <NavDropdown style={{ color:"gray" , padding:5, textDecoration:"none"}} title="Categories" id="navbarScrollingDropdown">
              <NavDropdown.Item style={{ textAlign:"center" }} href="#action3">Electronics</NavDropdown.Item>
              <NavDropdown.Item style={{ textAlign:"center" }} href="#action4">Another action</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <NavLink to='/cart' style={{ margin: 15 }}><box-icon  type='solid' name='cart'></box-icon></NavLink>
          <NavLink to='/login' style={{ margin: 15 }}><box-icon  name='log-in' animation='tada-hover'></box-icon></NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
