import React from 'react';
import Intro from './components/Intro';
import NavBar from './components/NavBar';
import MobileNav from './components/MobileNav';
import Skills from './components/Skills';
import Projects from './components/Projects';
import NavLinks from './components/NavLinks';
import './App.css';
import './App-screen.css';
import './App-animations.css';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <MobileNav />
      <NavLinks />
      <Intro />
      <div id='skills-section'></div>
      <Skills />
      <div id='projects-section'></div>
      <Projects />
    </div>
  );
}

export default App;

