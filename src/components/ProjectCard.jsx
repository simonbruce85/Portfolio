import React from 'react'

const ProjectCard = (project) => {

  return (
    <div className=' w-full pt-4 md:w-[40%] inline-block p-2 rounded-b hover:-translate-y-1 duration-500 ' >
      <div className=' '>
      <img id="imgWork" className='bg-fixed h-[250px] rounded-t-xl' src={project.project.img} alt={project.project.name} />
      </div>
      <div className='bg-[#222525]  rounded-b-lg min-h-[300px] max-w-[495px]  flex flex-col p-4 justify-between shadow-md hover:shadow-xl shadow-[#0f0f0f] '>
        <p className='text-2xl font-bold text-white whitespace-normal'>
          {project.project.name}
        </p>
        <div className='flex justify-between'>
          <p>{project.project.techs}</p>
        </div>
        <div className='whitespace-normal min-h-[100px] text-justify mr-2'>
          <p >{project.project.description}</p>
        </div>
        <div className='text-center flex'>
          <a href={project.project.demo} target="_blank" >
            <button className='text-center rounded-lg h-8 px-4 my-2 mr-2 bg-white text-gray-700 font-bold text-md hover:scale-105 bg-gradient-to-r from-[#00F5A0] to-[#00D9F5]' >Demo</button>
          </a>
          <a href={project.project.github} target="_blank">
            <button className='text-center rounded-lg h-8 px-4 my-2 bg-white text-gray-700 font-bold text-md hover:scale-105 bg-gradient-to-r from-[#00F5A0] to-[#00D9F5]' >Github</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard