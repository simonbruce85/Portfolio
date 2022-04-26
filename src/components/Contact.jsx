import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen bg-[#041F31] flex justify-center items-center p-24 '>
      <form method='POST' action='https://getform.io/f/41313570-0c35-4cb2-8973-19e16667cc01' className='flex flex-col max-w-[600px] w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[#00F5A0] text-gray-300'>Contact</p>
          <p className='text-gray-300 py-4'>Submit the form below or shoot me an email - simon.bruce28@hotmail.com</p>
        </div>
        <input className='bg-transparent rounded border p-2 text-[#ccd6f6]' type="text" placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-transparent rounded border text-[#ccd6f6]' type="email" placeholder='Email' name='email' />
        <textarea className='bg-transparent rounded border p-2 text-[#ccd6f6]' name='message' rows='10' placeholder='Message' ></textarea>
        <div className='flex justify-center pt-2'>
          <button className=' px-3 py-3 my-2 items-center rounded font-medium hover:scale-110 ' id="button-contact">Let's Collaborate</button>
        </div>
      </form>
    </div>
  )
}

export default Contact