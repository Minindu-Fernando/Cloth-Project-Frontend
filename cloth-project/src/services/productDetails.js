import axios from 'axios';

// Function to get product details by ID
export const getProductById = async (id) => {
  try {
    const response = await axios.get(`http://localhost:8080/products/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product details:', error);
    throw error;
  }
};