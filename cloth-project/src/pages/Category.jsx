// src/components/Category.jsx

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  Row,
  Dropdown,
} from "react-bootstrap";
import { getAllProducts } from "../services/category"; // Adjust the import path as needed
import "./category.css";

const Category = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productData = await getAllProducts();
        setProducts(productData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Function to handle product click
  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="category-page">
      <Container fluid>
        <header className="sticky-header">
          <Form className="mx-auto d-flex search-form">
            <FormControl
              type="text"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <nav>
            <a href="/men">Men</a>
            <a href="/women">Women</a>
          </nav>
        </header>
        <Row>
          <Col md={3} className="p-4 border rounded">
            <div className="breadcrumbs">
              <a href="/">Home</a> / <span>Category</span>
            </div>
            <div className="filters-and-sorting">
              <button>Sort by Price</button>
            </div>
            {/* Your Dropdown components */}
            <div>
              <Dropdown>
                <Dropdown.Toggle
                  variant="outline-success"
                  id="dropdown-basic"
                  style={{ width: "100%" }}
                >
                  Category
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Men</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Women</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Kids</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Baby</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            {/* Repeat Dropdown components as needed */}
          </Col>
          <Col>
            <div className="product-grid">
              {products.map((product) => (
                <div
                  className="product-card"
                  key={product.productId}
                  onClick={() => handleProductClick(product.productId)}
                  style={{ cursor: "pointer" }}
                >
                  <img src={product.image} alt={product.productName} />
                  <h6>
                    <b>{product.productName}</b>
                  </h6>
                  <p>{product.description}</p>
                  <p>${product.price}</p>
                  <p>Stock: {product.quantity}</p>
                  <button className="btn btn-danger">Add to Cart</button>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Category;
