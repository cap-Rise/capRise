import React from 'react'
import char from '../assets/portBear.svg';
const PortfolioValueCard = () => {
  return (
    <div>
        <div className='bg-lightGrey p-3 rounded-2xl shadow-lg  '>
        <div className=' w-full h-[6.5rem] pr-2 pl-2 rounded-2xl flex items-center justify-center border-[0.5px] border-black border-solid  '>
        <div className='flex w-full items-center justify-between gap-5'>
            <img src={char} alt="character" className='w-30 h-30'/>
            <div>
            <p className='text-darkGrey text-base font-bold flex justify-end items-end'>Portfolio Value</p>
            <p className='text-4xl text-darkBlue font-extrabold flex justify-end items-end'>₹1,00,150</p>
            </div>
            
            </div>
        </div>
        </div>
    </div>
  )
}

export default PortfolioValueCard