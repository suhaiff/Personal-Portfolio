import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { recentProjects } from "../data/projectsData";
import "../styles/AllWorksPage.css";
import "../styles/Recentworks.css"; // Reuse card styles

const AllWorksPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    <div className="all-works-page">
      <div className="works-ambient glow-left all-works-glow-1"></div>
      <div className="works-ambient glow-right all-works-glow-2"></div>
      
      <div className="all-works-header-container">
        <div className="container-inner">
            <Link to="/" className="back-link">
              <FaArrowLeft /> Back to Portfolio
            </Link>
            <motion.div 
              className="works-header"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="works-badge">ARCHIVE</span>
              <h1 className="works-title massive-title">All <span>Engineering Works</span></h1>
              <p className="works-subtitle">
                A comprehensive archive of my projects, spanning complex full-stack web applications to integrated electronics and IoT solutions.
              </p>
            </motion.div>
        </div>
      </div>

      <div className="all-works-grid-container">
        <motion.div 
          className="works-grid massive-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
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
    </div>
  );
};

export default AllWorksPage;
