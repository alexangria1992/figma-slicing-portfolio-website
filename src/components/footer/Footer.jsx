import React from "react";

const Footer = () => {
  return (
    <>
      <div className="w-full  h-px bg-[#ABB2BF] mt-20 mb-8"></div>
      {/* footer */}
      <div data-aos="fade-up" className=" px-5 max-w-[1560px] mx-auto">
        {/* top */}
        <div className="flex justify-between flex-wrap gap-y-12">
          {/* left */}
          <div className=" mx-auto ">
            <div className=" flex items-center gap-8 mb-3 ">
              {/*  Logo*/}
              <div className="flex gap-2 items-center text-2xl text-white font-bold">
                <img src={require("./imgs/Logo.png")} alt="" />
                <span>Elias</span>
              </div>
              {/* Email */}
              <span className="text-[#ABB2BF]">elias@elias.ml</span>
            </div>
            <div className="text-[#ABB2BF] ">
              <p>Web designer and front-end developer based in Ukraine</p>
            </div>
          </div>
          {/* Right */}
          <div className="mx-auto">
            {/* Title */}
            <h2 className="text-white text-2xl font-bold mb-3">Media</h2>
            {/* Media */}
            <div className="flex items-center gap-2">
              <a href="">
                <img src={require("./imgs/Discord.png")} alt="" />
              </a>
              <a href="">
                <img src={require("./imgs/Figma.png")} alt="" />
              </a>
              <a href="">
                <img src={require("./imgs/Github.png")} alt="" />
              </a>
            </div>
          </div>
        </div>
        {/* bottom */}
        <div className="text-center text-[##ABB2BF] pb-8 mt-12">
          &copy; Copyright 2022. Made by Elias
        </div>
      </div>
    </>
  );
};

export default Footer;
