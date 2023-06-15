import React from "react";
import "./about.css";

const About = () => {
  return (
    <>
      <div
        className="border-2 border-red-500 pt-20 px-5 max-w-[1560px] mx-auto min-h-screen
    flex items-center justify-between flex-wrap "
      >
        <div className="border-2 border-blue-400  w-10/12 sm:w-8/12 mx-auto">
          <h1 className="font-semibold text-[32px] text-white mb-3">
            Elias is a <span className="text-[#C778DD]">web designer</span> and
            <span className="text-[#C778DD]"> front-end developer</span>
          </h1>
          <p className="text-[#ABB2BF] my-6">
            He crafts responsive websites where technologies meet creativity.
          </p>
          <button
            className="text-white font-medium py-2 px-4 border border-[#C778DD]
        hover:bg-[#C778DD33] duration-200"
          >
            Contact me!!
          </button>
        </div>
        <div className="mx-auto border-2 border-orange-500">
          <div>
            <img src={require("./imgs/man.png")} alt="" />
          </div>
          <div className="border flex items-center gap-2 border-[#ABB2BF] p-2 text-[#ABB2BF]">
            <div className="w-4 h-4 bg-[#C778DD]"></div>
            Currently working on <span className="text-white">Portfolio</span>
          </div>
        </div>
      </div>
      <div className="px-5 py-10">
        <img className="mx-auto " src={require("./imgs/quote.png")} alt="" />
      </div>
    </>
  );
};

export default About;
