import React from 'react'
import { ClipLoader } from 'react-spinners'

const Loader = () => {

    const override = {
        
      };
  return (
    <div className="w-full h-screen bg-[#041F31] flex justify-center items-center">
        <ClipLoader color={"#00F5A0"} css={override}/>
    </div>
  )
}

export default Loader