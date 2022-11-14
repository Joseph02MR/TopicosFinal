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
    <Navbar bg="light" expand="md">
      <Container fluid>
        <Navbar.Brand href="#"><img style={{ height:"70px" }} alt="logo-LeJose" src={logo}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="" />
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
          <Nav.Link style={{ margin: 15 }} href="cart"><box-icon  type='solid' name='cart'></box-icon></Nav.Link>
          <Nav.Link style={{ margin: 15 }} href="login.js"><box-icon  name='log-in' animation='tada-hover'></box-icon></Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
