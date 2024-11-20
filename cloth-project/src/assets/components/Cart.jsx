import React, { useEffect, useState } from 'react';
import { getCartByEmail } from '../../services/cartService';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      setEmail(storedEmail);

      const fetchCart = async () => {
        try {
          const items = await getCartByEmail(storedEmail);
          setCartItems(items);
        } catch (error) {
          console.error("Error fetching cart:", error);
        }
      };

      fetchCart();
    }
  }, []);

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id}>
          <h4>{item.productName}</h4>
          <p>Price: Rs {item.price}</p>
          <p>Quantity: {item.quantity}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
