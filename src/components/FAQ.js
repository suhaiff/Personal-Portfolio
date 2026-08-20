import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRobot } from "react-icons/fa";
import "../styles/FAQ.css";

const faqs = [
  {
    question: "What does your process look like?",
    answer: "I start by understanding your core business goals, then move into design iterations, and finally implement the solution with scalable, robust code. You are involved at every major milestone."
  },
  {
    question: "How long does a project take?",
    answer: "It depends on the scope. A simple landing page might take a few weeks, while a full-scale web application with custom AI integration can take 1-3 months."
  },
  {
    question: "What do you need from me to get started?",
    answer: "A clear set of goals, any existing brand assets, and a willingness to collaborate! I'll guide you through the technical requirements as we go."
  },
  {
    question: "Do you work with international clients?",
    answer: "Absolutely! I have worked with clients across multiple time zones and ensure clear, asynchronous communication regardless of where you are located."
  },
  {
    question: "Can you handle design and development together?",
    answer: "Yes! I offer end-to-end services, bridging the gap between UI/UX design and scalable full-stack implementation."
  },
  {
    question: "What happens after launch?",
    answer: "I provide a handover phase, including documentation. If requested, we can discuss ongoing maintenance and updates."
  },
  {
    question: "Do you offer ongoing support beyond that?",
    answer: "Yes, I offer monthly retainers or hourly support contracts to ensure your application continues to run smoothly and scale as needed."
  },
  {
    question: "Are you open to long-term partnerships?",
    answer: "Absolutely. I value long-term relationships where I can deeply understand your product and help guide its technical evolution."
  },
  {
    question: "How is pricing determined?",
    answer: "Pricing is generally based on the project scope, complexity, and estimated timeline. I can provide fixed-bid quotes for well-defined scopes, or hourly rates for open-ended development."
  },
  {
    question: "Do you sign NDAs or contracts?",
    answer: "Yes, I am happy to sign an NDA before we discuss any proprietary details, and we will always have a mutual contract in place before work begins."
  }
];

const TypewriterText = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    setDisplayedText("");
    
    const intervalId = setInterval(() => {
      setDisplayedText(text.substring(0, i + 1));
      i++;
      if (i >= text.length) {
        clearInterval(intervalId);
      }
    }, 25); // typing speed

    return () => clearInterval(intervalId);
  }, [text]);

  return (
    <div className="typewriter-container">
      <div className="typewriter-avatar">
        <FaRobot />
      </div>
      <div className="typewriter-content">
        {/* Invisible text reserves exact layout height */}
        <p className="faq-answer invisible-text">{text}</p>
        
        {/* Absolutely positioned typing text overlay */}
        <p className="faq-answer typing-text">
          {displayedText}<span className="typing-cursor"></span>
        </p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">
        
        {/* Header Area */}
        <div className="faq-header">
          <span className="faq-pretitle">PREFER TO TALK?</span>
          <h2 className="faq-title">Let's skip the form</h2>
          <p className="faq-subtitle">
            15 minutes, no pressure, just a real conversation about what you're building
          </p>
          <a href="mailto:suhaifakt01@gmail.com" className="book-call-btn">
            Book a call
          </a>
        </div>

        {/* Accordion List */}
        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;
            const number = (index + 1).toString().padStart(2, '0');

            return (
              <div 
                key={index} 
                className={`faq-item ${isActive ? "active" : ""}`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="faq-question-row">
                  <span className="faq-number">{number}</span>
                  <h3 className="faq-question">{faq.question}</h3>
                  <span className="faq-icon">{isActive ? "−" : "+"}</span>
                </div>
                
                <AnimatePresence>
                  {isActive && (
                    <motion.div 
                      className="faq-answer-wrap"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <TypewriterText text={faq.answer} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
