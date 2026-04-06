import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useProgress } from "@react-three/drei";
import { FaGlobeAmericas } from "react-icons/fa";
import "../styles/Preloader.css";

const Preloader = () => {
  const { progress, active } = useProgress();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Add a minimum delay so the preloader is always seen for its aesthetic
    if (progress === 100 || !active) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1200); 
      return () => clearTimeout(timer);
    }
  }, [progress, active]);

  useEffect(() => {
    const fallback = setTimeout(() => {
        setIsLoading(false);
    }, 4500);
    return () => clearTimeout(fallback);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="premium-preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } }}
        >
          {/* Ambient Glows */}
          <div className="preload-ambient preload-ambient-1" />
          <div className="preload-ambient preload-ambient-2" />

          <div className="preloader-content-wrapper">
            
            {/* 3D Gyroscopic Earth Animation */}
            <div className="gyro-earth-container">
              
              {/* Outer Orbit Rings */}
              <motion.div 
                className="gyro-ring ring-x"
                animate={{ rotateX: 360, rotateY: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <div className="satellite-dot" />
              </motion.div>

              <motion.div 
                className="gyro-ring ring-y"
                animate={{ rotateY: 360, rotateZ: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              >
                 <div className="satellite-dot alt-dot" />
              </motion.div>

              <motion.div 
                className="gyro-ring ring-z"
                animate={{ rotateZ: 360, rotateX: 360 }}
                transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
              />

              {/* Glowing Center Earth */}
              <motion.div 
                className="elegant-earth"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <div className="earth-glow" />
                <FaGlobeAmericas className="earth-icon" />
              </motion.div>

            </div>

            {/* Typography & Status */}
            <div className="preloader-status-block">
              <h2 className="loading-title">SA<span className="accent">Dev</span></h2>
              <div className="loading-data-row">
                <span className="loading-label">System Initializing</span>
                <span className="loading-value">{Math.round(progress)}%</span>
              </div>
            </div>
            
            {/* Premium Tracking Bar */}
            <div className="premium-bar-container">
              <div 
                className="premium-bar-fill"
                style={{ width: `${Math.max(5, progress)}%` }}
              >
                <div className="bar-sparkle" />
              </div>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
