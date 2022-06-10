import React from 'react'
import { ReactComponent as GmailLogo } from "../assets/icongmail.svg"
import { ReactComponent as LinkedinLogo } from "../assets/linkedinlink.svg"
import { ReactComponent as GitLogo } from "../assets/icongit.svg"

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen bg-[#041F31] pt-12 sm:pt-24  flex justify-center items-center pb-2 flex-col'>
      <div className='pb-8 px-8 md:px-0 max-w-[600px] w-full'>
          <p className='text-4xl font-bold inline border-b-4 border-[#00F5A0] text-gray-300'>Contact</p>
          <p className='text-gray-300 py-4'>Submit the form below or email me - simon.bruce28@hotmail.com</p>
        </div>
      <form method='POST' data-netlify="true" data-netlify-recaptcha="true" className='flex px-8 md:px-0 flex-col max-w-[600px] w-full h-full' data-aos="fade-up"
            data-aos-duration="500">
      <input type="hidden" name="form-name" value="contact" />
        
        <input className='bg-transparent rounded border p-2 text-[#ccd6f6]' type="text" placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-transparent rounded border text-[#ccd6f6]' type="email" placeholder='Email' name='email' />
        <textarea className='bg-transparent rounded border p-2 text-[#ccd6f6]' name='message' rows='8' placeholder='Message' ></textarea>
        <div className='flex justify-center pt-2'>
          <button type='submit' className=' p-3 my-2 items-center rounded font-medium hover:scale-110 bg-gradient-to-r from-[#00F5A0] to-[#00D9F5]' >Let's Collaborate</button>
        </div>
      </form>
      <div className='flex flex-col max-w-[600px] w-full mt-12 md:mt-0'>
        <ul className='flex items-center justify-center'>
          <li className='hover:scale-110'> 
            <a
              href="https://www.linkedin.com/in/simon-bruce-aa973b1b1/"
              target='_blank'
              id="icon-color"
            >
              <LinkedinLogo style={{ width: "100px" }} />
            </a>
          </li>
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
        <div className='w-full bg-[#041F31] flex justify-center items-center'>
          <p className='text-gray-300 pt-4 pb-8'> Simon Bruce - Computer Engineer</p>
        </div>
      </div>
    </div>
    
  )
}

export default Contact