import React, { useState } from 'react';
import './styles.css'; 
import ContactPopup from '../ContactPopup/index';


const Navbar = () => {

  const [isContactOpen, setIsContactOpen] = useState(false);

  const toggleContactPopup = () => {
    setIsContactOpen(!isContactOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">TK</a>
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li>
            <button className="contact-btn" onClick={toggleContactPopup}>Contact</button>
        </li>
      </ul>
      <ContactPopup isOpen={isContactOpen} onClose={toggleContactPopup} />
    </nav>
  );
};

export default Navbar;