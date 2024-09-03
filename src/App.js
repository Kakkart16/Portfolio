import React from 'react';
import Navbar from './components/Navbar'; 
import './App.css';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <AboutPage />
    </div>
  );
}

export default App;
