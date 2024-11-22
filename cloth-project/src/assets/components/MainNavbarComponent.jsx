import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import './mainnavbarcomponent.css';
import { useNavigate } from 'react-router-dom';

export default function MainNavbarComponent() {
  const [searchInput, setSearchInput] = useState(''); // State for search input
  const navigate = useNavigate();

  const handleCategoryClick = (keyword) => {
    navigate(`/products/search?keyword=${keyword}`);
  };

  const handleSearch = () => {
    if (searchInput.trim()) {
      handleCategoryClick(searchInput);
    }
  };

  return (
    <Navbar bg="light" expand="lg" className="navbar-custom">
      <Navbar.Brand
        href="#home"
        style={{ fontFamily: 'cursive', fontSize: '40px' }}
      >
        <b>CLOTHIFY</b>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto d-flex align-items-center">
          <Form
            className="mx-auto d-flex search-form"
            onSubmit={(e) => e.preventDefault()}
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
          <Nav.Link href="/signup" style={{ color: 'black' }}>
            Sign Up
          </Nav.Link>
          <Nav.Link href="/signin" style={{ color: 'black' }}>
            Sign In
          </Nav.Link>
          <Nav.Link href="/cart" style={{ color: 'black' }} className="cart-icon">
            <FaShoppingCart />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
