import axios from 'axios';

// Function to add a product
export const addProduct = async (product, image) => {
  const formData = new FormData();
  formData.append('product', JSON.stringify(product));
  formData.append('image', image);

  try {
    const response = await axios.post('http://localhost:8080/product', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error adding product:', error);
    throw error;
  }
};

// Function to get all products
export const getAllProducts = async () => {
    try {
      const response = await axios.get("http://localhost:8080/products");
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  };

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

  // Function to search product by ID
  export const searchProducts = async (keyword) => {
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


    // Function to delete product by ID
  export const deleteProductById = async (productId) => {
    try {
      await axios.delete(`http://localhost:8080/delete-product/${productId}`);
    } catch (error) {
      console.error("Error deleting product:", error);
      throw error;
    }
  };

    // Function to update product by ID
  export const updateProductById = async (productId, productData) => {
    const formData = new FormData();
    formData.append("productJson", JSON.stringify({
        productName: productData.productName,
        category: productData.category,
        description: productData.description,
        quantity: productData.quantity,
        price: productData.price,
    }));

    if (productData.image instanceof File) {
        formData.append("image", productData.image);
    }

    return await axios.put(`http://localhost:8080/update-product-by/${productId}`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
};