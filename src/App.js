import React from 'react';
import Navbar from './components/Navbar'; 
import './App.css';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import SkillsPage from './components/SkillsPage';
import ProjectsPage from './components/ProjectsPage';

function App() {
  return (
    <div className="App">
      <div className='nav-container'>
        <Navbar />
      </div>
      <div className='section-container'>
        <HomePage />
        <AboutPage />
        <SkillsPage />
        <ProjectsPage />
      </div>
    </div>
  );
}

export default App;
