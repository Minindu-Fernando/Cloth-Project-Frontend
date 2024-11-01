export const registerCustomer = async (customerData) => {
    try {
      const response = await fetch('http://localhost:8080/customer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(customerData),
      });
      if (response.ok) {
        return { success: true };
      } else {
        return { success: false, message: 'Registration failed. Please try again.' };
      }
    } catch (error) {
      console.error('Error:', error);
      return { success: false, message: 'An error occurred. Please try again later.' };
    }
  };