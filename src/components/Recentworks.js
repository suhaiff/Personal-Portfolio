import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { recentProjects } from "../data/projectsData";
import "../styles/Recentworks.css";

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
            A selection of my latest engineering projects. Each piece demonstrates my focus on scalable software architecture, robust hardware-software integration, and premium front-end design.
          </p>
        </motion.div>

        <motion.div 
          className="works-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {recentProjects.slice(0, 6).map((project) => (
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

        {recentProjects.length > 0 && (
          <motion.div 
            className="more-works-container"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{ textAlign: "center", marginTop: "4rem" }}
          >
            <Link to="/all-works" className="more-works-btn">
              View All Projects <FaArrowRight style={{ marginLeft: "8px", verticalAlign: "middle" }} />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default RecentWorks;
