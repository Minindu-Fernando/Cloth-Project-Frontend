import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  Row,
  Dropdown,
} from "react-bootstrap";
import "./category.css";

const Category = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    axios
      .get("http://localhost:8080/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  // Function to handle product click
  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`); // Navigate to the ProductDetails page
  };

  return (
    <div className="category-page">
      <Container fluid>
        {/* Your existing header and sidebar code */}

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
            {/* Breadcrumbs */}
            <div className="breadcrumbs">
              <a href="/">Home</a> / <span>Category</span>
            </div>
            {/* Filters and Sorting */}
            <div className="filters-and-sorting">
              {/* Sidebar filters and sorting options here */}
              <button>Sort by Price</button>
            </div>
            .
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
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            .
            <div>
              <Dropdown>
                <Dropdown.Toggle
                  variant="outline-success"
                  id="dropdown-basic"
                  style={{ width: "100%" }}
                >
                 Size
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>{" "}
            </div>
            .
            <div>
              <Dropdown>
                <Dropdown.Toggle
                  variant="outline-success"
                  id="dropdown-basic"
                  style={{ width: "100%" }}
                >
                  Price
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>{" "}
            </div>
            .
            <div>
              <Dropdown>
                <Dropdown.Toggle
                  variant="outline-success"
                  id="dropdown-basic"
                  style={{ width: "100%" }}
                >
                  All Item
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>{" "}
            </div>
          </Col>
          <Col>
            {/* Product Grid */}
            <div className="product-grid">
              {products.map((product) => (
                <div
                  className="product-card"
                  key={product.productId}
                  onClick={() => handleProductClick(product.productId)}
                  style={{ cursor: "pointer" }} // Add pointer cursor for better UX
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

      {/* Your existing banner, pagination, and additional content */}
    </div>
  );
};

export default Category;
