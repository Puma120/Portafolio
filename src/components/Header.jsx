import React, { useState, useEffect } from 'react';
import { AnimationManager } from '../animations';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 70;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      // Trigger full-zone cyberpunk glitch on destination
      setTimeout(() => {
        AnimationManager.triggerSectionGlitch(element);
      }, 150);
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="nav-container">
        <button
          className="logo"
          onClick={() => scrollToSection('home')}
          aria-label="Ir al inicio"
        >
          <span className="logo-prompt">~$</span>
          <span className="logo-name">pablo.dev</span>
          <span className="logo-cursor">_</span>
        </button>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`} aria-label="Navegación principal">
          <ul>
            <li>
              <button className="nav-btn" onClick={() => scrollToSection('home')}>
                <span className="nav-num">01</span>Inicio
              </button>
            </li>
            <li>
              <button className="nav-btn" onClick={() => scrollToSection('about')}>
                <span className="nav-num">02</span>Sobre mí
              </button>
            </li>
            <li>
              <button className="nav-btn" onClick={() => scrollToSection('skills')}>
                <span className="nav-num">03</span>Habilidades
              </button>
            </li>
            <li>
              <button className="nav-btn" onClick={() => scrollToSection('projects')}>
                <span className="nav-num">04</span>Proyectos
              </button>
            </li>
            <li>
              <button className="nav-btn" onClick={() => scrollToSection('certificates')}>
                <span className="nav-num">05</span>Certificados
              </button>
            </li>
            <li>
              <button className="nav-btn" onClick={() => scrollToSection('contact')}>
                <span className="nav-num">06</span>Contacto
              </button>
            </li>
          </ul>
        </nav>

        <button
          className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isMenuOpen}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
};

export default Header;
