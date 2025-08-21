import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hola, soy <span className="highlight">Pablo</span>
          </h1>
          <h2 className="hero-subtitle">Desarrollador Full Stack</h2>
          <p className="hero-description">
            Especializado en desarrollo web moderno con experiencia en Python, React, JavaScript, 
            bases de datos SQL y NoSQL. Apasionado en el uso de mi imaginación y el diseño contemporáneo.
          </p>
          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Proyectos
            </button>
            <button 
              className="btn btn-primary"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Contactar
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-elements">
            <div className="floating-card">
              <div className="card-icon">💻</div>
              <div className="card-text">Desarrollo Web</div>
            </div>
            <div className="floating-card">
              <div className="card-icon">🚀</div>
              <div className="card-text">Innovación</div>
            </div>
            <div className="floating-card">
              <div className="card-icon">🏆</div>
              <div className="card-text">Hackathon Winner</div>
            </div>
            <div className="floating-card">
              <div className="card-icon">🐍</div>
              <div className="card-text">Python</div>
            </div>
            <div className="floating-card">
              <div className="card-icon">🗄️</div>
              <div className="card-text">Bases de Datos</div>
            </div>
            <div className="floating-card">
              <div className="card-icon">⚡</div>
              <div className="card-text">Full Stack</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
