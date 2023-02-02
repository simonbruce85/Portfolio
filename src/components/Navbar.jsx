import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { ReactComponent as Linkedin } from "../assets/linkedin.svg";
import { ReactComponent as Github } from "../assets/github.svg";
import { Link } from "react-scroll";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [visible, setVisible] = useState(false);

  //I was having issues when the mobile menu was outside of the window it was still present and allowed the page to horizontally-scroll, for this reason, I set timeouts to wait until the 
  //the transition had finished and set the component display:none. Also, before appering again, I had to remove the display: none property, making it appear again and then translating it to the window
  //for this reason, this set timeouts have been added
  const handleClick = () => {
    (nav ? handleVisibility():
    setVisible(!visible));
    setTimeout(()=>{
      setNav(!nav);
    },50)}

  const handleVisibility = () => setTimeout(() => {
    setVisible(!visible)
  }, 300);

  return (
    <div className=" w-full h-[80px] flex justify-center items-center px-4 bg-gradient-to-r from-[#061326] via-[#040c18] to-[#040c18] text-gray-300 z-10">
      <div className="flex justify-between max-w-[1300px] w-full ">
        <div>
          <Link to="home" smooth={true} duration={500}>
            <img
              src={Logo}
              style={{ width: "50px" }}
              className="cursor-pointer"
              d="gradient__bg"
              data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="200"
            />
          </Link>
        </div>

        <ul className="hidden md:flex ">
          <li
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="300"
            
          >
            <Link to="home" smooth={true} duration={500} className="hover:border-b-4 hover:border-[#00f5c4]">
              Home
            </Link>
          </li>
          <li
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="300"
            data-aos-delay="50"
            
          >
            <Link to="about" smooth={true} duration={500} className="hover:border-b-4 hover:border-[#00f5c4]">
              About
            </Link>
          </li>
          <li
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="300"
            data-aos-delay="100"
          >
            <Link to="work" smooth={true} duration={500} className="hover:border-b-4 hover:border-[#00f5c4]">
              Projects
            </Link>
          </li>
          <li
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="300"
            data-aos-delay="150"
          >
            <Link to="skills" smooth={true} duration={500} className="hover:border-b-4 hover:border-[#00f5c4]" >
              Skills
            </Link>
          </li>

          <li
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="300"
            data-aos-delay="200"
          >
            <Link to="contact" smooth={true} duration={500} className="hover:border-b-4 hover:border-[#00f5c4]">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Hamburger */}
      <div onClick={handleClick} className={`${nav ? "fixed top-8 right-12":""} md:hidden z-40 `}>
        {!nav ? (
          <FaBars data-aos="flip-left" />
        ) : (
          <FaTimes data-aos="flip-left" />
        )}
      </div>

      {/* Mobile Menus*/}
      <ul
        className={`fixed md:hidden ${
          nav ? "translate-x-0 " : "translate-x-full"
        } ${
          visible ? "" : "hidden"
        } ease-in-out duration-500 z-10 top-0 right-0 rounded-lg h-screen w-1/2 bg-[#040c18] pt-16 flex flex-col shadow-md pb-4`}
      >
        <li className=" justify-center flex py-2">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="justify-center flex py-2">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="justify-center flex py-2">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className=" justify-center flex py-2">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className=" justify-center flex py-2">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      <div className="mx-4 z-30">
        {/* Social Bar */}
        <div className="hidden 2xl:flex fixed flex-col top-[50%] h-[100px] justify-between rounded-full px-2 mx-4 left-0 shadow-sm shadow-[#111111] bg-[#132135]">
          <a
            className="fill-gray-300 stroke-gray-300 hover:fill-[#00f5c4] hover:stroke-[#00f5c4]   pt-4"
            href="https://www.linkedin.com/in/simon-bruce-aa973b1b1/"
            target="_blank"
          >
            <Linkedin className=" cursor-pointer " />
          </a>
          <a
            className="text-gray-300 cursor-pointer hover:text-[#00f5c4]  py-4"
            href="https://github.com/simonbruce85"
            target="_blank"
          >
            <Github className=" cursor-pointer" />
          </a>
        </div>
        {/*  Social Bar Ends */}
      </div>
    </div>
  );
};

export default Navbar;
