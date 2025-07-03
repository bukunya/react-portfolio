import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Experiences from "./Components/Experiences/Experiences";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import DarkMode from "./Components/DarkMode/DarkMode";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Experiences />
      <Projects />
      <Contact />
      <Footer />
      <DarkMode />
    </div>
  );
};

export default App;
