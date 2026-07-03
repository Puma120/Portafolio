import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo" onClick={() => scrollToSection('home')}>
          <span className="logo-prompt">~$</span>
          <span className="logo-name">pablo.dev</span>
          <span className="logo-cursor">_</span>
        </div>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul>
            <li><a onClick={() => scrollToSection('home')}><span className="nav-num">01</span>Inicio</a></li>
            <li><a onClick={() => scrollToSection('about')}><span className="nav-num">02</span>Sobre mí</a></li>
            <li><a onClick={() => scrollToSection('projects')}><span className="nav-num">03</span>Proyectos</a></li>
            <li><a onClick={() => scrollToSection('certificates')}><span className="nav-num">04</span>Certificados</a></li>
            <li><a onClick={() => scrollToSection('contact')}><span className="nav-num">05</span>Contacto</a></li>
          </ul>
        </nav>

        <button
          className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
};

export default Header;
