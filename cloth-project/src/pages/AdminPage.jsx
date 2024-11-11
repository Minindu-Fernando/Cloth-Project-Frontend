import React from "react";
import { Container, Row, Col } from "react-bootstrap"; // Bootstrap grid system
import "./adminpage.css"; // Optional for any custom styling
import AdminCardComponent from "../assets/components/AdminCardComponent";
import AddProduct from "../assets/img/addProduct.png";
import ViewProduct from "../assets/img/viewProduct.png";
import NewArrivals from "../assets/img/newarrival.png";
import ViewOrders from "../assets/img/order.png";
import AddDiscount from "../assets/img/discount.png";
import ViewCustomers from "../assets/img/customer.png";
import Reports from "../assets/img/reports.png";
import Settings from "../assets/img/addArrival.png";

import FooterComponent from "../assets/components/FooterComponent";
import NavbarComponent from "../assets/components/NavbarComponent";
import MainNavbarComponent from "../assets/components/MainNavbarComponent";
import MainImage from "../assets/img/Main.png";

export default function AdminPage() {
  return (
    <Container fluid>
      {/* Row 1: Navbar components */}
      <Row>
        <MainNavbarComponent />
        <NavbarComponent />
      </Row>

      {/* Row 2: Main Image */}
      <Row className="text-center" style={{ marginTop:'3%'}}> {/* Center the image in this row */}
        <Col className="d-flex justify-content-center align-items-center">
          <img
            src={MainImage} // Main banner image path
            alt="Admin Image"
            className="img-fluid" // Responsive image
          />
        </Col>
      </Row>

      {/* Row 3: First set of Admin Cards */}
      <Row style={{marginBottom:'6%', marginTop:'6%'}}>
      <Col className="d-flex justify-content-center align-items-center">
      <AdminCardComponent
            imageSrc={AddProduct}
            overlayText="Add Product"
            link="/addProducts"
          />
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
          <AdminCardComponent
            imageSrc={ViewProduct}
            overlayText="View Product"
            link="/view-all-products"
          />
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
          <AdminCardComponent
            imageSrc={NewArrivals}
            overlayText="Add New Arrivals"
            link="/update-product"
          />
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
          <AdminCardComponent
            imageSrc={ViewOrders}
            overlayText="View Orders"
            link="/view-orders"
          />
        </Col>
      </Row>

      {/* Row 4: Second set of Admin Cards */}
      <Row>
      <Col className="d-flex justify-content-center align-items-center">
      <AdminCardComponent
            imageSrc={AddDiscount}
            overlayText="Add Discount"
            link="/add-discount"
          />
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
          <AdminCardComponent
            imageSrc={AddDiscount}
            overlayText="View Customers"
            link="/view-customers"
          />
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
          <AdminCardComponent
            imageSrc={Reports}
            overlayText="Reports"
            link="/reports"
          />
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
          <AdminCardComponent
            imageSrc={AddDiscount}
            overlayText="Settings"
            link="/settings"
          />
        </Col>
      </Row>

      {/* Row 5: Footer */}
      <Row>
        <Col>
          <FooterComponent />
        </Col>
      </Row>
    </Container>
  );
}
