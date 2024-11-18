// src/services/products.js
export const fetchProducts = async (keyword) => {
    try {
      const response = await fetch(`http://localhost:8080/products/search?keyword=${keyword}`);
      if (!response.ok) {
        throw new Error('No products found.');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };
  