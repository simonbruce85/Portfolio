import React from 'react'
import For3x from '../assets/For3xFunding.jpg'
import Crypto from '../assets/crypto-price.jpg'
import ProjectCard from './ProjectCard'

const Work = () => {
  return (
    <div name='work' className='w-full text-gray-300 bg-[#041F31]'>
      <div className='max-w-[1000px] mx-auto py-32 p-4 flex flex-col justify-center w-full h-full '>
        <div className='pb-8'>
          <p className='text-4xl font-bold text-gray-300 inline border-b-4 border-[#00F5A0]  '>Projects</p>
          <p className='py-6'>Check out some of my recent work!</p>
        </div>
        { /*Container*/}
        <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-16'>
          { /*Grid Item*/}
          <ProjectCard backimg={For3x} projectname={"For3x Funding"} tech1={"Html"} tech2={"CSS"} tech3={"Bootstrap"} description={"Landing pafe for For3x Funding, a NFT project with solidity integrated"} github={"https://tailwindcss.com/docs/border-radius"} />
          <ProjectCard backimg={Crypto} projectname={"Crypto Currency Price Tracker"} tech1={"React"} tech2={"JavaScript"} tech3={"Tailwind"} description={"Website oriented to track the price of thousands of cryptocurrencies using CoinGecko API"} github={"https://github.com/simonbruce85/cryptoAPI"} />
          <ProjectCard backimg={For3x} projectname={"Crypto Currency Price Tracker"} tech1={"React"} tech2={"JavaScript"} tech3={"Tailwind"} description={"asgdasdgsadgasdgasdgasdasdgasgd"} github={"https://tailwindcss.com/docs/border-radius"} />
          <ProjectCard backimg={For3x} projectname={"React App"} tech1={"React"} tech2={"JavaScript"} tech3={"Tailwind"} description={"asgdasdgsadgasdgasdgasdasdgasgd"} github={"https://tailwindcss.com/docs/border-radius"} />
          
        </div>

      </div>
    </div>
  )
}

export default Work
