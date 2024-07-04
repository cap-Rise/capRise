import React from 'react'
import CreditCard from '../components/CreditCard';
import BalanceCard from '../components/BalanceCard';
import plus from "../assets/plus.svg"

const Money = () => {
    return (
        <div className='flex items-center justify-center'>
            <div className='w-full mt-[28px]  space-y-10'>
                <div className='flex items-center justify-center'>
                    <BalanceCard balanceType="Wallet Balance" pnlBalance="20000" />
                </div>
                <div className='flex items-center justify-center'>
                    <div className='border-solid border-t border-b p-2 '>
                        <input className='text-center' placeholder='Amount'></input>
                    </div>

                </div>
                <div className='flex items-center justify-center'>
                    <div className='flex w-[90%] gap-12 items-center justify-center '>
                        <div className=' gap-2 flex items-center justify-center  '>
                            <button className=' rounded-md shadow-md drop-shadow-md  gap-2 p-2 w-[6.25rem] bg-[#1424B2] text-white flex items-center justify-center'>
                                <div className='flex items-center justify-center'>
                                    <img src={plus} ></img>
                                </div>
                                <div className='flex items-center justify-center'>
                                    <h1 className=''>Add</h1>
                                </div>
                            </button>


                        </div>
                        <div className='  '>
                            <button className=' shadow-md drop-shadow-md text-[#1424B2] border-solid rounded-md border border-[#1424B2] p-2 w-[6.25rem]'>Withdraw</button>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Money