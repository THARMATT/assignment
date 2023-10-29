import React from 'react'
import Background from '../assets/background.jpg'
function BackgroundImage() {
  return (
    <div className='h-screen w-screen'>
        <img src={Background} alt="b-img" className='h-screen w-screen' />
      
    </div>
  )
}

export default BackgroundImage
