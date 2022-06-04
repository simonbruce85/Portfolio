import React from 'react'

const ProjectCard = (props) => {
  return (
    <div className=' w-[40%] inline-block relative p-2 rounded-b' >
      <div className='rounded-b'>
      <img id="imgWork" className='bg-fixed h-[250px] w-[400px]' src={props.backimg} alt={"hello"} />
      </div>
      <div className='bg-[#222525] rounded-b min-h-[300px] flex flex-col p-4 justify-between'>
        <p className='text-2xl font-bold text-white whitespace-normal'>
          {props.projectname}
        </p>
        <div className='flex justify-between'>
          <p>{props.tech1}</p>
          <p>-</p>
          <p>{props.tech2}</p>
          <p>-</p>
          <p>{props.tech3}</p>
        </div>
        <div className='whitespace-normal'>
          <p >{props.description}</p>
        </div>
        <div className='text-center flex'>
          <a href={props.demo} target="_blank" >
            <button className='text-center rounded-lg h-8 px-4 m-2 bg-white text-gray-700 font-bold text-md' id="button-contact">Demo</button>
          </a>
          <a href={props.github} target="_blank">
            <button className='text-center rounded-lg h-8 px-4 m-2 bg-white text-gray-700 font-bold text-md' id="button-contact">Github</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard