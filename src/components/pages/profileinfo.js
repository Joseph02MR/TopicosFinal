import logo from "../../assets/logo_store.png";
import React, { Component } from "react";
import {
  MDBBtn,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";
import { NavLink } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import profile from "./profile";


const profilee = JSON.parse(localStorage.getItem('SESSION'));

class info extends Component {
    
  constructor(props) {
   
    super(props);
    this.state = {
        email: profilee["email"],
        name: profilee["name"],
        lastname: profilee["lastnime"],
        phone: profilee["phone"],
        country: profilee["country"],
        street: profilee["street"],
        gender: profilee["gender"],
        username: profilee["username"],
      };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async handleSubmit(e) {
    e.preventDefault();
    const { email, name, lastname,
    phone, country, city, street, gender, username } = this.state;
    const profilee = JSON.parse(localStorage.getItem('SESSION'));
    const MySwal = withReactContent(Swal);
    try {
      await fetch("https://jorgealvarez-itc-friendly-space-umbrella-rx5xvq9vp95hw5pj-8000.preview.app.github.dev/api/v1/" + profilee["oid"], {
        method: "PUT",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          name,
          lastname,
          email,
          phone,
          country,
          city,
          street,
          gender,
          username
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
    

    window.location.href = "/profile";
  }

  render() {
    const profilee = JSON.parse(localStorage.getItem('SESSION'));
    return (
        
      <Container fluid style={{ margin: "auto" }}>
        <Row style={{ alignContent: "center", margin: 30 }}>
          <Col md={6} style={{ textAlign: "center", margin: "auto" }}>
            <div>
              <div className="text-center">
                <img src={logo} style={{ width: "185px" }} alt="logo" />
                <h4 className="mt-1 mb-5 pb-1">We are Le José Team</h4>
              </div>
              <p>Wanna Change your profile?</p>
              <form onSubmit={this.handleSubmit}>
                <MDBInput
                  wrapperClass="mb-4"
                  label="Name"
                  id="form1"
                  type="text"
                  defaultValue={profilee["name"]}
                  required
                  onChange={(e) => this.setState({ name: e.target.value })}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Lastname"
                  id="form2"
                  type="text"
                  defaultValue={profilee["lastname"]}
                  required
                  onChange={(e) => this.setState({ lastname: e.target.value })}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Email"
                  id="form2"
                  type="email"
                  defaultValue={profilee["email"]}
                  required
                  onChange={(e) => this.setState({ email: e.target.value })}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Phone"
                  id="form2"
                  type="text"
                  defaultValue={profilee["phone"]}
                  required
                  onChange={(e) => this.setState({ phone: e.target.value })}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Country"
                  id="form2"
                  type="text"
                  defaultValue={profilee["country"]}
                  required
                  onChange={(e) => this.setState({ country: e.target.value })}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="City"
                  id="form2"
                  type="text"
                  defaultValue={profilee["city"]}
                  required
                  onChange={(e) => this.setState({ city: e.target.value })}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Street"
                  id="form2"
                  type="text"
                  defaultValue={profilee["street"]}
                  required
                  onChange={(e) => this.setState({ street: e.target.value })}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Gender"
                  id="form2"
                  type="text"
                  defaultValue={profilee["gender"]}
                  required
                  onChange={(e) => this.setState({ gender: e.target.value })}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Username"
                  id="form2"
                  type="text"
                  defaultValue={profilee["username"]}
                  required
                  onChange={(e) => this.setState({ username: e.target.value })}
                />
                <div className="text-center pt-1 mb-5 pb-1">
                  <MDBBtn
                    type="text"
                    className="mb-4 w-100 gradient-custom-2"
                  >
                    Update
                  </MDBBtn>
                  
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default info;
