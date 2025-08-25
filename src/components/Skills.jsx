import React, { useEffect, useRef } from 'react';
import './Skills.css';

const Skills = () => {
  const skillsRef = useRef(null);

  const skillCategories = [
    {
      title: 'Frontend',
      icon: '🎨',
      skills: [
        { name: 'React', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Vite', level: 80 }
      ]
    },
    {
      title: 'Backend',
      icon: '⚙️',
      skills: [
        { name: 'Python', level: 88 },
        { name: 'Node.js', level: 75 },
        { name: 'API REST', level: 85 }
      ]
    },
    {
      title: 'Bases de Datos',
      icon: '🗄️',
      skills: [
        { name: 'SQL', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'Firebase', level: 85 }
      ]
    },
    {
      title: 'Herramientas',
      icon: '🛠️',
      skills: [
        { name: 'Git', level: 85 },
        { name: 'VS Code', level: 90 },
        { name: 'Responsive Design', level: 90 }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.skill-progress');
            progressBars.forEach((bar, index) => {
              setTimeout(() => {
                bar.style.animation = 'fillProgress 1.5s ease-out forwards';
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills" ref={skillsRef}>
      <div className="container">
        <div className="section-header fade-in">
          <h2 className="section-title">Habilidades Técnicas</h2>
          <p className="section-subtitle">Tecnologías y herramientas que domino para crear soluciones innovadoras</p>
        </div>

        <div className="skills-grid stagger-container">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category hover-lift stagger-item">
              <div className="category-header">
                <div className="category-icon pulse">{category.icon}</div>
                <h3>{category.title}</h3>
              </div>
              
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item hover-glow">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{ 
                          '--width': `${skill.level}%`,
                          animationDelay: `${index * 0.1 + skillIndex * 0.1}s`
                        }}
                      >
                        <div className="progress-shine"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="additional-skills fade-in">
          <h3 className="skills-section-title">Otras Competencias</h3>
          <div className="tags">
            <span className="tag interactive hover-lift">Problem Solving</span>
            <span className="tag interactive hover-lift">Team Work</span>
            <span className="tag interactive hover-lift">Agile Methodologies</span>
            <span className="tag interactive hover-lift">Clean Code</span>
            <span className="tag interactive hover-lift">Testing</span>
            <span className="tag interactive hover-lift">Code Review</span>
            <span className="tag interactive hover-lift">Documentation</span>
            <span className="tag interactive hover-lift">Performance Optimization</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
