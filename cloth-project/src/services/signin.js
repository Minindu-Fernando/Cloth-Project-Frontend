export const deleteCustomer = async (email, password) => {
    try {
      const response = await fetch(
        `http://localhost:8080/customer/delete?email=${email}&password=${password}`,
        { method: 'DELETE' }
      );
      const result = await response.text();
      if (response.ok) {
        return { success: true, message: 'Customer deleted successfully.' };
      } else {
        return { success: false, message: result };
      }
    } catch (error) {
      console.error('Error:', error);
      return { success: false, message: 'An error occurred. Please try again.' };
    }
  };