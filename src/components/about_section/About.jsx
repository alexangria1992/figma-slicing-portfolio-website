import React from "react";

const AboutSec = () => {
  return (
    <>
      <div className="border-2 border-red-500 px-5 max-w-[1560px] mx-auto mt-20 py-10">
        {/* bottom */}
        <div className="border-2 border-blue-500 flex flex-wrap items-center justify-between">
          {/*Left */}
          <div className="md:w-[48%] w-full border-2 border-orange-400">
            {/* Title */}
            <div className="mb-12 border-2 border-green-400">
              <div
                className=" text-white w-2/3 font-medium text-[32px] flex items-center 
        gap-2"
              >
                <div>
                  <span className="text-[#C778DD]">#</span>about-me
                </div>
                <div className="line w-2/3 h-px bg-[#C778DD]"></div>
              </div>
            </div>
            {/* Desc  */}
            <p className="text-[#ABB2BF] ">
              Hello, i’m Elias!
              <br />
              <br />
              I’m a self-taught front-end developer based in Kyiv, Ukraine. I
              can develop responsive websites from scratch and raise them into
              modern user-friendly web experiences.
              <br />
              <br />
              Transforming my creativity and knowledge into a websites has been
              my passion for over a year. I have been helping various clients to
              establish their presence online. I always strive to learn about
              the newest technologies and frameworks.
            </p>
            {/* Button */}
            <div className="mt-7">
              <a
                href=""
                className="hover:bg-[#C778DD33] border border-[#C778DD] px-4 py-2 text-white 7"
              >
                <button>Read more -{">"}</button>
              </a>
            </div>
          </div>
          {/* Right */}
          <div className="mx-auto">
            <img className="mx-auto" src={require("./imgs/man.png")} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSec;
