// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";   // ✅ added
import SectionSeparator from "./components/SectionSeparator";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <SectionSeparator/>
      <About />
      <SectionSeparator/>
      <Projects />
      <SectionSeparator/>
      <Contact />
      <Footer />   {/* ✅ added at bottom */}
    </div>
  );
}

export default App;
