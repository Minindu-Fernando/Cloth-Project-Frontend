import React, { useEffect, useState } from "react";
import axios from "axios"; // Make sure axios is installed
import "./category.css"; // Your styles for this page
import { Button, Col, Container, Form, FormControl, Row } from "react-bootstrap";

const Category = () => {
  const [products, setProducts] = useState([]);

  // Fetch products when the component mounts
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
        <Col md ={3}>
          {/* Breadcrumbs */}
          <div className="breadcrumbs">
            <a href="/">Home</a> / <span>Category</span>
          </div>

          {/* Filters and Sorting */}
          <div className="filters-and-sorting">
            {/* Sidebar filters and sorting options here */}
            <button>Sort by Price</button>
          </div>

         .<div>
         <Button style={{width:'100%'}} variant="outline-success">Search</Button>
         </div>
         .<div>
         <Button style={{width:'100%'}}variant="outline-success">Search</Button>
         </div>
         .<div>
         <Button style={{width:'100%'}}variant="outline-success">Search</Button>
         </div>
         .<div>
         <Button style={{width:'100%'}}variant="outline-success">Search</Button>
         </div>
         .<div>
         <Button style={{width:'100%'}}variant="outline-success">Search</Button>
         </div>

         .<div>
         <Button style={{width:'100%'}} variant="outline-success">Search</Button>
         </div>
         .<div>
         <Button style={{width:'100%'}}variant="outline-success">Search</Button>
         </div>
         .<div>
         <Button style={{width:'100%'}}variant="outline-success">Search</Button>
         </div>
         .<div>
         <Button style={{width:'100%'}}variant="outline-success">Search</Button>
         </div>
         .<div>
         <Button style={{width:'100%'}}variant="outline-success">Search</Button>
         </div>

         .<div>
         <Button style={{width:'100%'}} variant="outline-success">Search</Button>
         </div>
         .<div>
         <Button style={{width:'100%'}}variant="outline-success">Search</Button>
         </div>
         .<div>
         <Button style={{width:'100%'}}variant="outline-success">Search</Button>
         </div>
         .<div>
         <Button style={{width:'100%'}}variant="outline-success">Search</Button>
         </div>
         .<div>
         <Button style={{width:'100%'}}variant="outline-success">Search</Button>
         </div>

         

        </Col>
        <Col>
      {/* Product Grid */}
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.productId}>
            <img src={product.image} alt={product.productName} />
            <h6><b>{product.productName}</b></h6>
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


      {/* Category Banner */}
      <div className="category-banner">
        <img src="path_to_your_banner_image.jpg" alt="Category Banner" />
        <p>Explore our latest collection and ongoing sales!</p>
      </div>



      {/* Pagination or Load More */}
      <div className="pagination">
        {/* Implement your pagination logic */}
        <button>Load More</button>
      </div>

      {/* Additional Content */}
      <div className="additional-content">
        <p>Explore more: Related categories, or You Might Also Like</p>
      </div>
    </div>
  );
};

export default Category;
