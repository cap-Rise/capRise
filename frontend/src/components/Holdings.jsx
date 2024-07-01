import React from 'react';
import PortfolioValueCard from './PortfolioValueCard';
import PnlStats from './PnlStats';
import Returns from './Returns';
import StockOne from './StockOne'
const Holdings = () => {
  return (
    <div className='flex flex-col gap-8 pb-32 '>
      <PortfolioValueCard/>

     <PnlStats/>
      <div className='bg-white p-5 border-[0.5px] border-darkGrey border-solid shadow-md flex flex-col gap-2'>
        <div className='flex justify-between'>
          <p className='text-[12px] text-darkGrey font-bold'>Realised PnL</p>
          <p className='text-[12px] text-black font-bold'>₹0.00</p>
        </div>
        <div className='flex justify-between'>
          <p className='text-[12px] text-darkGrey font-bold'>Unrealised PnL</p>
          <p className='text-[12px] text-black font-bold'>₹150.00</p>
        </div>
        <div className='flex justify-between'>
          <p className='text-[12px] text-darkGrey font-bold'>Transaction Charges (0.04%)</p>
          <p className='text-[12px] text-black font-bold'>-₹1.40</p>
        </div>
        <div className='flex justify-between'>
          <p className='text-[12px] text-darkGrey font-bold'>Pending Order Amount</p>
          <p className='text-[12px] text-black font-bold'>₹0.00</p>
        </div>
      </div>

      <div className="flex flex-col gap-2">
      <p className='text-base font-bold'>Returns</p>
      <Returns day="3.77" week="-1.54"  month="2.77" year="4.22" />
      </div>

      <div className="flex flex-col gap-2">
      <p className='text-base font-bold'>Stocks</p>
      <StockOne stockName="State Bank Of India" type="Buy" quantity="10" ltp="1089" amountUsed="10890"  />
      </div>
      
    </div>
  );
};

export default Holdings;
