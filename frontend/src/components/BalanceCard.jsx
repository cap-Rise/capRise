import React from 'react'
import bag from "../assets/bag.svg"


const BalanceCard = ({ balanceType,pnlBalance, name }) => {
    return (
        <div className=' shadow-md drop-shadow-md h-fit w-[100%] rounded-[30px] overflow-hidden creditBackground '>
            <div className=' flex items-center justify-between w-[100%] h-[60%] p-6  '>
                <div className='flex flex-col justify-center items-start gap-1'>
                    <div>
                        <h1 className='text-white'>{balanceType}</h1>
                    </div>
                    <div>
                        <h1 className=' text-white font-semibold text-3xl'>₹{pnlBalance}</h1>
                    </div>
                </div>
                <div className=''>
                    <img src={bag} />
                </div>
            </div>
        </div>
    )
}

export default BalanceCard