import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2>Sobre Mí</h2>
          <p>Conoce más sobre mi experiencia y pasión por el desarrollo</p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <h3>Desarrollador Full Stack Apasionado</h3>
            <p>
              Soy un desarrollador con experiencia en tecnologías modernas y una pasión genuina 
              por crear soluciones innovadoras. Mi enfoque se centra en escribir código limpio, 
              escalable y eficiente que resuelva problemas reales.
            </p>
            
            <div className="achievements">
              <div className="achievement">
                <h4>🏆 2do Lugar Hackathon Nacional</h4>
                <p>Reconocimiento por innovación y desarrollo de soluciones tecnológicas</p>
              </div>
              
              <div className="achievement">
                <h4>💼 Aplicaciones en Producción</h4>
                <p>He desarrollado aplicaciones web completas para diferentes sectores</p>
              </div>
              
              <div className="achievement">
                <h4>📚 Aprendizaje Continuo</h4>
                <p>Constantemente actualizándome con las últimas tecnologías y mejores prácticas</p>
              </div>
            </div>
          </div>
          
          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-number">3+</div>
              <div className="stat-label">Proyectos Completados</div>
            </div>
            
            <div className="stat-card">
              <div className="stat-number">5+</div>
              <div className="stat-label">Tecnologías Dominadas</div>
            </div>
            
            <div className="stat-card">
              <div className="stat-number">2°</div>
              <div className="stat-label">Lugar en Hackathon</div>
            </div>
            
            <div className="stat-card">
              <div className="stat-number">5+</div>
              <div className="stat-label">Certificaciones</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
