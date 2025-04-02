import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import Layout from './pages/Layout';
import AboutPage from './pages/About';
import ContactUs from './pages/Contactus';
import React from 'react';

function App() {
  return (
   
    <Router>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactUs />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;