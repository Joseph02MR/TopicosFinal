import { useState } from "react";
import Swal from "sweetalert2";
import React from 'react';
import Barchart from './charts/Barchart';
import { UserData } from "./Data";
import { DataAnual } from "./DataAnual";
import logo from "../../../assets/logo_store.png";
import withReactContent from 'sweetalert2-react-content'
import Table from 'react-bootstrap/Table';
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
    MDBTypography,
    MDBCardTitle,
    MDBIcon
} from 'mdb-react-ui-kit';
import { Container } from "react-bootstrap";

function Dashboard() {
    pedidos();

    async function pedidos() {
        const MySwal = withReactContent(Swal);
        try {
            await fetch("https://jorgealvarez-itc-friendly-space-umbrella-rx5xvq9vp95hw5pj-8000.preview.app.github.dev/api/v1/order/get/", {
                method: "GET",
                crossDomain: true,
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    localStorage.setItem("PEDIDOS", JSON.stringify(data));

                });
        } catch (error) {
            MySwal.fire({
                title: <strong>Oops...</strong>,
                html: <i>Please check the information on the orders</i>,
                icon: "error",
            });
        }
    }

    async function updpedidos(e){
        const MySwal = withReactContent(Swal);
        const status= e.value;
        
        try {
            await fetch("https://jorgealvarez-itc-friendly-space-umbrella-rx5xvq9vp95hw5pj-8000.preview.app.github.dev/api/v1/order/update/" , {
              method: "PUT",
              crossDomain: true,
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
              },
              body: JSON.stringify({
                status
              }),
            })
              .then((res) => res.json())
              .then((data) => {
                localStorage.setItem("PEDIDOS", JSON.stringify(data));                
              });
          } catch (error) {
            MySwal.fire({
              title: <strong>Oops...</strong>,
              html: <i>oops</i>,
              icon: "error",
            });
          }
    }

    const pedido = JSON.parse(localStorage.getItem('PEDIDOS'));

    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.Day),
        datasets: [
            {
                label: "Ventas Semanales",
                data: UserData.map((data) => data.userGain),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(201, 203, 207, 0.2)'
                ],
                borderColor: "black",
                borderWidth: 2,
            },
        ],
    });

    const [dataAnual, setUserDataA] = useState({
        labels: DataAnual.map((data) => data.Month),
        datasets: [
            {
                label: "Ventas Anuales por mes",
                data: DataAnual.map((data) => data.userGain),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(201, 203, 207, 0.2)',
                    'rgba(65, 200, 71, 0.2)',
                    'rgba(255, 115, 2, 0.2)',
                    'rgba(48, 130, 20, 0.2)',
                    'rgba(220, 42, 137, 0.2)',
                    'rgba(130, 2, 2, 0.2)'
                ],
                borderColor: "black",
                borderWidth: 2,
            },
        ],
    });

    return (

        <Container>
            <MDBRow>
                <MDBContainer>
                    <MDBRow className="justify-content-center">
                        <MDBCol md="9" lg="7" xl="5" className="mt-5">
                            <MDBCard style={{ borderRadius: '15px' }}>
                                <MDBCardBody className="p-4">
                                    <div className="d-flex text-black">
                                        <div className="flex-shrink-0">
                                            <MDBCardImage
                                                style={{ width: '180px', borderRadius: '10px' }}
                                                src={logo}
                                                alt='Generic placeholder image'
                                                fluid />
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <MDBCardTitle>Team LeJose</MDBCardTitle>

                                            <div className="d-flex justify-content-center rounded-3 p-2 mb-2"
                                                style={{ backgroundColor: '#efefef' }}>
                                                <div>
                                                    <p className="small text-muted mb-1">Users</p>
                                                    <p className="mb-0">41</p>
                                                </div>
                                                <div className="px-3">
                                                    <p className="small text-muted mb-1">Stores</p>
                                                    <p className="mb-0">976</p>
                                                </div>
                                                <div>
                                                    <p className="small text-muted mb-1">Rating</p>
                                                    <p className="mb-0">8.5</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </MDBRow>
            <br></br>
            <br></br>
            <br></br>
            <hr />
            <MDBRow>
                <MDBCol lg="6">
                    <Barchart chartData={userData} />
                </MDBCol>
                <MDBCol lg="2"></MDBCol>
                <MDBCol lg="4">
                    <br></br>
                    <MDBCard style={{ borderRadius: '15px' }}>
                        <MDBCardBody className="p-4">
                            <div className="d-flex text-black">
                                <div className="flex-grow-1 ms-3">
                                    <MDBCardTitle>Generar reporte de Ventas</MDBCardTitle>
                                    <MDBCardText>(Semanal)</MDBCardText>
                                    <div className="d-flex pt-1">

                                    </div>
                                </div>
                            </div>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
            <hr />
            <MDBRow>
                <MDBCol lg="6">
                    <Barchart chartData={dataAnual} />
                </MDBCol>
                <MDBCol lg="2"></MDBCol>
                <MDBCol lg="4">
                    <br></br>
                    <MDBCard style={{ borderRadius: '15px' }}>
                        <MDBCardBody className="p-4">
                            <div className="d-flex text-black">
                                <div className="flex-grow-1 ms-3">
                                    <MDBCardTitle>Generar reporte de Ventas</MDBCardTitle>
                                    <MDBCardText>(Anual)</MDBCardText>
                                    <div className="d-flex pt-1">

                                    </div>
                                </div>
                            </div>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
            <br></br>
            <br></br>
            <MDBRow>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Status</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pedido.map((ped) => (
                            <tr>
                                <td>{ped.id}</td>
                                <td>{ped.status}</td>
                                <td><MDBBtn outline className="ms-1" onClick={updpedidos} value="placed">Placed</MDBBtn>
                                <MDBBtn outline className="ms-1" onClick={updpedidos} value="On-Delivery">On-Delivery</MDBBtn>
                                <MDBBtn outline className="ms-1" onClick={updpedidos} value="delivered">Delivered</MDBBtn></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </MDBRow>
        </Container>

    );
}

export default Dashboard;