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

class login extends Component {
  constructor(props) {
    super(props);
    localStorage.clear();
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    const MySwal = withReactContent(Swal);
    try {
      await fetch("https://jorgealvarez-itc-friendly-space-umbrella-rx5xvq9vp95hw5pj-8000.preview.app.github.dev/api/v1/login/", {
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
          window.location.href = "/";
        });
    } catch (error) {
      MySwal.fire({
        title: <strong>Oops...</strong>,
        html: <i>Please check the email or password!</i>,
        icon: "error",
      });
    }
  }

  render() {
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
                  required
                  onChange={(e) => this.setState({ email: e.target.value })}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  id="form2"
                  type="password"
                  required
                  onChange={(e) => this.setState({ password: e.target.value })}
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
                  <NavLink style={{ color:"gray" , padding:15, textDecoration:"none"}} to="/register" end>Register now!</NavLink> 
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
        </Row>
      </Container>
    );
  }
}
export default login;
