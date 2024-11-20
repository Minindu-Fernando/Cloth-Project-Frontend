import axios from "axios";

export const deleteProductById = async (productId) => {
    try {
      await axios.delete(`http://localhost:8080/arrival/delete-product/${productId}`);
    } catch (error) {
      console.error("Error deleting product:", error);
      throw error;
    }
  };

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

    return await axios.put(`http://localhost:8080/arrival/update-product-by/${productId}`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
};

export const getAllProducts = async () => {
    try {
      const response = await axios.get("http://localhost:8080/arrival/products");
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  };
  