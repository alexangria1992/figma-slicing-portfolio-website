import "./App.css";
import About from "./components/first_section_about/About";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects_section/Projects";

function App() {
  return (
    <div className="bg-[#282C33]">
      <Navbar />
      <About />
      <Projects />
    </div>
  );
}

export default App;
