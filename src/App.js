import React from 'react';
import Navbar from './components/Navbar'; 
import './App.css';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import SkillsPage from './components/SkillsPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <AboutPage />
      <SkillsPage />
    </div>
  );
}

export default App;
