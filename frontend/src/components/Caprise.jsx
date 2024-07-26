import React, { useState } from 'react';
import BalanceCard from './BalanceCard';
import { Button } from './Button';

const Caprise = ({ openModal, setAmount }) => {
  const [amount, setLocalAmount] = useState('');
  const [amountError, setAmountError] = useState('');

  const handleProceed = () => {
    const amountNumber = Number(amount);
    if (amount.trim() === '') {
      setAmountError('Please enter the amount.');
    } else if (amountNumber < 100) {
      setAmountError('Amount must be at least Rs100.');
    } else {
      setAmount(amount);
      openModal();
      setAmountError('');
    }
  };
  

  const handleAmountChange = (event) => {
    setLocalAmount(event.target.value);
    if (event.target.value.trim() !== '') {
      setAmountError('');
    }
  };

  return (
    <div className='flex items-center justify-center'>
      <div className='w-full mt-[28px] flex items-center justify-center flex-col gap-8'>
        <div className='flex items-center justify-center w-full'>
          <BalanceCard balanceType='CapRise Balance' pnlBalance='20000' />
        </div>
        <div className='flex flex-col items-center justify-center w-full gap-4'>
          <div className='text-base font-bold text-darkBlue'>Buy CapRise Points</div>
          <div className='border-solid border-t border-b p-2 w-[14rem]'>
            <input
              type='number'
              min='100'
              className='text-center text-black font-semibold w-full'
              placeholder='Enter Amount'
              value={amount}
              onChange={handleAmountChange}
              required
            />
          </div>
          {amountError && <p className='text-red text-[10px] font-bold'>{amountError}</p>}
        </div>
        <div className='flex w-full flex-col p-4 border-t border-b border-lightGrey border-solid'>
          <div className='text-[10px] text-darkGrey font-bold uppercase'>
            *<span className='underline'>Note</span>
          </div>
          <div className='text-[10px] font-semibold text-darkGrey'>
            To buy capRise points the minimum amount is Rs 100/-. capRise points will be credited x 1000 times the wallet balance used.
          </div>
        </div>
        <div>
          <Button onClick={handleProceed} className='text-white h-12 w-56'>
            Proceed
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Caprise;
