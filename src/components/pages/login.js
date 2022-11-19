import logo from "../../assets/logo_store.png";
import React, { Component } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBCheckbox,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Col, Container, Row } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
class login extends Component {
  constructor(props){
    super(props);
    localStorage.clear();
    this.state={
        email:"",
        password:"",
    };
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  handleSubmit(e){
    e.preventDefault();
    const{email,password}=this.state;
    console.log(email,password);
    fetch('https://joseph02mr-special-palm-tree-j9qq9gjrw7w3j5x-8000.preview.app.github.dev/api/v1/login',{
        method:"POST",
        crossDomain:true,
        headers:{
            "Content-Type":"application/json",
            Accept:"application/json",
            "Access-Control-Allow-Origin":"*",
        },
        body:JSON.stringify({
            email,
            password,
        })
    }).then((res)=>res.json())
    .then((data)=>{
        localStorage.setItem("SESSION",JSON.stringify(data));
        console.log("Login exitoso");
        window.location.href="/";
    })

    console.log(localStorage.getItem("SESSION"));
  }
  
  render() {
    if(localStorage.getItem("ERRROR")){
      <Modal
      size="sm"
      show="true"
      aria-labelledby="example-modal-sizes-title-sm"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-sm">
          ERROR
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>Please check the email or password!</Modal.Body>
    </Modal>
    localStorage.clear();
    }
    return (
      <Container fluid style={{ margin: "auto" }}>
        <Row style={{ alignContent: "center", margin: 30 }}>
          <Col md={6} style={{ textAlign: "center", margin: "auto" }}>
            <div>
              <div className="text-center">
                <img src={logo} style={{ width: "185px" }} alt="logo" />
                <h4 className="mt-1 mb-5 pb-1">We are Le José Team</h4>
              </div>              
              <p>Please login to your account</p>
              <form onSubmit={this.handleSubmit}>
                <MDBInput
                  wrapperClass="mb-4"
                  label="Email address"
                  id="form1"
                  type="email"
                  onChange={e=>this.setState({email:e.target.value})}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  id="form2"
                  type="password"
                  onChange={e=>this.setState({password:e.target.value})}
                />
                <div className="text-center pt-1 mb-5 pb-1">
                  <MDBBtn
                    type="submit"
                    className="mb-4 w-100 gradient-custom-2"
                  >
                    Sign in
                  </MDBBtn>
                  <a className="text-muted" href="#!">
                    Forgot password?
                  </a>
                </div>
                <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                  <p className="mb-0">Don't have an account?</p>
                  <MDBBtn outline className="mx-2" color="info">
                    Register now!
                  </MDBBtn>
                </div>
              </form>
            </div>
          </Col>
          <MDBCol md={6} style={{ height: "80vh" }}>
            <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">
              <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                <h4 class="mb-4" style={{ textAlign: "center" }}>
                  We are more than just a company
                </h4>
                <p class="small mb-0" style={{ textAlign: "center" }}>
                  JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE,
                  JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE,
                  JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE,
                  JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE,
                  JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE,
                  JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE,
                  JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE,
                  JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE,
                  JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE,
                  JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE,
                  JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE,
                  JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE,
                  JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE,
                  JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE,
                  JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE,
                  JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE,
                  JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE,
                  JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE,
                  JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE,
                  JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE
                </p>
              </div>
            </div>
          </MDBCol>
        </Row>
      </Container>
    );
  }
}
export default login;
