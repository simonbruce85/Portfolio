import React, { useEffect } from 'react'
import For3x from '../assets/For3xFunding.jpg'
import Crypto from '../assets/crypto-price.jpg'
import TodoList from '../assets/Todo-List.png'
import ProjectCard from './ProjectCard'
import NetflixClone from '../assets/netflix-clone.png'

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
    <div  name='work' className='w-full text-gray-300 bg-[#041F31]'>
      <div  className='max-w-[1000px] mx-auto py-32 p-4 flex flex-col justify-center '>
        <div className='pb-8'>
          <p className='text-4xl font-bold text-gray-300 inline border-b-4 border-[#00F5A0]  '>Projects</p>
          <p className='py-6'>Check out some of my recent work!</p>
        </div>
        <div className="flex items-center group relative">
        <MdChevronLeft onClick={slideLeft} className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 sm:hidden  group-hover:block' size={40}/>
        <div id={'slider' } className=" w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide ">
            <ProjectCard backimg={NetflixClone} projectname={"Netflix Clone"} tech1={"React"} tech2={"Firebase"} tech3={"Movie Api"} description={"Netflix clone application using Firebase to integrate authentication and save information about each individual user in firebase"} github={"https://github.com/simonbruce85/netflix-clone"} demo={"https://netflix-clone-sime.netlify.app/"} />
            <ProjectCard backimg={Crypto} projectname={"Crypto Price Tracker"} tech1={"React"} tech2={"JavaScript"} tech3={"Tailwind"} description={"Website oriented to track the price of thousands of cryptocurrencies using CoinGecko API"} github={"https://github.com/simonbruce85/cryptoAPI"} demo={"https://crypto-price-api.netlify.app"}/>
            <ProjectCard backimg={TodoList} projectname={"To-do List"} tech1={"React"} tech2={"JavaScript"} tech3={"Firebase"} description={"To-do List application based on firebase interactiont to add, modify and delete tasks"} github={"https://github.com/simonbruce85/TodoFirebase"} demo={"https://simons-to-do-list.netlify.app/"} />
            <ProjectCard backimg={For3x} projectname={"Growing Beyond Earth"} tech1={"Arduino"} tech2={"Fusion360"} tech3={"Harwdare"} description={"Finalists in NASA sponsored contest Growing Beyond Earth as the FIU team"} github={"/"} demo={"https://makeprojects.com/project/fiu-autonomous-farmer---year-3-collegiate-entry"} />
        <ProjectCard backimg={For3x} projectname={"For3x Funding"} tech1={"HTML"} tech2={"CSS"} tech3={"Bootstrap"} description={"Landing pafe for For3x Funding, a NFT project with solidity integrated"} github={"https://github.com/simonbruce85/Web"} demo={"https://for3x-funding.netlify.app"}/>
        </div>
        <MdChevronRight onClick={slideRight} className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer sm:hidden group-hover:block' size={40}/>
        </div>
      </div>
    </div>
  )
}

export default Work
