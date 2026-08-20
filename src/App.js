import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ReviewProvider } from "./context/ReviewContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PlanetCanvas from "./components/PlanetCanvas";
import Projects from "./components/Project";
import About from "./components/About";
import Services from "./components/Services";
import RecentWorks from "./components/Recentworks";
import Values from "./components/Values";
import Journey from "./components/Journey";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import AllReviewsPage from "./components/AllReviewsPage";
import AllWorksPage from "./components/AllWorksPage";
import FAQ from "./components/FAQ";

function Home() {
  return (
    <>
      <Preloader />
      <PlanetCanvas />
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <RecentWorks />
      <Services />
      <Values />
      <Journey />
      <Reviews />
      <Contact />
      <FAQ />
      <Footer />
    </>
  );
}

function App() {
  return (
    <ReviewProvider>
      <Router>
        <div className="App" style={{ position: "relative", minHeight: "100vh", width: "100vw" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/all-reviews" element={<AllReviewsPage />} />
            <Route path="/all-works" element={<AllWorksPage />} />
          </Routes>
        </div>
      </Router>
    </ReviewProvider>
  );
}

export default App;
