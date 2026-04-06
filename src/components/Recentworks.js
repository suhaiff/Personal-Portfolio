import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "../styles/Recentworks.css";

import Project1 from "../assets/project4.png";
import Project2 from "../assets/project17.png";
import Project3 from "../assets/restaurant_website.png";
import Project4 from "../assets/HRM.jpg";
import Project5 from "../assets/client_portfolio(naveen).png";
import Project6 from "../assets/project6.webp";

const recentProjects = [
  { 
    id: 1, 
    image: Project1, 
    title: "AI Dashboard UI", 
    text: "A sleek, dark-themed analytics dashboard interface built for an AI data visualization startup.", 
    tags: ["React", "Node.js", "OpenAi"] 
  },
  { 
    id: 2, 
    image: Project2, 
    title: "Personal Portfolio", 
    text: "A modern, glassmorphic portfolio website designed to showcase a freelance developer's work and skills.", 
    tags: ["React", "Three.js", "JavaScript"] 
  },
  { 
    id: 3, 
    image: Project4, 
    title: "HR Management App", 
    text: "A clean, intuitive HR management application interface designed for a mid-sized tech company.", 
    tags: ["React", "Python", "OpenAi"] 
  },
  { 
    id: 4, 
    image: Project3, 
    title: "E-Commerce Landing", 
    text: "A vibrant, user-friendly landing page for an e-commerce platform, featuring smooth animations and a responsive design.", 
    tags: ["Frontend", "Web Design"] 
  },
  { 
    id: 5, 
    image: Project5, 
    title: "Client Portfolio", 
    text: "A clean, minimalist portfolio website for a creative agency, emphasizing visual storytelling and user engagement.", 
    tags: ["Frontend", "Web Design"] 
  },
  { 
    id: 6, 
    image: Project6, 
    title: "3D Model Showcase", 
    text: "An interactive 3D model showcase built with blender, allowing users to explore and manipulate 3D assets in real-time.", 
    tags: ["Blender", "Figma"] 
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const RecentWorks = () => {
  return (
    <section className="works-section" id="projects">
      {/* Background ambient lighting */}
      <div className="works-ambient glow-left" />
      <div className="works-ambient glow-right" />

      <div className="works-container">
        <motion.div 
          className="works-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <span className="works-badge">PORTFOLIO</span>
          <h2 className="works-title">Recent <span>Works</span></h2>
          <p className="works-subtitle">
            A selection of my latest projects. Each piece demonstrates my focus on clean code, 
            intuitive user experiences, and premium front-end design.
          </p>
        </motion.div>

        <motion.div 
          className="works-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {recentProjects.map((project) => (
            <motion.div className="work-card" key={project.id} variants={cardVariants}>
              
              <div className="work-image-container">
                <img src={project.image} alt={project.title} className="work-image" />
                <div className="work-overlay">
                  <a href="#link" className="overlay-btn" aria-label="View Project">
                    <FaExternalLinkAlt />
                  </a>
                  <a href="#github" className="overlay-btn" aria-label="View Code">
                    <FaGithub />
                  </a>
                </div>
              </div>

              <div className="work-content">
                <div className="work-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="work-tag">{tag}</span>
                  ))}
                </div>
                <h3>{project.title}</h3>
                <p>{project.text}</p>
                <a href="#home" className="work-read-more">
                  Read Case Study <span className="arrow">→</span>
                </a>
              </div>

            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default RecentWorks;
