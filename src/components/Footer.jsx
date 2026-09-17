import React from 'react';
import CyberIcon from './CyberIcons';
import { AnimationManager } from '../animations';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        AnimationManager.triggerSectionGlitch(el);
      }, 150);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const heroEl = document.getElementById('home');
    if (heroEl) {
      setTimeout(() => {
        AnimationManager.triggerSectionGlitch(heroEl);
      }, 150);
    }
  };

  return (
    <footer className="footer">
      {/* Hatch divider */}
      <div className="footer-hatch">
        <span className="hatch-x">+</span>
        <div className="hatch-line" />
        <span className="hatch-x">+</span>
      </div>

      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>pablo.dev</h3>
            <p>
              Desarrollador Full Stack con especialización en frontend, diseño UX/UI de alta fidelidad y arquitecturas reactivas.
            </p>
            <div className="footer-social">
              <a href="https://github.com/Puma120" target="_blank" rel="noopener noreferrer" className="social-link interactive">
                <CyberIcon name="github" size={14} />
                <span>GitHub</span>
              </a>
              <a href="https://instagram.com/puma_w_" target="_blank" rel="noopener noreferrer" className="social-link interactive">
                <CyberIcon name="instagram" size={14} />
                <span>Instagram</span>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>// NAVEGACION</h4>
            <ul className="footer-links">
              <li><a onClick={() => scrollToSection('home')}>Inicio</a></li>
              <li><a onClick={() => scrollToSection('about')}>Sobre Mí</a></li>
              <li><a onClick={() => scrollToSection('skills')}>Habilidades</a></li>
              <li><a onClick={() => scrollToSection('projects')}>Proyectos</a></li>
              <li><a onClick={() => scrollToSection('certificates')}>Certificaciones</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>// ESPECIALIDADES</h4>
            <ul className="footer-links">
              <li><span>Arquitectura Frontend React</span></li>
              <li><span>Diseño UX/UI & Motion</span></li>
              <li><span>Agentes IA & Flujos RAG</span></li>
              <li><span>APIs RESTful con FastAPI</span></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>// TELEMETRIA</h4>
            <div className="contact-info">
              <p>
                <CyberIcon name="mail" size={13} color="var(--neon-cyan)" />
                <span>pumaurbina120@gmail.com</span>
              </p>
              <p>
                <CyberIcon name="phone" size={13} color="var(--neon-red)" />
                <span>+52 22 27 54 39 21</span>
              </p>
              <p>
                <CyberIcon name="mapPin" size={13} color="var(--neon-green)" />
                <span>México // Remoto Global</span>
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>© {currentYear} pablo.dev // ALL SYSTEMS OPERATIONAL</p>
          </div>

          <button className="scroll-to-top interactive" onClick={scrollToTop} aria-label="Volver arriba">
            <CyberIcon name="arrowUp" size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
