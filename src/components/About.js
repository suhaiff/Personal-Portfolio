import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaPaintBrush, FaLayerGroup } from "react-icons/fa";
import "../styles/About.css";
import profileImg from "../assets/profile2.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const About = () => {
  return (
    <section className="about-section" id="about">
      {/* Background glow effects */}
      <div className="about-glow glow-1"></div>
      <div className="about-glow glow-2"></div>

      <div className="about-container">
        {/* Left Column: Creative Image Composition */}
        <motion.div 
          className="about-image-col"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="image-composition">
            <div className="image-frame">
              <div className="creative-glow-backdrop" />
              <img src={profileImg} alt="Sohib Akthar" className="profile-img" />
            </div>
            
            {/* Floating Glass Badges */}
            <motion.div 
              className="floating-badge top-badge"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="badge-icon">🎨</span>
              <div className="badge-text">
                <span className="badge-title">Creative</span>
                <span className="badge-desc">UI/UX Focus</span>
              </div>
            </motion.div>

            <motion.div 
              className="floating-badge bottom-badge"
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="badge-icon">⚡</span>
              <div className="badge-text">
                <span className="badge-title">3+ Years</span>
                <span className="badge-desc">Experience</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Column: Text & Stats */}
        <motion.div 
          className="about-text-col"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <span className="about-badge">ABOUT ME</span>
          <h2 className="about-title">Crafting digital <span>experiences</span>.</h2>
          <p className="about-description">
            I'm Sohib Akthar, an AI Product Engineer who bridges the gap between intelligent systems and real-world products. I specialize in building AI-powered applications — from model integration and prompt engineering to polished, production-ready interfaces.
          </p>

          {/* Core Focus Cards */}
          <div className="focus-grid">
            <div className="focus-card">
              <FaCode className="focus-icon text-indigo" />
              <div>
                <h4>AI Product Engineer</h4>
                <p>React, Node.js, Python</p>
              </div>
            </div>
            <div className="focus-card">
              <FaPaintBrush className="focus-icon text-teal" />
              <div>
                <h4>Creative Design</h4>
                <p>Figma, Tailwind, CSS</p>
              </div>
            </div>
            <div className="focus-card">
              <FaLayerGroup className="focus-icon text-purple" />
              <div>
                <h4>3D & Motion</h4>
                <p>Three.js, Blender, Framer</p>
              </div>
            </div>
          </div>

          <hr className="about-divider" />

          {/* Stats Bar */}
          <motion.div 
            className="stats-container"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="stat-item" variants={fadeUp}>
              <h3>2022</h3>
              <p>Started Journey</p>
            </motion.div>
            <div className="stat-divider"></div>
            <motion.div className="stat-item" variants={fadeUp}>
              <h3>20+</h3>
              <p>Projects Done</p>
            </motion.div>
            <div className="stat-divider"></div>
            <motion.div className="stat-item" variants={fadeUp}>
              <h3>100%</h3>
              <p>Client Satisfaction</p>
            </motion.div>
          </motion.div>
          
        </motion.div>
      </div>
    </section>
  );
};

export default About;
