import React from "react";
import { motion } from "framer-motion";
import {
  FaLightbulb,
  FaPaintBrush,
  FaSearchPlus,
  FaUniversalAccess,
  FaRocket,
  FaHandshake
} from "react-icons/fa";
import "../styles/Values.css";

const values = [
  {
    icon: <FaLightbulb />,
    title: "Problem Solving",
    desc: "I enjoy breaking down complex challenges into simple, elegant, and effective solutions.",
    color: "#f59e0b" // amber
  },
  {
    icon: <FaPaintBrush />,
    title: "User Experience",
    desc: "I prioritize smooth, intuitive, and highly enjoyable experiences for end-users.",
    color: "#ec4899" // pink
  },
  {
    icon: <FaSearchPlus />,
    title: "Attention to Detail",
    desc: "Small details matter the most — from crisp typography to 60fps micro-animations.",
    color: "#6366f1" // indigo
  },
  {
    icon: <FaUniversalAccess />,
    title: "Accessibility",
    desc: "I aim to create inclusive digital experiences that are fully usable by absolutely everyone.",
    color: "#14b8a6" // teal
  },
  {
    icon: <FaRocket />,
    title: "Continuous Learning",
    desc: "I’m constantly exploring new frameworks and technologies to keep my skills sharp.",
    color: "#8b5cf6" // purple
  },
  {
    icon: <FaHandshake />,
    title: "Collaboration",
    desc: "I value teamwork, feedback, and open communication to achieve the best results.",
    color: "#10b981" // emerald
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
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Values = () => {
  return (
    <section className="values-section" id="values">
      {/* Background ambient elements */}
      <div className="values-ambient top-left"></div>
      <div className="values-ambient bottom-right"></div>

      <div className="values-container">
        <motion.div
          className="values-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <span className="values-badge">PHILOSOPHY</span>
          <h2 className="values-title">My Core <span>Principles</span></h2>
          <p className="values-subtitle">
            These are the foundational principles that guide my work, creativity, and growth as a developer.
          </p>
        </motion.div>

        <motion.div
          className="values-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {values.map((item, index) => (
            <motion.div
              key={index}
              className="value-card"
              variants={cardVariants}
            >
              <div 
                className="value-icon-wrapper"
                style={{ '--accent-color': item.color }}
              >
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Values;
