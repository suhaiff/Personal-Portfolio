import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import "../styles/navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Reviews", href: "#reviews" },
  ];

  // Mobile menu animation
  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20, height: 0 },
    visible: { opacity: 1, y: 0, height: "auto", transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, height: 0, transition: { duration: 0.2 } },
  };

  return (
    <motion.nav
      className={`navbar ${scrolled ? "scrolled" : ""}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="navbar-container">
        
        {/* Logo */}
        <a href="#home" className="logo">
          SA<span className="accent">Dev.</span>
        </a>

        {/* Desktop Links */}
        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="nav-link">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="nav-actions">
          <a href="#contact" className="nav-cta">
            Let's Talk
          </a>
          {/* Mobile Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="menu-button" aria-label="Toggle Menu">
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu-wrapper"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <ul className="mobile-menu">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="mobile-link"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a href="#contact" onClick={() => setIsOpen(false)} className="mobile-cta">
                  Let's Talk
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
