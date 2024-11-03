import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import SignUpPage from '../pages/SignUpPage';
import SignInPage from '../pages/SignInPage';
import HomePagepractice from '../pages/HomePagepractice';

export default function AppRoutes() {
    return (
        <Router>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/signup" element={<SignUpPage/>} />
            <Route path="/signin" element={<SignInPage/>} />
            <Route path="/homePage" element={<HomePagepractice/>} />

          </Routes>
        </Router>
      );
}
