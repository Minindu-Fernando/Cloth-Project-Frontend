import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import SignUpPage from '../pages/SignUpPage';
import SignInPage from '../pages/SignInPage';
import HomePagepractice from '../pages/HomePagepractice';
import Category from '../pages/Category';
import AddProduct from '../assets/components/AddProduct';
import ProductDetails from '../assets/components/ProductDetails';

export default function AppRoutes() {
    return (
        <Router>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/signup" element={<SignUpPage/>} />
            <Route path="/signin" element={<SignInPage/>} />
            <Route path="/homePage" element={<HomePagepractice/>} />
            <Route path="/category" element={<Category/>} />
            <Route path="/addProducts" element={<AddProduct/>} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
        </Router>
      );
}
