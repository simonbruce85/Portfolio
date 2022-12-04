import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import portfolioData from "../assets/Data/data.json";

const Work = () => {
  const [visible, setVisible] = useState(3);

  const showMore = () => {
    setVisible((visible) => visible + 3);
  };

  return (
    <div
      name="work"
      className="w-full h-full min-h-screen text-gray-300 bg-gradient-to-r from-[#061326] via-[#040c18] to-[#040c18]"
    >
      <div className="max-w-[1300px] mx-auto py-32 p-4 flex flex-col justify-center ">
        <div className="pb-8">
          <p className="text-4xl font-bold text-gray-300 inline border-b-4 border-[#00f5c4]">
            Projects
          </p>
          <p className="py-6">Check out some of my recent work!</p>
        </div>
        <div
          className=" flex justify-center items-center "
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-once="true"
        >
          <div className=" w-full h-full ">
            {portfolioData.portfolio.slice(0, visible).map((item) => (
              <ProjectCard key={item.id} project={item} />
            ))}
            <div className={`w-full flex justify-center ${visible<portfolioData.portfolio.length?"":"hidden"}`}>
              <button
                className='px-4 py-2 my-2 items-center rounded transition ease-in-out duration-100 font-medium cursor-pointer bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] hover:scale-105 text-[#061326]'
                onClick={showMore}
              >
                Show More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
