import React from 'react';
import { motion } from 'framer-motion';
import "../styles/Services.css"; 
import { FaPaintBrush, FaSearch, FaMicrochip } from 'react-icons/fa';
import { IoCubeSharp } from "react-icons/io5";
import { 
  SiDocker, SiVite, SiTypescript, SiPostgresql, 
  SiSupabase, SiFlask, SiNodedotjs, SiMysql, SiFirebase 
} from "react-icons/si";

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
  const tags = ["Full-Stack Architecture", "Hardware-Software Integration", "IoT Systems", "Embedded Electronics", "AI Product Engineering", "3D Web Experiences", "Scalable Backends"];
  const services = [
    { icon: <IoCubeSharp />, title: "Full-Stack Architecture", description: "I architect and build robust, scalable systems from the database layer to the frontend, ensuring high performance, security, and maintainability." },
    { icon: <FaMicrochip />, title: "Hardware-Software Integration", description: "I bridge the physical and digital worlds, designing embedded electronics and IoT systems that communicate seamlessly with modern web applications." },
    { icon: <FaSearch />, title: "AI & Model Integration", description: "I expertly connect advanced LLMs and specialized AI agents to production environments, handling complex data flows and prompt engineering." },
    { icon: <FaPaintBrush />, title: "Immersive Web Interfaces", description: "I craft stunning 3D experiences and high-performance, animated interfaces that captivate users and elevate the digital presence of brands." }
  ];

  const techLogos = [HtmlLogo, CssLogo, JsLogo, ReactLogo, PythonLogo, BlenderLogo, FigmaLogo, TailwindLogo, GitLogo, GithubLogo, VscodeLogo, SiDocker, SiVite, SiTypescript, SiPostgresql, SiSupabase, SiFlask, SiNodedotjs, SiMysql, SiFirebase];

  const skillPills = [
    { icon: "fa-solid fa-code", text: "Full-Stack Architecture" },
    { icon: "fa-solid fa-microchip", text: "Embedded Electronics" },
    { icon: "fa-solid fa-wifi", text: "IoT Systems" },
    { icon: "fa-solid fa-server", text: "Scalable Backends" },
    { icon: "fa-solid fa-brain", text: "AI Integration" },
    { icon: "fa-solid fa-lock", text: "System Security" },
    { icon: "fa-solid fa-handshake", text: "Technical Leadership" },
    { icon: "fa-solid fa-folder-open", text: "End-to-End Delivery" }
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
            Senior Full-Stack & Electronics Engineer passionate about building complex, integrated solutions. From architecting scalable web platforms to designing custom IoT hardware, I deliver end-to-end systems that are robust, intelligent, and highly performant.
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
