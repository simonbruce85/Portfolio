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
import Docker from "../assets/docker.png";
import Spring from "../assets/spring.png";
import Postgres from "../assets/postgres.png";
import Postman from "../assets/postman.png";
import AWS from "../assets/aws.png";
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
          <p className="py-4">Technologies I've been exposed to</p>
        </div>

        {/*Card Container*/}
        <div className="w-full grid grid-cols-2  sm:grid-cols-3 gap-4 text-center py-8" data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
            data-aos-delay="300"
            data-aos-once="true">
          <div
            className="justify-center flex"
          >
            <div className=" shadow-md hover:shadow-xl shadow-[#0f0f0f]  md:max-w-fit rounded-md bg-[#0c2f44] p-8  hover:-translate-y-2 duration-500 ">
              <img className="w-20 mx-auto" src={ReactImg} alt="HTML icon" />
              <p className="my-4">React</p>
            </div>
          </div>
          <div
            className="justify-center flex"
          >
            <div className=" shadow-md hover:shadow-xl shadow-[#0f0f0f]  md:max-w-fit rounded-md bg-[#0c2f44] p-8  hover:-translate-y-2 duration-500 ">
              <img className="w-20 mx-auto " src={Java} alt="HTML icon" />
              <p className="my-4">Java</p>
            </div>
          </div>
          <div
            className="justify-center flex"
          >
            <div className="  shadow-md hover:shadow-xl shadow-[#0f0f0f]  md:max-w-fit rounded-md bg-[#0c2f44] p-8  hover:-translate-y-2 duration-500">
              <div className="h-full flex flex-col justify-end">
                  <img className="w-20 mx-auto mb-4" src={Spring} alt="Spring Boot icon" />
                <p className="my-4">Spring Boot</p>
              </div>
            </div>
          </div>
          <div
            className="justify-center flex"
          >
            <div className="shadow-md hover:shadow-xl shadow-[#0f0f0f]  md:max-w-fit rounded-md bg-[#0c2f44] p-8  hover:-translate-y-2 duration-500 ">
              <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
              <p className="my-4">HTML</p>
            </div>
          </div>
          <div
            className="justify-center flex"
          >
            <div className=" shadow-md hover:shadow-xl shadow-[#0f0f0f]  md:max-w-fit rounded-md bg-[#0c2f44] p-8  hover:-translate-y-2 duration-500 ">
              <img className="w-20 mx-auto" src={CSS} alt="HTML icon" />
              <p className="my-4">CSS</p>
            </div>
          </div>
          <div
            className="justify-center flex"
          >
            <div className=" shadow-md hover:shadow-xl shadow-[#0f0f0f]  md:max-w-fit rounded-md bg-[#0c2f44] p-8  hover:-translate-y-2 duration-500 ">
              <img className="w-20 mx-auto" src={JavaScript} alt="HTML icon" />
              <p className="my-4">JavaScript</p>
            </div>
          </div>
          <div
            className="justify-center flex"
          >
            <div className=" shadow-md hover:shadow-xl shadow-[#0f0f0f]  md:max-w-fit rounded-md bg-[#0c2f44] p-8  hover:-translate-y-2 duration-500 ">
              <img className="w-20 mx-auto" src={Postgres} alt="HTML icon" />
              <p className="my-4">PostgreSQL</p>
            </div>
          </div>
          <div
            className="justify-center flex"
          >
            <div className=" shadow-md hover:shadow-xl shadow-[#0f0f0f]  md:max-w-fit rounded-md bg-[#0c2f44] p-8  hover:-translate-y-2 duration-500 ">
              <img className="w-20 mx-auto" src={AWS} alt="HTML icon" />
              <p className="my-4">AWS</p>
            </div>
          </div>
          <div
            className="justify-center flex"
          >
            <div className="  shadow-md hover:shadow-xl shadow-[#0f0f0f]  md:max-w-fit rounded-md bg-[#0c2f44] p-8  hover:-translate-y-2 duration-500">
              <div className="h-full flex flex-col justify-end">
                  <img className="w-20 mx-auto mb-4" src={Docker} alt="Spring Boot icon" />
                <p className="my-4">Docker</p>
              </div>
            </div>
          </div>
          <div
            className="justify-center flex"
          >
            <div className="  shadow-md hover:shadow-xl shadow-[#0f0f0f]  md:max-w-fit rounded-md bg-[#0c2f44] p-8  hover:-translate-y-2 duration-500">
              <div className="h-full flex flex-col justify-end">
                  <img className="w-20 mx-auto" src={Postman} alt="Spring Boot icon" />
                <p className="my-4">Postman</p>
              </div>
            </div>
          </div>
          <div
            className="justify-center flex"
          >
            <div className=" shadow-md hover:shadow-xl shadow-[#0f0f0f]  md:max-w-fit rounded-md bg-[#0c2f44] p-8  hover:-translate-y-2 duration-500 ">
              <img className="w-20 mx-auto" src={Github} alt="HTML icon" />
              <p className="my-4">Github</p>
            </div>
          </div>
          <div
            className="justify-center flex"
          >
            <div className=" shadow-md hover:shadow-xl shadow-[#0f0f0f]  md:max-w-fit rounded-md bg-[#0c2f44] p-8  hover:-translate-y-2 duration-500 ">
              <img className="w-20 mx-auto" src={Tailwind} alt="HTML icon" />
              <p className="my-4">Tailwind</p>
            </div>
          </div>
          <div
            className="justify-center flex"
          >
            <div className=" shadow-md hover:shadow-xl shadow-[#0f0f0f]  md:max-w-fit rounded-md bg-[#0c2f44] p-8  hover:-translate-y-2 duration-500 ">
              <img className="w-20 mx-auto" src={Firebase} alt="HTML icon" />
              <p className="my-4">Firebase</p>
            </div>
          </div>
          <div
            className="justify-center flex"
          >
            <div className=" shadow-md hover:shadow-xl shadow-[#0f0f0f]  md:max-w-fit rounded-md bg-[#0c2f44] p-8  hover:-translate-y-2 duration-500 ">
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
