import React from "react";
import Backimage from "../assets/backgr.jpg"

function About() {
  return (
    <div name="about" className="w-full h-full min-h-screen  bg-[#793434] text-gray-300 " style={{ backgroundImage: `url(${Backimage})` }} id="backimgabout">
      <div className="flex flex-col justify-center items-center py-48 ">
        <div className="max-w-[1000px] w-full gap-8">
          <div className="text-left pb-8 pl-4">
            <p className="text-4xl font-bold border-b-4 inline border-[#00F5A0] ">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full gap-8 px-4 text-xl">
          <div className="">
            <p className="px-2 text-justify">
              Hello, I am Simon. I am a computer engineering student at Florida International University, graduating in Summer 2022.</p>
            <p className="px-2 text-justify">
              Since the beginning of my degree, I have been learning different programming languages such as Java, C, and C++, but I am very passionate about
              websites and web applications. I am
              now focused on web development,
              learning more every day about HTML, CSS, Javascript, and React,
              and planning to start studying in the near future back-end development to become a full-stack developer.</p>
            <p className="px-2 text-justify">
              I believe in lifelong learning and continuous improvement, so here I am, trying my best.
              Please take a look at my most recent projects and don't hesitate to contact me to connect or if you have any questions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
