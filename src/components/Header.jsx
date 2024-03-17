import React from 'react'
import logo from "../assets/logo.png"

const Header = () => {
  return (
    <div className='absolute  w-full px-32 bg-gradient-to-b from-black py-2 z-10'>
        <img className='w-[12vw] object-cover' src={logo} alt='golu'/>
    </div>
  )
}

export default Header