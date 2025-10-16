import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="nav-container">
        <div className="logo">
          <h2>Pablo Portfolio</h2>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul>
            <li><a onClick={() => scrollToSection('home')}>Inicio</a></li>
            <li><a onClick={() => scrollToSection('about')}>Sobre mí</a></li>
            <li><a onClick={() => scrollToSection('skills')}>Habilidades</a></li>
            <li><a onClick={() => scrollToSection('projects')}>Proyectos</a></li>
            <li><a onClick={() => scrollToSection('certificates')}>Certificados</a></li>
            <li><a onClick={() => scrollToSection('contact')}>Contacto</a></li>
          </ul>
        </nav>

        <button 
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
