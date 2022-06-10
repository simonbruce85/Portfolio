import React, { useEffect } from "react";
import { Link } from "react-scroll";
import Backimage from "../assets/backgr.jpg";

function About() {
  return (
    <div
      name="about"
      className="w-full h-full min-h-screen  bg-[#793434]  bg-cover bg-fixed justify-center flex "
      style={{ backgroundImage: `url(${Backimage})` }}
      id="backimgabout"
    >
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className=" flex-col justify-center items-center py-48 max-w-[1000px] w-full"
      >
        <div className=" text-gray-300">
          <div className="text-left pb-8 pl-4">
            <p className="text-4xl font-bold border-b-4 inline border-[#00F5A0] ">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full px-4">
          <div className="text-xl text-gray-300">
            <p className="text-justify">
              Hello, I am Simon. I am a computer engineering student at Florida
              International University, graduating in Summer 2022.
            </p>
            <p className="text-justify">
              Since the beginning of my degree, I have been learning different
              programming languages such as Java, C, and C++, but I am very
              passionate about websites and web applications. Therefore, I am
              now focused on web development, learning more every day about
              HTML, CSS, Javascript, and React, and planning to start studying
              in the near future back-end development to become a full-stack
              developer.
            </p>
            <p className="text-justify">
              I believe in lifelong learning and continuous improvement, so here
              I am, trying my best. Please take a look at my most recent
              projects and don't hesitate to contact me to connect or if you
              have any questions
            </p>
          </div>
          <div className="py-6 flex">
              <a href="https://github.com/michalsnik/aos" target="blank" className="px-4 py-2 min-w- my-2 items-center rounded font-medium cursor-pointer bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] hover:scale-110">
                  Resume
              </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
