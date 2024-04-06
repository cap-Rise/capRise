import React from 'react';
import jiya from '../assets/jiya.png';
import { Button } from './Button';

const TopPortfolioCard = () => {
  return (
    <div className="flex gap-3">
      <div className="bg-lightGrey flex flex-col justify-center items-center pt-3 pb-3 pl-4 pr-4 gap-2 w-[5.75rem] rounded-lg">
        <div className="avtaar">
          <img className='rounded-full w-[38px] h-[38px] border border-black' src={jiya} alt="" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className='name text-sm font-semibold text-center overflow-hidden whitespace-nowrap'>{truncateName('Jiya Trivedi')}</p>
          <p className='text-sm font-semibold text-seaGreen '>▲ 1.1%</p>
          <p className='text-sm font-semibold'>₹10,00,000</p>
        </div>
        <Button className="w-full">View</Button>
      </div>
    </div>
  );
}


const truncateName = (name) => {
  if (name.length > 8) {
    return name.substring(0, 8) + '...';
  }
  return name;
}

export default TopPortfolioCard;
