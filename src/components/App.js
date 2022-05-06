import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Navbar/Navbar';
import HeroSection from './HeroSection/HeroSection';
import './App.css';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<HeroSection />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
