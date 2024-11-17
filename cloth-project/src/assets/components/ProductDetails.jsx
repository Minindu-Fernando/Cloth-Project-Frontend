// src/components/ProductDetails.jsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  Row,
  Dropdown,
} from 'react-bootstrap';
import { getProductById } from '../../services/productDetails'; // Adjust the import path as needed
import LineComponent from './LineComponent';

const ProductDetails = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await getProductById(id);
        setProduct(productData);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <p>Loading...</p>; // Show a loading message while fetching data
  }

  return (
    <Container fluid>
      <Row>
      <LineComponent text="ADD TO YOUR CART" />
        <Col md={6}>
          <img src={product.image} alt={product.productName} />
        </Col>
        <Col>
          <h2>{product.productName}</h2>
          <h4>Price: Rs {product.price}</h4>
          <br />
          <br />
          <p>{product.description}</p>
          <br />
          <Dropdown>
            <Dropdown.Toggle
              variant="outline-success"
              id="dropdown-basic"
              style={{ width: '50%' }}
            >
              Size
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>{' '}
          <br />
          <p>Stock: {product.quantity}</p>
          <button className="btn btn-primary">Add to Cart</button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
