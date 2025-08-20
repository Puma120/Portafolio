import React from 'react';
import './Skills.css';

const Skills = () => {
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

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2>Habilidades Técnicas</h2>
          <p>Tecnologías y herramientas que domino para crear soluciones innovadoras</p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <div className="category-header">
                <div className="category-icon">{category.icon}</div>
                <h3>{category.title}</h3>
              </div>
              
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
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
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="additional-skills">
          <h3>Otras Competencias</h3>
          <div className="tags">
            <span className="tag">Problem Solving</span>
            <span className="tag">Team Work</span>
            <span className="tag">Agile Methodologies</span>
            <span className="tag">Clean Code</span>
            <span className="tag">Testing</span>
            <span className="tag">Code Review</span>
            <span className="tag">Documentation</span>
            <span className="tag">Performance Optimization</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
