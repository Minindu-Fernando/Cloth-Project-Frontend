import React from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import './mainnavbarcomponent.css';


export default function MainNavbarComponent() {
    return (
        <Navbar bg="light" expand="lg" className="navbar-custom">
          <Navbar.Brand href="#home">Company Name</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex align-items-center">
              <Form className="mx-auto d-flex search-form">
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Nav>
            <Nav className="ms-auto">
              <Nav.Link href="#signup">Sign Up</Nav.Link>
              <Nav.Link href="#signin">Sign In</Nav.Link>
              <Nav.Link href="#cart" className="cart-icon">
                <FaShoppingCart />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
}
