import React, { useContext } from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ReviewContext } from "../context/ReviewContext";
import "../styles/AllReviewsPage.css";
import "../styles/Reviews.css"; // Reuse card styles

const AllReviewsPage = () => {
  const { reviews } = useContext(ReviewContext);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div className="all-reviews-page">
      <div className="reviews-glow glow-indigo all-reviews-glow-1"></div>
      <div className="reviews-glow glow-teal all-reviews-glow-2"></div>
      
      <div className="all-reviews-header-container">
        <div className="container-inner">
            <Link to="/" className="back-link">
              <FaArrowLeft /> Back to Portfolio
            </Link>
            <motion.div 
              className="reviews-header"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="reviews-badge">WALL OF LOVE</span>
              <h1 className="reviews-title massive-title">All <span>Client Perspectives</span></h1>
              <p className="reviews-subtitle">
                A comprehensive collection of feedback from the amazing people I've had the pleasure to work with.
              </p>
            </motion.div>
        </div>
      </div>

      <div className="all-reviews-grid-container">
        <motion.div 
          className="all-reviews-masonry"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {reviews.map((review) => (
            <motion.div 
              key={review.id} 
              className="review-card masonry-item"
              variants={cardVariants}
              whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(99, 102, 241, 0.3)" }}
            >
              <div className="card-inner">
                <div className="star-rating">
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                
                <FaQuoteLeft className="quote-icon" />
                
                <p className="review-text">"{review.text}"</p>
                
                <div className="review-author">
                  <div className="author-avatar">{review.initial}</div>
                  <div className="author-info">
                    <h4>{review.name}</h4>
                    <p>{review.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AllReviewsPage;
