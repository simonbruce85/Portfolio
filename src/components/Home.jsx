import React from "react";
import { Button, Link } from "react-scroll";
import Typed from "react-typed";
import Astronaut from "../assets/iconweb.webp";

function Home() {
  return (
    <div
      name="home"
      className="w-full h-full bg-[#041F31] pb-16 pt-32 px-4 mx-auto flex justify-center min-h-screen"
    >
      <div className="max-w-[1000px] grid md:grid-cols-2 ">
        <div className="flex-col flex justify-center">
          <p
            className="text-[#ccd6f6]"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
            data-aos-delay="600"
            data-aos-once="true"
          >
            Hello, my name is
          </p>
          <h1
            className="text-4xl sm:text-7xl font-bold text-[#ccd6f6] "
            id="owner-name"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
            data-aos-delay="800"
            data-aos-once="true"
          >
            Simon Bruce
          </h1>
          <h2
            className="text-[#ccd6f6] py-2"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
            data-aos-delay="1000"
            data-aos-once="true"
          >
            I am a{" "}
            <Typed
              strings={["Computer Engineer", "Front-End Developer"]}
              typeSpeed={50}
              backSpeed={50}
              loop
            />
          </h2>
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-delay="1200"
            data-aos-duration="500"
            data-aos-once="true"
            className="py-4"
          >
            <button className="px-4 py-2 my-2 items-center rounded font-medium cursor-pointer bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] hover:scale-105">
              <Link
                to="contact"
                smooth={true}
                duration={500}
              >
                Contact Me
              </Link>
            </button>
          </div>
        </div>
        <div
          className=" md:pl-8 justify-center flex-col flex"
          data-aos="fade-up"
          data-aos-delay="1400"
          data-aos-duration="500"
          data-aos-once="true" 
        
        >
          <img src={Astronaut} />
        </div>
      </div>
    </div>
  );
}

export default Home;
