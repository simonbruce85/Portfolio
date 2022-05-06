import React from 'react'
import { ReactComponent as GmailLogo } from "../assets/icongmail.svg"
import { ReactComponent as LinkedinLogo } from "../assets/linkedinlink.svg"
import { ReactComponent as GitLogo } from "../assets/icongit.svg"

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen bg-[#041F31]  flex justify-center items-center pt-24 pb-2 flex-col'>
      <form method='POST' action='https://getform.io/f/41313570-0c35-4cb2-8973-19e16667cc01' className='flex px-8 md:px-0 flex-col max-w-[600px] w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[#00F5A0] text-gray-300'>Contact</p>
          <p className='text-gray-300 py-4'>Submit the form below or email me - simon.bruce28@hotmail.com</p>
        </div>
        <input className='bg-transparent rounded border p-2 text-[#ccd6f6]' type="text" placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-transparent rounded border text-[#ccd6f6]' type="email" placeholder='Email' name='email' />
        <textarea className='bg-transparent rounded border p-2 text-[#ccd6f6]' name='message' rows='5' placeholder='Message' ></textarea>
        <div className='flex justify-center pt-2'>
          <button className=' px-3 py-3 my-2 items-center rounded font-medium hover:scale-110 ' id="button-contact">Let's Collaborate</button>
        </div>
      </form>
      <ul className='flex pt-12 p-6'>
        {/*Element List*/}
        <li className='hover:scale-110'> 
          <a
            href="https://www.linkedin.com/in/simon-bruce-aa973b1b1/"
            target='_blank'
            id="icon-color"
          >
            <LinkedinLogo style={{ width: "100px" }} />
          </a>
        </li>
        {/*Element List*/}
        <li className='hover:scale-110'>
          <a
          className=" flex justify-between items-center w-full text-gray-300"
          href="https://github.com/simonbruce85"
          target='_blank'
          >
            <GitLogo style={{ width: "100px" }} />
          </a>
        </li>
      </ul>
      <div className='w-full bg-[#041F31] flex justify-center items-center  flex-col'>
        <p className='text-gray-300 pt-4 pb-8'> Simon Bruce - Computer Engineer</p>
      </div>
    </div>
    
  )
}

export default Contact