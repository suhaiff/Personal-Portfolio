import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaFolderOpen,
  FaJsSquare,
  FaReact,
  FaPalette,
  FaServer,
  FaRobot,
} from "react-icons/fa";
import "../styles/Journey.css";

const journeySteps = [
  {
    icon: <FaHtml5 />,
    title: "Getting Started",
    description: "Began learning HTML theoretically, then stepped into CSS. Combined both to create small projects and simple web pages.",
    date: "2021"
  },
  {
    icon: <FaFolderOpen />,
    title: "First Portfolio",
    description: "Built my first personal portfolio using HTML & CSS in VS Code, gaining foundational structural knowledge of websites.",
    date: "2022"
  },
  {
    icon: <FaJsSquare />,
    title: "Exploring JavaScript",
    description: "Learned JavaScript to make websites dynamic and interactive, creating small projects for practice and skill-building.",
    date: "2023"
  },
  {
    icon: <FaReact />,
    title: "React Development",
    description: "Transitioned to React.js to build modern component-based UIs and worked on freelance projects for targeted clients.",
    date: "Mid 2023"
  },
  {
    icon: <FaPalette />,
    title: "Design & Creativity",
    description: "Started learning Blender and Figma, and experimented with Three.js to seamlessly bring 3D elements into websites.",
    date: "2024"
  },
  {
    icon: <FaServer />,
    title: "Full-Stack Development",
    description: "Currently exploring backend development paradigms and database architectures to evolve into a Full-Stack Developer.",
    date: "2025"
  },
  {
    icon: <FaRobot />,
    title: "AI Product Development",
    description: "Diving into AI and machine learning to create intelligent applications, and exploring how to integrate AI into web development.",
    date: "Present"
  },
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
