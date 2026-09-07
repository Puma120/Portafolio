import React, { useState, useEffect } from 'react';
import './Projects.css';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      observer.observe(projectsSection);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Sistema de Consultoría Nutricional',
      description: 'Interfaz frontend completa para consultorios de nutrición con cuestionarios interactivos y dashboard intuitivo. Desarrollé toda la experiencia de usuario y la interfaz, implementando un diseño responsive y funcional.',
      technologies: ['React', 'Python', 'Firebase', 'JavaScript'],
      features: [
        'Interfaz de usuario intuitiva',
        'Cuestionarios interactivos con React',
        'Dashboard responsive',
        'Diseño UX/UI optimizado',
        'Componentes reutilizables'
      ],
      status: 'Completado',
      category: 'Web App',
      preview: '/Grabacion-Nutri.mp4',
      videoType: 'mp4'
    },
    {
      id: 6,
      title: 'Nova Agent - Mejor Proyecto Expo Ibero 🏆',
      description: 'Nova es un asistente personal con IA (un "gemelo digital") que maneja memoria a largo plazo y ejecuta acciones mediante herramientas. Utiliza LangGraph para transmitir su razonamiento en vivo (Agent Steps), hace RAG sobre documentos y se integra con Google Calendar.',
      technologies: ['React', 'FastAPI', 'Python', 'LangGraph', 'Pinecone', 'Gemini'],
      features: [
        'Agente conversacional avanzado',
        'Recuperación de documentos (RAG)',
        'Streaming de razonamiento en vivo',
        'Integración con Google Calendar',
        'Memoria persistente de usuario'
      ],
      status: 'Ganador Mejor Proyecto',
      category: 'AI Assistant',
      preview: '/Grabación-Novamp4.mp4',
      videoType: 'mp4',
      certificateId: 6
    },
    {
      id: 2,
      title: 'Sitio Web Casa de Modas',
      description: 'Desarrollo frontend completo de una página web elegante y moderna para casa de modas. Enfoque total en la experiencia visual, animaciones suaves y diseño responsive que refleja la elegancia de la marca.',
      technologies: ['React', 'Vite', 'CSS3', 'JavaScript'],
      features: [
        'Diseño visual impactante',
        'Galería interactiva con React',
        'Animaciones CSS avanzadas',
        'Diseño mobile-first',
        'Experiencia de usuario premium'
      ],
      status: 'Completado',
      category: 'Website',
      preview: '/Grabacion-Moda.mp4',
      videoType: 'mp4'
    },
    {
      id: 3,
      title: 'Proyecto Hackathon Nacional - 2º Lugar 🏆',
      description: 'Desarrollo de la interfaz frontend para una solución innovadora que obtuvo el segundo lugar en hackathon nacional. Me enfoqué en crear una experiencia de usuario excepcional bajo presión de tiempo.',
      technologies: ['HTML', 'Maui', 'Azure', 'API REST'],
      features: [
        'Desarrollo frontend bajo presión',
        'Interfaz innovadora con React',
        'UX/UI design efectivo',
        'Prototipado rápido',
        'Solución visualmente impactante'
      ],
      status: '2do Lugar Nacional',
      category: 'Hackathon',
      preview: '/Grabacion-hackathon.mp4',
      videoType: 'mp4'
    },
    {
      id: 4,
      title: 'Portafolio Web - Diseño Textil',
      description: 'Desarrollo de un portafolio web personalizado para una estudiante de diseño textil. Creé una experiencia visual única siguiendo su estilo artístico, con una paleta de colores y ambiente específicos que reflejan su identidad como diseñadora.',
      technologies: ['React', 'Vite', 'CSS3', 'JavaScript'],
      features: [
        'Diseño personalizado a su estilo',
        'Galería de trabajos textiles',
        'Paleta de colores personalizada',
        'Diseño responsive',
        'Experiencia visual artística'
      ],
      status: 'Completado',
      category: 'Portfolio',
      preview: '/Grabacion-portafolio-daniela.mp4',
      videoType: 'mp4'
    },
    {
      id: 5,
      title: 'Recreación de Salón 3D en Unity',
      description: 'Desarrollo de un entorno virtual 3D interactivo que recrea un salón. Se implementaron físicas, iluminación, materiales y recorridos virtuales para brindar una experiencia inmersiva.',
      technologies: ['Unity', 'C#', '3D Modeling'],
      features: [
        'Entorno 3D inmersivo',
        'Iluminación y materiales realistas',
        'Navegación interactiva',
        'Experiencia de usuario optimizada'
      ],
      status: 'Completado',
      category: 'Simulación 3D',
      preview: '/Grabacion-UnitySalon.mp4',
      videoType: 'mp4'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header fade-in">
          <h2 className="section-title">Proyectos Destacados</h2>
          <p className="section-subtitle">Interfaces y experiencias de usuario que he desarrollado con pasión y dedicación</p>
        </div>

        {/* Tabs de navegación */}
        <div className={`project-tabs-nav ${isVisible ? 'animate' : ''}`}>
          {projects.map((project, index) => (
            <button
              key={project.id}
              className={`tab-nav-item hover-lift interactive ${activeProject === index ? 'active' : ''}`}
              onClick={() => setActiveProject(index)}
            >
              <span className="tab-nav-icon">
                {project.category === 'Hackathon' && '🏆'}
                {project.category === 'Web App' && '💻'}
                {project.category === 'Website' && '🌐'}
                {project.category === 'Portfolio' && '🎨'}
                {project.category === 'Simulación 3D' && '🎮'}
                {project.category === 'AI Assistant' && '🤖'}
                {project.category === 'Coming Soon' && '🚀'}
              </span>
              <span className="tab-nav-title">{project.title}</span>
              {project.preview && (project.videoType === 'mp4' || project.videoType === 'webp') && (
                <span className="video-badge">📹</span>
              )}
            </button>
          ))}
        </div>

        {/* Contenido del proyecto - Video arriba, Info abajo */}
        <div className={`project-showcase ${isVisible ? 'animate' : ''}`}>
          {/* Video/Preview Section - Ancho completo arriba */}
          <div className="project-video-section">
            <div className="video-container">
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
                />
              ) : (
                <div className="placeholder-video">
                  <div className="placeholder-icon-large">
                    {projects[activeProject].category === 'Hackathon' && '🏆'}
                    {projects[activeProject].category === 'Web App' && '💻'}
                    {projects[activeProject].category === 'Website' && '🌐'}
                    {projects[activeProject].category === 'Portfolio' && '🎨'}
                    {projects[activeProject].category === 'Simulación 3D' && '🎮'}
                    {projects[activeProject].category === 'AI Assistant' && '🤖'}
                    {projects[activeProject].category === 'Coming Soon' && '🚀'}
                  </div>
                  <p className="placeholder-text">
                    {projects[activeProject].preview ? 'Cargando preview...' : 'Vista previa disponible próximamente'}
                  </p>
                </div>
              )}
              
              {/* Status badge */}
              <div className="video-status-badge">
                <span className={`status-badge ${projects[activeProject].status.includes('Desarrollo') ? 'development' : 
                  (projects[activeProject].status.includes('2do') || projects[activeProject].status.includes('Ganador')) ? 'award' : 'completed'}`}>
                  {projects[activeProject].status}
                </span>
              </div>

              {/* Video overlay gradient */}
              <div className="video-overlay"></div>
            </div>
          </div>

          {/* Info Section - Abajo del video */}
          <div className="project-info-section">
            <div className="info-header">
              <h3 className="project-title">{projects[activeProject].title}</h3>
              <span className="project-category">{projects[activeProject].category}</span>
            </div>

            <p className="project-description">
              {projects[activeProject].description}
            </p>

            {projects[activeProject].certificateId && (
              <div className="project-actions" style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>
                <button 
                  className="btn btn-primary hover-lift interactive"
                  style={{ padding: '0.6rem 1.2rem', fontSize: '0.9rem' }}
                  onClick={() => {
                    const certSection = document.getElementById('certificates');
                    if (certSection) {
                      certSection.scrollIntoView({ behavior: 'smooth' });
                      setTimeout(() => {
                        window.dispatchEvent(new CustomEvent('openCertificate', { detail: projects[activeProject].certificateId }));
                      }, 600);
                    }
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    Ver Certificado 🏆
                  </span>
                  <div className="btn-shine"></div>
                </button>
              </div>
            )}

            <div className="info-grid">
              {/* Tecnologías */}
              <div className="info-block">
                <h4>Tecnologías</h4>
                <div className="tech-tags">
                  {projects[activeProject].technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="info-block">
                <h4>Características</h4>
                <ul className="features-list">
                  {projects[activeProject].features.map((feature, index) => (
                    <li key={index}>{feature}</li>
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
