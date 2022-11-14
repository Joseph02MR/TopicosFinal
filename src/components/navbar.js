import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/logo_store.png";
import Link from "react-router-dom";
function NavScrollExample() {
  return (
    <Router>
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Link to='/'><img style={{ height:"4rem" }} alt="logo-LeJose" src={logo}/></Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link to='/'>Home</Link>
            <Link to='/products'>Products</Link>
            <NavDropdown title="Categories" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Electronics</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Link to="/cart"><box-icon type='solid' name='cart'></box-icon>Carrito</Link>
          <Link to="/login"><box-icon name='log-in' animation='tada-hover'></box-icon>Login</Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Router>
  );
}

export default NavScrollExample;
