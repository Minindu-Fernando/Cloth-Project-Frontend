import React, { useEffect, useState } from "react";
import { getCartByEmail, updateCartItem, removeCartItem } from "../../services/cartService";
import { Container, Table, Button } from "react-bootstrap";
import "./cart.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [email, setEmail] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      setEmail(storedEmail);

      const fetchCart = async () => {
        try {
          const items = await getCartByEmail(storedEmail);
          const aggregatedItems = aggregateCartItems(items);
          setCartItems(aggregatedItems);
          calculateTotal(aggregatedItems);
        } catch (error) {
          console.error("Error fetching cart:", error);
        }
      };

      fetchCart();
    }
  }, []);

  const aggregateCartItems = (items) => {
    const aggregated = items.reduce((acc, item) => {
      const existingItem = acc.find((i) => i.productId === item.productId);
      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        acc.push({ ...item });
      }
      return acc;
    }, []);
    return aggregated;
  };

  const calculateTotal = (items) => {
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotalPrice(total);
  };

  const handleQuantityChange = async (productId, newQuantity) => {
    const updatedCart = cartItems.map((item) =>
      item.productId === productId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCart);
    calculateTotal(updatedCart);

    try {
      await updateCartItem(productId, newQuantity);
    } catch (error) {
      console.error("Error updating cart item:", error);
    }
  };

  const handleRemoveItem = async (productId) => {
    const filteredCart = cartItems.filter((item) => item.productId !== productId);
    setCartItems(filteredCart);
    calculateTotal(filteredCart);

    try {
      await removeCartItem(productId);
    } catch (error) {
      console.error("Error removing cart item:", error);
    }
  };

  if (cartItems.length === 0) {
    return (
      <Container className="cart-empty">
        <h3>Your Cart is Empty</h3>
        <Button variant="primary" onClick={() => window.location.replace("/")}>
          Continue Shopping
        </Button>
      </Container>
    );
  }

  return (
    <Container className="cart-container">
      <h2>Your Cart</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Product</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.productId}>
              <td>
                <img
                  src={item.image}
                  alt={item.productName}
                  className="cart-product-image"
                />
              </td>
              <td>{item.productName}</td>
              <td>Rs {item.price}</td>
              <td>
                <div className="quantity-controls">
                  <Button
                    variant="outline-secondary"
                    size="sm"
                    onClick={() =>
                      handleQuantityChange(
                        item.productId,
                        Math.max(1, item.quantity - 1)
                      )
                    }
                  >
                    -
                  </Button>
                  <span>{item.quantity}</span>
                  <Button
                    variant="outline-secondary"
                    size="sm"
                    onClick={() => handleQuantityChange(item.productId, item.quantity + 1)}
                  >
                    +
                  </Button>
                </div>
              </td>
              <td>Rs {item.price * item.quantity}</td>
              <td>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleRemoveItem(item.productId)}
                >
                  Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="cart-summary">
        <h4>Total Items: {cartItems.length}</h4>
        <h4>Total Price: Rs {totalPrice}</h4>
        <Button variant="success" size="md">
          Proceed to Checkout
        </Button>
      </div>
    </Container>
  );
};

export default Cart;
