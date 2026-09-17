import React, { useState, useEffect, useRef } from 'react';
import CyberIcon from './CyberIcons';
import { TextScramble } from '../animations';
import './Projects.css';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const titleHeadingRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.15 }
    );

    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      observer.observe(projectsSection);
    }

    return () => observer.disconnect();
  }, []);

  // Text scramble on active project change
  useEffect(() => {
    if (titleHeadingRef.current && projects[activeProject]) {
      const scrambler = new TextScramble(titleHeadingRef.current);
      scrambler.setText(projects[activeProject].title);
    }
  }, [activeProject]);

  const projects = [
    {
      id: 1,
      title: 'Sistema de Consultoría Nutricional',
      description: 'Interfaz frontend completa para consultorios de nutrición con cuestionarios interactivos y dashboard intuitivo. Diseñado con arquitectura responsive, optimización de renderizado y componentes modulares.',
      technologies: ['React', 'Python', 'Firebase', 'JavaScript'],
      features: [
        'Interfaz de usuario intuitiva y de alta fidelidad',
        'Cuestionarios interactivos con estado reactivo',
        'Dashboard clínico con visualización de métricas',
        'Diseño UX/UI optimizado con mobile-first',
        'Componentes modulares altamente reutilizables'
      ],
      status: 'Completado',
      category: 'Web App',
      icon: 'frontend',
      preview: '/Grabacion-Nutri.mp4',
      videoType: 'mp4'
    },
    {
      id: 6,
      title: 'Nova Agent // Mejor Proyecto Expo Ibero',
      description: 'Asistente de Inteligencia Artificial ("gemelo digital") con memoria persistente a largo plazo y ejecución autónoma mediante herramientas. Construido con LangGraph para streaming de razonamiento en vivo (Agent Steps), RAG sobre documentos y sincronización con Google Calendar.',
      technologies: ['React', 'FastAPI', 'Python', 'LangGraph', 'Pinecone', 'Gemini'],
      features: [
        'Agente conversacional y orquestación con LangGraph',
        'Indexación semántica y recuperación RAG con Pinecone',
        'Streaming de razonamiento y pasos del agente en vivo',
        'Integración con herramientas externas (Google Calendar)',
        'Memoria persistente contextual por usuario'
      ],
      status: 'Ganador Mejor Proyecto',
      category: 'AI Assistant',
      icon: 'sparkles',
      preview: '/Grabación-Novamp4.mp4',
      videoType: 'mp4',
      certificateId: 6
    },
    {
      id: 2,
      title: 'Sitio Web Casa de Modas',
      description: 'Desarrollo frontend completo para firma de alta costura. Enfoque integral en la experiencia visual, micro-interacciones suaves, tipografía cuidada y maquetación responsive adaptable a todos los dispositivos.',
      technologies: ['React', 'Vite', 'CSS3', 'JavaScript'],
      features: [
        'Diseño visual editorial de alto impacto',
        'Galería interactiva con filtros fluidos',
        'Animaciones y transiciones de alto rendimiento',
        'Arquitectura mobile-first optimizada',
        'Experiencia de navegación inmersiva'
      ],
      status: 'Completado',
      category: 'Website',
      icon: 'code',
      preview: '/Grabacion-Moda.mp4',
      videoType: 'mp4'
    },
    {
      id: 3,
      title: 'Proyecto Hackathon Nacional // 2º Lugar',
      description: 'Desarrollo de la interfaz de usuario para una solución tecnológica desarrollada bajo rigurosa presión de tiempo, obteniendo el segundo lugar nacional. Integración ágil de APIs y prototipado reactivo.',
      technologies: ['HTML', 'Maui', 'Azure', 'API REST'],
      features: [
        'Desarrollo y prototipado ágil bajo presión competitiva',
        'Arquitectura de componentes reactivos en frontend',
        'Diseño UX/UI orientado a resolución rápida de flujos',
        'Integración continua con servicios en la nube (Azure)',
        'Presentación y validación ante panel evaluador'
      ],
      status: '2do Lugar Nacional',
      category: 'Hackathon',
      icon: 'trophy',
      preview: '/Grabacion-hackathon.mp4',
      videoType: 'mp4'
    },
    {
      id: 4,
      title: 'Portafolio Web // Diseño Textil',
      description: 'Desarrollo de un portafolio web interactivo para exhibición de piezas de diseño textil. Experiencia visual centrada en el detalle de las obras, paleta de colores personalizada y navegación envolvente.',
      technologies: ['React', 'Vite', 'CSS3', 'JavaScript'],
      features: [
        'Identidad visual adaptada a la estética de la autora',
        'Galería de colecciones y piezas de alta resolución',
        'Paleta cromática balanceada y tipografía cuidada',
        'Despliegue y carga progresiva optimizada',
        'Navegación interactiva fluida'
      ],
      status: 'Completado',
      category: 'Portfolio',
      icon: 'target',
      preview: '/Grabacion-portafolio-daniela.mp4',
      videoType: 'mp4'
    },
    {
      id: 5,
      title: 'Simulación 3D de Espacio en Unity',
      description: 'Desarrollo de entorno virtual tridimensional interactivo. Implementación de físicas, cálculo de iluminación dinámica en tiempo real, mapeo de materiales PBR y recorridos virtuales inmersivos.',
      technologies: ['Unity', 'C#', '3D Modeling'],
      features: [
        'Entorno 3D con shaders e iluminación PBR dinámica',
        'Físicas de colisión e interacción en tiempo real',
        'Control de cámara y navegación espacial fluida',
        'Optimización de draw calls y tasa de cuadros estable'
      ],
      status: 'Completado',
      category: 'Simulación 3D',
      icon: 'cpu',
      preview: '/Grabacion-UnitySalon.mp4',
      videoType: 'mp4'
    }
  ];

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'AI Assistant': return 'sparkles';
      case 'Hackathon': return 'trophy';
      case 'Web App': return 'frontend';
      case 'Website': return 'code';
      case 'Portfolio': return 'target';
      case 'Simulación 3D': return 'cpu';
      default: return 'code';
    }
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header fade-in">
          <h2 className="section-title" data-scramble>Proyectos Destacados</h2>
          <p className="section-subtitle">Arquitectura de software, sistemas de inteligencia artificial y aplicaciones web interactivas</p>
        </div>

        {/* Cyberpunk Navigation Tabs */}
        <div className={`project-tabs-nav ${isVisible ? 'animate' : ''}`}>
          {projects.map((project, index) => (
            <button
              key={project.id}
              className={`tab-nav-item hover-lift interactive ${activeProject === index ? 'active' : ''}`}
              onClick={() => setActiveProject(index)}
              aria-label={`Seleccionar proyecto ${project.title}`}
            >
              <span className="tab-nav-icon">
                <CyberIcon name={getCategoryIcon(project.category)} size={15} color={activeProject === index ? 'var(--neon-cyan)' : 'var(--text-secondary)'} />
              </span>
              <span className="tab-nav-title">{project.title}</span>
              {project.preview && (
                <span className="video-badge">
                  <CyberIcon name="play" size={10} color="var(--neon-cyan)" />
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Active Project Showcase */}
        <div className={`project-showcase ${isVisible ? 'animate' : ''}`}>
          {/* Video Section with Cyberpunk HUD */}
          <div className="project-video-section">
            <div className="video-container">
              {/* Telemetry Overlays */}
              <div className="video-hud-bar top-bar">
                <div className="hud-rec-indicator">
                  <span className="rec-dot" />
                  <span>REC // 1080P_60FPS</span>
                </div>
                <div className="hud-telemetry">
                  <span>STREAM_ID: 0{activeProject + 1}</span>
                  <span className="telemetry-sep">|</span>
                  <span>FPS: 60.0</span>
                </div>
              </div>

              {projects[activeProject].preview && projects[activeProject].videoType === 'mp4' ? (
                <video
                  key={projects[activeProject].id}
                  src={projects[activeProject].preview}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="project-video"
                  preload="metadata"
                >
                  Tu navegador no soporta videos HTML5.
                </video>
              ) : projects[activeProject].preview && projects[activeProject].videoType === 'webp' ? (
                <img
                  key={projects[activeProject].id}
                  src={projects[activeProject].preview}
                  alt={projects[activeProject].title}
                  className="project-video"
                  width="800"
                  height="450"
                />
              ) : (
                <div className="placeholder-video">
                  <div className="placeholder-icon-large">
                    <CyberIcon name={getCategoryIcon(projects[activeProject].category)} size={48} color="var(--neon-cyan)" />
                  </div>
                  <p className="placeholder-text">Vista previa disponible</p>
                </div>
              )}

              {/* Status badge */}
              <div className="video-status-badge">
                <span className={`status-badge ${(projects[activeProject].status.includes('2do') || projects[activeProject].status.includes('Ganador')) ? 'award' : 'completed'
                  }`}>
                  <CyberIcon name={projects[activeProject].status.includes('Ganador') || projects[activeProject].status.includes('2do') ? 'award' : 'check'} size={12} />
                  <span>{projects[activeProject].status}</span>
                </span>
              </div>

              <div className="video-overlay" />
            </div>
          </div>

          {/* Info Section */}
          <div className="project-info-section" data-tilt>
            <div className="info-header">
              <h3 ref={titleHeadingRef} className="project-title">{projects[activeProject].title}</h3>
              <span className="project-category">{projects[activeProject].category}</span>
            </div>

            <p className="project-description">
              {projects[activeProject].description}
            </p>

            {projects[activeProject].certificateId && (
              <div className="project-actions">
                <button
                  className="btn btn-primary hover-lift interactive"
                  onClick={() => {
                    const certSection = document.getElementById('certificates');
                    if (certSection) {
                      certSection.scrollIntoView({ behavior: 'smooth' });
                      setTimeout(() => {
                        window.dispatchEvent(new CustomEvent('openCertificate', { detail: projects[activeProject].certificateId }));
                      }, 500);
                    }
                  }}
                >
                  <CyberIcon name="award" size={16} />
                  <span>Ver Reconocimiento Oficial</span>
                </button>
              </div>
            )}

            <div className="info-grid">
              {/* Stack */}
              <div className="info-block">
                <h4>// STACK_TECNOLOGICO</h4>
                <div className="tech-tags">
                  {projects[activeProject].technologies.map((tech, index) => (
                    <span key={index} className="tech-tag hover-glow">{tech}</span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="info-block">
                <h4>// ESPECIFICACIONES_CLAVE</h4>
                <ul className="features-list">
                  {projects[activeProject].features.map((feature, index) => (
                    <li key={index}>
                      <span className="feature-icon">
                        <CyberIcon name="check" size={13} color="var(--neon-cyan)" />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
