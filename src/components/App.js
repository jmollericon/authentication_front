import React, { useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Navbar/Navbar';
import HeroSection from './HeroSection/HeroSection';
import SignUp from './SignUp/SignUp';
import SignIn from './SignIn/SignIn';
import Footer from './Footer/Footer';

import './App.css';

const App = () => {
  const [loggedin, setLoggedin] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token')) || false;
    const user = JSON.parse(localStorage.getItem('user')) || false;

    setLoggedin(false);
    if (token) {
      setLoggedin(true);
      setUser(user);
    }
  }, [loggedin]);

  return (
    <div>
      <BrowserRouter>
        <Navbar loggedin={loggedin} setLoggedin={setLoggedin} />
        <Routes>
          <Route path='/' exact element={<HeroSection loggedin={loggedin} user={user} />} />
          <Route path='/signup' exact element={<SignUp setLoggedin={setLoggedin} />} />
          <Route path='/signin' exact element={<SignIn setLoggedin={setLoggedin} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
