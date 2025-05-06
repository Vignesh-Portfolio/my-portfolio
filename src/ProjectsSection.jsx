// src/ProjectsSection.jsx
import React from 'react';
import './ProjectsSection.css';
import ButtonEffect from './ButtonEffect';
import { Link } from 'react-router-dom';

function ProjectsSection() {
  const webProjects = [
    {
      img: 'Media/W-image/SimonGame.png',
      title: 'Simon Game — Memory challenge game built with HTML, CSS, and JavaScript.',
      link: 'https://royal3vicky9joyboy.github.io/Simon-Game/',
      button: 'Play'
    },
    {
      img: 'Media/W-image/Portfolio1.1.png',
      title: 'Personal Blog Website — Clean UI for writing and reading blogs.',
      link: 'https://royal3vicky9joyboy.github.io/Blog2/',
      button: 'View Blog'
    },
    {
      img: 'Media/W-image/Drums.png',
      title: 'Online Drums — Play drums using keyboard or mouse.',
      link: 'https://royal3vicky9joyboy.github.io/Online-Drums/',
      button: 'Play'
    },
    {
      img: 'Media/W-image/wd.jpg',
      title: 'See More Projects',
      link: '',
      button: 'Explore More'
    }
  ];

  const vfxProjects = [
    {
      video: 'Media/BV-video/music-dance.mp4',
      title: 'Robo Dance',
      link: 'https://www.instagram.com/reel/DIDfPm5yq6H/?igsh=MXcydTVmdHJ3amE2MQ==',
      button: 'View'
    },
    {
      video: 'Media/BV-video/CN.mp4',
      title: 'Night Walker',
      link: 'https://www.instagram.com/reel/DHtWuYhTI_D/?igsh=MTJiYm8zY3RsZ3Q4Zw==',
      button: 'View'
    },
    {
      video: 'Media/BV-video/B.mp4',
      title: 'Butterfly',
      link: 'https://www.instagram.com/reel/DGxU-AxT2s_/?igsh=MXRiYXozY3g0eDl6aA==',
      button: 'View'
    },
    {
      img: 'image/Vicky.png',
      title: 'See More Projects',
      link: '',
      button: 'Explore More'
    }
  ];

  const renderCard = (project, index, type) => (
    <div className="card" key={index}>
      <div className="card-inner">
        <div className="card-front">
          {project.img ? (
            <img src={project.img} alt={`project-${index}`} />
          ) : (
            <video src={project.video} muted autoPlay loop />
          )}
        </div>
        <div className="card-back">
          <h3>{project.title}</h3>

          {project.button === 'Explore More' ? (
            <Link to={type === 'web' ? '/web-projects' : '/blender-projects'}>
              <ButtonEffect text={project.button} />
            </Link>
          ) : (
            <a href={project.link} target="_blank" rel="noreferrer">
              <ButtonEffect text={project.button} />
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section className="projects-section">
      <div className="grid-container">
        <div className="box title">
          <h2>💻 Web Development Projects</h2>
        </div>
        <div className="box title">
          <h2>🎬 Animation / Video Editing Projects</h2>
        </div>

        <div className="box cards-container">
          {webProjects.map((project, index) => renderCard(project, index, 'web'))}
        </div>

        <div className="box cards-container">
          {vfxProjects.map((project, index) => renderCard(project, index, 'vfx'))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;



// // src/ProjectsSection.jsx
// import React from 'react';
// import './ProjectsSection.css';
// import ButtonEffect from './ButtonEffect';
// import { Link } from 'react-router-dom';


// function ProjectsSection() {
//   const webProjects = [
//     {
//       img: 'Media/W-image/SimonGame.png',
//       title: 'Simon Game — Memory challenge game built with HTML, CSS, and JavaScript.',
//       link: 'https://royal3vicky9joyboy.github.io/Simon-Game/',
//      button: 'Play'
//     },
//     {
//       img: 'Media/W-image/Portfolio1.1.png',
//       title: 'Personal Blog Website — Clean UI for writing and reading blogs.',
//       link: 'https://royal3vicky9joyboy.github.io/Blog2/',
//      button: 'View Blog'
//     },
//     {
//       img: 'Media/W-image/Drums.png',
//       title: 'Online Drums — Play drums using keyboard or mouse.',
//       link: 'https://royal3vicky9joyboy.github.io/Online-Drums/',
//      button: 'Play'
//     },
//     {
//       img: 'Media/W-image/wd.jpg',
//       title: 'See More Projects',
//       link: '',
//    button: 'Explore More'
//     }
//   ];

//   const vfxProjects = [
//     {
//       video: 'Media/BV-video/music-dance.mp4',
//       title: 'Blender',
//       link: '#',
//      button: 'View Project'
//     },
//     {
//       video: 'Media/BV-video/CN.mp4',
//       title: 'Blender',
//       link: '#',
//      button: 'View Project'
//     },
//     {
//       video: 'Media/BV-video/B.mp4',
//       title: 'Blender',
//       link: '#',
//       button: 'View Project'
//     },
//     {
//       img: 'image/Vicky.png',
//       title: 'See More Projects',
//       link: 'your-vfx-projects-page.html',
//      button: 'Explore More'
//     }
//   ];

//   const renderCard = (project, index) => (
//     <div className="card" key={index}>
//       <div className="card-inner">
//         <div className="card-front">
//           {project.img ? (
//             <img src={project.img} alt={`project-${index}`} />
//           ) : (
//             <video src={project.video} muted autoPlay loop />
//           )}
//         </div>
//         <div className="card-back">
//           <h3>{project.title}</h3>
//           {/* <a href={project.link} target="_blank" className="btn" rel="noreferrer">
//             {project.button}
//           </a> */}
//           <a href={project.link} target="_blank" rel="noreferrer">
//           <ButtonEffect text={project.button} />

// </a>

//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <section className="projects-section">
//       <div className="grid-container">
//         <div className="box title">
//           <h2>💻 Web Development Projects</h2>
//         </div>
//         <div className="box title">
//           <h2>🎬 Animation / Video Editing Projects</h2>
//         </div>

//         <div className="box cards-container">
//           {webProjects.map(renderCard)}
//         </div>

//         <div className="box cards-container">
//           {vfxProjects.map(renderCard)}
//         </div>
//       </div>

//     </section>
  
//   );
// }





// export default ProjectsSection;
