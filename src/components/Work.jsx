import React from 'react'
import For3x from '../assets/For3xFunding.jpg'
import realEstate from '../assets/realestate.jpg'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#041F31]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#00F5A0]'>Projects</p>
          <p className='py-6'>Check out some of my recent work!</p>
        </div>
        { /*Container*/}
        <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4'>
          { /*Grid Item*/}
          <div style={{ backgroundImage: `url(${realEstate})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>


            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React JS Application
              </span>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>

          </div>

          { /*Grid Item*/}
          <div style={{ backgroundImage: `url(${For3x})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>


            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                HTML, CSS Application
              </span>
              <div className='pt-8 text-center'>
                <a href='https://naughty-edison-5f7fd9.netlify.app/' target="blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href='https://github.com/simonbruce85/Web' target="blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Work
