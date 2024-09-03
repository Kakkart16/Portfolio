import React from 'react';
import './homePage.css'; 
import profilePic from '../../assets/images/photo.jpeg';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="intro-image">
        <img src={profilePic} alt="Tushar" className="profile-pic" />
      </div>
      <div className="intro-text">
        <h1>Welcome to My Portfolio</h1>
        <p>
          Hello! I'm <b>Tushar Kakkar</b>, a passionate software developer with expertise in C++, Python, and JavaScript. I have experience working with frameworks like Django, Flask and React and also have a strong background in competitive programming.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
