import React from 'react';

import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icon">
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
          <img src="img/facebook.png" alt="Facebook" />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noreferrer">
          <img src="img/twitter.png" alt="Twitter" />
        </a>
        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
          <img src="img/youtube.png" alt="YouTube" />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <img src="img/instagram.png" alt="Instagram" />
        </a>
      </div>
      <p className="footer-text">&copy; 2022 All Rights Reserved</p>
    </footer>
  )
}

export default Footer;
