import React from "react";
import AboutSec from "../components/about_section/About";
import Contact from "../components/contact_section/Contact";
import About from "../components/first_section_about/About";
import Projects from "../components/projects_section/Projects";
import Skills from "../components/skills_section/Skills";
const Home_page = () => {
  return (
    <>
      <About />
      <Projects />
      <Skills />
      <AboutSec />
      <Contact />
    </>
  );
};

export default Home_page;
