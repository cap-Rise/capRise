import React from 'react'

import logoBlue from "../assets/logoBlue.png"
import safe from '../assets/safe.png'
import makeInIndia from '../assets/lionIndia.png'
import ssl from '../assets/ssLSec.png'



const PreLoader = () => {
  return (
    <div>
        <div className=" background w-[100vw] h-[100vh] flex justify-center items-end ">
          <div className="assets flex h-[80%] flex-col justify-center items-center gap-[30%]">
            <div className="logo flex justify-center items-center  ">
              <img src={logoBlue} alt="logo" />
            </div>
            <div className='flex flex-col justify-center items-center gap-5 '>
            <div className="other flex gap-[10px]">
              <div>
                <img src={safe} alt="" />
              </div>
              <div>
                <img src={makeInIndia} className='w-[5rem]' alt="" />
              </div>
              <div>
                <img src={ssl} className='w-[5rem]' alt="" />
              </div>

            </div>
            <div>
              <p className=' font-bold text-xs text-darkGrey '>*<u>Investments are subjected to market risks.</u></p>
            </div>

            </div>
            
          </div>
          

        </div>
        
    </div>
  )
}

export default PreLoader