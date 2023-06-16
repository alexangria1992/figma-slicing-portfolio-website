import React from "react";
import first from "./imgs/Rectangle 22.jpg";
import second from "./imgs/Rectangle 22.png";
import third from "./imgs/Rectangle 22 (1).png";
import Project_Card from "../project_card/Project_card";

const projects = [
  {
    img: first,
    langs: ["html", "css", "javascript", "react", "tailwind css"],
    title: "ChertNodes",
    desc: "Minecraft servers hosting ",
  },
  {
    img: second,
    langs: ["html", "css", "javascript", "Node.js"],
    title: "ProtectX",
    desc: "Discord anti-crash bot ",
  },
  {
    img: third,
    langs: ["html", "css", "javascript", "Node.js", "python"],
    title: "Kahoot Answers Viewer",
    desc: "Get answers to your kahoot quiz ",
  },
];
const Projects = () => {
  return (
    <div className="border-2 border-red-500 px-5 max-w-[1560px] mx-auto py-10 mt-20">
      {/* Top */}
      <div className=" flex justify-between items-center gap-5">
        {/* Left */}
        <div
          className="text-white w-2/3 font-medium text-[32px] flex items-center 
        gap-2"
        >
          <div>
            <span className="text-[#C778DD]">#</span>projects
          </div>
          <div className="line w-2/3 h-px bg-[#C778DD]"></div>
        </div>
        {/* Right */}
        <div className="text-white font-medium">
          <a href="">View All ~~&gt;</a>
        </div>
      </div>
      {/* Bottom */}
      <div className="flex  flex-wrap justify-between gap-4 my-12">
        {projects.map(({ img, langs, title, desc }) => {
          return (
            <>
              <Project_Card img={img} langs={langs} title={title} desc={desc} />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
