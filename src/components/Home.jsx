import React from "react";
import { Link } from 'react-scroll'
import Astronaut from "../assets/iconweb.webp"

function Home() {
  return (
    <div name="home" className="w-full md:h-screen  bg-[#041F31] grid md:grid-cols-2 ">
      <div className="max-w-[1000px] mx-auto pt-64 md:pt-8  md:pl-64 px-8 flex flex-col justify-center w-full h-full">
        <div clasName="flex-col">
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
              <Link to="contact" smooth={true} duration={500} className=" group px-3 py-3 my-2 flex items-center rounded font-medium hover:scale-110 " id="button-contact">
                Contact Me
              </Link>
            </li>
          </ul>
          </div>
        </div>
      </div>
      <div className="mx-auto pr-32 flex flex-col justify-center">
          <img src={Astronaut}/>
        </div>
    </div>
  );
}

export default Home;
