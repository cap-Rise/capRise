import React, { useContext, useEffect } from 'react'

import logo from '../assets/logo_Blue.webp'
import sample from '../assets/safe.png'
import authContext from '../context/authContext'
import { useNavigate } from 'react-router-dom'


const Pin = () => {
  const navigate= useNavigate();
  const {getUser,logout,userData}=useContext(authContext);
  useEffect(() => {
    if(!(localStorage.getItem('auth-token') || localStorage.getItem('google-token'))){
      navigate('/auth')
    }
    getUser();
  }, [])

  const handleLogout=()=>{
    logout();
  }
  
  return (
    <div>
      <div className='background w-[100vw] h-[100vh] flex justify-center'>
      <div className='flex flex-col gap-7 w-[80%] '>
        <div className=" title flex flex-col gap-7  ">
          <div className=" pt-16 flex justify-center items-center">
              <img src={logo} className='w-[70%]' alt="" />
          </div>
          <div className='font-extrabold text-3xl text-darkGrey text-center'>Welcome {userData.name}</div>
        </div>
        <div className="avtaar flex justify-center items-center">
          <img src={sample} alt="" />
        </div>
        {/* div below is just for testing pusrpose remove it after testing logout */}
        <div>
          <button onClick={handleLogout} className='cursor-pointer  '>
            <h1>LOGOUT</h1>
          </button>
        </div>
        {/* remove this one div above between this two comments along with the comment */}
        </div>
        </div>
        
    </div>
  )
}

export default Pin