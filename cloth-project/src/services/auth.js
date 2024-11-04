import axios from './axios'; // Update import

const API_URL = '/'; // Use the base URL set in axios.js

const login = async (email, password) => {
    const response = await axios.post(`${API_URL}login`, { email, password });
    return response;
};

const AuthService = {
    login,
};

export default AuthService;

export const deleteCustomer = async (email, password) => {
    const response = await axios.delete("/delete-customer", {
        data: { email, password },
    });
    return response;
};