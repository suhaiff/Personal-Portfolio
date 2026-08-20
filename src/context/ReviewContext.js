import React, { createContext, useState, useEffect } from 'react';

const initialReviews = [
  {
    id: 1,
    name: "Alexander Wright",
    role: "Founding Engineer @ AI-Flow",
    text: "Working with Sohib was a game-changer for our MVP. His ability to bridge advanced AI models with seamless React interfaces is rare. The final product exceeded our expectations.",
    rating: 5,
    initial: "A"
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Product Lead at Nexus-UX",
    text: "Incredibly intuitive developer. Sohib doesn't just build what you ask; he thinks ahead to how the user will interact with every pixel and animation. Highly recommended.",
    rating: 5,
    initial: "S"
  },
  {
    id: 3,
    name: "Marcus Thorne",
    role: "CEO of Thorne Digitial",
    text: "Sohib's expertise in Three.js and Framer Motion brought our brand to life in ways we didn't think were possible on the web. A true creative technologist.",
    rating: 5,
    initial: "M"
  },
  {
      id: 4,
      name: "Lena Rostova",
      role: "Lead Designer at Mir-Studio",
      text: "Sohib's attention to detail is unmatched. He has a perfect understanding of modern aesthetics and his technical implementation is flawless.",
      rating: 5,
      initial: "L"
  }
];

export const ReviewContext = createContext();

export const ReviewProvider = ({ children }) => {
  // Load reviews from localStorage if available, otherwise use initialReviews
  const [reviews, setReviews] = useState(() => {
    const savedReviews = localStorage.getItem('portfolio-reviews');
    if (savedReviews) {
      try {
        return JSON.parse(savedReviews);
      } catch (e) {
        console.error("Error parsing reviews from local storage", e);
        return initialReviews;
      }
    }
    return initialReviews;
  });

  // Save reviews to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('portfolio-reviews', JSON.stringify(reviews));
  }, [reviews]);

  const addReview = (newReview) => {
    setReviews([newReview, ...reviews]);
  };

  return (
    <ReviewContext.Provider value={{ reviews, addReview, setReviews }}>
      {children}
    </ReviewContext.Provider>
  );
};
