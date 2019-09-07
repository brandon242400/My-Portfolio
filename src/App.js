import React from 'react';
import Intro from './components/Intro';
import NavBar from './components/NavBar';
import Skills from './components/Skills';
import Projects from './components/Projects';
import './App.css';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Intro />
      <div id='skills-section'></div>
      <Skills />
      <div id='projects-section'></div>
      <Projects />
    </div>
  );
}

export default App;
