import React, { useEffect, useRef } from 'react';
import { AnimationManager } from '../animations';
import './Hero.css';

const Hero = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    // Función typewriter simple
    const typewriterEffect = () => {
      if (!titleRef.current) return;
      
      const text = "Hola, soy Pablo";
      titleRef.current.innerHTML = '';
      titleRef.current.classList.add('typewriter-active');
      
      let i = 0;
      const timer = setInterval(() => {
        if (i < text.length) {
          const currentText = text.substring(0, i + 1);
          if (currentText.includes('Pablo')) {
            const beforePablo = currentText.substring(0, currentText.indexOf('Pablo'));
            const pabloText = currentText.substring(currentText.indexOf('Pablo'));
            titleRef.current.innerHTML = beforePablo + '<span class="highlight">' + pabloText + '</span>';
          } else {
            titleRef.current.textContent = currentText;
          }
          i++;
        } else {
          clearInterval(timer);
          // Activar animación del highlight
          setTimeout(() => {
            const highlight = titleRef.current.querySelector('.highlight');
            if (highlight) {
              highlight.style.animation = 'gradientShift 3s ease-in-out infinite';
            }
          }, 500);
        }
      }, 100);
    };

    // Iniciar typewriter después de 1 segundo
    const startTimer = setTimeout(typewriterEffect, 1000);

    // Stagger animation for floating cards
    const cards = document.querySelectorAll('.floating-card');
    cards.forEach((card, index) => {
      card.style.animationDelay = `${index * 0.2}s`;
      card.classList.add('bounce-in');
    });

    return () => {
      clearTimeout(startTimer);
    };
  }, []);

  return (
    <section id="home" className="hero parallax-container">
      <div className="hero-container">
        <div className="hero-content stagger-container">
          <h1 ref={titleRef} className="hero-title stagger-item">
          </h1>
          <h2 ref={subtitleRef} className="hero-subtitle stagger-item">
            Desarrollador Frontend Especializado
          </h2>
          <p className="hero-description stagger-item">
            Especializado en desarrollo frontend con React, JavaScript, HTML/CSS y diseño UX/UI. 
            Con conocimientos en backend para proyectos full stack. Apasionado por crear experiencias de usuario excepcionales y interfaces modernas.
          </p>
          <div className="hero-buttons stagger-item">
            <button primary
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
              alt="Pablo - Desarrollador Frontend Especializado"
              className="profile-photo"
            />
            <div className="profile-frame"></div>
          </div>

          <div className="floating-elements">
            <div className="floating-card hover-glow interactive" data-tilt>
              <div className="card-icon">🎨</div>
              <div className="card-text">Frontend</div>
              <div className="card-glow"></div>
            </div>
            <div className="floating-card hover-glow interactive" data-tilt>
              <div className="card-icon">⚛️</div>
              <div className="card-text">React</div>
              <div className="card-glow"></div>
            </div>
            <div className="floating-card hover-glow interactive" data-tilt>
              <div className="card-icon">🏆</div>
              <div className="card-text">Hackathon Winner</div>
              <div className="card-glow"></div>
            </div>
            <div className="floating-card hover-glow interactive" data-tilt>
              <div className="card-icon">｡🇯‌🇸‌</div>
              <div className="card-text">JavaScript</div>
              <div className="card-glow"></div>
            </div>
            <div className="floating-card hover-glow interactive" data-tilt>
              <div className="card-icon">🎯</div>
              <div className="card-text">UX/UI Design</div>
              <div className="card-glow"></div>
            </div>
            <div className="floating-card hover-glow interactive" data-tilt>
              <div className="card-icon">⚡</div>
              <div className="card-text">Responsive</div>
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
