import React, { useState, useContext, useEffect, useRef } from 'react'

import logo from '../assets/logoBlue.png'
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
  const { getUser, logout, userData, loaderSession, setLoaderSession, Name, setName } = useContext(authContext);

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
  const [isValid, setIsValid] = useState(true)
  const pinInputRef = useRef(null);

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
      if (userData.email === process.env.REACT_APP_ADMIN_EMAIL) {
        navigate("/admin")
      }else{
        navigate("/home", { replace: true })
      }

    } else {
      setIsValid(false)
      pinInputRef.current.clear();

      setTimeout(() => {
        setIsValid(true)
      }, 1000);

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
      <style>
        {`
          @keyframes shake {
            0% {
              margin-left: 0rem;
            }
            25% {
              margin-left: 0.5rem;
            }
            75% {
              margin-left: -0.5rem;
            }
            100% {
              margin-left: 0rem;
            }
          }
        `}
      </style>
      <div className='background w-[100vw] h-[100vh] flex  p-5 justify-center'>
        <div className='flex flex-col gap-8 w-full'>
          <div className=" title flex flex-col gap-7  ">
            <div className=" pt-10 flex justify-center items-center">
              <img src={logo} className='w-[60%]' alt="" />
            </div>
            <div className='font-extrabold text-2xl text-darkGrey text-center'>Welcome back!</div>
          </div>
          <div className='flex flex-col items-center gap-4 '>
            <div className="avtaar flex flex-col  w-full  items-center  ">
              <img className='rounded-full w-[40%] border-[3px] border-lightGrey border-solid' src={jiya} alt="" />
            </div>
            <div className='font-bold text-[22px]  text-darkGrey text-center uppercase'>{userData.name}</div>
          </div>
          <div className='flex flex-col justify-center items-center gap-4'>
            <div className="flex text-base font-bold text-black justify-center items-center">Enter you Pin</div>
            <div className="flex flex-col justify-center items-center gap-[5rem] w-full">
              <PinInput
                ref={pinInputRef}
                inputStyle={{
                  border: "0.1px ",
                  borderRadius: "12px",
                  boxShadow: isValid
                    ? "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)"
                    : "0 8px 16px 0 rgba(255,0,0,0.2), 0 6px 20px 0 rgba(255,0,0,0.19)",
                  margin: "5px",
                  margin: "5px"
                }}
                inputFocusStyle={{
                  borderRadius: "12px",
                  boxShadow: isValid
                    ? "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)"
                    : "0 8px 16px 0 rgba(255,0,0,0.2), 0 6px 20px 0 rgba(255,0,0,0.19)",
                  margin: "5px"

                }}
                length={4}
                focus
                secret
                type="text"
                inputMode="text"
                value={pin}
                onChange={handlePinChange}
                style={isValid ? null : { animation: 'shake 0.2s ease-in-out 0s 2', borderColor: "red" }}
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