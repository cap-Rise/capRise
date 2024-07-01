import React from 'react'

const PnlStats = () => {
  return (
    <div className='flex flex-col gap-3'>
         <div className='bg-lightGrey bg-opacity-40 p-[0.35rem]  shadow-md  border-[0.5px] border-darkGrey border-solid '>
        <div className='border-[0.5px] p-3 bg-white border-darkGrey border-solid'>
        <p className='text-center text-sm font-bold  text-darkGrey'>Profit/Loss</p>
        <p className='text-center text-[1.5rem] text-seaGreen font-bold'>150</p>
        </div>
      </div>

      <div className='flex justify-between gap-3'>
        <div className='bg-lightGrey bg-opacity-40 p-[0.35rem]  flex-1 shadow-md  border-[0.5px] border-darkGrey border-solid '>
        <div className='border-[0.5px] p-3 bg-white border-darkGrey border-solid flex justify-center items-center flex-col gap-1'>
        <p className='text-center text-xs font-bold  text-darkGrey'>Invested Amount</p>
        <p className='text-center text-base text-darkBlue font-bold'>₹2000</p>
        </div>
      </div>
      <div className='bg-lightGrey bg-opacity-40 p-[0.35rem]  flex-1 shadow-md  border-[0.5px] border-darkGrey border-solid '>
        <div className='border-[0.5px] p-3 bg-white border-darkGrey border-solid flex justify-center items-center flex-col gap-1'>
        <p className='text-center text-xs font-bold  text-darkGrey'>Cash Balance</p>
        <p className='text-center text-base text-darkBlue font-bold'>₹140</p>
        </div>
      </div>
      </div>

    </div>
  )
}

export default PnlStats