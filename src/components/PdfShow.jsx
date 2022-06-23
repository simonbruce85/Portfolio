import React from 'react'
import Pdf from '.../public/resume.pdf'

const PdfShow = () => {
  return (
    <div>
        <a href={Pdf} target ="_blank">
            Resume
        </a>
    </div>
  )
}

export default PdfShow