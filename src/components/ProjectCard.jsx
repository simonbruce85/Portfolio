import React from 'react'

const ProjectCard = (project) => {

  return (
    <div className=' w-full  md:w-[40%] inline-block p-2 rounded-b' >
      <div className='rounded-b'>
      <img id="imgWork" className='bg-fixed h-[250px]' src={project.project.img} alt={project.project.name} />
      </div>
      <div className='bg-[#222525] rounded-b min-h-[300px]  flex flex-col p-4 justify-between'>
        <p className='text-2xl font-bold text-white whitespace-normal'>
          {project.project.name}
        </p>
        <div className='flex justify-between'>
          <p>{project.project.techs}</p>
        </div>
        <div className='whitespace-normal'>
          <p >{project.project.description}</p>
        </div>
        <div className='text-center flex'>
          <a href={project.project.demo} target="_blank" >
            <button className='text-center rounded-lg h-8 px-4 my-2 mr-2 bg-white text-gray-700 font-bold text-md' id="button-contact">Demo</button>
          </a>
          <a href={project.project.github} target="_blank">
            <button className='text-center rounded-lg h-8 px-4 my-2 bg-white text-gray-700 font-bold text-md' id="button-contact">Github</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard