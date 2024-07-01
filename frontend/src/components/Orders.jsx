import React from 'react'
import StockOne from './StockOne'

const Orders = () => {
  return (
    <div className='pt-2 flex flex-col justify-center gap-8'>
        <StockOne stockName="State Bank Of India" type="Buy" quantity="10" ltp="1089" amountUsed="10890"  />
        <StockOne stockName="State Bank Of India" type="Sell" quantity="10" ltp="1089" amountUsed="10890"  />
    </div>
  )
}

export default Orders