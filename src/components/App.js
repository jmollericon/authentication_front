import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Navbar/Navbar';
import HeroSection from './HeroSection/HeroSection';
import SignUp from './SignUp/SignUp';
import Footer from './Footer/Footer';

import './App.css';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<HeroSection />} />
          <Route path='/signup' exact element={<SignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
