import React, { useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaQuoteLeft, 
  FaStar, 
  FaPlus, 
  FaTimes, 
  FaCheckCircle, 
  FaArrowRight
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { ReviewContext } from "../context/ReviewContext";
import "../styles/Reviews.css";

const Reviews = () => {
  const { reviews, addReview } = useContext(ReviewContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    text: "",
    rating: 5
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => {
      setFormSubmitted(true);
      // Optional: Add to temporary list to show immediate feedback
      const newReview = {
        id: reviews.length + 1,
        ...formData,
        initial: formData.name.charAt(0).toUpperCase()
      };
      addReview(newReview);
      
      // Reset after some time
      setTimeout(() => {
        setIsModalOpen(false);
        setFormSubmitted(false);
        setFormData({ name: "", role: "", text: "", rating: 5 });
      }, 2500);
    }, 800);
  };

  // Removed unused variants

  return (
    <section className="reviews-section" id="reviews">
      <div className="reviews-glow glow-indigo"></div>
      <div className="reviews-glow glow-teal"></div>

      <div className="reviews-container">
        <motion.div 
          className="reviews-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="reviews-badge">TESTIMONIALS</span>
          <h2 className="reviews-title">Client <span>Perspectives</span></h2>
          <p className="reviews-subtitle">
            What partners and clients say about our collaboration, technical expertise, 
            and the impact delivered.
          </p>
          
          <motion.button 
            className="add-review-trigger"
            onClick={() => setIsModalOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaPlus /> Submit a Review
          </motion.button>
        </motion.div>

        <motion.div className="reviews-grid" layout>
          <AnimatePresence mode="popLayout">
            {reviews.slice(0, 6).map((review, index) => (
              <motion.div 
                key={review.id} 
                className="review-card"
                layout
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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
          </AnimatePresence>
        </motion.div>

        {reviews.length > 0 && (
          <motion.div 
            className="more-reviews-container"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{ textAlign: "center", marginTop: "3rem" }}
          >
            <Link to="/all-reviews" className="more-reviews-btn">
              View All Reviews <FaArrowRight style={{ marginLeft: "8px", verticalAlign: "middle" }} />
            </Link>
          </motion.div>
        )}
      </div>

      {/* Submission Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="modal-content"
              initial={{ scale: 0.8, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 40, opacity: 0 }}
              transition={{ type: "spring", damping: 18 }}
            >
              <button 
                className="close-modal"
                onClick={() => setIsModalOpen(false)}
              >
                <FaTimes />
              </button>

              {!formSubmitted ? (
                <>
                  <div className="modal-header">
                    <h3>Share Your <span>Experience</span></h3>
                    <p>Your feedback helps me deliver better digital solutions.</p>
                  </div>

                  <form className="review-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label className="form-label">Full Name</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required 
                        className="form-input" 
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Role / Company</label>
                      <input 
                        type="text" 
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        required 
                        className="form-input" 
                        placeholder="Project Manager at DesignHub"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Your Review</label>
                      <textarea 
                        rows="4" 
                        name="text"
                        value={formData.text}
                        onChange={handleInputChange}
                        required 
                        className="form-textarea" 
                        placeholder="Tell others about your experience working with me..."
                      />
                    </div>
                    
                    <button type="submit" className="submit-review-btn">
                      Submit Review <FaArrowRight style={{ marginLeft: "8px", verticalAlign: "middle" }} />
                    </button>
                  </form>
                </>
              ) : (
                <div className="success-message">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                  >
                    <FaCheckCircle className="success-icon" />
                  </motion.div>
                  <h3>Thank You!</h3>
                  <p>Your review has been submitted for moderation.</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Reviews;
