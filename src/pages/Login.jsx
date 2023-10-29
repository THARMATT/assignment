import React from 'react'
import BackgroundImage from '../components/BackgroundImage'
import Header from '../components/Header'

function Signup() {
  return (
    <div className=''>
      <BackgroundImage/>
      <div className="absolute top-0 left-0 bg-opacity-50 bg-black h-screen w-screen flex items-center justify-center text-white">
        <Header className=''/>
      <div className="flex align-items justify-center ">
        <div className="text flex flex-col">
            <h1>Lets Explore the Beast</h1>
            <h4>For making you feel Better</h4>
            <h6>Ready?Enter your Email</h6>
        </div>
        <div className="form gap-1">
            <input type='email' placeholder='Email Address' name='email'/>
            <input type='password' placeholder='Password' name='password'/>
            <button>Let's Begin</button>
            <button>Login</button>
        </div>
      </div>
    </div></div>
  )
}

export default Signup
