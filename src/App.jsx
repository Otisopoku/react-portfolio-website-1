import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./nav/Nav";
import About from "./about/About";
import Contact from "./contact/Contact";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";

export const App = () => {
  return (
    <Router>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={About} />
        <Route path="/skills" element={Skills} />
        <Route path="/projects" element={Projects} />
        <Route path="/contact" element={Contact} />
      </Routes>
    </Router>
  );
};

export default App;
