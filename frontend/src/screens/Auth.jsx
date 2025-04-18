import React, { useContext, useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import svg from '../assets/signupSvg.svg'
import logo from '../assets/logoBlue.png'
import { Button } from '../components/Button'
import gLogo from '../assets/googleLogo.png'
import PreLoader from '../components/PreLoader'
import authContext from '../context/authContext'
const Auth = () => {
  const [loading, setLoading] = useState(true);
  const { loaderSession, setLoaderSession } = useContext(authContext)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);

  }, [])


  if (loading) {
    return (<PreLoader />)
  }

  return (
    <div>
      <div className='background w-[100vw] h-[100vh] flex justify-center'>
        <div className='flex flex-col gap-10 p-5 '>
          <div className=" title flex flex-col gap-7  ">
            <div className=" pt-12 flex justify-center items-center">
              <img src={logo} className='w-[60%]' alt="" />
            </div>
            <div className='font-extrabold text-2xl text-darkGrey text-center'>Sign Up</div>
          </div>

          <div>
            <img src={svg} alt="" />
          </div>

          <div className="flex flex-col gap-3">
            <a href='http://localhost:5000/auth/google'>
              <Button className=" bg-white shadow-lg drop-shadow-xl h-[3.5rem] w-full gap-3 ">
                <div className="google">
                  <img src={gLogo} className='h-[23px] w-[23px]' alt="" />

                </div>
                <div className='font-medium text-lg'>
                  <h1 className='text-black'>Continue with Google</h1>
                </div>
              </Button>
            </a>
            <div className='or font-medium text-xl'>OR</div>
            <Link to="/signup"><Button className=" h-[3rem] w-full text-white   font-medium text-lg">
              Sign Up with email
            </Button></Link>

          </div>

          <div className=' font-medium text-xs text-lightGrey text-center '>
            By signing up you agree our <span className=' text-darkBlue cursor-pointer'><u>Terms and Conditions</u></span>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Auth