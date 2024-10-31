import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import NavbarComponent from "../components/NavbarComponent";
import ShopbyCategory from "../components/ShopbyCategory";
import { Col, Row } from "react-bootstrap";
import NewArrivals from "../components/NewArrivals";
import "./homepage.css";
import LineComponent from "../components/LineComponent";
import Arrival1 from '../img/arrival1.webp';
import Arrival2 from '../img/arrival2.webp';
import Arrival3 from '../img/arrival3.webp';
import Arrival4 from '../img/arrival4.webp';
import Arrival5 from '../img/arrival5.webp';
import Arrival6 from '../img/arrival6.webp';
import Arrival7 from '../img/arrival7.webp';
import Arrival8 from '../img/arrival8.webp';
import CarsoulComponent from "../components/CarsoulComponent";
import FooterComponent from "../components/FooterComponent";
import MainNavbarComponent from "../components/MainNavbarComponent";
import { fetchProducts } from "../services/productService";

export default function HomePage() {

  const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts()
            .then(data => setProducts(data))
            .catch(error => console.error("Error in HomePage:", error));
    }, []);

  return (

<div>
      {/* Split products into two rows of four columns */}
      {[0, 1].map((rowIndex) => (
        <Row key={rowIndex} className="mb-4">
          {products.slice(rowIndex * 4, rowIndex * 4 + 4).map((product, index) => (
            <Col key={index} md={2} className="d-flex justify-content-center align-items-center">
              <NewArrivals
                image={Arrival1}
                title={product.productName}
                text={product.description}
                price={product.price}
              />
            </Col>
          ))}
        </Row>
      ))}
    </div>

  /*  <div>
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
    </div>*/
  );
}
