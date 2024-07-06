import React, { useEffect, useState } from 'react';
import { Button } from './Button';

const ModalCP = ({ isOpen, closeModal, amount }) => {
  const [balance, setBalance] = useState(200);
  const [shouldRender, setShouldRender] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
      setTimeout(() => setShouldRender(false), 300); 
    }
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);

  const pointsCredited = amount * 1000;
  const totalPoints = pointsCredited + balance;

  if (!shouldRender) return null;

  return (
    <div
      className={`modal-overlay fixed top-0 left-0 w-full h-full flex justify-center items-end z-[10000] ${isOpen ? 'open' : 'closed'}`}
    >
      <div className='modal-content rounded-t-[2.3rem] bg-white flex justify-center h-[23rem] w-full relative'>
        <div className='w-full p-8 pr-8 pl-8 flex flex-col gap-8'>
          <h2 className='text-base font-bold flex items-center justify-center'>Buy Points</h2>
          <div className='main flex flex-col gap-[1.2rem]'>
            <div className='flex justify-between items-center'>
              <p className='text-darkGrey text-xs font-bold'>Available Points</p>
              <p className='font-bold text-black text-xs'>{balance} caps</p>
            </div>
            <div className='flex justify-between items-center'>
              <p className='text-darkGrey font-bold text-xs'>Points Credited</p>
              <p className='font-bold text-black text-xs'>{pointsCredited} caps</p>
            </div>
            <div className='flex justify-between items-center border-t-lightGrey border-t border-b-lightGrey border-b border-solid pt-4 pb-4'>
              <p className='text-red font-bold text-xs'>Wallet Balance Left</p>
              <p className='font-bold text-red text-xs'>₹0</p>
            </div>
            <div className='flex justify-between items-center'>
              <p className='text-black font-bold text-xs'>Total Points</p>
              <p className='font-bold text-black text-xs'>Rs {totalPoints}/-</p>
            </div>
          </div>
          <div className='flex justify-center gap-5 items-center w-full'>
            <Button
              onClick={closeModal}
              className='bg-white text-darkBlue h-10 w-full p-1 shadow-md drop-shadow-lg text-base border-[3px] border-solid border-darkBlue'
            >
              Back
            </Button>
            <Button className='w-full text-white p-1 border-[3px] border-solid h-10 text-base shadow-md drop-shadow-lg border-darkBlue'>
              Proceed
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCP;
