import React from 'react'
import mastercard from "../assets/mastercard_logo.png"
import logo from '../assets/logo_white.png'
import card from '../assets/card.png'
const CreditCard = ({pnlBalance , name}) => {
    return (
        <div className='  w-full rounded-[2rem] creditBackground '>
            <div className=' flex items-center justify-between w-[100%] h-[60%] p-6  pb-5 '>
                <div className='flex flex-col justify-center items-start gap-2'>
                    <div>
                        <h1 className='text-sm text-lightGrey '>Current Balance</h1>
                    </div>
                    <div>
                        <h1 className=' text-white font-semibold text-3xl'>₹{pnlBalance}</h1>
                    </div>
                </div>
                <div className=''>
                    <img src={mastercard} width="53"/>
                </div>
            </div>
            <div className=' flex items-center p-6 pt-5 justify-between w-[100%] h-[40%]   '>
                <div className=''>
                    <div>
                        <h1 className=' font-bold text-white text-base uppercase'>{name}</h1>
                    </div>
                </div>
                <div className=''>
                    <img  width='74' src={logo} />
                </div>
            </div>
        </div>
    )
}

export default CreditCard