import React from 'react'

const ProjectCard = (project) => {

  return (
    <div className=' w-full pt-4  md:w-[70%] lg:w-[40%] xl:w-[31%] inline-block p-2 rounded-b hover:-translate-y-1 duration-500  ' >
      <div className=' '>
      <img id="imgWork" className='bg-fixed h-[250px] rounded-t-xl' src={project.project.img} alt={project.project.name} />
      </div>
      <div className='bg-[#132135]  rounded-b-lg min-h-[300px] max-w-[495px]  flex flex-col p-4 justify-between shadow-sm  shadow-gray-500 '>
        <p className='text-2xl font-bold text-gray-200 whitespace-normal'>
          {project.project.name}
        </p>
        <div className='flex whitespace-nowrap'>
          {project.project.techs.map((tech)=>(
              <div className='border border-[#00f5c4] text-[#00f5c4] bg-[#00f59f3e] rounded-lg px-1 mr-2 '>{tech}</div>
          ))}
        </div>
        <div className='whitespace-normal min-h-[100px] text-gray-300 text-justify '>
          <p >{project.project.description}</p>
        </div>
        <div className='text-center flex'>
          <a href={project.project.demo} target="_blank" >
            <button className='text-center rounded-lg h-8 px-4 my-2 mr-2 font-bold text-md hover:scale-105 border-gray-300 border transition ease-in-out duration-100' >Demo</button>
          </a>
          <a href={project.project.github} target="_blank">
            <button className='text-center rounded-lg h-8 px-4 my-2  font-bold text-md hover:scale-105 border-gray-300 border   transition ease-in-out duration-100' >Github</button>
            {/* bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] */}
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard