import React from 'react';
import './styles.css'; 
import aboutPic from '../../assets/images/about_pic.jpeg';
import cf from '../../assets/icons/codeforces.svg';
import cc from '../../assets/icons/codechef.svg';
import lc from '../../assets/icons/leet-code.svg';


const AboutPage = () => {
    return (
      <div className="about-page" id="about">
        <div className="about-text">
          <h1>More About Me!!!</h1>
          <p>
            I'm a resident of Uttarakhand, I live in a small city called Kichha in the Udham Singh Nagar District of Uttarakhand.
          </p>
          <p>
            I completed by bachelor's degree in computer science and engineering from <b>Dr. A.P.J. Abdul Kalam Technical University</b>. 
            I have prior internship experience at <b>Dexpert Systems</b> as a software development intern.
          </p>
          <p>
            I have participated in over 200 competitive contests and reached <b>Expert</b> rank at Codeforces, <b>5 ⭐</b> rating on CodeChef and <b>Knight</b> status on Leetcode.
          </p>
          <div className="profile-icons">
          <a
            href="https://codeforces.com/profile/Kakkart16"
            className="profile-icon"
            rel="noopener noreferrer"
            title="Codeforces"
          >
            <img className="ic" src={cf} alt="CF" />
          </a>
          <a
            href="https://leetcode.com/u/kakkart16/"
            className="profile-icon"
            rel="noopener noreferrer"
            title="Leetcode"
          >
            <img className="ic" src={lc} alt="CF"/>
          </a>
          <a
            href="https://www.codechef.com/users/kakkart_16"
            className="profile-icon"
            rel="noopener noreferrer"
            title="Codechef"
          >
            <img className="ic" src={cc} alt="CF"/>
          </a>
          {/* Add more icons as needed */}
        </div>
        </div>
        <div className="about-image">
          <img src={aboutPic} alt="Tushar" className="about-pic" />
        </div>
      </div>
    );
  };
  
  export default AboutPage;