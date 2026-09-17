import React, { useEffect, useRef } from 'react';
import CyberIcon from './CyberIcons';
import { AnimationManager } from '../animations';
import './About.css';

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    let animated = false;

    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated) {
            animated = true;
            const counters = entry.target.querySelectorAll('.stat-number');
            counters.forEach((counter) => {
              const target = counter.getAttribute('data-target');
              if (target) {
                AnimationManager.animateCounter(counter, parseInt(target, 10));
              }
            });
          }
        });
      },
      { threshold: 0.25 }
    );

    // Staggered achievement entry animation
    const achievementObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const achievements = entry.target.querySelectorAll('.achievement');
            achievements.forEach((el, i) => {
              setTimeout(() => {
                el.classList.add('visible');
              }, i * 120);
            });
            achievementObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (aboutRef.current) {
      counterObserver.observe(aboutRef.current);
      achievementObserver.observe(aboutRef.current);
    }

    return () => {
      counterObserver.disconnect();
      achievementObserver.disconnect();
    };
  }, []);

  const achievements = [
    {
      icon: 'code',
      title: 'Full Stack & Frontend Architecture',
      desc: 'Desarrollo en React moderno, Python/FastAPI en backend, integraciones serverless y bases de datos NoSQL/SQL.'
    },
    {
      icon: 'sparkles',
      title: 'Soluciones End-to-End & UX/UI',
      desc: 'Desde la investigación de usuario y prototipado visual hasta el despliegue optimizado en producción.'
    },
    {
      icon: 'cpu',
      title: 'Innovación en IA & Agentes',
      desc: 'Desarrollo de agentes conversacionales inteligentes, flujos RAG con embeddings vectoriales y orquestación con LangGraph.'
    }
  ];

  return (
    <section id="about" className="about" ref={aboutRef}>
      <div className="container">
        <div className="section-header fade-in">
          <h2 className="section-title" data-scramble>Sobre Mí</h2>
          <p className="section-subtitle">Arquitectura frontend de alto impacto, interfaces reactivas y sistemas de Inteligencia Artificial</p>
        </div>

        <div className="about-content">
          <div className="about-text slide-in-left">
            <h3>// BIOGRAFIA_PROFESIONAL</h3>
            <p>
              Soy un desarrollador Full Stack con fuerte especialización en frontend.
              Domino React, JavaScript, TypeScript, CSS avanzado y diseño UX/UI, complementado con backends robustos en Python y FastAPI.
              Me enfoco en construir experiencias de usuario fluidas, veloces y memorables con estética de clase mundial.
            </p>

            <div className="achievements stagger-container">
              {achievements.map((item, idx) => (
                <div key={idx} className="achievement hover-lift stagger-item" data-tilt>
                  <div className="achievement-icon">
                    <CyberIcon name={item.icon} size={20} color="var(--neon-cyan)" />
                  </div>
                  <div className="achievement-body">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-stats slide-in-right">
            <div className="stat-card hover-glow interactive" data-tilt>
              <div className="stat-icon-bg">
                <CyberIcon name="frontend" size={28} color="rgba(0,240,255,0.2)" />
              </div>
              <div className="stat-number" data-target="5">0+</div>
              <div className="stat-label">Proyectos Web Completos</div>
            </div>

            <div className="stat-card hover-glow interactive" data-tilt>
              <div className="stat-icon-bg">
                <CyberIcon name="tools" size={28} color="rgba(255,34,81,0.2)" />
              </div>
              <div className="stat-number" data-target="8">0+</div>
              <div className="stat-label">Tecnologías Dominadas</div>
            </div>

            <div className="stat-card hover-glow interactive" data-tilt>
              <div className="stat-icon-bg">
                <CyberIcon name="trophy" size={28} color="rgba(255,208,0,0.2)" />
              </div>
              <div className="stat-number" data-target="2">0+</div>
              <div className="stat-label">Podios en Hackathons</div>
            </div>

            <div className="stat-card hover-glow interactive" data-tilt>
              <div className="stat-icon-bg">
                <CyberIcon name="award" size={28} color="rgba(0,255,136,0.2)" />
              </div>
              <div className="stat-number" data-target="7">0+</div>
              <div className="stat-label">Certificados & Premios</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
