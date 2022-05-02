import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import Tailwind from '../assets/tailwind.png'
import Github from '../assets/github.png'

function Skills() {
    return (
        <div name="skills" className="w-full h-screen bg-[#041F31] text-gray-300 ">
            {/*Container*/}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-[#00F5A0]'>Skills</p>
                    <p className='py-4'>These are the technologies I've worked with</p>
                </div>

                {/*Card Container*/}
                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
                    <div className=' shadow-[#040c16] bg-[#041F31] pt-2 hover:scale-110 duration-500 '>
                        <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className=' shadow-[#040c16] bg-[#041F31] pt-2 hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className='s shadow-[#040c16] bg-[#041F31] pt-2 hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                        <p className='my-4'>JavaScript</p>
                    </div>
                    <div className=' shadow-[#040c16] bg-[#041F31] pt-2 hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                        <p className='my-4'>React</p>
                    </div>
                    <div className=' shadow-[#040c16] bg-[#041F31] pt-2 hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Github} alt="HTML icon" />
                        <p className='my-4'>Github</p>
                    </div>
                    <div className=' shadow-[#040c16] bg-[#041F31] pt-2 hover:scale-110 duration-5000'>
                        <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon" />
                        <p className='my-4'>Tailwind</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills