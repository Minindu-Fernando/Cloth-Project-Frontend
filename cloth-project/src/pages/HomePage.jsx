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
import MegaMenu from "../assets/components/MegaMenu";
import CardComponent from "../assets/components/CardComponent";
// import { fetchProducts } from "../services/productService";
import Slide3 from "../assets/img/Gif.gif";
import MyComponent from "../assets/components/MyComponent";

export default function HomePage() {
  const links = [
    { href: "/signup", text: "Sign Up" },
    { href: "/signin", text: "Sign In" },
  ];
  return (
    <div style={{ marginTop: "6%" }}>
      <MainNavbarComponent />
      <Row className="mb-4">
        <MegaMenu />
      </Row>
      <Row>
        <CarsoulComponent />
      </Row>

      <Row className="mb-4">
        <LineComponent text="FAMOUS THIS MONTH" />
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
        <img src={Slide3}></img>
        <LineComponent text="SHOP BY CATEGORY" />
        <ShopbyCategory  />
      </div>
      <Row>
        <Row className="mb-4 position-relative">
          <LineComponent text="FAMOUS THIS MONTH" />
          <Col
            style={{ margin: "0%", padding: "0%" }}
            className="d-flex justify-content-center align-items-center"
          >
            <CardComponent image={Arrival1} />
          </Col>
          <Col
            style={{ margin: "0%", padding: "0%" }}
            className="d-flex justify-content-center align-items-center"
          >
            <CardComponent image={Arrival2} />
          </Col>
          <Col
            style={{ margin: "0%", padding: "0%" }}
            className="d-flex justify-content-center align-items-center"
          >
            <CardComponent image={Arrival3} />
          </Col>
          <Col
            style={{ margin: "0%", padding: "0%" }}
            className="d-flex justify-content-center align-items-center"
          >
            <CardComponent image={Arrival1} />
          </Col>
          <Col
            style={{ margin: "0%", padding: "0%" }}
            className="d-flex justify-content-center align-items-center"
          >
            <CardComponent image={Arrival1} />
          </Col>

          {/* Add the blurred rectangle as part of the row */}
          <div className="blurred-rectangle">
            <p style={{ margin: "0%", padding: "0%" }} className="saree-text">
              Silk Sathin Saree
            </p>
            <p style={{ margin: "0%", padding: "0%" }} className="saree-text">
              Collection
            </p>
          </div>
        </Row>
        <FooterComponent />
      </Row>
    </div>
  );
}
