import axios from "axios";

export const deleteProductById = async (productId) => {
    try {
      await axios.delete(`http://localhost:8080/delete-product/${productId}`);
    } catch (error) {
      console.error("Error deleting product:", error);
      throw error;
    }
  };