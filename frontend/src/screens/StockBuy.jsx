import React from 'react'
import { useNavigate } from 'react-router'

import arrow from '../assets/Arrow.svg'
const StockBuy = () => {
    const navigate=useNavigate();

    const handleback=()=>{
        navigate(-1);
    }

  return (
    <div className='w-full flex flex-col gap-8 h-[100vh]'>
      <div className='header bg-darkBlue p-5 flex items-center gap-6 w-full'>
        <img src={arrow} alt="" className='h-11 ' onClick={handleback}/>
        <p className='font-extrabold text-xl flex justify-center items-center text-white'>Buy Stock</p>
      </div>

      <div className='flex flex-col p-5 gap-8'>
        
      </div>

    </div>
  )
}

export default StockBuy