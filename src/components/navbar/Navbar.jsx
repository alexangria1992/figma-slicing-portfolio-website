import React, { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="fixed  left-0 right-0 bg-[#282C33]">
      <div
        className="px-5 max-w-[1560px] mx-auto flex items-center justify-between
      pt-6 my-2  "
      >
        <div
          className="left  flex text-white gap-2 
        items-center font-bold text-base"
        >
          <div className="img">
            <img src={require("./imgs/Logo.png")} alt="" />
          </div>
          Elias
        </div>
        <div
          className="right  flex
        items-center"
        >
          <div
            className={`menu duration-300 flex  flex-col  justify-center fixed w-full  md:flex-row 
            ${
              !toggle
                ? `right-[-100%] top-0 bottom-0 `
                : `right-0 top-0 bottom-0`
            } 
             md:static bg-[#282C33] `}
          >
            <a href="">
              <li className="text-[#ABB2BF] list-none text-[32px] md:my-auto my-4 md:text-base  mx-4">
                <span className="text-[#C778DD] font-medium">#</span>home
              </li>
            </a>
            <a href="">
              <li className="text-[#ABB2BF] list-none text-[32px] md:my-auto my-4 md:text-base  mx-4">
                <span className="text-[#C778DD] font-medium">#</span>works
              </li>
            </a>
            <a href="">
              <li className="text-[#ABB2BF] list-none text-[32px] md:my-auto my-4 md:text-base  mx-4">
                <span className="text-[#C778DD] font-medium">#</span>about me
              </li>
            </a>
            <a href="">
              <li className="text-[#ABB2BF] list-none text-[32px] md:my-auto my-4 md:text-base  mx-4">
                <span className="text-[#C778DD] font-medium">#</span>contact
              </li>
            </a>
            <div
              onClick={() => setToggle(false)}
              className="close absolute block md:hidden right-3 top-3"
            >
              <img src={require("./imgs/close.png")} alt="" />
            </div>
          </div>
          {/* CLOSE & OPEN btns*/}
          <div onClick={() => setToggle(true)}>
            <div className="open md:hidden block w-8">
              <div className="w-full  h-[1px] my-2 rounded-r-3xl  bg-[#D9D9D9]"></div>
              <div className="w-full  h-[1px] my-2 rounded-r-3xl  bg-[#D9D9D9]"></div>
              <div className="w-full  h-[1px] my-2 rounded-r-3xl  bg-[#D9D9D9]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
