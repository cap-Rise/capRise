import React, { useContext } from 'react'
import { useNavigate } from 'react-router'
import authContext from '../context/authContext';
import Navbar from '../components/Navbar';
import rupee from '../assets/Rupee.png'
import jiya from '../assets/jiya.png'

import whiteLogo from '../assets/logo_white.png'
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className='h-[100vh] w-[100vw]'>
      {/* NAVBAR */}
      <div className=' absolute bottom-0 w-full'><Navbar /></div>

      {/*HOME*/}
      <div>
        <div className="head bg-darkBlue p-5 flex justify-between w-full">
          <div className="logo">
            <img src={whiteLogo} alt="" />
          </div>
          <div className="icons flex gap-4">
            <div className="addFunds">
              <img src={rupee} alt="" />
            </div>
            
              <img className='rounded-full w-[38px] h-[38px] border border-black' src={jiya} alt="" />
            
          </div>
        </div>
      </div>
     
    </div>
  )
}

export default Home