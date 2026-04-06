import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebookF, FaEnvelope, FaPhone, FaArrowRight, FaXTwitter, FaDiscord } from "react-icons/fa6";
import "../styles/Footer.css";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Footer = () => {
  return (
    <footer className="footer-section">
      {/* Background glow effects */}
      <div className="footer-glow glow-left"></div>
      <div className="footer-glow glow-right"></div>

      <div className="footer-container">
        {/* Branding & Bio */}
        <motion.div 
          className="footer-brand"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="footer-logo">SA<span>Dev.</span></h2>
          <p className="footer-bio">
            Engineering AI products that think. Bridging the gap between theory and impact with full-stack expertise and immersive design.
          </p>
          <div className="footer-socials">
            <a href="https://www.instagram.com/suhaif_akt/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/suhaif.akt01" target="_blank" rel="noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://x.com/Suhaifakt" target="_blank" rel="noreferrer" aria-label="Twitter">
              <FaXTwitter />
            </a>
            <a href="https://canary.discord.com/channels/@me" target="_blank" rel="noreferrer" aria-label="Discord">
              <FaDiscord />
            </a>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div 
          className="footer-links"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-link-list">
            <li><a href="#home"><FaArrowRight className="link-icon" /> Home</a></li>
            <li><a href="#about"><FaArrowRight className="link-icon" /> About</a></li>
            <li><a href="#projects"><FaArrowRight className="link-icon" /> Projects</a></li>
            <li><a href="#services"><FaArrowRight className="link-icon" /> Services</a></li>
            <li><a href="#reviews"><FaArrowRight className="link-icon" /> Reviews</a></li>
          </ul>
        </motion.div>

        {/* Services */}
        <motion.div 
          className="footer-services"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3 className="footer-heading">Services</h3>
          <ul className="footer-link-list">
            <li><span><FaArrowRight className="link-icon" /> AI Product Engineering</span></li>
            <li><span><FaArrowRight className="link-icon" /> Model Integration</span></li>
            <li><span><FaArrowRight className="link-icon" /> Full-Stack Development</span></li>
            <li><span><FaArrowRight className="link-icon" /> 3D Web & Animation</span></li>
          </ul>
        </motion.div>

        {/* Contact info directly */}
        <motion.div 
          className="footer-contact"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3 className="footer-heading">Get in Touch</h3>
          <div className="footer-contact-item">
            <div className="contact-icon-wrapper">
              <FaEnvelope />
            </div>
            <a href="mailto:suhaifakt01@gmail.com">suhaifakt01@gmail.com</a>
          </div>
          <div className="footer-contact-item">
             <div className="contact-icon-wrapper">
              <FaPhone />
            </div>
            <a href="tel:+917708572382">+91 7708572382</a>
          </div>
        </motion.div>
      </div>

      {/* Copyright Bottom Bar */}
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Sohib Akthar. All rights reserved. 
          <span className="footer-divider">|</span> Crafted with passion & precision ☕
        </p>
      </div>
    </footer>
  );
};

export default Footer;
