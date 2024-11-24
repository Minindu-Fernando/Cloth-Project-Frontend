import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/orders"; // Base URL for order APIs

// Function to place an order
export const placeOrder = async (email, shippingAddress, paymentInformation) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/place`,
      null, // No request body
      {
        params: { email, shippingAddress, paymentInformation }, // Query parameters
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error placing order:", error);
    throw error;
  }
};
