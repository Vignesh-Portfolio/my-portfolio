// src/HeroSection.jsx
import React from 'react';
import './HeroSection.css';
import profileImg from './assets/ProfileV.png'; // make sure this matches your filename

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="left-side animate-fade">
        {/* <h1>&lt;Creative Designer&gt;</h1> */}
        <h1 className='space'> <span class="icon-glow">🧊 </span>  Creative Designer </h1>
       
        <h2>Video Editor & 3D Product Animator</h2>
        <p>
          Bringing visuals to life through Blender animations and cinematic video edits.
        </p>
      </div>

      <div className="center-image hover-rotate">
        <img src={profileImg} alt="Vignesh Bala" />
      </div>

      <div className="right-side animate-fade">
        <h1 className='space'><span class="icon-hover-glow">👨‍💻                  </span>     &lt; Coder &gt;</h1>
        <h2>Frontend Developer</h2>
        <p>
          Crafting 2D and 3D web experiences, product pages, and interactive portfolios.
        </p>
      </div>

      <div className="scroll-indicator">
        <div className="mouse"></div>
        <span>Scroll</span>
      </div>
    </section>
  );
}

export default HeroSection;
