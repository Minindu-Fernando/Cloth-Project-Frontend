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
import { getAllProducts } from "../services/arrivalService";
import DefaultNavbar from "../assets/components/DefaultNavbar";
import MegaMenu from "../assets/components/MegaMenu";


export default function HomePagepractice() {
  const [products, setProducts] = useState([]);
  const [email, setEmail] = useState("");
  
  useEffect(() => {
    // Retrieve the email from localStorage
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);


  useEffect(() => {
    getAllProducts()
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error in HomePage:", error));
  }, []);

  return (
    <div style={{marginTop:'6%'}}>
      <div>
      <DefaultNavbar/>
        <Row className="mb-4">
        <MegaMenu/>
        </Row>
        <Row>
          <CarsoulComponent />
        </Row>
      </div>

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
      <LineComponent text="NEW ARRIVALS" />
      <div>
        {/* Split products into two rows of four columns */}
        {[0, 1].map((rowIndex) => (
          <Row key={rowIndex} className="mb-4">
            {products
              .slice(rowIndex * 4, rowIndex * 4 + 4)
              .map((product, index) => (
                <Col
                  key={index}
                  className="d-flex justify-content-center align-items-center"
                >
                  <NewArrivals
                    image={product.image}
                    title={product.productName}
                    text={product.description}
                    price={product.price}
                  />
                </Col>
              ))}
          </Row>
        ))}
      </div>

      <div className="my-3">
        <LineComponent text="SHOP BY CATEGORY" />
        <ShopbyCategory />
      </div>
      <Row><FooterComponent/></Row>

    </div>
  );
}
