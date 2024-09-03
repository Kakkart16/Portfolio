import React from 'react';
import './styles.css'; 
import profilePic from '../../assets/images/photo.jpeg';

const HomePage = () => {
  return (
    <div className="home-page" id="home">
      <div className="intro-image">
        <img src={profilePic} alt="TK" className="profile-pic" />
      </div>
      <div className="intro-text">
        <h1>Hi,</h1>
        <h1>I am <span className="highlight">Tushar Kakkar</span></h1>
        <p>
          Software developer with expertise in C++, Python and JavaScript. I have experience working with frameworks like Django, Flask and React and also have a strong background in competitive programming.
        </p>
        <a href="https://drive.google.com/file/d/1_q8hLmnf2mbjgg09xY0fI7FJ6D2WTZTE/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="resume-btn">
          Resume
        </a>
      </div>
    </div>
  );
};

export default HomePage;
