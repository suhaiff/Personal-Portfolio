import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaArrowRight } from "react-icons/fa";
import "../styles/Hero.css"; 
import resume from "../assets/resume.pdf";


const Hero = () => {
  return (
    <div className="hero-container" id="home">

      <section className="hero-section">
        
        {/* Top Badge */}
        <motion.div
           className="hero-badge"
           initial={{ y: -30, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="pulse-dot"></span> Available for New Opportunities
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          className="hero-heading"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        >
          Forging Digital <span>Realities</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          className="hero-subtitle"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          AI Product Engineer & Full-Stack Builder
        </motion.h2>

        {/* Description */}
        <motion.p
          className="hero-description"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          I engineer AI products that don't just work — they think. Bridging the gap between research and real-world impact, I design systems where models, data, and interfaces come together into something genuinely useful.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          className="hero-button-group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a href="#projects" className="hero-btn btn-primary">
            Explore Portfolio <FaArrowRight className="btn-icon" />
          </a>
          <a href={resume} download="Sohib_Akthar_Resume.pdf" className="hero-btn btn-secondary">
            <FaDownload className="btn-icon-left" /> Download Resume
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="hero-socials"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <a href="https://github.com/sohibakthar" target="_blank" rel="noopener noreferrer" aria-label="Github">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/sohibakthar" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="mailto:your@email.com" aria-label="Email">
            <FaEnvelope />
          </a>
        </motion.div>

      </section>

      {/* Floating Glass Pills */}
      <motion.div
        className="floating-pill"
        style={{ top: "15%", left: "10%" }}
        animate={{ y: [0, -20, 0], rotate: [0, -2, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        React Ecosystem
      </motion.div>

      <motion.div
        className="floating-pill blur-pill"
        style={{ top: "65%", left: "5%" }}
        animate={{ y: [0, 25, 0], rotate: [0, 3, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        UI / UX Architecture
      </motion.div>

      <motion.div
        className="floating-pill"
        style={{ top: "25%", right: "8%" }}
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        Three.js / WebGL
      </motion.div>

      <motion.div
        className="floating-pill blur-pill"
        style={{ bottom: "15%", right: "12%" }}
        animate={{ y: [0, 20, 0], rotate: [0, -4, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
      >
        Front-End
      </motion.div>

    </div>
  );
};

export default Hero;
