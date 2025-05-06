import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    document.body.className = isLight ? 'light-mode' : '';
  }, [isLight]);

  const toggleTheme = () => {
    setIsLight(!isLight);
  };

  return (
    <nav className="navbar">
      <div className="logo">MyPortfolio</div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <button onClick={toggleTheme} id="theme-toggle">
        {isLight ? '☀️' : '🌙'}
      </button>
    </nav>
  );
};

export default Navbar;
