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
    img: process.env.PUBLIC_URL + '/Media/BV-video/Rider.mp4',
    title: 'The Journey Begins',
    description: '',
    link: 'https://youtube.com/shorts/NhFYtix-kDI',
    button: 'YouTube'
  },

 {
    img: process.env.PUBLIC_URL + '/Media/BV-video/Rider.mp4',
    title: 'The Journey Begins',
    description: '',
    link: 'https://youtube.com/shorts/NhFYtix-kDI',
    button: 'YouTube'
  },

 {
    img: process.env.PUBLIC_URL + '/Media/BV-video/up.mp4',
    title: 'Rise & Rotate',
    description: '',
    link: 'https://www.instagram.com/reel/DFzc__WzAU-/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    button: 'Instagram'
  },



  {
    img: process.env.PUBLIC_URL + '/Media/BV-video/ball.mp4',
    title: 'Bouncing Ball',
    description: '',
    link: 'https://www.instagram.com/reel/DFxdS3PTKuT/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    button: 'Instagram'
  },





  {
    img: process.env.PUBLIC_URL + '/Media/BV-video/CubeM.mp4',
    title: 'Cube',
    description: '',
    link: 'https://www.instagram.com/reel/DFww4atO0sm/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    button: 'Instagram'
  },





  {
    img: process.env.PUBLIC_URL + '/Media/BV-video/Island.mp4',
    title: 'Island',
    description: '',
    link: 'https://youtube.com/shorts/Oj6NgMTK0Rc',
    button: 'YouTube'
  },










  
   {
    img: process.env.PUBLIC_URL + '/Media/BV-image/Island.png',
    title: 'Island',
    description: '',
    link: 'https://www.instagram.com/p/DFug_agzPKM/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    button: 'Instagram'
  },







 {
    img: process.env.PUBLIC_URL + '/Media/BV-video/DragonHouse.mp4',
    title: 'Dragon House',
    description: '',
    link: 'https://youtube.com/shorts/0ozrpU7jUzA?si=PBBMEsIMM9T1GhoE',
    button: 'YouTube'
  },



  {
    img: process.env.PUBLIC_URL + '/Media/BV-video/Building.mp4',
    title: 'Building',
    description: '',
    link: 'https://www.instagram.com/reel/DFsyN0rzzC8/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    button: 'Instagram'
  },

{
    img: process.env.PUBLIC_URL + '/Media/BV-image/Building.png',
    title: 'Building',
    description: '',
    link: 'https://www.instagram.com/p/DFsluYYzQ-s/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    button: 'Instagram'
  },


  {
    img: process.env.PUBLIC_URL + '/Media/BV-video/Blender1.mp4',
    title: 'Cycle Engine',
    description: '',
    link: 'https://youtu.be/A-SDwFxAj9w?si=LZxaUus-pw1h00qH',
    button: 'YouTube'
  },






  {
    img: process.env.PUBLIC_URL + '/Media/BV-image/Blender.png',
    title: 'Blender',
    description: '',
    link: 'https://www.instagram.com/p/DFrxbvwTgHU/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    button: 'Instagram'
  },

    {
    img: process.env.PUBLIC_URL + '/Media/BV-video/Glass.mp4',
    title: 'Glass Design in Blender',
    description: '',
    link: 'https://youtu.be/ue8okxP00rI?si=2DgAYBXaOY8IckcO',
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
    return url.match(/\.(mp4|webm|ogg)$/i);
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
