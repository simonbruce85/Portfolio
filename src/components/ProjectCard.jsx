import React from 'react'

const ProjectCard = (props) => {
  return (
      < div >
        { /*Grid Item*/}
        <div style={{ backgroundImage: `url(${props.backimg})` }} className='shadow-lg shadow-[#040c16] group container rounded-t-md flex justify-center items-center mx-auto flex-col content-div'></div>
        <div className='bg-[#222525] rounded-b flex-col '>
          <p className='text-2xl font-bold text-white pt-4 pl-8'>
          {props.projectname}
          </p>
          <div className='flex pt-4 pl-8 gap-4'>
            <p>{props.tech1}</p>
            <p>-</p>
            <p>{props.tech2}</p>
            <p>-</p>
            <p>{props.tech3}</p>
          </div>
          <div className=' pt-4 px-8 justify-content '>
          <p>{ props.description}</p>
          </div>
          <div className='text-center flex pl-6 pt-4 pb-8'>
            <a href={props.demo}>
              <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ' id="button-contact">Demo</button>
            </a>
          <a href={props.github} target="_blank">
              <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' id="button-contact">Github</button>
            </a>
          </div>
        </div>
      </div>
  )
}

export default ProjectCard