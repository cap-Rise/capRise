import React from 'react'

import logo from '../assets/logo_Blue.webp'
import sample from '../assets/safe.png'


const Pin = () => {
  return (
    <div>
      <div className='background w-[100vw] h-[100vh] flex justify-center'>
      <div className='flex flex-col gap-7 w-[80%] '>
        <div className=" title flex flex-col gap-7  ">
          <div className=" pt-16 flex justify-center items-center">
              <img src={logo} className='w-[70%]' alt="" />
          </div>
          <div className='font-extrabold text-3xl text-darkGrey text-center'>Login</div>
        </div>
        <div className="avtaar flex justify-center items-center">
          <img src={sample} alt="" />
        </div>
        </div>
        </div>
        
    </div>
  )
}

export default Pin