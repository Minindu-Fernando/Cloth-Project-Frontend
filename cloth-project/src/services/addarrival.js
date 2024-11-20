import axios from 'axios';

// Function to add a product
export const addProduct = async (product, image) => {
  const formData = new FormData();
  formData.append('product', JSON.stringify(product));
  formData.append('image', image);

  try {
    const response = await axios.post('http://localhost:8080/arrival/product', formData, {
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

