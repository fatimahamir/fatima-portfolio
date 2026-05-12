import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Hero from './sections/Hero';
import AboutMe from './sections/About';
import BackgroundLines from './components/BackgroundLines';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      
    
      <div className="full-screen-bg">
        <Navbar />
          <Hero/>
      </div>
      <AboutMe/>
      <Skills/>
       <Projects/>
       <Contact/>
       <Footer/>
      
    </Router>
  );
}

export default App;