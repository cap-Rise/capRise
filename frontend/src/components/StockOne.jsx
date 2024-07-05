import React from 'react'
import BuySellTag from './BuySellTag'
import sbi from "../assets/SbiSvg.svg"

const StockOne = ({stockName,quantity,ltp,amountUsed,type,imgSrc}) => {
    return (
        <div className=' shadow-lg drop-shadow-lg  flex p-4 items-center justify-center  rounded-[16px] bg-lightGrey bg-opacity-45 '>
            <div className='absolute top-0 right-8 '>
                <BuySellTag  type={type} />
            </div>
            <div className='h-full space-y-6 w-full'>
                <div className=' flex items-center justify-start '>
                    <div className=' gap-3 flex items-center justify-center'>
                        <div className='flex items-center justify-center'>
                            <img src={sbi} width="30"></img>
                        </div>
                        <div className='flex items-center justify-center'>
                            <h1 className='font-bold text-[14px]' >{stockName}</h1>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-around'>
                    <div>
                        <div className=' text-[#747474] text-[10px] font-bold flex items-center justify-center'>
                            Quantity
                        </div>
                        <div className='flex items-center justify-center '>
                            <h1 className='font-semibold text-xs '>{quantity}</h1>
                        </div>
                    </div>
                    <div>
                        <div className='h-[50px] w-[0.5px] bg-black'>

                        </div>
                    </div>
                    <div>
                        <div className=' text-[#747474] text-[10px] font-bold flex items-center justify-center'>
                            Order Price
                        </div>
                        <div className='flex items-center justify-center '>
                            <h1 className='font-semibold text-xs'>{ltp}</h1>
                        </div>
                    </div>
                    <div>
                        <div className='h-[50px] w-[0.5px] bg-black'>

                        </div>
                    </div>
                    <div>
                        <div className=' text-[#747474] font-bold text-[10px] flex items-center justify-center'>
                            Total Amt.
                        </div>
                        <div className='flex items-center justify-center '>
                            <h1 className='font-semibold text-xs'>{amountUsed}</h1>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center gap-4'>
                    <div className='flex w-[50%] items-center justify-center'>
                        <button className='bg-white border-solid border rounded-lg text-base border-[#747474] text-[#060F66] w-[100%] p-2 ' onClick={() => { alert("Hello") }}>Cancel</button>
                    </div>
                    <div className='flex w-[50%] items-center justify-center'>
                        <button className='bg-[#060F66] rounded-lg text-base text-white w-[100%] p-2 ' onClick={() => { alert("Hello") }}>Modify</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StockOne