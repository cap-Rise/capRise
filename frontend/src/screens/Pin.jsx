import React, { useState,useContext, useEffect } from 'react'

import logo from '../assets/logo_Blue.webp'
import sample from '../assets/safe.png'
import authContext from '../context/authContext'
import avtaar from '../assets/avtaar.svg'
import PinInput from "react-pin-input";
import { Button } from '../components/Button';

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
  
  const [pin, setPin] = useState('');

  const handlePinSubmit = () => {
    const pinObj = { pin };
    console.log(pinObj);   
  };

  const handlePinChange = (value) => {
    setPin(value);
  };

  return (
    <div>
      <div className='background w-[100vw] h-[100vh] flex justify-center'>
      <div className='flex flex-col gap-9 w-[85%] '>
        <div className=" title flex flex-col gap-7  ">
          <div className=" pt-16 flex justify-center items-center">
              <img src={logo} className='w-[70%]' alt="" />
          </div>
          <div className='font-extrabold text-3xl text-darkGrey text-center'>Welcome back!</div>
        </div>
        <div className="avtaar flex flex-col justify-center items-center gap-3">
          <img src={avtaar} alt="" />
          <div className='font-bold text-2xl text-darkGrey text-center uppercase'>{userData.name}</div>
        </div>
        <div className='flex flex-col justify-center items-center gap-4'>
          <div className="flex text-xl font-bold text-black justify-center items-center">Enter you Pin</div>
          <div className="flex flex-col justify-center items-center gap-[5rem] w-full">
            <PinInput
                length={4}
                focus
                secret
                type="text"
                inputMode="text"
                onChange={handlePinChange}
            />

            <Button className="w-full h-[3.8rem]  text-white  font-medium text-lg" >Confirm Pin</Button>  
        </div>
        </div>
        
        </div>
        </div>
        
    </div>
  )
}

export default Pin