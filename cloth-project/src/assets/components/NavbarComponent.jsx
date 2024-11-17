// NavbarComponent.js
import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbarcomponent.css"; // Import your custom CSS

const NavbarComponent = () => {
  const [showMenDropdown, setShowMenDropdown] = useState(false);
  const [showWomenDropdown, setShowWomenDropdown] = useState(false);
  const [showBabyDropdown, setShowBabyDropdown] = useState(false);
  const [showSaleDropdown, setShowSaleDropdown] = useState(false);

  return (
    <Navbar variant="dark" expand="lg" className="custom-navbar">
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
              <Row>
                <Col>
                <NavDropdown.Header><h6>CLOTHING</h6></NavDropdown.Header>
                  <NavDropdown.Item href="/addToCart">
                    All Clothing
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    T-shirt & Polos
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Hoodles
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Casual Pants
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Jeans & Joggers
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Casual Shirts
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Formal Shirts
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Formal Trousers
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Shorts
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Active Wear
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Pyjama Pants
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Plus Men Wear
                  </NavDropdown.Item>
                </Col>
                <Col>
                <NavDropdown.Header><h6>INNERWEAR</h6></NavDropdown.Header>
                  <NavDropdown.Item href="#action/3.1">
                    All Innerwear
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Boxers & Briefs
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Socks
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Undershirts
                  </NavDropdown.Item>
                </Col>
                <Col>
                <NavDropdown.Header><h6>ACCESSORIES</h6></NavDropdown.Header>
                  {" "}
                  <NavDropdown.Item href="#action/3.1">
                    All Accessories
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Footwear
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Hats & Caps
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Belt
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Wallet
                  </NavDropdown.Item>
                </Col>
                <Col>
                <NavDropdown.Header><h6>ETHINICWEAR</h6></NavDropdown.Header>
                  {" "}
                  <NavDropdown.Item href="#action/3.1">
                    All Ethinicwear
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Blazer
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Sarong
                  </NavDropdown.Item>
                </Col>
              </Row>
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
            <div className="mega-dropdown-content" >
            <Row>
                <Col>
                <NavDropdown.Header><h6>CLOTHING</h6></NavDropdown.Header>
                  <NavDropdown.Item href="#action/3.1">
                    All Clothing
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Dresses
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    T-shirts
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Blouses & Shirts
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Ladies Pants
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Jeans
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Shorts
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Skirts
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Sleep Wear
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Active Wear
                  </NavDropdown.Item>
                </Col>
                <Col>
                <NavDropdown.Header><h6>ACCESSORIES</h6></NavDropdown.Header>
                  <NavDropdown.Item href="#action/3.1">
                    All Accessories
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Belts
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Footwear
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Scarfs & Shawls
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Sunglass
                  </NavDropdown.Item>

                </Col>
                <Col>
                <NavDropdown.Header><h6>LINGERIE</h6></NavDropdown.Header>
                  {" "}
                  <NavDropdown.Item href="#action/3.1">
                    All Lingerie
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Bra
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Panties
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Undershorts
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Underskirts
                  </NavDropdown.Item>
                </Col>
                <Col>
                <NavDropdown.Header><h6>ETHINIC WEAR</h6></NavDropdown.Header>
                  {" "}
                  <NavDropdown.Item href="#action/3.1">
                    All Ethinicwear
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Saree
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Kurthis
                  </NavDropdown.Item>
                </Col>
              </Row>

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
            <Row>
                <Col>
                <NavDropdown.Header><h6>Ah patiyoo</h6></NavDropdown.Header>
                  <NavDropdown.Item href="#action/3.1">
                    Clothing
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Footwear
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Accessories
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Accessories
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Accessories
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Accessories
                  </NavDropdown.Item>
                </Col>
                <Col>
                <NavDropdown.Header><h6>Ah patiyoo</h6></NavDropdown.Header>
                  <NavDropdown.Item href="#action/3.1">
                    Clothing
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Footwear
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Accessories
                  </NavDropdown.Item>
                </Col>
                <Col>
                <NavDropdown.Header><h6>Ah patiyoo</h6></NavDropdown.Header>
                  {" "}
                  <NavDropdown.Item href="#action/3.1">
                    Clothing
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Footwear
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Accessories
                  </NavDropdown.Item>
                </Col>
                <Col>
                <NavDropdown.Header><h6>Ah patiyoo</h6></NavDropdown.Header>
                  {" "}
                  <NavDropdown.Item href="#action/3.1">
                    Clothing
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Footwear
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Accessories
                  </NavDropdown.Item>
                </Col>
              </Row>

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
            <Row>
                <Col>
                <NavDropdown.Header><h6>CLOTHING</h6></NavDropdown.Header>
                  <NavDropdown.Item href="#action/3.1">
                    Clothing
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Footwear
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Accessories
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Accessories
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Accessories
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Accessories
                  </NavDropdown.Item>
                </Col>
                <Col>
                <NavDropdown.Header><h6>INNERWEAR</h6></NavDropdown.Header>
                  <NavDropdown.Item href="#action/3.1">
                    Clothing
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Footwear
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Accessories
                  </NavDropdown.Item>
                </Col>
                <Col>
                <NavDropdown.Header><h6>ACCESSORIES</h6></NavDropdown.Header>
                  {" "}
                  <NavDropdown.Item href="#action/3.1">
                    Clothing
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Footwear
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Accessories
                  </NavDropdown.Item>
                </Col>
                <Col>
                <NavDropdown.Header><h6>ETHINICWEAR</h6></NavDropdown.Header>
                  {" "}
                  <NavDropdown.Item href="#action/3.1">
                    Clothing
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Footwear
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Accessories
                  </NavDropdown.Item>
                </Col>
              </Row>

            </div>
          </NavDropdown>
          <Nav.Link href="/category">About</Nav.Link>
          <Nav.Link href="/addProducts">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
