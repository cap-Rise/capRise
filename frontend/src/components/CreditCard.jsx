import React from 'react'
import mastercard from "../assets/mastercard.svg"
import logoCredit from "../assets/logoCredit.svg"
const CreditCard = ({pnlBalance , name}) => {
    return (
        <div className=' h-fit w-[90%] rounded-[30px] overflow-hidden creditBackground '>
            <div className=' flex items-center justify-between w-[100%] h-[60%] p-6  '>
                <div className=''>
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
                    <img src={logoCredit} />
                </div>
            </div>
        </div>
    )
}

export default CreditCard