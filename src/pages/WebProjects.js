import React, { useState } from 'react';
import './ProjectsPage.css';
import ButtonEffect from '../ButtonEffect';

const webProjects = [
  {
    img: process.env.PUBLIC_URL + '/Media/W-image/SimonGame.png',
    title: 'Simon Game',
    description: 'Memory challenge game built with HTML, CSS, and JavaScript.',
    link: 'https://royal3vicky9joyboy.github.io/Simon-Game/',
    button: 'Play'
  },
  {
    img: process.env.PUBLIC_URL + '/Media/W-image/Portfolio1.1.png',
    title: 'Personal Blog Website',
    description: 'Clean UI for writing and reading blogs.',
    link: 'https://royal3vicky9joyboy.github.io/Blog2/',
    button: 'View Blog'
  },
  {
    img: process.env.PUBLIC_URL + '/Media/W-image/Drums.png',
    title: 'Online Drums',
    description: 'Play drums using keyboard or mouse.',
    link: 'https://royal3vicky9joyboy.github.io/Online-Drums/',
    button: 'Play'
  },
];

function WebProjects() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = webProjects.filter(project =>
    project.title.toLowerCase().includes(searchQuery.trim().toLowerCase())
  );

  return (
    <div className="projects-page">
      <nav className="navbar">
        <div className="nav-left">
          <a href="/" className="nav-link">Home</a>
        </div>

        <h1 className="navbar-title">💻 All Web Development Projects</h1>

        <form onSubmit={(e) => e.preventDefault()} className="search-form">
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </form>
      </nav>

      <div className="projects-grid">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.img} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noreferrer">
                <ButtonEffect text={project.button} />
              </a>
            </div>
          ))
        ) : (
          <p style={{ textAlign: 'center', width: '100%' }}>No projects found.</p>
        )}
      </div>
    </div>
  );
}

export default WebProjects;
