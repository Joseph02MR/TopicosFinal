import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
  MDBCardText,
} from "mdb-react-ui-kit";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Swal from "sweetalert2";

function cart() {
  var total = 0;
  var products=[];
  const carrito = JSON.parse(localStorage.getItem("CART"));
  const result = Array.isArray(carrito)
    ? carrito.map((element) => element)
    : [];
  result.map((element) => (total += JSON.parse(element)["price"]));
  result.map((element) => (products.push(JSON.parse(element)["_id"])));
  var subtotal = total;
  function apply_disc(e) {
    const button = document.querySelector("#btndisc");
    total = subtotal - subtotal * 0.1;
    localStorage.setItem("ttd", total);
    button.disabled = true;
    window.location.href = "/cart";
  }
  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol size="12">
            <MDBCard
              className="card-registration card-registration-2"
              style={{ borderRadius: "15px" }}
            >
              <MDBCardBody className="p-0">
                <MDBRow className="g-0">
                  <MDBCol lg="8">
                    <div className="p-5">
                      <div className="d-flex justify-content-between align-items-center mb-5">
                        <MDBTypography
                          tag="h1"
                          className="fw-bold mb-0 text-black"
                        >
                          Shopping Cart
                        </MDBTypography>
                        <MDBTypography className="mb-0 text-muted">
                          {carrito.length} items
                        </MDBTypography>
                      </div>
                      <hr className="my-4" />
                      {result.map((product) => (
                        <MDBRow className="mb-4 d-flex justify-content-between align-items-center">
                          <MDBCol md="2" lg="2" xl="2">
                            <MDBCardImage
                              src={JSON.parse(product)["thumbnail"]}
                              fluid
                              className="rounded-3"
                              alt="Cotton T-shirt"
                            />
                          </MDBCol>
                          <MDBCol md="3" lg="3" xl="3">
                            <MDBTypography tag="h6" className="text-muted">
                              {JSON.parse(product)["brand"]}
                            </MDBTypography>
                            <MDBTypography tag="h6" className="text-black mb-0">
                              {JSON.parse(product)["title"]}
                            </MDBTypography>
                          </MDBCol>
                          <MDBCol md="3" lg="2" xl="2" className="text-end">
                            <MDBTypography tag="h6" className="mb-0">
                              ${JSON.parse(product)["price"]} USD
                            </MDBTypography>
                          </MDBCol>
                          <MDBCol md="1" lg="1" xl="1" className="text-end">
                            <a href="#!" className="text-muted">
                              <MDBIcon fas icon="times" />
                            </a>
                          </MDBCol>
                        </MDBRow>
                      ))}

                      <div className="pt-5">
                        <MDBTypography tag="h6" className="mb-0">
                          <MDBCardText className="text-body">
                            <MDBIcon fas icon="long-arrow-alt-left me-2" />
                            <NavLink
                              style={{
                                color: "gray",
                                padding: 15,
                                textDecoration: "none",
                              }}
                              to="/"
                              end
                            >
                              {" "}
                              <box-icon name="arrow-back"></box-icon> Back to
                              shopping{" "}
                            </NavLink>
                          </MDBCardText>
                        </MDBTypography>
                      </div>
                    </div>
                  </MDBCol>
                  <MDBCol lg="4" className="bg-grey">
                    <div className="p-5">
                      <MDBTypography
                        tag="h3"
                        className="fw-bold mb-5 mt-2 pt-1"
                      >
                        Summary
                      </MDBTypography>

                      <hr className="my-4" />

                      <div className="d-flex justify-content-between mb-4">
                        <MDBTypography tag="h5" className="text-uppercase">
                          items {carrito.length}
                        </MDBTypography>
                        <MDBTypography tag="h5">$ {subtotal} USD</MDBTypography>
                      </div>

                      <MDBTypography tag="h5" className="text-uppercase mb-3">
                        Give code
                      </MDBTypography>

                      <div className="mb-5">
                        <MDBInput size="lg" label="Enter your code">
                          <Button
                            id="btndisc"
                            onClick={apply_disc}
                            variant="success"
                          >
                            Apply
                          </Button>
                        </MDBInput>
                      </div>
                      <hr className="my-4" />
                      <div className="d-flex justify-content-between mb-5">
                        <MDBTypography tag="h5" className="text-uppercase">
                          Total price
                        </MDBTypography>
                        <MDBTypography tag="h5">
                          ${" "}
                          {localStorage.getItem("ttd")
                            ? localStorage.getItem("ttd")
                            : total}{" "}
                          USD
                        </MDBTypography>
                      </div>
                      <PayPalScriptProvider options={{ "client-id": "test" }}>
                        <PayPalButtons
                          createOrder={(data, actions) => {
                            return actions.order.create({
                              purchase_units: [
                                {
                                  amount: {
                                    value:(`${total}`),
                                  },
                                },
                              ],
                            });
                          }}
                          onApprove= {(data, actions) => {
                            return  actions.order.capture().then(async(details) => {
                              const dest_address=details.payer.address.address_line_1 +" "+details.payer.address.address_line_2+" "+details.payer.address.admin_area_1+" "+details.payer.address.admin_area_2+" "+details.payer.address.postal_code;
                              const date=details.create_time;
                              const profile = JSON.parse(localStorage.getItem('SESSION'));
                              const status="placed";
                              var user_id="";
                              if(profile===null){
                                user_id="";
                              }else{
                                user_id=profile["oid"];
                              }
                              try {
                                await fetch('https://jorgealvarez-itc-friendly-space-umbrella-rx5xvq9vp95hw5pj-8000.preview.app.github.dev/api/v1/order/getlast',{
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
                              try {
                                await fetch("https://jorgealvarez-itc-friendly-space-umbrella-rx5xvq9vp95hw5pj-8000.preview.app.github.dev/api/v1/order/add", {
                                  method: "POST",
                                  crossDomain: true,
                                  headers: {
                                    "Content-Type": "application/json",
                                    Accept: "application/json",
                                    "Access-Control-Allow-Origin": "*",
                                  },
                                  body: JSON.stringify({
                                    id,
                                    date,
                                    user_id,
                                    products,
                                    status,
                                    dest_address,
                                  }),
                                })
                                  .then((res) => res.json())
                                  .then(async (data) => {
                                    //SI SE COMPRÓ
                                    await Swal.fire({
                                      position: 'center',
                                      icon: 'success',
                                      title: 'Your order has been placed',
                                      showConfirmButton: false,
                                      timer: 4500,
                                    })
                                    localStorage.removeItem("CART");
                                    localStorage.removeItem("tdd");
                                    window.location.href = "/";
                                  });
                              } catch (error) {
                               //PASO ALGO
                              }
                            });
                          }}
                        />
                      </PayPalScriptProvider>
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
export default cart;
