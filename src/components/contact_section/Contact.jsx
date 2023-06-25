import React from "react";

const Contact = () => {
  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-delay="1000"
        className=" px-5 max-w-[1560px] mx-auto mt-20 py-10"
      >
        <div>
          <div className="mb-12 ">
            <div
              className=" text-white w-2/3 font-medium text-[32px] flex items-center 
        gap-2"
            >
              <div>
                <span className="text-[#C778DD]">#</span>contact
              </div>
              <div className="line w-2/3 h-px bg-[#C778DD]"></div>
            </div>
          </div>
        </div>
        {/* Bottom */}
        <div className=" flex flex-wrap items-start gap-10 justify-between">
          <div className="left  w-full  md:w-1/2">
            <p className="text-[#ABB2BF]">
              I’m interested in freelance opportunities. However, if you have
              other request or question, don’t hesitate to contact me
            </p>
          </div>
          {/* Right */}
          <div className="mx-auto">
            {/* box */}
            <div className="border border-[#ABB2BF] p-4">
              <h2 className="mb-4 text-white font-semibold">Message me here</h2>
              {/* Get In Touch */}
              <div className="">
                {/* Links */}
                <div className="flex gap-1 items-center">
                  <img src={require("./imgs/Discord.png")} alt="" />
                  <span className="text-[#ABB2BF]">!Elias#3519</span>
                </div>
                <div className="flex gap-1 items-center">
                  <img src={require("./imgs/Email.png")} alt="" />
                  <span className="text-[#ABB2BF]">elias@elias.me</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
