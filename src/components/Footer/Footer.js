import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <nav className="footer-nav">
          <ul className="footer-nav-list">
            <li className="footer-nav-item">
              <a href="/" className="footer-nav-link">Home</a>
            </li>
            <li className="footer-nav-item">
              <a href="/catalog" className="footer-nav-link">Catalog</a>
            </li>
            <li className="footer-nav-item">
              <a href="/favorites" className="footer-nav-link">Favorites</a>
            </li>
            <li className="footer-nav-item">
              <a href="/cart" className="footer-nav-link">Cart</a>
            </li>
            <li className="footer-nav-item">
              <a href="/order" className="footer-nav-link">Order</a>
            </li>
          </ul>
        </nav>
        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} My Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;