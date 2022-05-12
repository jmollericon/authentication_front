import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import CTA from '../CTA/CTA';

import './Navbar.css';

const Navbar = ({ setLoggedin, loggedin }) => {
  const navigate = useNavigate();

  const signout = async () => {
    try {
      const res = await axios.get('http://localhost:8002/api/signout');
      const { success } = res.data;

      if (success) {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        setLoggedin(false);
        navigate('/signin');
      }
    } catch (error) {
      console.log({error})
    }
  }

  return (
    <div className="main-header">
      <div className="logo-container">
        <Link to="/" className="link logo">Authentication app</Link>
      </div>
      <nav className="main-nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="link nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/blogs" className="link nav-link">Blogs</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="link nav-link">About</Link>
          </li>
          <li className="nav-item">
           {!loggedin && <CTA target='/signin'>Account</CTA>}
           {loggedin && <button onClick={signout} className="button-sign-out">Sign Out</button>}
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;
