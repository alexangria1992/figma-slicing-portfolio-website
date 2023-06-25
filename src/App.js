import { Route, Routes } from "react-router-dom";
import "./App.css";
import About_page from "./Pages/About_page";
import Home_page from "./Pages/Home_page";

import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

import Project_page from "./Pages/Project_page";
import Contact_page from "./Pages/Contact_page";
import { useEffect } from "react";
import Aos from "aos";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000, delay: 500 });
  }, []);
  return (
    <div className="bg-[#282C33]">
      <Navbar />
      <Routes>
        {/* HOME PAGE */}
        <Route path="/" element={<Home_page />} />
        <Route path="/projects" element={<Project_page />} />
        <Route path="/about" element={<About_page />} />
        <Route path="/contact" element={<Contact_page />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
