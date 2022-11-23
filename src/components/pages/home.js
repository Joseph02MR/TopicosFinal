import Container from "react-bootstrap/Container";
import UncontrolledExample from "../carrousel";
import ProductsGroup from "../products";
import ContentBlock from "../contentblock";
import Contentblock_bottom from "../contentblock_bottom";
import React, { Component } from "react";

function home() {
    return (
      <Container fluid>
        <UncontrolledExample />
        <ContentBlock />
        <ProductsGroup />
        <Contentblock_bottom/>
      </Container>
    );
}
export default home;
