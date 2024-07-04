import React, { useState } from 'react';
import StockTwo from './StockTwo';

const History = () => {
  const [selectedOption, setSelectedOption] = useState('Bought');
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const stocks = [
    { stockName: 'State Bank Of India', type: 'Buy', quantity: '10', ltp: '1089', amountUsed: '10890' },
    { stockName: 'State Bank Of India', type: 'Sell', quantity: '10', ltp: '1089', amountUsed: '10890' },
    { stockName: 'State Bank Of India', type: 'Sell', quantity: '10', ltp: '1089', amountUsed: '10890' },
    
  ];

  const filteredStocks = stocks.filter(stock => 
    (selectedOption === 'Bought' && stock.type === 'Buy') || 
    (selectedOption === 'Sold' && stock.type === 'Sell')
  );

  return (
    <div className='w-full flex flex-col gap-8'>
      <div className="w-full flex justify-end z-50">
        <div className="relative">
          <div onClick={toggleDropdown} className='flex items-center justify-between gap-2 border border-lightGrey border-solid rounded-lg bg-white p-2 leading-tight focus:outline-none focus:border-lightGrey'>
            <div className="appearance-none border w-11 text-center text-xs font-semibold">
              {selectedOption}
            </div>
            <svg className="fill-current h-4 w-4 inline-block ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M5.5 7L10 11.5 14.5 7z" />
            </svg>
          </div>
          {isOpen && (
            <div className="absolute right-0 mt-1 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <button
                  onClick={() => handleOptionClick('Bought')}
                  className="text-left px-4 py-2 text-sm text-gray-700 hover:bg-darkBlue hover:text-white w-24"
                  role="menuitem"
                >
                  Bought
                </button>
                <button
                  onClick={() => handleOptionClick('Sold')}
                  className="text-left w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  Sold
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {filteredStocks.map((stock, index) => (
        <StockTwo
         
          key={index}
          stockName={stock.stockName}
          type={stock.type}
          quantity={stock.quantity}
          ltp={stock.ltp}
          amountUsed={stock.amountUsed}
        />
      ))}
    </div>
  );
};

export default History;