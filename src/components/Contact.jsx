import React from "react";
import { ReactComponent as LinkedinLogo } from "../assets/linkedinlink.svg";
import { ReactComponent as GitLogo } from "../assets/icongit.svg";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full min-h-screen h-full bg-[#041F31] flex justify-center"
    >
      <div className="max-w-[600px] w-full h-full flex flex-col justify-center">
        <div className="h-full flex flex-col md:pt-24 justify-end ">
          <div className="pb-8 px-8 md:px-0 ">
            <p className="text-4xl font-bold inline border-b-4 border-[#00F5A0] text-gray-300">
              Contact
            </p>
            <p className="text-gray-300 pt-4">
              Submit the form below or email me to simon.bruce28@hotmail.com
            </p>
          </div>
          <form
            method="POST"
            data-netlify="true"
            data-netlify-recaptcha="true"
            className="flex px-8 md:px-0 flex-col w-full "
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-once="true"
          >
            <input type="hidden" name="form-name" value="contact" />

            <input
              className="bg-transparent rounded border p-2 text-[#ccd6f6]"
              type="text"
              placeholder="Name"
              name="name"
            />
            <input
              className="my-4 p-2 bg-transparent rounded border text-[#ccd6f6]"
              type="email"
              placeholder="Email"
              name="email"
            />
            <textarea
              className="bg-transparent rounded border p-2 text-[#ccd6f6]"
              name="message"
              rows="8"
              placeholder="Message"
            ></textarea>
            <div className="flex justify-center pt-2">
              <button
                type="submit"
                className=" p-3 my-2 items-center rounded font-medium hover:scale-105 bg-gradient-to-r from-[#00F5A0] to-[#00D9F5]"
              >
                Let's Collaborate
              </button>
            </div>
          </form>
        </div>
        <div className="flex flex-col w-full h-full min-h-[15vh] md:min-h-[30vh] pt-12 justify-end">
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
          <div className="w-full bg-[#041F31] flex justify-center items-center">
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
