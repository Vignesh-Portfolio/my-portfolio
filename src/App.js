import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WebProjects from './pages/WebProjects';
import BlenderProjects from './pages/BlenderProjects';
import HeroSection from './HeroSection';
import SkillsSection from './SkillsSection';
import ProjectsSection from './ProjectsSection';
import ReachMeSection from './ReachMeSection';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <SkillsSection />
            <ProjectsSection />
            <ReachMeSection />
          </>
        } />
        
        <Route path="/web-projects" element={<WebProjects />} />
        <Route path="/blender-projects" element={<BlenderProjects />} />
      </Routes>
    </Router>
  );
}

export default App;

 


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import HeroSection from './HeroSection';
// import SkillsSection from './SkillsSection';
// import ProjectsSection from './ProjectsSection';
// import ReachMeSection from './ReachMeSection';

// import WebProjects from './WebProjects'; // adjust path if inside /pages
// import BlenderProjects from './BlenderProjects'; // adjust path if inside /pages

// function Home() {
//   return (
//     <>
//       <HeroSection />
//       <SkillsSection />
//       <ProjectsSection />
//       <ReachMeSection />
//     </>
//   );
// }

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/web-projects" element={<WebProjects />} />
//         <Route path="/blender-projects" element={<BlenderProjects />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// import React from 'react';
// import HeroSection from './HeroSection';
// import SkillsSection from './SkillsSection';
// import ProjectsSection from './ProjectsSection';
// import ReachMeSection from './ReachMeSection';






// function App() {
//   return (
//     <div className="App">
      
//       <HeroSection />
//       <SkillsSection /> 
//       <ProjectsSection />
//       <ReachMeSection/>
     
     

      
    

//     </div>
//   );
// }

// export default App;
