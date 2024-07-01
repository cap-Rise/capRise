import React from 'react';

const Returns = ({ day, week, month, year }) => {
  const formatReturn = (value) => {
    const isPositive = value >= 0;
    return (
      <p className={`text-xs font-medium ${isPositive ? 'text-seaGreen' : 'text-red'}`}>
        {isPositive ? '▲' : '▼'}{Math.abs(value)}%
      </p>
    );
  };

  return (
    <div>
      <div className='bg-white p-3 rounded-lg shadow-md'>
        <div className='border-[0.5px] p-2 border-darkGrey border-solid rounded-lg'>
          <div className='flex justify-around'>
            <div className='text-center text-[10px] font-bold p-1 w-[-webkit-fill-available] border-r-[0.5px] border-darkGrey border-solid'>
              <p>1 Day</p>
              {formatReturn(day)}
            </div>
            <div className='text-center text-[10px] font-bold p-1 w-[-webkit-fill-available] border-r-[0.5px] border-darkGrey border-solid'>
              <p>1 Week</p>
              {formatReturn(week)}
            </div>
            <div className='text-center text-[10px] font-bold p-1 w-[-webkit-fill-available] border-r-[0.5px] border-darkGrey border-solid'>
              <p>1 Month</p>
              {formatReturn(month)}
            </div>
            <div className='text-center text-[10px] font-bold p-1 w-[-webkit-fill-available]'>
              <p>1 Year</p>
              {formatReturn(year)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Returns;
