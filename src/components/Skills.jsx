import React from 'react';
import CyberIcon from './CyberIcons';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend & Web Interfaces',
      icon: 'react',
      badge: 'CLIENT_SIDE',
      summary: 'Arquitectura de aplicaciones reactivas, sistemas de diseno y visualizaciones graficas interactivas.',
      skills: [
        {
          name: 'React (v18 / v19)',
          tag: 'CORE',
          desc: 'Arquitectura basada en componentes, hooks personalizados y renderizado de alto rendimiento.'
        },
        {
          name: 'TypeScript',
          tag: 'PROD',
          desc: 'Sistemas con tipado estricto, interfaces complejas y contratos de datos seguros.'
        },
        {
          name: 'JavaScript (ES6+)',
          tag: 'CORE',
          desc: 'Programacion asincrona, manipulacion del DOM, Canvas API y motores de animacion.'
        },
        {
          name: 'Vite & Build Tooling',
          tag: 'BUILD',
          desc: 'Empaquetado optimizado, HMR instantaneo y configuracion de modulos para produccion.'
        },
        {
          name: 'HTML5 / Modern CSS',
          tag: 'UI/UX',
          desc: 'Aceleracion por GPU, diseno adaptable, micro-interacciones y accesibilidad (a11y).'
        },
        {
          name: 'Three.js / WebGL & Canvas',
          tag: '3D',
          desc: 'Simulaciones graficas interactivas, renderizado acelerado y redes de particulas.'
        },
        {
          name: 'Blazor',
          tag: 'FRAMEWORK',
          desc: 'Desarrollo de interfaces web interactivas sobre el ecosistema .NET.'
        }
      ]
    },
    {
      title: 'Backend & Arquitectura de APIs',
      icon: 'server',
      badge: 'SERVER_SIDE',
      summary: 'Servicios web asincronos, enrutamiento modular y comunicacion en tiempo real.',
      skills: [
        {
          name: 'Python (FastAPI / Flask)',
          tag: 'API',
          desc: 'Microservicios asincronos de alta velocidad, esquemas Pydantic y enrutamiento modular.'
        },
        {
          name: 'C# / .NET (ASP.NET Core)',
          tag: 'BACKEND',
          desc: 'APIs empresariales estructuradas, arquitectura limpia e inyeccion de dependencias.'
        },
        {
          name: 'RESTful APIs & WebSockets',
          tag: 'NETWORK',
          desc: 'Diseno de endpoints REST, streaming de datos bidireccional y consumo de webhooks.'
        },
        {
          name: 'Sistemas Distribuidos',
          tag: 'ARCH',
          desc: 'Comunicacion entre servicios desacoplados, autenticacion por tokens y control de concurrencia.'
        },
        {
          name: 'Node.js',
          tag: 'RUNTIME',
          desc: 'Herramientas de automatizacion, scripting y servicios backend ligeros.'
        }
      ]
    },
    {
      title: 'Inteligencia Artificial & Sistemas Emergentes',
      icon: 'cpu',
      badge: 'AI_LABS',
      summary: 'Orquestacion de agentes autonomos, integracion de modelos generativos y computacion grafica.',
      skills: [
        {
          name: 'Arquitecturas Multi-Agente',
          tag: 'AGENTS',
          desc: 'Flujos autonomos coordinados, delegacion de tareas y agentes inteligentes especializados.'
        },
        {
          name: 'Gemini API & LLM Integrations',
          tag: 'MODELS',
          desc: 'Inferencia de lenguaje natural, estructuracion de datos y pipelines de procesamiento asistido.'
        },
        {
          name: 'LangChain & RAG Systems',
          tag: 'RAG',
          desc: 'Recuperacion aumentada por generacion, busqueda semantica y gestion de contexto.'
        },
        {
          name: 'Procesamiento de Lenguaje Natural',
          tag: 'NLP',
          desc: 'Analisis de texto, parsing y transformacion de lenguaje para integracion en sistemas.'
        },
        {
          name: 'Unity & ShaderLab',
          tag: 'SHADERS',
          desc: 'Desarrollo de shaders personalizados y computacion grafica en tiempo real.'
        }
      ]
    },
    {
      title: 'Bases de Datos & Infraestructura DevOps',
      icon: 'database',
      badge: 'INFRA_DB',
      summary: 'Persistencia estructurada, bases NoSQL, contenedorizacion y despliegues continuos.',
      skills: [
        {
          name: 'PostgreSQL',
          tag: 'SQL',
          desc: 'Bases de datos relacionales, modelado de entidades, constraints e indexacion.'
        },
        {
          name: 'MongoDB',
          tag: 'NoSQL',
          desc: 'Almacenamiento orientado a documentos BSON, agregaciones y escalabilidad flexible.'
        },
        {
          name: 'Firebase (Firestore / Realtime)',
          tag: 'CLOUD',
          desc: 'Sincronizacion reactiva de estado en la nube y gestion de autenticacion.'
        },
        {
          name: 'Docker & Docker Compose',
          tag: 'DEVOPS',
          desc: 'Contenedorizacion de microservicios, entornos reproducibles y orquestacion local.'
        },
        {
          name: 'Git & GitHub Actions',
          tag: 'CI/CD',
          desc: 'Control de versiones estricto, flujos de integracion continua y despliegues automatizados.'
        },
        {
          name: 'Vercel Deployments',
          tag: 'EDGE',
          desc: 'Despliegues continuos serverless, optimizacion edge y configuracion de dominios.'
        }
      ]
    }
  ];

  const githubProjectsFootprint = [
    { name: 'SynapTechAPI', tech: 'Python / FastAPI / REST', type: 'Backend API' },
    { name: 'Nova-Agente', tech: 'Python / Multi-Agent', type: 'Autonomous AI' },
    { name: 'LAF_Mapa', tech: 'TypeScript / Leaflet', type: 'Geospatial Web' },
    { name: '3D-Vigilante', tech: 'JavaScript / WebGL', type: '3D Simulation' },
    { name: 'Cargas-IA', tech: 'Python / Gemini LLM', type: 'AI Automation' },
    { name: 'Portafolio', tech: 'React 19 / Vite / CSS GPU', type: 'Production SPA' }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header fade-in">
          <div className="section-telemetry-badge">
            <span className="telemetry-led-live" />
            <span>TECH_STACK // GITHUB_VERIFIED</span>
          </div>
          <h2 className="section-title" data-scramble>Stack Tecnológico</h2>
          <p className="section-subtitle">
            Tecnologías, lenguajes y arquitecturas aplicadas en proyectos de desarrollo full stack, inteligencia artificial y sistemas interactivos.
          </p>
        </div>

        {/* GitHub Footprint Telemetry Header */}
        <div className="github-profile-bar fade-in">
          <div className="gh-bar-left">
            <CyberIcon name="github" size={20} color="var(--neon-cyan)" />
            <div className="gh-meta">
              <span className="gh-user">github.com/Puma120</span>
              <span className="gh-status">Perfil verificado · 48+ Repositorios Públicos · GitHub Pro</span>
            </div>
          </div>
          <a
            href="https://github.com/Puma120"
            target="_blank"
            rel="noopener noreferrer"
            className="gh-action-btn"
            aria-label="Abrir perfil de GitHub de Puma120"
          >
            <span>EXPLORAR REPOSITORIOS</span>
            <CyberIcon name="external" size={14} />
          </a>
        </div>

        {/* Skills Categories Matrix */}
        <div className="skills-grid stagger-container">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category stagger-item" data-tilt>
              <div className="category-header">
                <div className="category-header-top">
                  <div className="category-icon-wrap">
                    <CyberIcon name={category.icon} size={20} color="var(--neon-cyan)" />
                  </div>
                  <span className="category-system-badge">{category.badge}</span>
                </div>
                <h3>{category.title}</h3>
                <p className="category-summary">{category.summary}</p>
              </div>

              <div className="skills-node-grid">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-node">
                    <div className="skill-node-header">
                      <div className="skill-node-title-wrap">
                        <span className="skill-node-led" />
                        <span className="skill-node-name">{skill.name}</span>
                      </div>
                      <span className="skill-node-tag">{skill.tag}</span>
                    </div>
                    <p className="skill-node-desc">{skill.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Real GitHub Repositories Footprint */}
        <div className="github-evidence-section fade-in">
          <div className="evidence-header">
            <CyberIcon name="gitBranch" size={18} color="var(--neon-cyan)" />
            <h3 className="skills-section-title">// PROYECTOS_Y_REPOSITORIOS_REPRESENTATIVOS</h3>
          </div>
          <div className="evidence-grid">
            {githubProjectsFootprint.map((repo, i) => (
              <a
                key={i}
                href={`https://github.com/Puma120/${repo.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="evidence-card"
                aria-label={`Ver repositorio ${repo.name} en GitHub`}
              >
                <div className="evidence-card-top">
                  <span className="evidence-repo-name">{repo.name}</span>
                  <CyberIcon name="external" size={13} color="var(--text-muted)" />
                </div>
                <div className="evidence-card-bottom">
                  <span className="evidence-tech">{repo.tech}</span>
                  <span className="evidence-type">{repo.type}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Competencies Tags */}
        <div className="additional-skills fade-in">
          <h3 className="skills-section-title">// DOMINIOS_Y_COMPETENCIAS_CLAVE</h3>
          <div className="tags">
            {[
              'Frontend Architecture',
              'Multi-Agent Workflows',
              'REST API Engineering',
              'LLM Integration',
              'Database Modeling',
              'GPU Accelerated UI',
              'Docker Containerization',
              'Accessibility Standards',
              '3D Interactive Graphics',
              'CI/CD Workflows'
            ].map((tag, i) => (
              <span key={i} className="tag interactive">
                <span className="tag-prefix">#</span>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
