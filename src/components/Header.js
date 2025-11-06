import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaCar } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-container">
    
  <img
    src="/image 4.png" 
    alt="Yuva Ride Logo"
    className="w-10 h-10 object-cover"
    width={80}
  />
  


          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              <li><a href="#home" className="nav-link">Home</a></li>
              <li className="nav-dropdown">
                <a href="#services" className="nav-link">
                  Services <span className="dropdown-arrow">▼</span>
                </a>
                <ul className="dropdown-menu">
                  <li><a href="#book-ride">Book a Ride</a></li>
                  <li><a href="#share-ride">Share a Ride</a></li>
                  <li><a href="#corporate">Corporate Services</a></li>
                </ul>
              </li>
              {/* <li><a href="#how-it-works" className="nav-link">How It Works</a></li> */}
              <li><a href="#team" className="nav-link">Our Team</a></li>
              <li><a href="#about" className="nav-link">About Us</a></li>
              <li><a href="#contact" className="nav-link">Contact</a></li>
              <li><a href="#blog" className="nav-link">Blog</a></li>
              <li><a href="#legal" className="nav-link">Legal</a></li>
            </ul>
          </nav>
          
          <div className="nav-actions">
            <button className="btn btn-primary">Download App</button>
            <button className="menu-toggle" onClick={toggleMenu}>
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;