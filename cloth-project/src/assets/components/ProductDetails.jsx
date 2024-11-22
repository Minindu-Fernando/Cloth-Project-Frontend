import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import { getProductById } from "../../services/productService";
import { addProductToCart } from "../../services/cartService";
import LineComponent from "./LineComponent";
import "./productdetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [cartQuantity, setCartQuantity] = useState(1); // Tracks quantity to add to cart
  const navigate = useNavigate();

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
        setMessage("Failed to load product details.");
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = async () => {
    if (!email) {
      alert("Please sign in to add items to your cart.");
      navigate("/signin");
      return;
    }

    if (!selectedSize) {
      alert("Please select a size before adding to cart.");
      return;
    }

    if (cartQuantity > product.quantity) {
      alert("Insufficient stock available.");
      return;
    }

    const cartItem = {
      email,
      productId: product.productId,
      quantity: cartQuantity,
      productName: product.productName,
      price: product.price,
      image: product.image,
      size: selectedSize,
    };

    try {
      await addProductToCart(cartItem);
      alert("Product added to cart!");

      // Update available stock in the frontend
      setProduct((prevProduct) => ({
        ...prevProduct,
        quantity: prevProduct.quantity - cartQuantity,
      }));
      setCartQuantity(1); // Reset cart quantity after adding
    } catch (error) {
      alert("Failed to add product to cart. Please try again.");
      console.error("Error adding product to cart:", error);
    }
  };

  const incrementCartQuantity = () => {
    if (cartQuantity < product.quantity) {
      setCartQuantity(cartQuantity + 1);
    }
  };

  const decrementCartQuantity = () => {
    if (cartQuantity > 1) {
      setCartQuantity(cartQuantity - 1);
    }
  };

  if (message) {
    return <p className="text-danger">{message}</p>;
  }

  if (!product) {
    return <p>Loading product details...</p>;
  }

  return (
    <>
      <LineComponent text="ADD TO YOUR CART" className="line" />
      <Container fluid className="product-details-container">
        <Row>
          <Col md={6}>
            <img
              src={product.image}
              alt={product.productName}
              className="product-image"
            />
          </Col>
          <Col>
            <h2>{product.productName}</h2>
            <h4>Price: Rs {product.price}</h4>
            <p>{product.description}</p>
            <Dropdown onSelect={(e) => setSelectedSize(e)}>
              <Dropdown.Toggle
                variant="outline-success"
                id="dropdown-basic"
                style={{ width: "50%" }}
              >
                {selectedSize || "Select Size"}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {["Small", "Medium", "Large"].map((size) => (
                  <Dropdown.Item key={size} eventKey={size}>
                    {size}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            <p>
              Stock:{" "}
              {product.quantity > 0 ? (
                product.quantity
              ) : (
                <span className="text-danger">Out of Stock</span>
              )}
            </p>
            {product.quantity > 0 && (
              <div className="quantity-controls">
                <button
                  className="btn btn-secondary me-2"
                  onClick={decrementCartQuantity}
                  disabled={cartQuantity === 1}
                  style={{ width: "10%" }}
                >
                  -
                </button>
                <span>{cartQuantity}</span>
                <button
                  className="btn btn-secondary ms-2"
                  onClick={incrementCartQuantity}
                  disabled={cartQuantity === product.quantity}
                  style={{ width: "10%" }}
                >
                  +
                </button>
              </div>
            )}
            <button
              className="btn btn-primary mt-3"
              onClick={handleAddToCart}
              disabled={product.quantity === 0}
            >
              Add to Cart
            </button>
            <p className="mt-3">
              Logged in as: <strong>{email || "Guest"}</strong>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductDetails;
