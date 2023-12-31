import React from "react";

const Contact = () => {
  return (
    <div className=" min-h-screen px-5 max-w-[1560px] mx-auto pt-20 py-10">
      {/* Title */}
      <div className="text-white font-semibold text-[32px] mt-12">
        <span className="text-[#C778DD]">/</span>contacts
      </div>
      {/* h2 title */}
      <div className="text-white mt-[14px] mb-[46px]">who am i?</div>
      {/* flex main */}
      <div className=" flex justify-between flex-wrap gap-10">
        {/* Left Side */}
        <div className="md:w-3/5 w-full">
          {/* Some text */}
          <div className="text-[#ABB2BF] font-medium">
            I’m interested in freelance opportunities. However, if you have
            other request or question, don’t hesitate to contact me
          </div>
        </div>
        {/* Right side */}
        <div className="flex gap-3">
          {/* boxes/flex */}
          <div className="p-4 border h-[90px] border-[#ABB2BF]">
            <h2 className="text-white font-medium pb-2">Support me here</h2>
            <span className="text-[#ABB2BF]">4149500120690030</span>
          </div>

          {/* 2 */}
          <div className="p-4 border border-[#ABB2BF] ">
            <h2 className="text-white font-medium pb-4">Message me here</h2>
            <div className="text-[#ABB2BF]">
              {/* contacts */}
              <div className="flex gap-1 items-center">
                <img src={require("./imgs/Discord.png")} alt="" />
                <span>Elias#1234</span>
              </div>
              <div className="flex gap-1 items-center">
                <img src={require("./imgs/Email.png")} alt="" />
                <span>elias@elias.me</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* all media */}
      <div className="mt-6 mb-5">
        {/* title */}
        <div className="text-[32px] font-medium text-white">
          {" "}
          <span className="text-[#C77BDD]">#</span>all-media
        </div>
        {/* media */}
        <div className="flex gap-6">
          <a href="">
            <div className="text-[#ABB2BF] flex items-center gap-1">
              <img src={require("./imgs/Twitter.png")} alt="" />
              <span>@elias</span>
            </div>
          </a>
          <a href="">
            <div className="text-[#ABB2BF] flex items-center gap-1">
              <img src={require("./imgs/Twitter.png")} alt="" />
              <span>@elias</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
