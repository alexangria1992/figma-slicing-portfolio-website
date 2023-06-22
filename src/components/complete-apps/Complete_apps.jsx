import React from "react";
import first from "./imgs/Rectangle 22.jpg";
import second from "./imgs/Rectangle 22.png";
import third from "./imgs/Rectangle 22 (1).png";
import fourth from "./imgs/Rectangle 22 (11).png";
import fifth from "./imgs/Rectangle 222.png";
import Project_Card from "../project_card/Project_card";

const Complete_apps = () => {
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
    {
      img: fourth,
      langs: ["html", "css", "javascript"],
      title: "Kotik Bot",
      desc: "Discord anti-crash bot ",
    },
    {
      img: fifth,
      langs: ["html", "TS", "Vue", "Node.js", "Less"],
      title: "Portfolio",
      desc: "You're using it rn ",
    },
  ];
  return (
    <>
      <div className="min-h-screen pt-[114px] px-5 max-w-[1560px] mx-auto">
        {/* top / title */}
        <div>
          {/* Projects */}
          <div className="text-white font-bold  text-[32px]">
            <span className="text-[#C77BDD]">/</span>
            <span>projects</span>
          </div>
          {/* list */}
          <div className="text-white mt-[14px]">List of my projects</div>
        </div>
        {/* Completed Tasks */}
        <div className="">
          {/* title */}
          <div className="text-white font-medium mt-[68px]  mb-[48px] text-[32px]">
            <span className="text-[#C77BDD]">#</span>
            <span>complete-apps</span>
          </div>
          {/* Projects */}
          <div className="flex  flex-wrap  gap-4 my-12">
            {projects.map(({ img, langs, title, desc }) => {
              return (
                <>
                  <Project_Card
                    img={img}
                    langs={langs}
                    title={title}
                    desc={desc}
                  />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Complete_apps;
