import React from "react";

const skills = [
  {
    title: "Languages",
    languages: ["TypeScript", "Lua", "Python", "JavaScript"],
  },
  { title: "Databases", languages: ["SQLite", "PostgreSQL", "Mongo"] },
  {
    title: "Tools",
    languages: [
      "VSCode",
      "Neovim",
      "Linux",
      "Figma",
      "XFCE",
      "Arch",
      "Git",
      "Font Awesome",
    ],
  },
  {
    title: "Other",
    languages: ["HTML", "CSS", "EJS", "SCSS", "REST", "Jinja"],
  },
  {
    title: "Frameworks",
    languages: ["React", "Vue", "Disnake", "Discord.js", "Flask", "Express.js"],
  },
];

const Skills = () => {
  return (
    <>
      <div className="border-2 border-green-500 px-5 max-w-[1560px] mx-auto py-10 mt-20">
        <div className="mb-10 border-2 border-orange-500">
          <div
            className=" text-white w-2/3 font-medium text-[32px] flex items-center 
        gap-2"
          >
            <div>
              <span className="text-[#C778DD]">#</span>skills
            </div>
            <div className="line w-2/3 h-px bg-[#C778DD]"></div>
          </div>
        </div>
        {/* Bottom */}
        <div
          className="border-2   border-red-500 flex flex-wrap
      justify-between gap-10 items-center text-white"
        >
          {/* Left */}
          <div className="mx-auto ">
            <img
              className="w-full mx-auto"
              src={require("./imgs/shapes.png")}
              alt=""
            />
          </div>
          {/* right */}
          <div
            className="border-2 border-blue-400 mx-auto flex-wrap justify-around 
           flex md:justify-end gap-4 w-10/12 md:w-1/2"
          >
            {skills.map(({ title, languages }) => {
              return (
                <>
                  <div className="w-[90%] sm:w-[45%] border border-[#ABB2BF] lg:w-[30%]">
                    <div className="p-2">
                      <h2 className="font-semibold">{title}</h2>
                    </div>
                    <div className="flex gap-2 border-t border-[#ABB2BF] flex-wrap py-2 text-[#ABB2BF]">
                      {languages.map((e) => {
                        return <span>{e}</span>;
                      })}
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
