export const registerCustomer = async (customerData) => {
  try {
    const response = await fetch('http://localhost:8080/customer/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(customerData),
    });

    if (response.status === 201) {
      return { success: true };
    } else if (response.status === 409) {
      const message = await response.text();
      return { success: false, message };
    } else {
      return { success: false, message: 'Registration failed. Please try again.' };
    }
  } catch (error) {
    console.error('Error:', error);
    return { success: false, message: 'An error occurred. Please try again later.' };
  }
};