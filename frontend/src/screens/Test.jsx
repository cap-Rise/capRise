import React from 'react'
import mastercard from "../assets/mastercard.svg"

import CreditCard from '../components/CreditCard'
import BuySellTag from '../components/BuySellTag'
import sbi from "../assets/SbiSvg.svg"
import StockOne from '../components/StockOne'

const Test = () => {
    return (
        <div className='h-[100vh] w-[100vw] bg-blue-gray-500 overflow-hidden flex items-center justify-center '>
            {/* <CreditCard pnlBalance="50,000" name="Toyash Patil" /> */}
            {/* <BuySellTag type="BUY"/> */}
            <StockOne stockName="State Bank Of India" type="Buy" quantity="10" ltp="1089" amountUsed="10890"  />
        </div>
    )
}

export default Test