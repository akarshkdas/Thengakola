import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Handcrafts from './pages/Handcrafts';
import Skincare from './pages/Skincare';
import FoodProducts from './pages/FoodProducts';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './pages/Profile';
import Contact from './pages/Contact';

const App = () => (
    <Router >
        <Header />
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} /> {/* Create a Home component */}
            <Route path="/handcrafts" element={<Handcrafts />} />
            <Route path="/skin" element={<Skincare />} />
            <Route path="/food" element={<FoodProducts />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} /> {/* Route for Profile */}
            <Route path="/contact" element={<Contact/>} />
        </Routes>
        <Footer />
    </Router>
);

export default App;
