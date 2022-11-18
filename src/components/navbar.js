import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/logo_store.png";
import { Link, NavLink } from "react-router-dom";
import { padding } from "@mui/system";
import React, {useContext} from 'react';
import { useState } from "react";
import { Datacontext } from '../context/DataProvider';
import Alert from 'react-bootstrap/Alert';
import Image from 'react-bootstrap/Image'
function NavScrollExample() {
  const value = useContext(Datacontext);
  const[categories] = value.categories;
  const [show, setShow] = useState(true);
  const logout = ()=>{
    localStorage.clear();
    window.location.href="/";
  }
  if(localStorage.getItem("SESSION")){
    const profile = JSON.parse(localStorage.getItem('SESSION'));
    return (
      <Container>
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
              {categories.map((categorie)=>(
                 <NavLink to='/products/CATEG_NAME' style={{ margin: 15 }}>
                    <NavDropdown.Item style={{ textAlign:"center" }} href="#action3">{categorie.category}</NavDropdown.Item>
                  </NavLink>
              ))}
              </NavDropdown>
            </Nav>
            <NavLink to='/profile' style={{ margin: 15 }}><Image rounded="true" src={profile["image"]}></Image></NavLink>
            <NavLink to='/cart' style={{ margin: 15 }}><box-icon  type='solid' name='cart'></box-icon></NavLink>
            <Button onClick={logout} style={{ margin: 15 }}><box-icon  name='log-out' animation='tada-hover'></box-icon></Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <>
      <Alert show={show} variant="success">
        <Alert.Heading>You are now login</Alert.Heading>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close
          </Button>
        </div>
      </Alert>
    </>
      </Container>      
    );
    
  }else{
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
              {categories.map((categorie)=>(
                 <NavLink to='/products/CATEG_NAME' style={{ margin: 15 }}>
                    <NavDropdown.Item style={{ textAlign:"center" }} href="#action3">{categorie.category}</NavDropdown.Item>
                  </NavLink>
              ))}
              </NavDropdown>
            </Nav>
            <NavLink to='/cart' style={{ margin: 15 }}><box-icon  type='solid' name='cart'></box-icon></NavLink>
            <NavLink to='/login' style={{ margin: 15 }}><box-icon  name='log-in' animation='tada-hover'></box-icon></NavLink>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
 
}

export default NavScrollExample;
