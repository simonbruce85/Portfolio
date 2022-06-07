import React from "react";
import { Link } from 'react-scroll'
import Typed from 'react-typed';
import Astronaut from "../assets/iconweb.webp"
import Logo from './Logo'

function Home() {
  return (
    <div name="home" className="w-full h-full bg-[#041F31] pb-16 pt-32 px-4 mx-auto flex justify-center min-h-screen">
      <div className="max-w-[1000px] grid md:grid-cols-2 ">
        <div className="flex-col flex justify-center">
          <p className="text-[#ccd6f6]">Hello, my name is</p>
          <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6] py-1 " id="owner-name">
            Simon Bruce
          </h1>
          <h2
            className='text-[#ccd6f6] py-3'>I am a <Typed
            strings={['Computer Engineer', 'Front-End Developer']}
            typeSpeed={50}
            backSpeed={50}
            loop
          /></h2>
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
        <div className=' md:pl-8 justify-center mx-auto flex-col flex'>
          <img  src={Astronaut} />
          <Logo/>
        </div>
      </div>
    </div>
  );
}

export default Home;
