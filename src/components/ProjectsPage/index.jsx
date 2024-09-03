import React, { useState } from 'react';
import './styles.css';

import img1 from '../../assets/images/img1.jpg';
import img2 from '../../assets/images/img2.jpg';
import img3 from '../../assets/images/img3.jpg';
import img4 from '../../assets/images/img4.jpg';


const projects = [
    {
      title: 'StockXplore',
      image: img1,
      description: 'A real-time stock price tracker application using celery and redis server',
      githubLink: 'https://github.com/Kakkart16/Stock-Price-Tracker'
    },
    {
      title: 'FastLane',
      image: img2,
      description: 'A python based minimalistic speed typing test platform.',
      githubLink: 'https://github.com/Kakkart16/Speed-Typing-Test'
    },
    {
      title: 'AutoMailX',
      image: img3,
      description: 'An automated email parser using python',
      githubLink: 'https://github.com/Kakkart16/'
    },
    {
        title: 'Movie Recommendation System',
        image: img4,
        description: 'A movie recommendation app based on user input.',
        githubLink: 'https://github.com/Kakkart16/Movie-Recommendation-System'
    },
    {
        title: 'AutoMailX',
        image: img3,
        description: 'An automated email parser using python',
        githubLink: 'https://github.com/Kakkart16/'
    },
    {
        title: 'Movie Recommendation System',
        image: img4,
        description: 'A movie recommendation app based on user input.',
        githubLink: 'https://github.com/Kakkart16/Movie-Recommendation-System'
    },
    {
        title: 'AutoMailX',
        image: img3,
        description: 'An automated email parser using python',
        githubLink: 'https://github.com/Kakkart16/'
    },
    {
        title: 'Movie Recommendation System',
        image: img4,
        description: 'A movie recommendation app based on user input.',
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

return (
    <div className="projects-page" id="projects">
        <h1 className="projects-title">My Projects</h1>
        <div className="carousel-container">
            <button className="nav-button left" onClick={goToPreviousProject}> ❮ </button>
            <div className="project-tile" onClick={() => window.open(projects[currentIndex].githubLink, "_blank")}>
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
            <button className="nav-button right" onClick={goToNextProject}> ❯ </button>
        </div>
    </div>
  );
};

export default ProjectsPage;
