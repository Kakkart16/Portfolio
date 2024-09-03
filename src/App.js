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
      <Navbar />
      <HomePage />
      <AboutPage />
      <SkillsPage />
      <ProjectsPage />
    </div>
  );
}

export default App;
