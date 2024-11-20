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
  
