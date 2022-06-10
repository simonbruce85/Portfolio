import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";
import Github from "../assets/github.png";
import Firebase from "../assets/firebase.png";
import Java from "../assets/java.png";
import C from "../assets/c.png";
function Skills() {
  return (
    <div
      name="skills"
      className="w-full h-full min-h-screen bg-[#041F31] text-gray-300 "
    >
      {/*Container*/}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full md:pt-24">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#00F5A0]">
            Skills
          </p>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>

        {/*Card Container*/}
        <div className="w-full grid grid-cols-2  sm:grid-cols-3 gap-4 text-center py-8">
          <div
            className="justify-center flex"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="100"
          >
            <div className=" shadow-[#040c16] md:max-w-fit rounded-md border border-[#0c2f44] p-8  hover:-translate-y-3 duration-500 ">
              <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
              <p className="my-4">HTML</p>
            </div>
          </div>
          <div
            className="justify-center flex"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="200"
          >
            <div className=" shadow-[#040c16] md:max-w-fit rounded-md bg-[#020c1b] p-8  hover:-translate-y-2 duration-500 ">
              <img className="w-20 mx-auto" src={CSS} alt="HTML icon" />
              <p className="my-4">CSS</p>
            </div>
          </div>
          <div
            className="justify-center flex"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="300"
          >
            <div className=" shadow-[#040c16] md:max-w-fit rounded-md bg-[#0c2f44] p-8  hover:-translate-y-2 duration-500 ">
              <img className="w-20 mx-auto" src={JavaScript} alt="HTML icon" />
              <p className="my-4">JavaScript</p>
            </div>
          </div>
          <div
            className="justify-center flex"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="600"
          >
            <div className=" shadow-[#040c16] md:max-w-fit rounded-md bg-[#0c2f44] p-8  hover:-translate-y-2 duration-500 ">
              <img className="w-20 mx-auto" src={ReactImg} alt="HTML icon" />
              <p className="my-4">React</p>
            </div>
          </div>
          <div
            className="justify-center flex"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="500"
          >
            <div className=" shadow-[#040c16] md:max-w-fit rounded-md bg-[#0c2f44] p-8  hover:-translate-y-2 duration-500 ">
              <img className="w-20 mx-auto" src={Github} alt="HTML icon" />
              <p className="my-4">Github</p>
            </div>
          </div>
          <div
            className="justify-center flex"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="400"
          >
            <div className=" shadow-[#040c16] md:max-w-fit rounded-md bg-[#0c2f44] p-8  hover:-translate-y-2 duration-500 ">
              <img className="w-20 mx-auto" src={Tailwind} alt="HTML icon" />
              <p className="my-4">Tailwind</p>
            </div>
          </div>
          <div
            className="justify-center flex"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="700"
          >
            <div className=" shadow-[#040c16] md:max-w-fit rounded-md bg-[#0c2f44] p-8  hover:-translate-y-2 duration-500 ">
              <img className="w-20 mx-auto" src={Firebase} alt="HTML icon" />
              <p className="my-4">Firebase</p>
            </div>
          </div>
          <div
            className="justify-center flex"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="800"
          >
            <div className=" shadow-[#040c16] md:max-w-fit rounded-md bg-[#0c2f44] p-8  hover:-translate-y-2 duration-500 ">
              <img className="w-20 mx-auto" src={Java} alt="HTML icon" />
              <p className="my-4">Java</p>
            </div>
          </div>
          <div
            className="justify-center flex"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="900"
          >
            <div className=" shadow-[#040c16] md:max-w-fit rounded-md bg-[#0c2f44] p-8  hover:-translate-y-2 duration-500 ">
              <img className="w-20 mx-auto" src={C} alt="HTML icon" />
              <p className="my-4">C</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
