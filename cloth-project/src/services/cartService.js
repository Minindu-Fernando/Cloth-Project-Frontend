import axios from 'axios';

const API_BASE_URL = "http://localhost:8080/api/cart"; // Base URL for cart APIs

// Function to add a product to the cart
export const addProductToCart = async (cartItem) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/add`, cartItem);
    return response.data;
  } catch (error) {
    console.error("Error adding product to cart:", error);
    throw error;
  }
};

// Function to fetch the cart items by email
export const getCartByEmail = async (email) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/${email}`); // Use path variable
      return response.data;
    } catch (error) {
      console.error("Error fetching cart details:", error);
      throw error;
    }
  };
  
  // Function to update the quantity of a cart item
export const updateCartItem = async (id, quantity) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/${id}`, null, {
      params: { quantity },
    });
    return response.data;
  } catch (error) {
    console.error("Error updating cart item:", error);
    throw error;
  }
};

// Function to remove a cart item
export const removeCartItem = async (id) => {
  try {
    await axios.delete(`${API_BASE_URL}/${id}`);
  } catch (error) {
    console.error("Error removing cart item:", error);
    throw error;
  }
};

