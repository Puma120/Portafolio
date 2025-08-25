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
            <h3>Desarrollador Full Stack Apasionado</h3>
            <p>
              Soy un desarrollador con experiencia en tecnologías modernas y una pasión genuina 
              por crear soluciones innovadoras. Mi enfoque se centra en escribir código limpio, 
              escalable y eficiente que resuelva problemas reales.
            </p>
            
            <div className="achievements">
              <div className="achievement hover-lift">
                <h4>🏆 2do Lugar Hackathon Nacional</h4>
                <p>Reconocimiento por innovación y desarrollo de soluciones tecnológicas</p>
              </div>
              
              <div className="achievement hover-lift">
                <h4>💼 Aplicaciones en Producción</h4>
                <p>He desarrollado aplicaciones web completas para diferentes sectores</p>
              </div>
              
              <div className="achievement hover-lift">
                <h4>📚 Aprendizaje Continuo</h4>
                <p>Constantemente actualizándome con las últimas tecnologías y mejores prácticas</p>
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
