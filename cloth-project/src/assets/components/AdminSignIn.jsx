import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import axios from 'axios';

const AdminSignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post(`http://localhost:8080/admin/login?email=${email}&password=${password}`);

      if (response.status === 200) {
        setMessage('Login successful!');
        alert("You are logging success!");
        navigate('/admin');
        // Perform additional actions, like redirecting the admin
      }
    } catch (error) {
      if (error.response) {
        // Extract a meaningful message from the error object
        setMessage(error.response.data.message || 'Login failed. Please check your credentials.');
      } else {
        setMessage('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Admin Sign In</h2>
      <form onSubmit={handleSignIn} className="mx-auto" style={{ maxWidth: '400px' }}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email Address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Sign In</button>
      </form>
      {message && <p className="mt-3 text-center">{message}</p>}
    </div>
  );
};

export default AdminSignIn;
