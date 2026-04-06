import React from 'react';
import { motion } from 'framer-motion';
import "../styles/Services.css"; 
import { FaPaintBrush, FaSearch, FaPenNib } from 'react-icons/fa';
import { IoCubeSharp } from "react-icons/io5";

import { ReactComponent as HtmlLogo } from "../assets/morquee/html-1.svg";
import { ReactComponent as CssLogo } from "../assets/morquee/css.svg";
import { ReactComponent as JsLogo } from "../assets/morquee/javascript.svg";
import { ReactComponent as ReactLogo } from "../assets/morquee/react.svg";
import { ReactComponent as PythonLogo } from "../assets/morquee/python.svg";
import { ReactComponent as BlenderLogo } from "../assets/morquee/blender.svg";
import { ReactComponent as FigmaLogo } from "../assets/morquee/figma.svg";
import { ReactComponent as TailwindLogo } from "../assets/morquee/tailwind.svg";
import { ReactComponent as GitLogo } from "../assets/morquee/git.svg";
import { ReactComponent as GithubLogo } from "../assets/morquee/github.svg";
import { ReactComponent as VscodeLogo } from "../assets/morquee/vscode.svg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

function Services() {
  const tags = ["AI Product Engineering", "Web Development", "Model Integration", "Creative Design", "Full-Stack Architecture", "LLM Integration", "3D Web"];
  const services = [
    { icon: <IoCubeSharp />, title: "AI Product Engineering", description: "I bridge the gap between intelligent systems and production-ready products, ensuring that AI models deliver real value through intuitive interfaces." },
    { icon: <FaPaintBrush />, title: "Model Integration", description: "I expertly connect advanced LLMs and specialized AI agents to web applications, handling complex data flows and prompt engineering." },
    { icon: <FaSearch />, title: "Full-Stack Development", description: "I build robust, scalable architectures from the database layer to the frontend, ensuring high performance and security." },
    { icon: <FaPenNib />, title: "Creative Web Design", description: "I craft immersive 3D experiences and high-performance, animated interfaces that captivate users and elevate brands." }
  ];

  const techLogos = [HtmlLogo, CssLogo, JsLogo, ReactLogo, PythonLogo, BlenderLogo, FigmaLogo, TailwindLogo, GitLogo, GithubLogo, VscodeLogo];

  const skillPills = [
    { icon: "fa-solid fa-microchip", text: "AI Engineering" },
    { icon: "fa-solid fa-code", text: "Full-Stack Development" },
    { icon: "fa-solid fa-bolt", text: "Prompt Engineering" },
    { icon: "fa-solid fa-mobile", text: "Responsive Design" },
    { icon: "fa-solid fa-lock", text: "Clean Code" },
    { icon: "fa-solid fa-rocket", text: "Deployment" },
    { icon: "fa-solid fa-handshake", text: "Collaboration" },
    { icon: "fa-solid fa-folder-open", text: "Project Management" }
  ];

  return (
    <section id="services" className="services-section container-glow">
      {/* Background ambient lighting */}
      <div className="services-ambient blur-top-left" />
      <div className="services-ambient blur-bottom-right" />

      {/* --- Intro Row --- */}
      <div className="services-intro">
        <motion.div 
          className="services-text-col"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <span className="services-badge">WHAT I DO</span>
          <h2 className="services-title">My <span>Services</span></h2>
          <p className="services-description">
            Personable and adaptable AI Product Engineer who brings ideas to life at the intersection of AI and great product thinking. From model integration to production-ready interfaces, I deliver solutions that are as intelligent as they are intuitive.
          </p>
          <hr className='services-divider' />
          
          <motion.div 
            className="services-tags"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {tags.map((tag, i) => (
              <motion.span className="svc-tag" key={i} variants={fadeUp}>{tag}</motion.span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div 
          className="services-graphic-col"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="glass-dashboard-wrapper">
            
            <div className="glass-stat-card stat-1">
              <div className="stat-number">99<span className="stat-symbol">%</span></div>
              <div className="stat-text">Client Satisfaction</div>
              <div className="stat-bar"><div className="stat-fill" style={{width: '99%'}}></div></div>
            </div>

            <div className="glass-code-block">
              <div className="window-controls">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="code-lines">
                <div className="code-line w-80"></div>
                <div className="code-line w-60"></div>
                <div className="code-line w-40 indent"></div>
                <div className="code-line w-90"></div>
              </div>
            </div>

            <div className="glass-stat-card stat-2">
              <div className="stat-number">5+</div>
              <div className="stat-text">Years Experience</div>
            </div>

            {/* Ambient Graphic Rings */}
            <div className="abstract-ring base-ring"></div>
            <div className="abstract-ring top-ring"></div>
            
          </div>
        </motion.div>
      </div>

      {/* --- Service Cards Grid --- */}
      <motion.div 
        className="services-cards-grid"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {services.map((service, i) => (
          <motion.div className="svc-card" key={i} variants={fadeUp}>
            <div className="svc-card-inner">
              <div className="svc-card-header">
                <span className="svc-icon-wrapper">{service.icon}</span>
                <h3>{service.title}</h3> 
              </div>
              <div className="svc-card-divider" />
              <p>{service.description}</p>
            </div>
            <div className="svc-card-glow"></div>
          </motion.div>
        ))}
      </motion.div>

      {/* --- Tech Logos Marquee --- */}
      <motion.div 
        className="marquee-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="scroll-container">
          <div className="scroll-content">
            {techLogos.map((Logo, idx) => (
              <div className="tech-badge" key={idx}>
                <Logo className="logos" />
              </div>
            ))}
            {techLogos.map((Logo, idx) => (
              <div className="tech-badge" key={'dup-'+idx}>
                <Logo className="logos" />
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* --- Text Marquee --- */}
      <motion.div 
        className="marquee-section text-marquee"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="scroll-container_two">
          <div className="scroll-content_two">
            {skillPills.map((pill, idx) => (
              <span className="skill-pill" key={idx}>
                <i className={pill.icon}></i> {pill.text}
              </span>
            ))}
            {skillPills.map((pill, idx) => (
              <span className="skill-pill" key={'dup-'+idx}>
                <i className={pill.icon}></i> {pill.text}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
      
    </section>
  );
}

export default Services;
