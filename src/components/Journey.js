import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaFolderOpen,
  FaReact,
  FaPalette,
  FaServer,
  FaRobot,
} from "react-icons/fa";
import "../styles/Journey.css";

const journeySteps = [
  {
    icon: <FaHtml5 />,
    title: "Software Foundations",
    description: "Began professional career building robust web applications, focusing on clean code and scalable architecture.",
    date: "2021"
  },
  {
    icon: <FaServer />,
    title: "Full-Stack & Cloud",
    description: "Architected end-to-end solutions using React and Node.js, deploying complex applications to cloud infrastructure.",
    date: "2022"
  },
  {
    icon: <FaFolderOpen />,
    title: "IoT & Embedded Systems",
    description: "Expanded expertise into hardware-software integration, designing custom IoT systems and embedded electronics.",
    date: "2023"
  },
  {
    icon: <FaPalette />,
    title: "Advanced UI Architecture",
    description: "Integrated WebGL and Three.js into production environments, delivering immersive 3D web experiences.",
    date: "2024"
  },
  {
    icon: <FaRobot />,
    title: "AI & Model Integration",
    description: "Developed intelligent AI agents and integrated advanced LLMs into complex enterprise applications.",
    date: "2025"
  },
  {
    icon: <FaReact />,
    title: "Technical Leadership",
    description: "Leading development of holistic, high-performance systems bridging custom hardware and AI-driven frontends.",
    date: "2026 - Present"
  }
];

const Journey = () => {
  return (
    <section className="journey-section" id="journey">
      {/* Background ambient lighting */}
      <div className="journey-glow glow-1"></div>
      <div className="journey-glow glow-2"></div>

      <div className="journey-container">
        <motion.div
          className="journey-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="journey-badge">TIMELINE</span>
          <h2 className="journey-title">My <span>Journey</span></h2>
          <p className="journey-subtitle">
            A brief visual history of my growth, technologies learned, and milestones achieved.
          </p>
        </motion.div>

        <div className="journey-timeline">
          {/* The glowing center line */}
          <div className="timeline-center-line"></div>

          {journeySteps.map((step, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                className={`timeline-row ${isLeft ? "row-left" : "row-right"}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {/* Timeline node/icon in the center */}
                <div className="timeline-node">
                  <span className="node-icon">{step.icon}</span>
                </div>

                {/* The card content */}
                <div className="timeline-card">
                  <div className="card-glass">
                    <span className="card-date">{step.date}</span>
                    <h3 className="card-title">{step.title}</h3>
                    <p className="card-desc">{step.description}</p>
                    
                    {/* Arrow pointing to center line */}
                    <div className="card-arrow"></div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Journey;
