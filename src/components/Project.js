import React from "react";
import { motion } from "framer-motion";
import "../styles/Project.css";

import Project1 from "../assets/project1.png";
import Project2 from "../assets/project2.png";
import Project3 from "../assets/project3.png";
import Project4 from "../assets/project4.png";
import Project5 from "../assets/project5.webp";
import Project6 from "../assets/project6.webp";
import Project7 from "../assets/project7.png";

const projectsGallery = [
  { src: Project1, alt: "E-Commerce Website", title: "E-Commerce Website", category: "Web Design" },
  { src: Project2, alt: "Personal Portfolio", title: "Personal Portfolio", category: "HTML, CSS, JavaScript" },
  { src: Project3, alt: "3D models", title: "3D models", category: "Blender" },
  { src: Project4, alt: "SaaS Application", title: "SaaS Application", category: "Full-Stack" },
  { src: Project5, alt: "AI Integrated Products", title: "AI Integrated Products", category: "Python" },
  { src: Project6, alt: "HR Application", title: "HR Application", category: "React, Python" },
  { src: Project7, alt: "Client Portfolios", title: "Client Portfolios", category: "Frontend Development" },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const Projects = () => {
  return (
    <section className="projects-section" id="gallery">
      
      <div className="canvas-gradient-overlay"></div>

      <div className="projects-container">
        
        {/* Header */}
        <motion.div 
          className="projects-header"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <span className="projects-badge">GALLERY</span>
          <h2 className="projects-title"> The Dev <span>Forge</span> </h2> 
          <p className="projects-subtitle">
            An extensive visual collection of interfaces, components, and applications I've forged over the years.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <motion.div 
          className="masonry-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projectsGallery.map((img, index) => (
            <motion.div className="masonry-item" key={index} variants={itemVariants}>
              <div className="masonry-glass-frame">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="masonry-image"
                />
                <div className="masonry-overlay">
                  <div className="overlay-text">
                    <h4>{img.title}</h4>
                    <span>{img.category}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Actions */}
        <motion.div 
          className="projectnav"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a href="https://github.com/suhaifakt" target="_blank" rel="noreferrer" className="more">View Github</a>
          <a href="#contact" className="contactbutton">Connect with me! <span className="arrow">↗</span></a>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
