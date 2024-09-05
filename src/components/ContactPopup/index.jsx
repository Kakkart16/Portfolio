import React from 'react';
import './styles.css';
import linkedin from '../../assets/icons/linkedin.png';
import github from '../../assets/icons/github.png';
import gmailLogo from '../../assets/icons/gmail.png';

const ContactPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="contact-popup-overlay" onClick={onClose}>
      <div className="contact-popup" onClick={(e) => e.stopPropagation()}>
        <h2>Contact Me:</h2>
        <div className="contact-icons">
          <a
            href="mailto:kakkartushar.16@gmail.com"
            className="contact-icon"
            title="Email"
            style={{ color: 'yellow' }} // Email color (Gmail red)
          >
            <img src={gmailLogo} alt="Gmail" style={{ width: '50px' }} />
          </a>
          <a
            href="https://www.linkedin.com/in/kakkar-tushar/"
            className="contact-icon"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            style={{ color: '#0077B5' }} // LinkedIn blue
          >
            <img src={linkedin} alt="Gmail" style={{ width: '50px' }} />
          </a>
          <a
            href="https://github.com/Kakkart16"
            className="contact-icon"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            style={{ color: '#171515' }} // GitHub black
          >
           <img src={github} alt="Gmail" style={{ width: '50px' }} /> 
          </a>
          {/* Add more icons as needed */}
        </div>
        {/* <button className="close-button" onClick={onClose}>
          Close
        </button> */}
      </div>
    </div>
  );
};

export default ContactPopup;
