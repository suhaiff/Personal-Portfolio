import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaTwitter
} from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
};

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({ 
    name: "", 
    email: "", 
    whoAreYou: "", 
    timeline: "", 
    message: "",
    company: ""
  });
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [focused, setFocused] = useState(null);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setError(false);

    // EmailJS Keys - Managed in your .env file
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    // Check if keys are actually present
    if (!serviceId || !templateId || !publicKey || serviceId === "your_service_id") {
      console.warn("EmailJS keys are missing or used placeholders. Please check your .env file.");
      setIsSending(false);
      setError(true);
      setTimeout(() => setError(false), 5000);
      return;
    }

    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then(
        () => {
          setIsSending(false);
          setSent(true);
          setFormData({ name: "", email: "", whoAreYou: "", timeline: "", message: "", company: "" });
          setTimeout(() => setSent(false), 5000);
        },
        (error) => {
          console.error("FAILED...", error.text);
          setIsSending(false);
          setError(true);
          setTimeout(() => setError(false), 5000);
        }
      );
  };

  const infoItems = [
    {
      icon: <FaMapMarkerAlt />,
      label: "Location",
      value: "Mettupalayam, Coimbatore – 641301",
    },
    {
      icon: <FaPhoneAlt />,
      label: "Phone",
      value: "+91 7708572382",
    },
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "suhaifakt01@gmail.com",
    },
  ];

  const socials = [
    { icon: <FaGithub />, href: "https://github.com/sohibakthar", label: "GitHub" },
    { icon: <FaLinkedin />, href: "https://linkedin.com/in/sohibakthar", label: "LinkedIn" },
    { icon: <FaTwitter />, href: "https://x.com/Suhaifakt", label: "Twitter" },
  ];

  return (
    <section className="contact-section" id="contact">
      {/* Ambient blobs */}
      <div className="contact-glow glow-left" />
      <div className="contact-glow glow-right" />

      {/* Header */}
      <motion.div
        className="contact-header"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <span className="contact-badge">GET IN TOUCH</span>
        <h2 className="contact-title">Let's Build Something <span>Together</span></h2>
        <p className="contact-subtext">
          Open to collaborations, freelance projects, or full-time opportunities.
          Drop me a line — I typically respond within 24 hours.
        </p>
      </motion.div>

      {/* Main content */}
      <div className="contact-container">
        {/* Left: Info Panel */}
        <motion.div
          className="contact-info-panel"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          custom={1}
        >
          <div className="info-panel-inner">
            <div className="info-panel-glow" />
            <h3 className="info-panel-heading">Contact Information</h3>
            <p className="info-panel-sub">Feel free to reach out through any channel below.</p>

            <ul className="info-list">
              {infoItems.map((item, i) => (
                <motion.li
                  key={i}
                  className="info-list-item"
                  variants={fadeUp}
                  custom={i + 2}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <span className="info-icon-wrap">{item.icon}</span>
                  <div>
                    <span className="info-label">{item.label}</span>
                    <span className="info-value">{item.value}</span>
                  </div>
                </motion.li>
              ))}
            </ul>

            <div className="info-divider" />

            <div className="social-row">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  className="social-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>


          </div>
        </motion.div>

        {/* Right: Form */}
        <motion.div
          className="contact-form-wrap"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          custom={2}
        >
          <form className="contact-form" ref={form} onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className={`form-group ${focused === "name" ? "focus" : ""}`}>
                <label htmlFor="contact-name">Name *</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Jane Doe"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                  required
                />
              </div>
              <div className={`form-group ${focused === "email" ? "focus" : ""}`}>
                <label htmlFor="contact-email">Email *</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="jane@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Who are you? *</label>
              <div className="chip-group">
                {["Corporation", "Founder / Startup", "Business", "Agency", "Consultant", "Other"].map((option) => (
                  <label key={option} className={`chip-label ${formData.whoAreYou === option ? "selected" : ""}`}>
                    <input
                      type="radio"
                      name="whoAreYou"
                      value={option}
                      checked={formData.whoAreYou === option}
                      onChange={handleChange}
                      required
                    />
                    <span className="chip-radio"></span>
                    {option}
                  </label>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label>Timeline *</label>
              <div className="chip-group">
                {["Ongoing / Exploring", "ASAP", "1-4 weeks", "1-3 months"].map((option) => (
                  <label key={option} className={`chip-label ${formData.timeline === option ? "selected" : ""}`}>
                    <input
                      type="radio"
                      name="timeline"
                      value={option}
                      checked={formData.timeline === option}
                      onChange={handleChange}
                      required
                    />
                    <span className="chip-radio"></span>
                    {option}
                  </label>
                ))}
              </div>
            </div>

            <div className={`form-group ${focused === "message" ? "focus" : ""}`}>
              <label htmlFor="contact-message">Tell me about your project *</label>
              <textarea
                id="contact-message"
                name="message"
                rows="5"
                placeholder="What are you building, and what does success look like?"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
                required
              />
            </div>

            <div className={`form-group ${focused === "company" ? "focus" : ""}`}>
              <label htmlFor="contact-company">Company</label>
              <input
                id="contact-company"
                type="text"
                name="company"
                placeholder="Company name (optional)"
                value={formData.company}
                onChange={handleChange}
                onFocus={() => setFocused("company")}
                onBlur={() => setFocused(null)}
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSending}
              className={`send-btn ${sent ? "sent" : ""} ${error ? "error" : ""}`}
              whileHover={{ scale: isSending ? 1 : 1.02 }}
              whileTap={{ scale: isSending ? 1 : 0.98 }}
            >
              {isSending ? (
                <span className="btn-inner">Sending...</span>
              ) : sent ? (
                <span className="btn-inner">✓ Message Sent!</span>
              ) : error ? (
                <span className="btn-inner">❌ Error! Try again.</span>
              ) : (
                <span className="btn-inner">Send message</span>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
