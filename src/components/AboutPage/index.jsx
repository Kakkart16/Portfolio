import React from 'react';
import './styles.css'; 
import aboutPic from '../../assets/images/about_pic.jpeg';


const AboutPage = () => {
    return (
      <div className="about-page" id="about">
        <div className="about-text">
          <h1>More About Me!!!</h1>
          <p>
            I'm a resident of Uttarakhand, I live in a small city called Kichha in the Udham Singh Nagar District of Uttarakhand.
          </p>
          <p>
            I completed by bachelor's degree in computer science and engineering from Dr. A.P.J. Abdul Kalam Technical University. 
            I have prior internship experience at Dexpert Systems as a software development intern.
          </p>
          <p>
            I have participated in over 200 competitive contests and reached expert rank at Codeforces, 5 star rating on CodeChef and Knight status on Leetcode.
          </p>
        </div>
        <div className="about-image">
          <img src={aboutPic} alt="Tushar" className="about-pic" />
        </div>
      </div>
    );
  };
  
  export default AboutPage;