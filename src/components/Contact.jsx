import React from "react";
import { ReactComponent as LinkedinLogo } from "../assets/linkedinlink.svg";
import { ReactComponent as GitLogo } from "../assets/icongit.svg";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-full bg-gradient-to-r from-[#061326] via-[#040c18] to-[#040c18] flex justify-center"
    >
      <div className="max-w-[1300px] w-full h-full flex flex-col justify-center">
        <div className="h-full flex flex-col md:pt-24 justify-end ">
          <div className="pb-8 px-8 md:px-0 ">
            <p className="text-4xl font-bold inline border-b-4 border-[#00F5A0] text-gray-300">
              Contact
            </p>
            <p className="text-gray-300 pt-4">
              Don't hesitate to email me to <strong>simonbrucepuma@gmail.com</strong>
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full h-full min-h-[15vh] md:min-h-[30vh]justify-end">
          <div className="flex items-center justify-center">
            <button className="hover:scale-105">
              <a
                href="https://www.linkedin.com/in/simon-bruce-aa973b1b1/"
                target="_blank"
                id="icon-color"
              >
                <LinkedinLogo style={{ width: "100px" }} />
              </a>
            </button>
            <button className="hover:scale-105">
              <a
                className=" flex justify-between items-center w-full text-gray-300"
                href="https://github.com/simonbruce85"
                target="_blank"
              >
                <GitLogo className="w-[100px]"/>
              </a>
            </button>
          </div>
          <div className="w-full  flex justify-center items-center">
            <p className="text-gray-300 pt-4">
              {" "}
              Simon Bruce - Computer Engineer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
