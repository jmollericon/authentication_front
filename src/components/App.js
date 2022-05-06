import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Navbar from './Navbar/Navbar';

import './App.css';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </div>
  );
}

export default App;
