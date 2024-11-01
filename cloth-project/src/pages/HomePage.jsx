import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import NavbarComponent from "../assets/components/NavbarComponent";
import ShopbyCategory from "../assets/components/ShopbyCategory";
import { Col, Row } from "react-bootstrap";
import NewArrivals from "../assets/components/NewArrivals";
import "./homepage.css";
import LineComponent from "../assets/components/LineComponent";
import Arrival1 from "../assets/img/arrival1.webp";
import Arrival2 from "../assets/img/arrival2.webp";
import Arrival3 from "../assets/img/arrival3.webp";
import Arrival4 from "../assets/img/arrival4.webp";
import Arrival5 from "../assets/img/arrival5.webp";
import Arrival6 from "../assets/img/arrival6.webp";
import Arrival7 from "../assets/img/arrival7.webp";
import Arrival8 from "../assets/img/arrival8.webp";
import CarsoulComponent from "../assets/components/CarsoulComponent";
import FooterComponent from "../assets/components/FooterComponent";
import MainNavbarComponent from "../assets/components/MainNavbarComponent";
// import { fetchProducts } from "../services/productService";

export default function HomePage() {
  return (
   <div>
    <Row><MainNavbarComponent/></Row>
      <Row className="mb-4">
        <NavbarComponent />
      </Row>
      <Row>
        <CarsoulComponent/>
      </Row>

      <Row className="mb-4">
      <Col className="d-flex justify-content-center align-items-center">
          {" "}
          <NewArrivals
            image={Arrival1}
            title="First Arrival"
            text="Some quick example text for the first arrival."
          />
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
          {" "}
          <NewArrivals
            image={Arrival2}
            title="First Arrival"
            text="Some quick example text for the first arrival."
          />
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
          {" "}
          <NewArrivals
            image={Arrival3}
            title="First Arrival"
            text="Some quick example text for the first arrival."
          />
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
          {" "}
          <NewArrivals
            image={Arrival1}
            title="First Arrival"
            text="Some quick example text for the first arrival."
          />
        </Col>
      </Row>

      <Row className="mb-6">
        <LineComponent text="NEW ARRIVALS" />

        <Col className="d-flex justify-content-center align-items-center">
          {" "}
          <NewArrivals
            image={Arrival1}
            title="First Arrival"
            text="Some quick example text for the first arrival."
          />
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
          {" "}
          <NewArrivals
            image={Arrival2}
            title="First Arrival"
            text="Some quick example text for the first arrival."
          />
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
          {" "}
          <NewArrivals
            image={Arrival3}
            title="First Arrival"
            text="Some quick example text for the first arrival."
          />
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
          {" "}
          <NewArrivals
            image={Arrival4}
            title="First Arrival"
            text="Some quick example text for the first arrival."
          />
        </Col>
      </Row>

      <Row className="new-arrivals">
      <Col className="d-flex justify-content-center align-items-center">
          {" "}
          <NewArrivals
            image={Arrival5}
            title="First Arrival"
            text="Some quick example text for the first arrival."
          />
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
          {" "}
          <NewArrivals
            image={Arrival6}
            title="First Arrival"
            text="Some quick example text for the first arrival."
          />
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
          {" "}
          <NewArrivals
            image={Arrival7}
            title="First Arrival"
            text="Some quick example text for the first arrival."
          />
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
          {" "}
          <NewArrivals
            image={Arrival8}
            title="First Arrival"
            text="Some quick example text for the first arrival."
          />
        </Col>
      </Row>

      <div className="my-3">
        <LineComponent text="SHOP BY CATEGORY" />
        <ShopbyCategory />
      </div>
      <Row><FooterComponent/></Row>
    </div>
  );
}
