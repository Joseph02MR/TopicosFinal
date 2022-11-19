
import { MDBBtn, MDBCol, MDBInput } from 'mdb-react-ui-kit';
import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo_store.png";

function register() {
    return (


        <Container fluid style={{ margin: 'auto' }}>

            <Row style={{ alignContent: 'center', margin: 30 }} >

                <MDBCol md={6} style={{ height: '80vh' }}>
                    <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">
                        <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                            <h4 class="mb-4" style={{ textAlign: 'center' }}>REGISTER</h4>
                            <p class="small mb-0" style={{ textAlign: 'center' }}>
                                JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE, JOSE
                            </p>
                        </div>
                    </div>
                </MDBCol>
                <Col md={6} style={{ textAlign: 'center', margin: 'auto' }}>
                    <div >

                        <div className="text-center">
                            <img src={logo} style={{ width: '185px' }} alt="logo" />
                            <h4 className="mt-1 mb-5 pb-1">Sign in, be part of us!</h4>
                            <p>You're almost there, lets get some data</p>
                        </div>
                        <br></br>
                        <MDBInput wrapperClass='mb-3' label='Your name' placeholder='Insert your name' id='reg_name' type='' />
                        <MDBInput wrapperClass='mb-3' label='Email address' placeholder='example@email.com' id='reg_email' type='email' />
                        <MDBInput wrapperClass='mb-3' label='Password' placeholder='Insert your password, keep it in mind' id='reg_password' type='password' />
                        <div className="text-center pt-1 mb-5 pb-1">
                            <MDBBtn className="mb-4 w-100 gradient-custom-2">Sign in</MDBBtn>
                        </div>
                        <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                            <p className="mb-0">You already have an account?</p>
                            <Link to='../login'>
                                <Button style={{ margin: 15 }} variant="outline-info">Login</Button>{''}
                            </Link>
                        </div>
                    </div>
                </Col>

            </Row>

        </Container>


    );
}

export default register;