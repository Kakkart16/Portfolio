import React from 'react';
import './styles.css'; 

// Import images directly
import cpp from '../../assets/icons/cpp.png';
import python from '../../assets/icons/python.png';
import javascript from '../../assets/icons/javascript.png';
import sql from '../../assets/icons/sql.png';
import django from '../../assets/icons/django.png';
import flask from '../../assets/icons/flask.png';
import react from '../../assets/icons/react.png';
import redis from '../../assets/icons/redis.png';
import git from '../../assets/icons/git.png';
import aws from '../../assets/icons/aws.png';
import linux from '../../assets/icons/linux.png';
import docker from '../../assets/icons/docker.png';

// Use the imported variables in the skills array
const skills = [
  { name: 'C++', logo: cpp },
  { name: 'Python', logo: python },
  { name: 'JavaScript', logo: javascript },
  { name: 'SQL', logo: sql },
  { name: 'Django', logo: django },
  { name: 'Flask', logo: flask },
  { name: 'React', logo: react },
  { name: 'Redis', logo: redis },
  { name: 'Git', logo: git },
  { name: 'AWS', logo: aws },
  { name: 'Linux', logo: linux },
  { name: 'Docker', logo: docker },
  // Add more skills as needed
];


const SkillsPage = () => {
  return (
    <div className="skills-page" id="skills">
      <h1 className="skills-title">My Skills</h1>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-tile" key={index}>
            <img src={skill.logo} alt={`${skill.name}`} className="skill-logo" />
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsPage;