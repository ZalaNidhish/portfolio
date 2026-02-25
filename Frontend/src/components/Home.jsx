import React from "react";
import Hero from "./Hero";
import Project from "./Project";
import TechTools from "./TechTools";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = ({ onResumeClick }) => {
  return (
    <div>
      <Hero onResumeClick={onResumeClick} />
      <Project />
      <TechTools />
      <Contact />
      <Footer onResumeClick={onResumeClick} />
    </div>
  );
};

export default Home;
