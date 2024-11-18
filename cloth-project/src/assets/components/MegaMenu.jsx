import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./megamenu.css";
import AddProduct from "../../assets/img/addProduct.png";


export default function MegaMenu() {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMouseEnter = (menu) => {
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  const renderMegaMenu = (menu) => {
    switch (menu) {
      case "Men":
        return (
          <div className="mega-menu">
            <div className="mega-menu-content">
            <div className="image" style={{width:'200px'}}>
            <img src={AddProduct} alt="Category Image" />
            </div>
              <div>
                <h5>CLOTHING</h5>
                <ul>
                  <li> All clothing</li>
                  <li> T-shirt & Polos</li>
                  <li> Hoodles</li>
                  <li> Casual Pants</li>
                  <li> Jeans & Joggers</li>
                  <li> Casual Shirts</li>
                  <li> Formal Shirts</li>
                  <li> Formal Trousers</li>
                  <li> Shorts</li>
                  <li> Active Wear</li>
                  <li> Pyjama Pants</li>
                  <li> Plus Men Wear</li>
                </ul>
              </div>
              <div>
                <h5>INNERWEAR</h5>
                <ul>
                  <li>All Innerwear</li>
                  <li>Boxers & Briefs</li>
                  <li>Socks</li>
                  <li>Undershirts</li>                  
                </ul>
              </div>
              <div>
                <h5>ACCESSORIES</h5>
                <ul>
                <li>All Accessories</li>
                  <li>Footwear</li>
                  <li>Hats & Caps</li>
                  <li>Belt</li>
                  <li>Wallet</li>
                </ul>
              </div>
              <div>
                <h5>ETHINICWEAR</h5>
                <ul>
                  <li>All Ethinicwear</li>
                  <li>Blazer</li>
                  <li>Sarong</li>
                </ul>
              </div>
            </div>
          </div>
        );
      case "Women":
        return (
          <div className="mega-menu">
            <div className="mega-menu-content">
              <div>
                <h5>ACCESSORIES</h5>
                <ul>
                <li>All Accessories</li>
                  <li>Footwear</li>
                  <li>Hats & Caps</li>
                  <li>Belt</li>
                  <li>Wallet</li>
                </ul>
              </div>
              <div>
                <h5>ETHINICWEAR</h5>
                <ul>
                  <li>All Ethinicwear</li>
                  <li>Blazer</li>
                  <li>Sarong</li>
                </ul>
              </div>
            </div>
          </div>
        );
      case "Kids":
        return (
          <div className="mega-menu">
            <div className="mega-menu-content">
              <div>
                <h5>Kids Category 1</h5>
                <ul>
                  <li>Kids Item 1</li>
                  <li>Kids Item 2</li>
                  <li>Kids Item 3</li>
                </ul>
              </div>
              <div>
                <h5>Kids Category 2</h5>
                <ul>
                  <li>Kids Item 4</li>
                  <li>Kids Item 5</li>
                  <li>Kids Item 6</li>
                </ul>
              </div>
            </div>
          </div>
        );
      case "Baby":
        return (
          <div className="mega-menu">
            <div className="mega-menu-content">
              <div>
                <h5>Baby Category 1</h5>
                <ul>
                  <li>Baby Item 1</li>
                  <li>Baby Item 2</li>
                  <li>Baby Item 3</li>
                </ul>
              </div>
              <div>
                <h5>Baby Category 2</h5>
                <ul>
                  <li>Baby Item 4</li>
                  <li>Baby Item 5</li>
                  <li>Baby Item 6</li>
                </ul>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto gap-4">
              <div
                className="menu-container"
                onMouseEnter={() => handleMouseEnter("Men")}
                onMouseLeave={handleMouseLeave}
              >
                <Nav.Link href="#men">Men</Nav.Link>
                {activeMenu === "Men" && renderMegaMenu("Men")}
              </div>
              <div
                className="menu-container"
                onMouseEnter={() => handleMouseEnter("Women")}
                onMouseLeave={handleMouseLeave}
              >
                <Nav.Link href="#women">Women</Nav.Link>
                {activeMenu === "Women" && renderMegaMenu("Women")}
              </div>
              <div
                className="menu-container"
                onMouseEnter={() => handleMouseEnter("Kids")}
                onMouseLeave={handleMouseLeave}
              >
                <Nav.Link href="#kids">Kids</Nav.Link>
                {activeMenu === "Kids" && renderMegaMenu("Kids")}
              </div>
              <div
                className="menu-container"
                onMouseEnter={() => handleMouseEnter("Baby")}
                onMouseLeave={handleMouseLeave}
              >
                <Nav.Link href="#baby">Baby</Nav.Link>
                {activeMenu === "Baby" && renderMegaMenu("Baby")}
              </div>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
