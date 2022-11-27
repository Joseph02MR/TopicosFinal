import { MDBBtn, MDBCol, MDBInput } from "mdb-react-ui-kit";
import { Button, Col, Container, DropdownButton, Row } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from "react-router-dom";
import logo from "../../assets/logo_store.png";
import React, { Component } from "react";
import reCAPTCHA from "react-google-recaptcha";
import Combobox from "react-widgets/Combobox";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
class register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      lastname: "",
      email: "",
      password: "",
      gender: "",
    };
    this.registerEvent = this.registerEvent.bind(this);
  }
  async registerEvent(e) {
    e.preventDefault();
    const { email, password, name, lastname,phone} = this.state;
    console.log(email, password, name, lastname,phone);
    const image='https://robohash.org/'+name+' '+lastname+'.png';
    const username=name+'.'+lastname;
    const role="client";
    try {
      await fetch('https://joseph02mr-special-palm-tree-j9qq9gjrw7w3j5x-8000.preview.app.github.dev/api/v1/getlast',{
        method:"GET",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }).then((res) => res.json())
      .then((data) => {
        localStorage.setItem("temp_id",JSON.stringify(data));
      });
    } catch (error) {
      
    }
    const id=JSON.parse(localStorage.getItem("temp_id"))[0]["id"]+1;
    const MySwal = withReactContent(Swal);
    try {
      await fetch("https://joseph02mr-special-palm-tree-j9qq9gjrw7w3j5x-8000.preview.app.github.dev/api/v1/register/", {
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
          name,
          lastname,
          phone,
          image,
          username,
          id,
          role,
        }),
      })
        .then((res) => res.json())
        .then(async (data) => {
          await MySwal.fire({
            title: <strong>OK</strong>,
            html: <i>Resgister complete, please login in your account!</i>,
            icon: "success",
          });
          window.location.href = "/login";
        });
    } catch (error) {
      MySwal.fire({
        title: <strong>Oops...</strong>,
        html: <i>Please contact the admin</i>,
        icon: "error",
      });
    }
  }
  render() {
    return (
      <Container fluid style={{ margin: "auto" }}>
        <Row style={{ alignContent: "center", margin: 30 }}>
          <MDBCol md={6} style={{ height: "80vh" }}>
            <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">
              <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                <h4 class="mb-4" style={{ textAlign: "center" }}>
                  REGISTER
                </h4>
                <p class="small mb-0" style={{ textAlign: "center" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus venenatis pretium ornare. Nam consequat condimentum
                  diam id ullamcorper. Morbi nec nisl nulla. In hendrerit
                  ultricies rutrum. Donec venenatis vulputate sapien in egestas.
                  Fusce volutpat ac ex feugiat condimentum. Nam sit amet
                  convallis odio. Curabitur vulputate porta sagittis.
                  Pellentesque accumsan rhoncus mollis. Etiam vitae aliquam
                  libero, quis tempus urna. Sed nec nisi interdum orci maximus
                  bibendum
                </p>
              </div>
            </div>
          </MDBCol>
          <Col md={6} style={{ textAlign: "center", margin: "auto" }}>
            <div>
              <div className="text-center">
                <img src={logo} style={{ width: "185px" }} alt="logo" />
                <h4 className="mt-1 mb-5 pb-1">Sign up, be part of us!</h4>
                <p>You're almost there, lets get some data</p>
              </div>
              <br></br>
              <form onSubmit={this.registerEvent}>
                <MDBInput
                  wrapperClass="mb-3"
                  label="Your name"
                  placeholder="Insert your name"
                  id="reg_name"
                  type=""
                  onChange={(e) => this.setState({ name: e.target.value })}
                />
                <MDBInput
                  wrapperClass="mb-3"
                  label="Your lastname"
                  placeholder="Insert your lastname"
                  id="reg_name"
                  type=""
                  onChange={(e) => this.setState({ lastname: e.target.value })}
                />
                <MDBInput
                  wrapperClass="mb-3"
                  label="Email address"
                  placeholder="example@email.com"
                  id="reg_email"
                  type="email"
                  onChange={(e) => this.setState({ email: e.target.value })}
                />
                <MDBInput
                  wrapperClass="mb-3"
                  label="Phone"
                  placeholder="+52XXXXXXXXXX"
                  id="reg_email"
                  type="text"
                  onChange={(e) => this.setState({ phone: e.target.value })}
                />
                <MDBInput
                  wrapperClass="mb-3"
                  label="Password"
                  placeholder="Insert your password, keep it in mind"
                  id="reg_password"
                  type="password"
                  onChange={(e) => this.setState({ password: e.target.value })}
                />
                <reCAPTCHA />
                <div className="text-center pt-1 mb-5 pb-1">
                  <MDBBtn
                    type="submit"
                    className="mb-4 w-100 gradient-custom-2"
                  >
                    Sign up
                  </MDBBtn>
                </div>
              </form>
              <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                <p className="mb-0">You already have an account?</p>
                <Link to="../login">
                  <Button style={{ margin: 15 }} variant="outline-info">
                    Login
                  </Button>
                  {""}
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default register;
