import { specialCharMap } from "@testing-library/user-event/dist/keyboard";
import React from "react";

const Small_projects = () => {
  let projects = [
    {
      languages: ["VUE", "CSS", "HTML"],
      title: "Bot boilerplate",
      body: "Start creating scalable discord.js bot with typescript in seconds",
    },
    {
      languages: ["VUE", "JS", "HTML"],
      title: "My blog",
      body: "Front-end of my future blog website written in vue",
    },
    {
      languages: ["VUE", "Figma", "HTML"],
      title: "Chess pro",
      body: "Figma landing page about service for viewing chess tournaments",
    },
    {
      languages: ["React", "CSS", "HTML"],
      title: "My blog",
      body: "Front-end of my future blog website written in vue",
    },
    {
      languages: ["VUE", "CSS", "HTML"],
      title: "My blog",
      body: "Front-end of my future blog website written in vue",
    },
    {
      languages: ["VUE", "CSS", "HTML"],
      title: "My blog",
      body: "Front-end of my future blog website written in vue",
    },
    {
      languages: ["VUE", "CSS", "HTML"],
      title: "My blog",
      body: "Front-end of my future blog website written in vue",
    },
    {
      languages: ["VUE", "CSS", "HTML"],
      title: "My blog",
      body: "Front-end of my future blog website written in vue",
    },
  ];
  return (
    <div className="border-2 border-red-500  pt-[80px] px-5 max-w-[1560px] mx-auto">
      <div className="">
        {/* title */}
        <div className="text-white font-medium mt-[68px]  mb-[48px] text-[32px]">
          <span className="text-[#C77BDD]">#</span>
          <span>small projects</span>
        </div>
      </div>
      {/* body/cards */}
      <div className="cards flex justify-center items-center flex-wrap gap-4">
        {/* card */}
        {projects.map((e) => {
          let { languages, title, body } = e;
          return (
            <div className="card max-w-[331px] w-full border border-[#ABB2BF] ">
              {/* skills */}
              <div className="border-b border-[#ABB2BF] p-2 text-[#ABB2BF]">
                {languages.map((lang) => {
                  return <span>{lang}</span>;
                })}
              </div>
              {/* Description */}
              <div className="desc p-4">
                <h2 className="text-white font-medium text-2xl">{title}</h2>
                <p className="text-[#ABB2BF] py-4">{body}</p>
                <button
                  className="border border-[#C778DD] px-4 py-2 text-white
                duration-150 hover:bg-[#C778DD33]"
                >
                  <a href="www.github.com">
                    Github {"<"}~{">"}{" "}
                  </a>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Small_projects;
