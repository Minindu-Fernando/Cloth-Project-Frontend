import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./megamenu.css";
import AddProduct from "../../assets/img/addProduct.png";
import { useNavigate } from "react-router-dom";

export default function MegaMenu() {
  const [activeMenu, setActiveMenu] = useState(null);
  const navigate = useNavigate();

  const handleCategoryClick = (keyword) => {
    navigate(`/products/search?keyword=${keyword}`);
    window.location.reload(); // Forces a page reload
  };

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
              <div className="image" style={{ width: "200px" }}>
                <img src={AddProduct} alt="Category Image" />
              </div>
              <div>
                <h5>CLOTHING</h5>
                <ul>
                  <li onClick={() => handleCategoryClick("Mens")}>
                    All clothing
                  </li>
                  <li onClick={() => handleCategoryClick("T-shirt")}>
                    T-shirt & Polos
                  </li>
                  <li onClick={() => handleCategoryClick("hoodies")}>
                    Hoodies
                  </li>
                  <li onClick={() => handleCategoryClick("casual-pants")}>
                    Casual Pants
                  </li>
                  <li onClick={() => handleCategoryClick("jeans-joggers")}>
                    Jeans & Joggers
                  </li>
                  <li onClick={() => handleCategoryClick("casual-shirts")}>
                    Casual Shirts
                  </li>
                  <li onClick={() => handleCategoryClick("formal-shirts")}>
                    Formal Shirts
                  </li>
                  <li onClick={() => handleCategoryClick("formal-trousers")}>
                    Formal Trousers
                  </li>
                  <li onClick={() => handleCategoryClick("shorts")}>Shorts</li>
                  <li onClick={() => handleCategoryClick("active-wear")}>
                    Active Wear
                  </li>
                  <li onClick={() => handleCategoryClick("pyjama-pants")}>
                    Pyjama Pants
                  </li>
                  <li onClick={() => handleCategoryClick("plus-men-wear")}>
                    Plus Men Wear
                  </li>
                </ul>
              </div>
              <div>
                <h5>INNERWEAR</h5>
                <ul>
                  <li onClick={() => handleCategoryClick("all-innerwear")}>
                    All Innerwear
                  </li>
                  <li onClick={() => handleCategoryClick("boxers-briefs")}>
                    Boxers & Briefs
                  </li>
                  <li onClick={() => handleCategoryClick("socks")}>Socks</li>
                  <li onClick={() => handleCategoryClick("undershirts")}>
                    Undershirts
                  </li>
                </ul>
              </div>
              <div>
                <h5>ACCESSORIES</h5>
                <ul>
                  <li onClick={() => handleCategoryClick("all-accessories")}>
                    All Accessories
                  </li>
                  <li onClick={() => handleCategoryClick("footwear")}>
                    Footwear
                  </li>
                  <li onClick={() => handleCategoryClick("hats-caps")}>
                    Hats & Caps
                  </li>
                  <li onClick={() => handleCategoryClick("belt")}>Belt</li>
                  <li onClick={() => handleCategoryClick("wallet")}>Wallet</li>
                </ul>
              </div>
              <div>
                <h5>ETHINICWEAR</h5>
                <ul>
                  <li onClick={() => handleCategoryClick("all-ethnicwear")}>
                    All Ethnicwear
                  </li>
                  <li onClick={() => handleCategoryClick("blazer")}>Blazer</li>
                  <li onClick={() => handleCategoryClick("sarong")}>Sarong</li>
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
                <h5>CLOTHING</h5>
                <ul>
                  <li onClick={() => handleCategoryClick("Women")}>
                    All Clothing
                  </li>
                  <li onClick={() => handleCategoryClick("dress")}>
                    Dresses
                  </li>
                  <li onClick={() => handleCategoryClick("t-shirts")}>
                    T-shirts
                  </li>
                  <li onClick={() => handleCategoryClick("blouses-shirts")}>
                    Blouses & Shirts
                  </li>
                  <li onClick={() => handleCategoryClick("ladies-pants")}>
                    Ladies Pants
                  </li>
                  <li onClick={() => handleCategoryClick("jeans")}>Jeans</li>
                  <li onClick={() => handleCategoryClick("shorts")}>Shorts</li>
                  <li onClick={() => handleCategoryClick("skirts")}>Skirts</li>
                  <li onClick={() => handleCategoryClick("sleep-wear")}>
                    Sleep Wear
                  </li>
                  <li onClick={() => handleCategoryClick("active-wear")}>
                    Active Wear
                  </li>
                </ul>
              </div>
              <div>
                <h5>ACCESSORIES</h5>
                <ul>
                  <li onClick={() => handleCategoryClick("all-accessories")}>
                    All Accessories
                  </li>
                  <li onClick={() => handleCategoryClick("belts")}>Belts</li>
                  <li onClick={() => handleCategoryClick("footwear")}>
                    Footwear
                  </li>
                  <li onClick={() => handleCategoryClick("scarfs-shawls")}>
                    Scarfs & Shawls
                  </li>
                  <li onClick={() => handleCategoryClick("sunglass")}>
                    Sunglass
                  </li>
                </ul>
              </div>
              <div>
                <h5>LINGERIE</h5>
                <ul>
                  <li onClick={() => handleCategoryClick("all-lingerie")}>
                    All Lingerie
                  </li>
                  <li onClick={() => handleCategoryClick("bra")}>Bra</li>
                  <li onClick={() => handleCategoryClick("panties")}>
                    Panties
                  </li>
                  <li onClick={() => handleCategoryClick("undershorts")}>
                    Undershorts
                  </li>
                  <li onClick={() => handleCategoryClick("underskirts")}>
                    Underskirts
                  </li>
                </ul>
              </div>
              <div>
                <h5>ETHINICWEAR</h5>
                <ul>
                  <li onClick={() => handleCategoryClick("all-ethnicwear")}>
                    All Ethnicwear
                  </li>
                  <li onClick={() => handleCategoryClick("saree")}>Saree</li>
                  <li onClick={() => handleCategoryClick("kurthis")}>
                    Kurthis
                  </li>
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
                <h5>Boys</h5>
                <ul>
                  <li onClick={() => handleCategoryClick("boys-tshirts")}>
                    T-shirt
                  </li>
                  <li onClick={() => handleCategoryClick("boys-denim")}>
                    Denim
                  </li>
                  <li onClick={() => handleCategoryClick("boys-shorts")}>
                    Shorts
                  </li>
                  <li onClick={() => handleCategoryClick("boys-shirts")}>
                    Shirt
                  </li>
                  <li onClick={() => handleCategoryClick("boys-pants")}>
                    Pants
                  </li>
                  <li onClick={() => handleCategoryClick("boys-night-wear")}>
                    Night-Wear
                  </li>
                </ul>
              </div>
              <div>
                <h5>Girls</h5>
                <ul>
                  <li onClick={() => handleCategoryClick("girls-tshirts")}>
                    T-shirt
                  </li>
                  <li onClick={() => handleCategoryClick("girls-denim")}>
                    Denim
                  </li>
                  <li onClick={() => handleCategoryClick("girls-dress")}>
                    Dress
                  </li>
                  <li onClick={() => handleCategoryClick("girls-shorts")}>
                    Shorts
                  </li>
                  <li onClick={() => handleCategoryClick("girls-shirts")}>
                    Shirt
                  </li>
                  <li onClick={() => handleCategoryClick("girls-pants")}>
                    Pants
                  </li>
                  <li onClick={() => handleCategoryClick("girls-night-wear")}>
                    Night-Wear
                  </li>
                  <li onClick={() => handleCategoryClick("girls-jump-suits")}>
                    Jump-Suits
                  </li>
                </ul>
              </div>
              <div>
                <h5>ACCESSORIES</h5>
                <ul>
                  <li onClick={() => handleCategoryClick("kids-accessories")}>
                    All Accessories
                  </li>
                  <li onClick={() => handleCategoryClick("kids-belts")}>
                    Belts
                  </li>
                  <li onClick={() => handleCategoryClick("kids-footwear")}>
                    Footwear
                  </li>
                  <li onClick={() => handleCategoryClick("kids-scarfs-shawls")}>
                    Scarfs & Shawls
                  </li>
                  <li onClick={() => handleCategoryClick("kids-sunglasses")}>
                    Sunglasses
                  </li>
                </ul>
              </div>
              <div>
                <h5>ETHINICWEAR</h5>
                <ul>
                  <li onClick={() => handleCategoryClick("kids-ethnicwear")}>
                    All Ethnicwear
                  </li>
                  <li onClick={() => handleCategoryClick("kids-sports")}>
                    Sports
                  </li>
                  <li onClick={() => handleCategoryClick("kids-uniforms")}>
                    School Uniforms
                  </li>
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
                <h5>Baby Girl</h5>
                <ul>
                  <li
                    onClick={() => handleCategoryClick("baby-girl-collections")}
                  >
                    Baby Collections
                  </li>
                  <li onClick={() => handleCategoryClick("baby-girl-care")}>
                    Baby Care
                  </li>
                  <li onClick={() => handleCategoryClick("baby-girl-suits")}>
                    Baby Suits
                  </li>
                </ul>
              </div>
              <div>
                <h5>Baby Boy</h5>
                <ul>
                  <li
                    onClick={() => handleCategoryClick("baby-boy-collections")}
                  >
                    Baby Collections
                  </li>
                  <li onClick={() => handleCategoryClick("baby-boy-care")}>
                    Baby Care
                  </li>
                  <li onClick={() => handleCategoryClick("baby-boy-suits")}>
                    Baby Suits
                  </li>
                </ul>
              </div>
              <div>
                <h5>ACCESSORIES</h5>
                <ul>
                  <li
                    onClick={() =>
                      handleCategoryClick("baby-accessories-footwear")
                    }
                  >
                    Footwear
                  </li>
                  <li
                    onClick={() =>
                      handleCategoryClick("baby-accessories-pillows")
                    }
                  >
                    Pillows
                  </li>
                  <li
                    onClick={() =>
                      handleCategoryClick("baby-accessories-hats-caps")
                    }
                  >
                    Hats & Caps
                  </li>
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
    <div style={{ margin: "0%", padding: "0%" }}>
      <Navbar
        expand="lg"
        className="nav-bar"
        style={{ backgroundColor: "#260758" }}
      >
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
