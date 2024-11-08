import axios from "axios";

// Function to fetch all products
export const getAllProducts = async () => {
  try {
    const response = await axios.get("http://localhost:8080/products");
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
