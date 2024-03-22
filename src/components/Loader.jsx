import React from 'react'
import loadinggif from '../assets/loadergif.gif'
const Loader = () => {
  return (
    <div className='w-screen h-screen bg-[#111111] flex justify-center items-center'>
      <img src={loadinggif} alt="" />
    </div>
  )
}

export default Loader