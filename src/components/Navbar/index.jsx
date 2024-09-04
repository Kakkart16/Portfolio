import React, { useState } from 'react';
import './styles.css'; 
import ContactPopup from '../ContactPopup/index';


const Navbar = () => {

  const [isContactOpen, setIsContactOpen] = useState(false);

  const toggleContactPopup = () => {
    setIsContactOpen(!isContactOpen);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">TK</a>
      </div>
      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li>
            <button className="contact-btn" onClick={toggleContactPopup}>Contact</button>
        </li>
      </ul>
      <div className="navbar-hamburger" onClick={toggleMenu}>
        <span className="hamburger-icon">&#9776;</span>
      </div>
      <ContactPopup isOpen={isContactOpen} onClose={toggleContactPopup} />
    </nav>
  );
};

export default Navbar;