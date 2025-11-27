import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link 
            to="/about" 
            className={`navbar-link ${isActive('/about') || isActive('/') ? 'active' : ''}`}
          >
            About
          </Link>
        </li>
        <li className="navbar-item">
          <Link 
            to="/resume" 
            className={`navbar-link ${isActive('/resume') ? 'active' : ''}`}
          >
            Resume
          </Link>
        </li>
        <li className="navbar-item">
          <Link 
            to="/portfolio" 
            className={`navbar-link ${isActive('/portfolio') ? 'active' : ''}`}
          >
            Portfolio
          </Link>
        </li>
        <li className="navbar-item">
          <Link 
            to="/blog" 
            className={`navbar-link ${isActive('/blog') ? 'active' : ''}`}
          >
            Blog
          </Link>
        </li>
        <li className="navbar-item">
          <Link 
            to="/contact" 
            className={`navbar-link ${isActive('/contact') ? 'active' : ''}`}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

