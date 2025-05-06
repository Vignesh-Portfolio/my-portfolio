// src/SkillsSection.jsx
import React from 'react';
import './SkillsSection.css';

function SkillsSection() {
  const skills = [
    'HTML', 'CSS', 'JavaScript', 'React',
    'Three.js', 'Blender', 'Video Editing'
  ];

  return (
    <section className="skills-section">
      <h2>🛠️ Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <span key={index} className="skill-badge">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
