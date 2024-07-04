import React from 'react'
import sample2 from '../assets/pnb.png'
import plus from "../assets/plus.svg"

const Caprise = () => {
    return (
        <div>
            <div className="item flex justify-between items-center ">
                <div className='flex justify-center items-center gap-2'>
                    <div className="logo h-[48px] w-[48px] rounded-full  border-solid border-2 border-lightGrey flex justify-center items-center"><img className='h-[35px] rounded-full' src={sample2} alt="" /></div>

                    <div>
                        <div className='font-semibold text-black'>Punjab National Bank</div>
                        <div className='text-sm font-medium text-darkGrey'>PnB</div>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-end'>
                    <div className='text-black font-semibold'>₹300.75</div>
                    <div className='text-sm text-red font-semibold'>▼ 0.77%</div>
                </div>
            </div>
        </div>
    )
}

export default Caprise