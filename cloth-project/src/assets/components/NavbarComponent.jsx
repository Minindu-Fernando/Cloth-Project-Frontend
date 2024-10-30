// NavbarComponent.js
import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css'; // Import your custom CSS

const NavbarComponent = () => {
  const [showMenDropdown, setShowMenDropdown] = useState(false);
  const [showWomenDropdown, setShowWomenDropdown] = useState(false);
  const [showBabyDropdown, setShowBabyDropdown] = useState(false);
  const [showSaleDropdown, setShowSaleDropdown] = useState(false);

  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="custom-navbar">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="justify-content-center flex-grow-1">
          <NavDropdown 
            title="Men" 
            id="men-dropdown" 
            className="mega-dropdown" 
            show={showMenDropdown}
            onMouseEnter={() => setShowMenDropdown(true)}
            onMouseLeave={() => setShowMenDropdown(false)}
          >
            <div className="mega-dropdown-content">
              <NavDropdown.Item href="#action/3.1">Clothing</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Footwear</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Accessories</NavDropdown.Item>
            </div>
          </NavDropdown>
          <NavDropdown 
            title="Women" 
            id="women-dropdown" 
            className="mega-dropdown" 
            show={showWomenDropdown}
            onMouseEnter={() => setShowWomenDropdown(true)}
            onMouseLeave={() => setShowWomenDropdown(false)}
          >
            <div className="mega-dropdown-content">
              <NavDropdown.Item href="#action/3.1">Clothing</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Footwear</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Accessories</NavDropdown.Item>
            </div>
          </NavDropdown>
          <NavDropdown 
            title="Baby" 
            id="baby-dropdown" 
            className="mega-dropdown" 
            show={showBabyDropdown}
            onMouseEnter={() => setShowBabyDropdown(true)}
            onMouseLeave={() => setShowBabyDropdown(false)}
          >
            <div className="mega-dropdown-content">
              <NavDropdown.Item href="#action/3.1">Clothing</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Footwear</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Accessories</NavDropdown.Item>
            </div>
          </NavDropdown>
          <NavDropdown 
            title="Sale" 
            id="sale-dropdown" 
            className="mega-dropdown" 
            show={showSaleDropdown}
            onMouseEnter={() => setShowSaleDropdown(true)}
            onMouseLeave={() => setShowSaleDropdown(false)}
          >
            <div className="mega-dropdown-content">
              <NavDropdown.Item href="#action/3.1">Discounts</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Clearance</NavDropdown.Item>
            </div>
          </NavDropdown>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
