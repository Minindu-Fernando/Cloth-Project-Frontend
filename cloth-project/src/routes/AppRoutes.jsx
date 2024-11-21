import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import SignUpPage from '../pages/SignUpPage';
import SignInPage from '../pages/SignInPage';
import HomePagepractice from '../pages/HomePagepractice';
import Category from '../pages/Category';
import AddProduct from '../assets/components/AddProduct';
import ProductDetails from '../assets/components/ProductDetails';
import AdminPage from '../pages/AdminPage';
import ViewAllProduct from '../pages/ViewAllProduct';
import UpdateProduct from '../assets/components/UpdateProduct';
import ProductsPage from '../pages/ProductsPage';
import Cart from '../assets/components/Cart';
import SignUpAdmin from '../assets/components/SignUpAdmin';
import AdminSignIn from '../assets/components/AdminSignIn';
import AddNewArrival from '../assets/components/AddNewArrival';
import ViewAllNewArrival from '../assets/components/ViewAllNewArrival';
import UpdateArrival from '../assets/components/UpdateArrival';
import ProtectedRoute from './ProtectedRoute';

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
            <Route path="/add-new-arrival" element={<AddNewArrival/>} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/admin" element={<AdminPage/>} />
            <Route path="/view-all-products" element={<ViewAllProduct/>} />
            <Route path="/view-all-new-arrival" element={<ViewAllNewArrival/>} />
            <Route path="/update-product/:id" element={<UpdateProduct/>} />
            <Route path="/update-new-arrival/:id" element={<UpdateArrival/>} />
            <Route path="/products/search" element={<ProductsPage />} /> {/* Add this route */}
            <Route path="/cart" element={<Cart/>} />
            <Route path="/admin-signup" element={<SignUpAdmin/>} />
            <Route path="/admin-signin" element={<AdminSignIn/>} />

                    {/* Protected Routes */}
        <Route path="/cart" element={ <ProtectedRoute><Cart /></ProtectedRoute> } />

          </Routes>
        </Router>
      );
}
