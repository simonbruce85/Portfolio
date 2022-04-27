import React from 'react'
import For3x from '../assets/For3xFunding.jpg'
import realEstate from '../assets/realestate.jpg'
import ProjectCard from './ProjectCard'
const Footer = () => {
    return (
        <div name='work' className='w-full md:h-screen text-gray-300 bg-[#041F31]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
                <div className='pb-8'>
                    <p className='text-4xl font-bold text-gray-300 '>Projects</p>
                    <p className='py-6'>Check out some of my recent work!</p>
                </div>
                { /*Container*/}
                <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4'>
                    { /*Grid Item*/}
                    <ProjectCard backimg={For3x} projectname={"React App"} tech1={"React"} tech2={"JavaScript"} tech3={"Tailwind"} description={"asgdasdgsadgasdgasdgasdasdgasgd"} github={"https://tailwindcss.com/docs/border-radius"}/>
                </div>

            </div>
        </div>
    )
}

export default Footer