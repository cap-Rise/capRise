import React from 'react'
import logo from '../assets/logo_Blue.png'

const SignUp = () => {
  return (
    <div className='background w-[100vw] h-[100vh] flex justify-center'>
       <div className=" title flex flex-col gap-8  p-4">
       <div className=" pt-10 flex justify-center items-center">
            <img src={logo} className='w-[80%]' alt="" />
        </div>
        <div className=' font-extrabold text-3xl text-darkGrey text-center'>SignUp</div>
       </div>

    </div>
  )
}

export default SignUp