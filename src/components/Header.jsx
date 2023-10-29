import React from 'react'
import logo from '../assets/react.svg'
import { useNavigate } from 'react-router-dom/dist'
import Button from './Button'
function Header(props) {
   const navigate= useNavigate()
  const handleClick=()=>navigate(props.login?'/login':'/signup')
  return (

    <>
    <div className='logo' >
      <img src={logo} alt="logo" className='h-[5rem]' />
    </div>
    <Button text={props.login?'Log In':'Sign In'} onClick={handleClick}/>
    </>
  )
}

export default Header
