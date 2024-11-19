import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Dropdown } from 'react-bootstrap';
import { getProductById } from '../../services/productDetails'; // Adjust path as needed
import { addProductToCart } from '../../services/cartService'; // Import cart API service
import LineComponent from './LineComponent';
import './productdetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      setEmail(storedEmail);
    }

    const fetchProduct = async () => {
      try {
        const productData = await getProductById(id);
        setProduct(productData);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = async () => {
    const cartItem = {
      email,
      productId: product.productId,
      quantity: 1, // Default quantity
      productName: product.productName,
      price: product.price,
      image: product.image,
    };

    try {
      await addProductToCart(cartItem);
      alert("Product added to cart!");
    } catch (error) {
      alert("Failed to add product to cart.");
    }
  };

  if (!product) {
    return <p>Loading...</p>;
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
          <p>{product.description}</p>
          <Dropdown>
            <Dropdown.Toggle variant="outline-success" id="dropdown-basic" style={{ width: "50%" }}>
              Size
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <p>Stock: {product.quantity}</p>
          <button className="btn btn-primary" onClick={handleAddToCart}>
            Add to Cart
          </button>
          <p className="mt-3">
            Logged in as: <strong>{email}</strong>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
