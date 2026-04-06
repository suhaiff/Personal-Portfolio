import React from "react";
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

function App() {
  return (
    <div className="App" style={{ position: "relative", height: "100vh", width: "100vw" }}>
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
      <Footer />
      
    </div>
  );
}

export default App;
