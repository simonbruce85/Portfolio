import React, { useEffect } from "react";
import Backimage from "../assets/backgr.jpg";
import "../index.css";

function About() {
  return (
    <div
      name="about"
      className="w-full h-full px-4 md:py-8 bg-gradient-to-r from-[#061326] via-[#040c18] to-[#040c18]  bg-cover bg-fixed justify-center flex "
      // style={{ backgroundImage: `url(${Backimage})` }}
      // id="backimgabout"
    >
      <div
        id="gradient__bg"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-once="true"
        className="px-8 py-4 rounded-lg max-w-[1500px] 3xl:max-w-[1650px] w-full"
      >
        <div className=" flex-col justify-center items-center py-4 max-w-[] w-full">
          <div className=" text-gray-300">
            <div className="text-left pb-4 pl-4">
              <p className="text-4xl font-bold border-b-4 inline border-[#00f5c4] ">
                About
              </p>
            </div>
          </div>
          <div className="max-w-[1300px] w-full px-4">
            <div className="text-xl text-gray-300">
              <p className="text-justify indent-8 my-2">
                Hello, I am Simon. I am a computer engineer who graduated from
                Florida International University and a Full-Stack developer
                passionate about software and creating things from scratch
              </p>
              <p className="text-justify indent-8 my-2">
                Since the beginning of my degree, I have been learning different
                programming languages such as Java and C. However, my passion lies
                in web applications, prompting my current focus on web development.
                Each day, I eagerly expand my knowledge of front-end and back-end development,
                exploring everything from HTML, CSS, and Javascript to React, Java,
                Spring Boot, SQL, and PostgreSQL.
              </p>
              <p className="text-justify indent-8">
                I believe in lifelong learning and continuous improvement.
                Please take a look at my most recent
                projects and don't hesitate to contact me to connect or if you
                have any questions
              </p>
            </div>
            {/* <div className="py-6 flex">
              <a href={process.env.PUBLIC_URL + "/resume.pdf"} target="_blank">
                <div className="px-4 py-2 my-2 items-center transition ease-in-out duration-100 rounded font-medium cursor-pointer bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] hover:scale-105">
                  Resume
                </div>
              </a>
            </div> */}
            <div className="md:grid md:grid-cols-3 gap-10 w-full text-gray-300">
              <div className="my-4">
                <h1 className="border-b-2 border-[#00f5c4] w-fit">Education</h1>
                <p>
                  Computer Engineer who graduated from Florida International
                  University (FIU) in August 2022
                </p>
              </div>
              <div className="my-4">
                <h1 className="border-b-2 border-[#00f5c4] w-fit">
                  Area of focus
                </h1>
                <p>Interested in the entire full-stack development spectrum</p>
              </div>
              <div className="my-4">
                <h1 className="border-b-2 border-[#00f5c4] w-fit">Interests</h1>
                <p>Playing soccer, traveling, and spending time with friends</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
