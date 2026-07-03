import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import './App.css';
import './animations.js';

function App() {
  return (
    <div className="App">
      <ParticleBackground />

      {/* HUD corners decorativos */}
      <div className="hud" aria-hidden="true">
        <div className="hud-corner hud-tl" />
        <div className="hud-corner hud-tr" />
        <div className="hud-corner hud-bl" />
        <div className="hud-corner hud-br" />
      </div>

      {/* Sys status dot */}
      <div className="sys-status" aria-hidden="true">
        <div className="sys-dot" />
        <span>SYS_ONLINE</span>
      </div>

      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
