import React, { useState } from 'react';
import './styles.css';

import stockxplore from '../../assets/images/stockxplore.png';
import fastlane from '../../assets/images/fastlane.png';
import automailx from '../../assets/images/automailx.jpeg';
import mrs from '../../assets/images/mrs.png';


const projects = [
    {
      title: 'StockXplore',
      image: stockxplore,
      description: 'A real-time stock price tracker application built on django framework with integration of celery and redis server.',
      githubLink: 'https://github.com/Kakkart16/Stock-Price-Tracker'
    },
    {
      title: 'FastLane',
      image: fastlane,
      description: "A python based minimalistic speed typing test platform built using the python tkinter library. It tracks the user's speed in words per min (WPM) and characters per min (CPM).",
      githubLink: 'https://github.com/Kakkart16/Speed-Typing-Test'
    },
    {
      title: 'AutoMailX',
      image: automailx,
      description: 'An automated email parser using python and django. It automatically parse the incoming mails in outlook and fetch the important data and'+ 
        ' store it in the datbase.',
      githubLink: 'https://github.com/Kakkart16/'
    },
    {
        title: 'Movie Recommendation System',
        image: mrs,
        description: "A movie recommendation app. The model finds the top 10 movies realted to user's input using cosine similarity and on the basis of cast, crew and genre.",
        githubLink: 'https://github.com/Kakkart16/Movie-Recommendation-System'
    },
    
    // Add more projects as needed
];



const ProjectsPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0); 

  const goToNextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const goToPreviousProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
  const nextIndex = (currentIndex + 1) % projects.length;

return (
    <div className="projects-page" id="projects">
        <h1 className="projects-title">My Projects</h1>
        <div className="carousel-container">
            <button className="nav-button left" onClick={goToPreviousProject}> ❮ </button>
            <div className="project-tile prev-tile">
                <img
                  src={projects[prevIndex].image}
                  alt={projects[prevIndex].title}
                  className="project-image"
                />
            </div>
            <div className="project-tile main-tile" onClick={() => window.open(projects[currentIndex].githubLink, '_blank')}>
              <div className="project-image-container">
                <img
                  src={projects[currentIndex].image}
                  alt={projects[currentIndex].title}
                  className="project-image"
                />
                <div className="project-description">
                  {projects[currentIndex].description}
                </div>
              </div>
              <h3 className="project-title">{projects[currentIndex].title}</h3>
            </div>
            <div className="project-tile next-tile">
              <img
                src={projects[nextIndex].image}
                alt={projects[nextIndex].title}
                className="project-image"
              />
            </div>
            <button className="nav-button right" onClick={goToNextProject}> ❯ </button>
        </div>
    </div>
  );
};

export default ProjectsPage;
