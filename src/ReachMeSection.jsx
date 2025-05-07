import React from "react";
import "./ReachMeSection.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";
import ButtonEffect from "./ButtonEffect";
import luffyImg from './assets/luffy-gear5.png'; // make sure this is correct
import { FaDownload } from "react-icons/fa";
import ContactLink from "./Email";



function ReachMeSection() {
  return (
    
    <div className="reach-me-section">
      <div className="contact-card">
        <h2 className="contact-title">Reach Me</h2>

        <div className="contact-grid">
          {/* Left: Icons */}
          <div className="contact-icons">
 
{/* <a href="mailto:3d.frontend389@gmail.com">
  <FaEnvelope /> Email 
</a> */}

<a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=3d.frontend389@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaEnvelope /> Email
</a>


            <a href="https://www.linkedin.com/in/royalvicky" target="_blank" rel="noreferrer"><FaLinkedin /> LinkedIn</a>
            <a href="https://www.instagram.com/3d._frontend?igsh=MTE4OGpzMW9hYjhmaA==" target="_blank" rel="noreferrer"><FaInstagram /> Instagram</a>
            <a href="https://github.com/Royal3Vicky9JOYBOY" target="_blank" rel="noreferrer"><FaGithub /> GitHub</a>
          </div>

          {/* Right: Image */}
          <div className="contact-image">
            <img src={luffyImg} alt="Luffy" />
          </div>
        </div>

        {/* Bottom: Button */}
        {/* <div className="contact-button">
          <a href="/resume.pdf" download style={{ textDecoration: "none" }}>
            <ButtonEffect text="Download Resume" />
          </a> */}
          <div className="contact-button">
  <a href="https://github.com/Vignesh-Portfolio/my-portfolio/blob/main/public/Vignesh-Bala-Resume.pdf" download="Vignesh-Bala-Resume.pdf"  style={{ textDecoration: "none" }}>
  
  
    <ButtonEffect
      text={
        <>
          <FaDownload style={{ marginRight: "8px" }} />
          Resume
        </>
      }
    />
  </a>
</div>
        </div>
      </div>
      
    
  );
}

export default ReachMeSection;
