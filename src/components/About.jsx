import React, { useEffect, useRef } from 'react';
import './About.css';

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    // Counter animation observer
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll('.stat-number');
            counters.forEach((counter) => {
              const target = counter.textContent.replace(/[^0-9]/g, '');
              if (target) {
                animateCounter(counter, parseInt(target));
              }
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    // Scroll reveal observer for slide-in elements
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (aboutRef.current) {
      counterObserver.observe(aboutRef.current);
      // Observe all slide-in elements inside the about section
      aboutRef.current.querySelectorAll('.slide-in-left, .slide-in-right, .fade-in').forEach(el => {
        revealObserver.observe(el);
      });
    }

    return () => {
      counterObserver.disconnect();
      revealObserver.disconnect();
    };
  }, []);

  const animateCounter = (element, target) => {
    const start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
      current += increment;
      element.textContent = Math.floor(current) + '+';
      
      if (current >= target) {
        element.textContent = target + '+';
        clearInterval(timer);
      }
    }, 16);
  };

  return (
    <section id="about" className="about" ref={aboutRef}>
      <div className="container">
        <div className="section-header fade-in">
          <h2 className="section-title">Sobre Mí</h2>
          <p className="section-subtitle">Desarrollador Full Stack con pasión por el frontend y la experiencia de usuario</p>
        </div>
        
        <div className="about-content">
          <div className="about-text slide-in-left">
            <h3>Desarrollador Full Stack</h3>
            <p>
              Soy un desarrollador Full Stack con fuerte especialización en frontend. 
              Domino React, JavaScript, HTML/CSS y diseño UX/UI, y construyo backends con Python y APIs REST. 
              Me apasiona crear productos completos: desde interfaces que enamoran hasta 
              arquitecturas que escalan.
            </p>
            
            <div className="achievements">
              <div className="achievement hover-lift">
                <h4>🖥️ Full Stack Development</h4>
                <p>React en frontend, Python/FastAPI en backend, Firebase y bases de datos</p>
              </div>
              
              <div className="achievement hover-lift">
                <h4>💼 Productos Web Completos</h4>
                <p>Desde el diseño UX/UI hasta el despliegue, construyo soluciones end-to-end</p>
              </div>
              
              <div className="achievement hover-lift">
                <h4>📚 Innovación Continua</h4>
                <p>Siempre explorando nuevas tecnologías y tendencias en desarrollo web e IA</p>
              </div>
            </div>
          </div>
          
          <div className="about-stats slide-in-right">
            <div className="stat-card hover-glow interactive">
              <div className="stat-number">3</div>
              <div className="stat-label">Proyectos Completados</div>
            </div>
            
            <div className="stat-card hover-glow interactive">
              <div className="stat-number">5</div>
              <div className="stat-label">Tecnologías Dominadas</div>
            </div>
            
            <div className="stat-card hover-glow interactive">
              <div className="stat-number">2</div>
              <div className="stat-label">Lugar en Hackathon</div>
            </div>
            
            <div className="stat-card hover-glow interactive">
              <div className="stat-number">5</div>
              <div className="stat-label">Certificaciones</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
