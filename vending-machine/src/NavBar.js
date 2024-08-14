// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1>Welcome to the Vending Machine! What would you like to have?</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/chips">Chips</Link></li>
        <li><Link to="/soda">Soda</Link></li>
        <li><Link to="/candy">Candy</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;