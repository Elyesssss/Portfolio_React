import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Blocs from './components/Blocs';
import Contact from './components/Contact';
import CompetencePage from './components/CompetencePage';

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Blocs />
      <Contact />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-background text-text">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/competence/:name" element={<CompetencePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;