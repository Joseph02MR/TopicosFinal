import logo from "../../assets/logo_store.png";
import React, { Component } from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import {
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
    MDBBreadcrumb,
    MDBBreadcrumbItem
} from "mdb-react-ui-kit";
import { NavLink } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

const profilee = JSON.parse(localStorage.getItem('SESSION'));
const MySwal = withReactContent(Swal);

let changePwSwal = {
  title: 'Change any info?',
  focusConfirm: false,
  html: 
    <><form><input required class="swal2-input" id="nombre" placeholder="Enter your new name..." value={profilee["name"]} /><br />
    <input required class="swal2-input" id="apellido" placeholder="Enter your new last name..." value={profilee["lastname"]} /><br />
    <input required class="swal2-input" id="telefono" placeholder="Confirm your new phone..." value={profilee["phone"]} />
    <input required class="swal2-input" id="pais" placeholder="Confirm your new country..." value={profilee["country"]} />
    <input required class="swal2-input" id="ciudad" placeholder="Confirm your new city..." value={profilee["city"]} />
    <input required class="swal2-input" id="cpostal" placeholder="Confirm your new postcode..." value={profilee["zip"]} />
    <input required class="swal2-input" id="calle" placeholder="Confirm your new street..." value={profilee["street"]} /></form></>
  ,
  type: 'warning',
  showCancelButton: true,
  cancelButtonColor: 'grey',
  confirmButtonText: 'Update!',
  allowOutsideClick: false,
  preConfirm: () => ({
    Name: document.getElementById('nombre').value,
    LastName: document.getElementById('apellido').value,
    Phone: document.getElementById('telefono').value,
    Country: document.getElementById('pais').value,
    City: document.getElementById('ciudad').value,
    Street: document.getElementById('calle').value,
    Zip: document.getElementById('cpostal').value
  })
};

 function profile ()  {
    
const handleResetPassword = () => { 
  
    const swalval =  MySwal.fire(changePwSwal);
    try {
      await fetch("https://jorgealvarez-itc-friendly-space-umbrella-rx5xvq9vp95hw5pj-8000.preview.app.github.dev/api/v1/", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          localStorage.setItem("SESSION", JSON.stringify(data));
          
        });
    } catch (error) {
      MySwal.fire({
        title: <strong>Oops...</strong>,
        html: <i>Please check the email or password!</i>,
        icon: "error",
      });
    }


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
            </div>
          </Col>


          <section style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol>
            <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
              <MDBBreadcrumbItem active>User Profile</MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src={profilee["image"]}
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid />
                <br>
                </br>
                <br>
                </br>
                <div className="d-flex justify-content-center mb-2">
                  <MDBBtn onClick={handleResetPassword}>Editar</MDBBtn>
                  <MDBBtn outline className="ms-1">Eliminar</MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{profilee["name"]}  {profilee["lastname"]}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{profilee["email"]}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Phone</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{profilee["phone"]}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Country</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{profilee["country"]}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>State</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{profilee["state"]}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>City</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{profilee["city"]}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Street</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{profilee["street"]}, {profilee["zip"]}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Gender</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{profilee["gender"]}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Username</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{profilee["username"]}</MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>

            
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
          
        </Row>
      </Container>
    );
  }

export default profile;
