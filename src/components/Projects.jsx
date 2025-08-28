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
      title: 'Proyecto en Desarrollo #1',
      description: 'Nuevo proyecto emocionante en desarrollo que incorporará las últimas tecnologías y mejores prácticas. Detalles completos disponibles próximamente.',
      technologies: ['React', 'Python', 'SQL'],
      features: [
        'En planificación',
        'Arquitectura moderna',
        'Mejores prácticas',
        'Diseño innovador'
      ],
      status: 'En Desarrollo',
      category: 'Coming Soon',
      preview: null,
      videoType: null
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

        <div className={`projects-showcase ${isVisible ? 'animate' : ''}`}>
          <div className="project-tabs stagger-container">
            {projects.map((project, index) => (
              <button
                key={project.id}
                className={`tab stagger-item hover-lift interactive ${activeProject === index ? 'active' : ''}`}
                onClick={() => setActiveProject(index)}
              >
                <div className="tab-icon pulse">
                  {project.category === 'Hackathon' && '🏆'}
                  {project.category === 'Web App' && '💻'}
                  {project.category === 'Website' && '🌐'}
                  {project.category === 'Coming Soon' && '🚀'}
                </div>
                <div className="tab-info">
                  <div className="tab-title">
                    {project.title}
                    {project.preview && project.videoType === 'mp4' && (
                      <span className="video-indicator bounce">📹</span>
                    )}
                  </div>
                  <div className="tab-category">{project.category}</div>
                </div>
              </button>
            ))}
          </div>

          <div className="project-content slide-in-right">
            <div className="project-card hover-glow">
              <div className="project-image">
                {projects[activeProject].preview && projects[activeProject].videoType === 'mp4' ? (
                  <video 
                    src={projects[activeProject].preview}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="project-video"
                    preload="metadata"
                    onError={(e) => console.log('Error loading video:', e)}
                    onLoadStart={() => console.log('Video loading started')}
                    onLoadedData={() => console.log('Video loaded successfully')}
                  >
                    Tu navegador no soporta videos HTML5.
                  </video>
                ) : (
                  <div className="placeholder-image">
                    <div className="placeholder-icon">
                      {projects[activeProject].category === 'Hackathon' && '🏆'}
                      {projects[activeProject].category === 'Web App' && '💻'}
                      {projects[activeProject].category === 'Website' && '🌐'}
                      {projects[activeProject].category === 'Coming Soon' && '🚀'}
                    </div>
                    <p>{projects[activeProject].preview ? 'Cargando preview...' : 'Vista previa disponible próximamente'}</p>
                  </div>
                )}
                <div className="project-status">
                  <span className={`status ${projects[activeProject].status.includes('Desarrollo') ? 'development' : 
                    projects[activeProject].status.includes('2do') ? 'award' : 'completed'}`}>
                    {projects[activeProject].status}
                  </span>
                </div>
              </div>

              <div className="project-info">
                <h3>{projects[activeProject].title}</h3>
                <p className="project-description">
                  {projects[activeProject].description}
                </p>

                <div className="project-technologies">
                  <h4>Tecnologías utilizadas:</h4>
                  <div className="tech-tags">
                    {projects[activeProject].technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="project-features">
                  <h4>Características principales:</h4>
                  <ul>
                    {projects[activeProject].features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-actions">
                  {projects[activeProject].status === 'En Desarrollo' && (
                    <button className="btn btn-disabled" disabled>
                      Próximamente disponible
                    </button>
                  )}
                  {projects[activeProject].status !== 'En Desarrollo' && (
                    <div className="project-note">
                      <p>💼 Información confidencial del cliente</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
