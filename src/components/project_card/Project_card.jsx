import React from "react";

const Project_Card = ({ img, title, langs, desc }) => {
  return (
    <>
      <div className="border mx-auto w-[90%]  border-[#ABB2BF] md:w-[48%] lg:w-[30%]">
        <div>
          <img className="w-full" src={img} alt="" />
        </div>
        <div className="flex flex-wrap gap-2 p-2 border-y border-[#ABB2BF]">
          {langs.map((e) => {
            return <span className="text-[#ABB2BF]">{e}</span>;
          })}
        </div>

        <div className="p-4">
          <h2 className="text-[#FFFFFF] text-2xl pb-4 font-medium">{title}</h2>
          <p className="py-4 text-[#ABB2BF]">{desc}</p>
          <div className="">
            <button className="border border-[#C778DD] py-2 px-4 text-white hover:bg-[#C778DD33] duration-150">
              Live {"<"}~{">"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project_Card;
