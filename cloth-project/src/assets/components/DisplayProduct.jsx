import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function DisplayProduct() {
  return (
    <Container>
      <Row>
        <Col md={6}>
          <img src="../" />
        </Col>
        <Col md={6}>
          <h3>Ladies Jeans</h3>
          <h4>LKR 4000</h4>
          <p>Maaimawata Jaya wewa...!</p>
        </Col>
      </Row>
    </Container>
  );
}
