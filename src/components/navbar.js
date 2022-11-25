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
import { useEffect } from "react";
import { Datacontext } from '../context/DataProvider';
import Alert from 'react-bootstrap/Alert';
import Image from 'react-bootstrap/Image'
import Badge from 'react-bootstrap/Badge';
import profile from "./pages/profile";
function NavScrollExample() {
  const value = useContext(Datacontext);
  const[categories] = value.categories;
  const logout = ()=>{
    localStorage.removeItem("SESSION");
    window.location.href="/";
  }
    const profile = JSON.parse(localStorage.getItem('SESSION'));
    
  if(localStorage.getItem("SESSION") && profile["role"] !== "Admin"){
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
            </Nav>
            <NavLink to='/profile' style={{ margin: 15 }}><Image style={{ height:"50px", weight:"50px", }} rounded="true" src={profile["image"]}></Image></NavLink>
            <NavLink to='/cart' style={{ margin: 15 }}>
                <box-icon  type='solid' name='cart'></box-icon>
                <Badge bg="light" text="dark">
                
                </Badge>
            </NavLink>
            <NavLink onClick={logout}  style={{ margin: 15 }}><box-icon  name='log-out' animation='tada-hover'></box-icon></NavLink>
          </Navbar.Collapse>
        </Container>
      </Navbar>  
    );
    
  }else if(localStorage.getItem("SESSION") && profile["role"] === "Admin"){
    console.log("abuba");
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

            <NavLink style={{ color:"gray" , padding:15, textDecoration:"none"}} class="NavButtons" to="/dashboard" end>Dashboard</NavLink>
          </Nav>
          <NavLink to='/profile' style={{ margin: 15 }}><Image style={{ height:"50px", weight:"50px", }} rounded="true" src={profile["image"]}></Image></NavLink>
          <NavLink to='/cart' style={{ margin: 15 }}>
              <box-icon  type='solid' name='cart'></box-icon>
              <Badge bg="light" text="dark">
              0
              </Badge>
          </NavLink>
          <NavLink onClick={logout}  style={{ margin: 15 }}><box-icon  name='log-out' animation='tada-hover'></box-icon></NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>  
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
            </Nav>
            <NavLink to='/cart' style={{ margin: 15 }}>
              <box-icon  type='solid' name='cart'></box-icon>
              <Badge bg="light" text="dark">
              
              </Badge>
            </NavLink>
            <NavLink to='/login' style={{ margin: 15 }}><box-icon  name='log-in' animation='tada-hover'></box-icon></NavLink>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
 
}

export default NavScrollExample;
