import React, { useEffect, useRef } from 'react';
import CyberIcon from './CyberIcons';
import { AnimationManager } from '../animations';
import './Hero.css';

const Hero = () => {
  const titleRef = useRef(null);

  useEffect(() => {
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
            titleRef.current.innerHTML = `${beforePablo}<span class="highlight">${pabloText}</span>`;
          } else {
            titleRef.current.textContent = currentText;
          }
          i++;
        } else {
          clearInterval(timer);
          setTimeout(() => {
            const highlight = titleRef.current?.querySelector('.highlight');
            if (highlight) {
              highlight.style.animation = 'gradientShift 3s ease-in-out infinite';
            }
          }, 400);
        }
      }, 90);
    };

    const startTimer = setTimeout(typewriterEffect, 600);

    return () => {
      clearTimeout(startTimer);
    };
  }, []);

  const navigateToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        AnimationManager.triggerSectionGlitch(el);
      }, 150);
    }
  };

  const floatingBadges = [
    { icon: 'frontend', title: 'Frontend Specialist' },
    { icon: 'react', title: 'React Ecosystem' },
    { icon: 'trophy', title: 'Hackathon Winner' },
    { icon: 'javascript', title: 'JavaScript / ESNext' },
    { icon: 'target', title: 'UX/UI Architecture' },
    { icon: 'bolt', title: 'High Performance' }
  ];

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content stagger-container">
          <div className="hero-badge">
            <div className="hero-badge-dot" />
            <span>FULLSTACK_DEV // BILINGUAL ENGLISH-SPANISH</span>
          </div>

          <h1 ref={titleRef} className="hero-title" data-scramble>
            Hola, soy <span className="highlight">Pablo</span>
          </h1>

          <h2 className="hero-subtitle stagger-item">
            Desarrollador Full Stack & Arquitecto Frontend
          </h2>

          <p className="hero-description stagger-item">
            Especializado en interfaces reactivas de alto rendimiento, diseño UX/UI y arquitecturas escalables con React, JavaScript, Python y APIs REST.
          </p>

          <div className="hero-buttons stagger-item">
            <button
              className="btn btn-primary hover-lift interactive"
              onClick={() => navigateToSection('projects')}
            >
              <CyberIcon name="code" size={16} />
              <span>Ver Proyectos</span>
            </button>
            <button
              className="btn btn-secondary hover-lift interactive"
              onClick={() => navigateToSection('contact')}
            >
              <CyberIcon name="send" size={16} />
              <span>Contactar</span>
            </button>
          </div>
        </div>

        <div className="hero-visual">
          {/* Profile Photo Container with Radar HUD */}
          <div className="profile-photo-container hover-glow interactive">
            <div className="profile-online">
              <div className="profile-online-dot" />
              <span>ONLINE // READY</span>
            </div>

            <div className="radar-sweep" aria-hidden="true" />

            <img
              src="/Foto.jpeg"
              alt="Pablo - Desarrollador Full Stack"
              className="profile-photo"
              width="280"
              height="280"
            />

            <div className="profile-frame" />
            <div className="profile-frame-inner" />
          </div>

          {/* Floating Badges with 3D Tilt & Cyber Icons */}
          <div className="floating-elements">
            {floatingBadges.map((badge, idx) => (
              <div key={idx} className="floating-card hover-glow interactive" data-tilt>
                <div className="card-icon-wrap">
                  <CyberIcon name={badge.icon} size={18} color="var(--neon-cyan)" />
                </div>
                <div className="card-text">{badge.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
