import React from 'react'
import { Link } from 'react-router-dom';
import CTA from '../CTA/CTA';

import './Navbar.css';

const Navbar = () => {
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
            <CTA target='/signin'>
              Account
            </CTA>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;