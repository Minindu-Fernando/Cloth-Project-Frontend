import React, { useState } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import "./mainnavbarcomponent.css";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook

export default function DefaultNavbar() {
  const [searchInput, setSearchInput] = useState(""); // State for search input
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleCategoryClick = (keyword) => {
    navigate(`/products/search?keyword=${keyword}`);
  };

  const handleSearch = () => {
    if (searchInput.trim()) {
      handleCategoryClick(searchInput); // Pass the input value to handleCategoryClick
    }
  };

  const handleLogout = () => {
    // Remove email and token from localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("email");

    // Set a flag in sessionStorage to prevent back navigation
    sessionStorage.setItem("loggedOut", "true");

    // Clear browser history
    window.history.replaceState(null, "", "/signin");

    // Redirect to the login page
    navigate("/signin");
  };

  return (
    <Navbar bg="light" expand="lg" className="navbar-custom">
      <Navbar.Brand
        href="#home"
        style={{ fontFamily: "cursive", fontSize: "40px" }}
      >
        <b>CLOTHIFY</b>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto d-flex align-items-center">
          <Form
            className="mx-auto d-flex search-form"
            onSubmit={(e) => e.preventDefault()} // Prevent default form submission
          >
            <FormControl
              type="text"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchInput} // Bind input to state
              onChange={(e) => setSearchInput(e.target.value)} // Update state on input change
            />
            <Button variant="outline-success" onClick={handleSearch}>
              Search
            </Button>
          </Form>
        </Nav>
        <Nav className="ms-auto">
          <Nav.Link href="/" style={{ color: "black" }} onClick={handleLogout}>
            Log Out
          </Nav.Link>
          <Nav.Link
            href="/cart"
            style={{ color: "black" }}
            className="cart-icon"
          >
            <FaShoppingCart />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
