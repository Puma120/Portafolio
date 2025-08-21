import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Pablo Portfolio</h3>
            <p>
              Desarrollador Full Stack apasionado por crear soluciones innovadoras 
              y eficientes que resuelvan problemas reales.
            </p>
            <div className="footer-social">
              <a href="https://github.com/Puma120" target="_blank" rel="noopener noreferrer" className="social-link">
                <span>💻</span> GitHub
              </a>
              <a href="https://instagram.com/puma_w_" target="_blank" rel="noopener noreferrer" className="social-link">
                <span>📷</span> Instagram
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Navegación</h4>
            <ul className="footer-links">
              <li><a onClick={() => document.getElementById('home').scrollIntoView({ behavior: 'smooth' })}>Inicio</a></li>
              <li><a onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>Sobre Mí</a></li>
              <li><a onClick={() => document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })}>Habilidades</a></li>
              <li><a onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>Proyectos</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Servicios</h4>
            <ul className="footer-links">
              <li><a href="#">Desarrollo Web</a></li>
              <li><a href="#">Aplicaciones React</a></li>
              <li><a href="#">Backend con Python</a></li>
              <li><a href="#">Bases de Datos</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contacto</h4>
            <div className="contact-info">
              <p>📧 pumaurbina120@gmail.com</p>
              <p>📱 +52 22 27 54 39 21</p>
              <p>📍 México</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Pablo Portfolio. Todos los derechos reservados.</p>
            <div className="footer-bottom-links">
              <a href="#">Política de Privacidad</a>
              <a href="#">Términos de Uso</a>
            </div>
          </div>
          
          <button className="scroll-to-top" onClick={scrollToTop}>
            <span>↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
