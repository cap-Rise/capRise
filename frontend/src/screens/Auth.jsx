import React from 'react'
import { Link } from "react-router-dom"
import svg from '../assets/signupSvg.svg'
import logo from '../assets/logo_Blue.webp'
import { Button } from '../components/Button'
import gLogo from '../assets/googleLogo.png'
const Auth = () => {
  return (
    <div>
      <div className='background w-[100vw] h-[100vh] flex justify-center'>
        <div className='flex flex-col gap-8 p-5 '>
          <div className=" title flex flex-col gap-7  ">
            <div className=" pt-12 flex justify-center items-center">
              <img src={logo} className='w-[70%]' alt="" />
            </div>
            <div className='font-extrabold text-3xl text-darkGrey text-center'>Sign Up</div>
          </div>

          <div>
            <img src={svg} alt="" />
          </div>

          <div className="flex flex-col gap-3">
            <Button className=" bg-white shadow-2xl h-[3.8rem] w-full gap-3 ">
              <div className="google">
                <img src={gLogo} alt="" />

              </div>
              <div className='font-medium text-lg'>
                Continue with Google
              </div>
            </Button>
            <div className='or font-medium text-2xl'>OR</div>
            <Link to="/signup"><Button className=" h-[3.8rem] w-full text-white   font-medium text-lg">
              Sign Up with email
            </Button></Link>

          </div>

          <div className=' font-medium text-sm text-lightGrey text-center '>
            By signing up you agree our <span className=' text-darkBlue cursor-pointer'><u>Terms and Conditions</u></span>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Auth