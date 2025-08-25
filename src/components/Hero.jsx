import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    // Animate title with typewriter effect
    if (titleRef.current) {
      titleRef.current.classList.add('typewriter');
    }

    // Stagger animation for floating cards
    const cards = document.querySelectorAll('.floating-card');
    cards.forEach((card, index) => {
      card.style.animationDelay = `${index * 0.2}s`;
      card.classList.add('bounce-in');
    });
  }, []);

  return (
    <section id="home" className="hero parallax-container">
      <div className="hero-container">
        <div className="hero-content stagger-container">
          <h1 ref={titleRef} className="hero-title stagger-item">
            Hola, soy <span className="highlight">Pablo</span>
          </h1>
          <h2 ref={subtitleRef} className="hero-subtitle stagger-item">
            Desarrollador Full Stack
          </h2>
          <p className="hero-description stagger-item">
            Especializado en desarrollo web moderno con experiencia en Python, React, JavaScript, 
            bases de datos SQL y NoSQL. Apasionado en el uso de mi imaginación y el diseño contemporáneo.
          </p>
          <div className="hero-buttons stagger-item">
            <button 
              className="btn btn-primary hover-lift interactive"
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            >
              <span>Ver Proyectos</span>
              <div className="btn-shine"></div>
            </button>
            <button 
              className="btn btn-primary hover-lift interactive"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              <span>Contactar</span>
              <div className="btn-shine"></div>
            </button>
          </div>
        </div>
        <div className="hero-visual parallax-element" data-speed="0.3">
          {/* Profile Photo Container */}
          <div className="profile-photo-container hover-glow interactive">
            <img 
              src="/Foto.jpeg" 
              alt="Pablo - Desarrollador Full Stack"
              className="profile-photo"
            />
            <div className="profile-frame"></div>
          </div>

          <div className="floating-elements">
            <div className="floating-card hover-glow interactive" data-tilt>
              <div className="card-icon">💻</div>
              <div className="card-text">Desarrollo Web</div>
              <div className="card-glow"></div>
            </div>
            <div className="floating-card hover-glow interactive" data-tilt>
              <div className="card-icon">🚀</div>
              <div className="card-text">Innovación</div>
              <div className="card-glow"></div>
            </div>
            <div className="floating-card hover-glow interactive" data-tilt>
              <div className="card-icon">🏆</div>
              <div className="card-text">Hackathon Winner</div>
              <div className="card-glow"></div>
            </div>
            <div className="floating-card hover-glow interactive" data-tilt>
              <div className="card-icon">🐍</div>
              <div className="card-text">Python</div>
              <div className="card-glow"></div>
            </div>
            <div className="floating-card hover-glow interactive" data-tilt>
              <div className="card-icon">🗄️</div>
              <div className="card-text">Bases de Datos</div>
              <div className="card-glow"></div>
            </div>
            <div className="floating-card hover-glow interactive" data-tilt>
              <div className="card-icon">⚡</div>
              <div className="card-text">Full Stack</div>
              <div className="card-glow"></div>
            </div>
          </div>
          
          {/* Animated background elements */}
          <div className="hero-bg-elements">
            <div className="bg-circle bg-circle-1"></div>
            <div className="bg-circle bg-circle-2"></div>
            <div className="bg-circle bg-circle-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
