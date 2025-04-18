import React from 'react'
import { Link } from 'react-router-dom'
import {Button} from '../components/Button'
import mastercard from "../assets/mastercard_logo.png"

import CreditCard from '../components/CreditCard'
import BuySellTag from '../components/BuySellTag'
import sbi from "../assets/SbiSvg.svg"
import StockOne from '../components/StockOne'


const Test = () => {
    return (
        <div className='h-[100vh] w-[100vw] p-5 flex justify-center items-center '>
            {/* <CreditCard pnlBalance="50,000" name="Toyash Patil" /> */}
            {/* <BuySellTag type="BUY"/> */}
            {/* <StockOne stockName="State Bank Of India" type="Buy" quantity="10" ltp="1089" amountUsed="10890"  /> */}
            {/* <Ticket/> */}
            <Link to='/buystock'><Button className='w-full text-white p-5'>Buy Stock</Button></Link>
        </div>
    )
}

export default Test