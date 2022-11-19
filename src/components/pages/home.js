import Container from "react-bootstrap/Container";
import UncontrolledExample from "../carrousel";
import ProductsGroup from "../products";
import ContentBlock from "../contentblock";
import React, { Component } from "react";

function home() {
    return (
      <Container fluid>
        <UncontrolledExample />
        <ContentBlock />
        <ProductsGroup />
      </Container>
    );
}
export default home;
