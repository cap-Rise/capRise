import React from 'react'
import mastercard from "../assets/mastercard.svg"
import logo from '../assets/logo_white.png'
const CreditCard = ({pnlBalance , name}) => {
    return (
        <div className=' h-fit w-[90%] rounded-[30px] overflow-hidden creditBackground '>
            <div className=' flex items-center justify-between w-[100%] h-[60%] p-6  '>
                <div className='flex flex-col justify-center items-start gap-1'>
                    <div>
                        <h1 className='text-white'>Current Balance</h1>
                    </div>
                    <div>
                        <h1 className=' text-white font-semibold text-3xl'>₹{pnlBalance}</h1>
                    </div>
                </div>
                <div className=''>
                    <img src={mastercard} />
                </div>
            </div>
            <div className=' flex items-center p-6 justify-between w-[100%] h-[40%]   '>
                <div className=''>
                    <div>
                        <h1 className=' font-medium text-white text-xl'>{name}</h1>
                    </div>
                </div>
                <div className=''>
                    <img height='23' width='76' src={logo} />
                </div>
            </div>
        </div>
    )
}

export default CreditCard