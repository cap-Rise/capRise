import React from 'react'
import Navbar from '../components/Navbar'
import whiteLogo from '../assets/logo_white.png';
import jiya from '../assets/jiya.png';

const Portfolio = () => {
  return (
    <div className='h-[100vh] w-[100vw]'>
      <div>
        <Navbar />
      </div>
      <div className='flex items-start space-y-4 justify-center h-[100vh] w-[100vw] '>
        <div className='w-[100%] space-y-4'>
          <div className="header bg-darkBlue h-[10%] drop-shadow-lg shadow-lg flex h- justify-between w-full">
            <h1>Hello</h1>
          </div>

          <div className=' flex items-center justify-center '>
            <div className='bg-yellow-500'>
              <h1>Hello</h1>
            </div>

          </div>
        </div>


      </div>
    </div>
  )
}

export default Portfolio