import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from 'react-scroll'

function Home() {
  return (
    <div name="home" className="w-full h-screen bg-[#041F31]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#ccd6f6]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6] py-1" id="owner-name">
          Simon Bruce
        </h1>
        <h2 className=" text-[#ccd6f6] py-3">
          I am a Computer Engineer and Front-End Developer
        </h2>
        <div className="ml-[-15px]">
          <ul>
            <li className="flex">
              <Link to="work" smooth={true} duration={500} className=" group px-3 py-3 my-2 flex items-center rounded font-medium hover:scale-110 " id="button-contact">
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
