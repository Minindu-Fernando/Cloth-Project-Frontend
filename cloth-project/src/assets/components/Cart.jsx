import React, { useEffect, useState } from "react";
import { getCartByEmail, updateCartItem, removeCartItem } from "../../services/cartService";
import { placeOrder } from "../../services/orderService"; // Import order service
import { Container, Table, Button } from "react-bootstrap";
import "./cart.css";
import DefaultNavbar from "./DefaultNavbar";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [email, setEmail] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [shippingAddress, setShippingAddress] = useState("");
  const [paymentInformation, setPaymentInformation] = useState("");

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      setEmail(storedEmail);

      const fetchCart = async () => {
        try {
          const items = await getCartByEmail(storedEmail);
          console.log(items);
          
          const aggregatedItems = aggregateCartItems(items);
          setCartItems(aggregatedItems);
          calculateTotal(aggregatedItems);
          console.log(aggregatedItems);
          
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

  const handleQuantityChange = async (id, newQuantity) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCart);
    calculateTotal(updatedCart);

    try {
      await updateCartItem(id, newQuantity);
    } catch (error) {
      console.error("Error updating cart item:", error);
    }
  };
  

  const handleRemoveItem = async (id) => {
    const filteredCart = cartItems.filter((item) => item.id !== id); // Filter by `id`
    setCartItems(filteredCart);
    calculateTotal(filteredCart);
  
    try {
      await removeCartItem(id); // Use the cart item's `id`
    } catch (error) {
      console.error("Error removing cart item:", error);
    }
  };
  

  const handlePlaceOrder = async () => {
    if (!shippingAddress || !paymentInformation) {
      alert("Please provide shipping address and payment information.");
      return;
    }
  
    try {
      const response = await placeOrder(email, shippingAddress, paymentInformation);
      console.log("Order placed successfully:", response);
      alert("Order placed successfully!");
      window.location.reload(); // Forces a page reload

    } catch (error) {
      console.error("Error placing order:", error.response?.data || error.message);
      alert(`Failed to place order: ${error.response?.data || error.message}`);
    }
  };
  

  if (cartItems.length === 0) {
    return (
      <Container className="cart-empty">
        <h3>Your Cart is Empty</h3>
        <Button variant="primary" onClick={() => window.location.replace("/products/search")}>
          Continue Shopping
        </Button>
      </Container>
    );
  }

  return (
   <>
   <DefaultNavbar/>
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
                        item.id,
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
                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
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
                  onClick={() => handleRemoveItem(item.id)}
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
        <div>
          <label>Shipping Address:</label>
          <input
            type="text"
            value={shippingAddress}
            onChange={(e) => setShippingAddress(e.target.value)}
            placeholder="Enter your shipping address"
            className="form-control"
          />
        </div>
        <div>
          <label>Payment Information:</label>
          <input
            type="text"
            value={paymentInformation}
            onChange={(e) => setPaymentInformation(e.target.value)}
            placeholder="Enter payment information"
            className="form-control"
          />
        </div>
        <Button variant="success" size="md" onClick={handlePlaceOrder}>
          Place Order
        </Button>
      </div>
    </Container>
    </> 
  );
};

export default Cart;
