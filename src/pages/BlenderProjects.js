import React, { useState } from 'react';
import './ProjectsPage.css';
import ButtonEffect from '../ButtonEffect';

const webProjects = [
  {
    img: process.env.PUBLIC_URL + '/Media/BV-video/music-dance.mp4',
    title: 'Robo Dance',
    description: '',
    link: 'https://youtube.com/shorts/WvZSOzsUiZs',
    button: 'YouTube'
  },
  {
    img: process.env.PUBLIC_URL + '/Media/BV-video/CN.mp4',
    title: 'Night Walker',
    description: '',
    link: 'https://youtu.be/MkPEYgD3uSQ',
    button: 'YouTube'
  },
  {
    img: process.env.PUBLIC_URL + '/Media/BV-video/B.mp4',
    title: 'Butterfly',
    description: '',
    link: 'https://youtube.com/shorts/ge0du7z6BMk',
    button: 'YouTube'
  },
  {
    img: process.env.PUBLIC_URL + '/Media/BV-image/Table.png',
    title: 'Table',
    description: '',
    link: 'https://www.instagram.com/p/DFqHok7TjKE/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    button: 'Instagram'
  },
  {
    img: process.env.PUBLIC_URL + '/Media/BV-video/B1.mp4',
    title: 'Blender Daily',
    description: '',
    link: 'https://www.instagram.com/reel/DFnmVPkz-yX/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    button: 'Instagram'
  }
];

function WebProjects() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = webProjects.filter(project =>
    project.title.toLowerCase().includes(searchQuery.trim().toLowerCase())
  );

  const isVideo = (url) => {
    return url.match(/\.(mp4|webm|png|jpg|ogg)$/i);
  };

  return (
    <div className="projects-page">
      <nav className="navbar">
        <div className="nav-left">
          <a href="/" className="nav-link">Home</a>
        </div>

        <h1 className="navbar-title">🎬 Animation / Video Editing Projects</h1>

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
              {isVideo(project.img) ? (
                <video
                  controls
                  width="100%"
                  height="150"
                  style={{ borderRadius: '8px', objectFit: 'cover' }}
                >
                  <source src={project.img} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={project.img}
                  alt={project.title}
                  width="100%"
                  height="150"
                  style={{ borderRadius: '8px', objectFit: 'cover' }}
                />
              )}
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






// import React, { useState } from 'react';
// import './ProjectsPage.css';
// import ButtonEffect from '../ButtonEffect';

// const webProjects = [
//   {
//     img: process.env.PUBLIC_URL + '/Media/BV-video/music-dance.mp4',
//     title: 'Robo Dance',
//     description: '',
//     link: 'https://youtube.com/shorts/WvZSOzsUiZs',
//     button: 'YouTube'
//   },
//   {
//     img: process.env.PUBLIC_URL + '/Media/BV-video/CN.mp4',
//     title: 'Night Walker',
//     description: '',
//     link: 'https://youtu.be/MkPEYgD3uSQ',
//     button: 'YouTube'
//   },
//   {
//     img: process.env.PUBLIC_URL + '/Media/BV-video/B.mp4',
//     title: 'Butterfly',
//     description: '',
//     link: 'https://youtube.com/shorts/ge0du7z6BMk',
//     button: 'YouTube'
//   },




//  {
//     img: process.env.PUBLIC_URL + '/Media/BV-image/Table.webp',
//     title: 'Table',
//     description: '',
//     link: 'https://www.instagram.com/p/DFqHok7TjKE/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
//     button: 'Instagram'
//   },




//   {
//     img: process.env.PUBLIC_URL + '/Media/BV-video/B1.mp4',
//     title: 'Blender Daily',
//     description: '',
//     link: 'https://www.instagram.com/reel/DFnmVPkz-yX/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
//     button: 'Instagram'
//   },







// ];

// function WebProjects() {
//   const [searchQuery, setSearchQuery] = useState('');

//   const filteredProjects = webProjects.filter(project =>
//     project.title.toLowerCase().includes(searchQuery.trim().toLowerCase())
//   );

//   return (
//     <div className="projects-page">
//       <nav className="navbar">
//         <div className="nav-left">
//           <a href="/" className="nav-link">Home</a>
//         </div>

//         <h1 className="navbar-title">🎬 Animation / Video Editing Projects</h1>

//         <form onSubmit={(e) => e.preventDefault()} className="search-form">
//           <input
//             type="text"
//             placeholder="Search projects..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="search-input"
//           />
//         </form>
//       </nav>

//       <div className="projects-grid">
//         {filteredProjects.length > 0 ? (
//           filteredProjects.map((project, index) => (
//             <div className="project-card" key={index}>
//               <video
//                 controls
//                 width="100%"
//                 height="150"
//                 style={{ borderRadius: '8px', objectFit: 'cover' }}
//               >
//                 <source src={project.img} type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//               <h3>{project.title}</h3>
//               <p>{project.description}</p>
//               <a href={project.link} target="_blank" rel="noreferrer">
//                 <ButtonEffect text={project.button} />
//               </a>
//             </div>
//           ))
//         ) : (
//           <p style={{ textAlign: 'center', width: '100%' }}>No projects found.</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default WebProjects;
