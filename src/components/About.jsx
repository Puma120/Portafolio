import React, { useEffect, useRef } from 'react';
import './About.css';

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
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

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
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
          <p className="section-subtitle">Conoce más sobre mi experiencia y pasión por el desarrollo</p>
        </div>
        
        <div className="about-content">
          <div className="about-text slide-in-left">
            <h3>Desarrollador Frontend Especializado</h3>
            <p>
              Soy un desarrollador especializado en frontend con pasión por crear experiencias de usuario 
              excepcionales. Mi enfoque principal está en React, JavaScript, HTML/CSS y diseño UX/UI. 
              Aunque tengo conocimientos en backend, mi verdadera especialización y pasión se encuentra 
              en el desarrollo frontend y la creación de interfaces modernas y funcionales.
            </p>
            
            <div className="achievements">
              <div className="achievement hover-lift">
                <h4>🖥️ Especialización Frontend</h4>
                <p>Enfoque principal en React, JavaScript y diseño de interfaces de usuario</p>
              </div>
              
              <div className="achievement hover-lift">
                <h4>💼 Aplicaciones Web Interactivas</h4>
                <p>He desarrollado aplicaciones frontend completas con experiencias de usuario excepcionales</p>
              </div>
              
              <div className="achievement hover-lift">
                <h4>📚 Innovación Continua</h4>
                <p>Constantemente explorando nuevas tecnologías frontend y tendencias de diseño</p>
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
