import React, { useState, useContext, useEffect } from 'react'

import logo from '../assets/logo_Blue.webp'
import jiya from '../assets/jiya.png'
import authContext from '../context/authContext'
import avtaar from '../assets/avtaar.svg'
import PinInput from "react-pin-input";
import { Button } from '../components/Button';

import { useNavigate, useNavigation } from 'react-router-dom'
import PreLoader from '../components/PreLoader'



const Pin = () => {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const { getUser, logout, userData, loaderSession, setLoaderSession,Name,setName } = useContext(authContext);

  const [loading, setLoading] = useState(true);


  useEffect(() => {
    if (!(localStorage.getItem('auth-token') || localStorage.getItem('google-token'))) {
      navigate('/auth')
    }
    getUser();
    if (loaderSession) {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    } else {
      setLoading(false)
    }

  }, [])

  const handleLogout = () => {
    logout();
  }

  const [pin, setPin] = useState('');

  const handlePinSubmit = async () => {
    const pinObj = { pin };
    const response = await fetch("http://localhost:5000/auth/verifypin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('auth-token')
      },
      body: JSON.stringify(pinObj)
    });
    const Data = await response.json();
    console.log(Data)
    if (Data.success) {
      navigate("/home", { replace: true })

    } else {
      alert(Data.Error)
    }
  };
  const handlePinChange = (value) => {
    setPin(value);
  };

  if (loading) {
    return (<PreLoader />)
  }

  return (
    <div>
      <div className='background w-[100vw] h-[100vh] flex justify-center'>
        <div className='flex flex-col gap-9 w-[90%]'>
          <div className=" title flex flex-col gap-7  ">
            <div className=" pt-16 flex justify-center items-center">
              <img src={logo} className='w-[70%]' alt="" />
            </div>
            <div className='font-extrabold text-3xl text-darkGrey text-center'>Welcome back!</div>
          </div>
          <div className='flex flex-col items-center gap-4 '>
            <div className="avtaar flex flex-col  w-  items-center  ">
              <img className='rounded-full w-[50%] border border-black' src={jiya} alt="" />
            </div>
            <div className='font-bold text-2xl text-darkGrey text-center uppercase'>{userData.name}</div>
          </div>
          <div className='flex flex-col justify-center items-center gap-4'>
            <div className="flex text-xl font-bold text-black justify-center items-center">Enter you Pin</div>
            <div className="flex flex-col justify-center items-center gap-[5rem] w-full">
              <PinInput
                inputStyle={
                  { border: "0.1px", borderRadius: "12px", boxShadow: " 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)", margin: "5px" }
                }
                inputFocusStyle={
                  { borderRadius: "12px", boxShadow: " 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)", margin: "5px" }
                }
                length={4}
                focus
                secret
                type="text"
                inputMode="text"
                onChange={handlePinChange}
              />

              <Button onClick={handlePinSubmit} className="w-full h-[3.8rem]  text-white  font-medium text-lg" >Confirm Pin</Button>

            </div>
          </div>


        </div>
      </div>

    </div>




  )
}

export default Pin