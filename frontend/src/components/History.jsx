import React, { useState } from 'react';

const History = () => {
  const [selectedOption, setSelectedOption] = useState('Bought');
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className=" w-full flex justify-end">
      <div className="relative">
        <div  onClick={toggleDropdown} className='flex items-center justify-between gap-2 border  border-lightGrey border-solid rounded-lg bg-white p-2 leading-tight focus:outline-none focus:border-lightGrey'>
            <div
            
            className="appearance-none border w-11 text-center text-xs font-semibold"
        >{selectedOption}</div>
            
            <svg className="fill-current h-4 w-4 inline-block ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M5.5 7L10 11.5 14.5 7z" />
            </svg>
        </div>
        
        {isOpen && (
          <div className="absolute right-0 mt-1s w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              <button
                onClick={() => handleOptionClick('Bought')}
                className="text-left  px-4 py-2 text-sm text-gray-700 hover:bg-darkBlue hover:text-white w-24"
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
  );
};

export default History;
