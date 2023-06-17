import "./App.css";
import AboutSec from "./components/about_section/About";
import About from "./components/first_section_about/About";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects_section/Projects";
import Skills from "./components/skills_section/Skills";

function App() {
  return (
    <div className="bg-[#282C33]">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <AboutSec />
    </div>
  );
}

export default App;
