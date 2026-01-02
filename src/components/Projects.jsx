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
      preview: '/Grabación Nutri.mp4',
      videoType: 'mp4'
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
      preview: '/Grabación Moda.mp4',
      videoType: 'mp4'
    },
    {
      id: 3,
      title: 'Proyecto Hackathon Nacional - 2do Lugar 🏆',
      description: 'Desarrollo de la interfaz frontend para una solución innovadora que obtuvo el segundo lugar en hackathon nacional. Me enfoqué en crear una experiencia de usuario excepcional bajo presión de tiempo.',
      technologies: ['Python', 'React', 'MongoDB', 'API REST'],
      features: [
        'Desarrollo frontend bajo presión',
        'Interfaz innovadora con React',
        'UX/UI design efectivo',
        'Prototipado rápido',
        'Solución visualmente impactante'
      ],
      status: '2do Lugar Nacional',
      category: 'Hackathon',
      preview: '/Grabación hackathon.mp4',
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
      preview: '/Grabacion portafolio daniela.mp4',
      videoType: 'mp4'
    },
    {
      id: 5,
      title: 'Proyecto en Desarrollo #2',
      description: 'Otra iniciativa prometedora que está en las etapas iniciales de desarrollo. Combinará múltiples tecnologías para crear una solución integral.',
      technologies: ['JavaScript', 'Firebase', 'MongoDB'],
      features: [
        'Concepto innovador',
        'Tecnologías modernas',
        'Escalabilidad',
        'User Experience optimizada'
      ],
      status: 'En Desarrollo',
      category: 'Coming Soon',
      preview: null,
      videoType: null
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
                {project.category === 'Coming Soon' && '🚀'}
              </span>
              <span className="tab-nav-title">{project.title}</span>
              {project.preview && project.videoType === 'mp4' && (
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
              ) : (
                <div className="placeholder-video">
                  <div className="placeholder-icon-large">
                    {projects[activeProject].category === 'Hackathon' && '🏆'}
                    {projects[activeProject].category === 'Web App' && '💻'}
                    {projects[activeProject].category === 'Website' && '🌐'}
                    {projects[activeProject].category === 'Portfolio' && '🎨'}
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
                  projects[activeProject].status.includes('2do') ? 'award' : 'completed'}`}>
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

            {/* Footer info */}
            <div className="info-footer">
              {projects[activeProject].status === 'En Desarrollo' ? (
                <span className="coming-soon-badge">🚀 Próximamente disponible</span>
              ) : (
                <span className="confidential-badge">💼 Información confidencial del cliente</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
