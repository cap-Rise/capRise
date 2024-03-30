import React from 'react'

import svg from '../assets/signupSvg.svg'
import logo from '../assets/logo_Blue.webp'
import { Button } from '../components/Button'
import gLogo from '../assets/googleLogo.png'
const Auth = () => {
  return (
    <div>
        <div className='background w-[100vw] h-[100vh] flex justify-center'>
       <div className='flex flex-col gap-7 p-5 '>
        <div className=" title flex flex-col gap-7  ">
          <div className=" pt-12 flex justify-center items-center">
              <img src={logo} className='w-[80%]' alt="" />
          </div>
          <div className='font-extrabold text-3xl text-darkGrey text-center'>SignUp</div>
        </div>

        <div>
          <img src={svg} alt="" />
        </div>
        
        <div className=' font-medium text-lightGrey text-center '>
        By signing up you agree our <span className=' text-darkBlue cursor-pointer'><u>Terms and Conditions</u></span> 
        </div>
        
       </div>

    </div>
    </div>
  )
}

export default Auth