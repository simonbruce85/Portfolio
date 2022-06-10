import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import { Link } from "react-scroll";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#041F31] text-white bg-opacity-60">
      <div>
        <Link to="home" smooth={true} duration={500}>
          <img
            src={Logo}
            alt="Logo Image"
            style={{ width: "50px" }}
            className="cursor-pointer"
          />
        </Link>
      </div>

      {/*md flex means that if resolution is higher than medium, it will display flex, if not, hidden for small screens */}
      <ul className="hidden md:flex">
        <li
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="300"
        >
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="300"
          data-aos-delay="50"
        >
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="300"
          data-aos-delay="100"
        >
          <Link to="work" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="300"
          data-aos-delay="150"
        >
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>

        <li
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="300"
          data-aos-delay="200"
        >
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? (
          <FaBars data-aos="flip-left" />
        ) : (
          <FaTimes data-aos="flip-left" />
        )}
      </div>

      {/* Mobile Menus*/}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#041F31] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/*  Social Bar */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0"></div>
      {/*  Social Bar Ends*/}
    </div>
  );
};

export default Navbar;
