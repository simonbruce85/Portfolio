import React, { useEffect } from 'react'
import ProjectCard from './ProjectCard'
import portfolioData from '../assets/Data/data.json';

import {MdChevronLeft, MdChevronRight} from "react-icons/md"

const Work = () => {

  const slideLeft = () =>{
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft - 500;
}

const slideRight = () =>{
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft + 500;
}

  return (
    <div name='work' className='w-full h-full min-h-screen text-gray-300 bg-gradient-to-r from-[#061326] via-[#040c18] to-[#040c18]'>
      <div  className='max-w-[1300px] mx-auto py-32 p-4 flex flex-col justify-center '>
        <div className='pb-8'>
          <p className='text-4xl font-bold text-gray-300 inline border-b-4 border-[#00F5A0]'>Projects</p>
          <p className='py-6'>Check out some of my recent work!</p>
        </div>
        <div className=" flex justify-center items-center group "  data-aos="fade-up"
            data-aos-duration="500"
            data-aos-once="true">
        <MdChevronLeft onClick={slideLeft} className='opacity-50 hover:opacity-100 cursor-pointer  group-hover:block' size={40}/>
        <div id={'slider' } className=" w-[90%] h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide">
            {portfolioData.portfolio.map((item) => (
              <ProjectCard key={item.id} project={item} />
            ))}
        </div>
        <MdChevronRight onClick={slideRight} className=' opacity-50 hover:opacity-100 cursor-pointer  group-hover:block' size={40}/>
        </div>
      </div>
    </div>
  )
}

export default Work
