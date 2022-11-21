import { MDBBtn, MDBCol, MDBInput } from "mdb-react-ui-kit";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/logo_store.png";
import React, { Component } from "react";
import reCAPTCHA from "react-google-recaptcha";
class register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:"",
      lastname:"",
      email: "",
      password: "",
      gender:"",
    };
    this.registerEvent = this.registerEvent.bind(this);
  }
  async registerEvent(e){
    
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
              <form>
                <MDBInput
                  wrapperClass="mb-3"
                  label="Your name"
                  placeholder="Insert your name"
                  id="reg_name"
                  type=""
                />
                <MDBInput
                  wrapperClass="mb-3"
                  label="Your lastname"
                  placeholder="Insert your lastname"
                  id="reg_name"
                  type=""
                />
                <MDBInput
                  wrapperClass="mb-3"
                  label="Email address"
                  placeholder="example@email.com"
                  id="reg_email"
                  type="email"
                />
                <MDBInput
                  wrapperClass="mb-3"
                  label="Phone"
                  placeholder="+52XXXXXXXXXX"
                  id="reg_email"
                  type="text"
                />
                <MDBInput
                  wrapperClass="mb-3"
                  label="Password"
                  placeholder="Insert your password, keep it in mind"
                  id="reg_password"
                  type="password"
                />
                <h8 class="text-centre">Gender: </h8>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="option1"
                  />
                  <label class="form-check-label" for="inlineRadio1">
                    Male
                  </label>
                </div>

                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="option2"
                  />
                  <label class="form-check-label" for="inlineRadio2">
                    Female
                  </label>
                </div>
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
