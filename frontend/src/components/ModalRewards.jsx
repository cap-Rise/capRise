import React from 'react';
import { Button } from './Button';

const Modal = ({ isOpen, closeModal }) => {
  if (!isOpen) return null;

  return (
    <div className="w-full h-full flex justify-center pb-6 items-end fixed top-0 left-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm z-50">
      <div className="modal-overlay rounded-2xl border-[3px] border-solid border-lightGrey bg-white flex justify-center h-[21rem] z-1000 w-[22rem] relative">
        <div className="modal-content w-full  p-4 pr-6 pl-6 flex flex-col gap-6">
          <h2 className='text-lg font-bold flex items-center justify-center'>Summary</h2>
          
          <div className="main flex flex-col gap-5">
            <div className='flex justify-between items-center'>
              <p className=' text-darkGrey text-[0.88rem] font-bold'>Current PnL</p>
              <p className=' font-bold text-black text-[0.88rem] '>₹50,200</p>
            </div>
            <div className='flex justify-between items-center'>
              <p className=' text-darkGrey font-bold text-[0.88rem]'>Reward deduction</p>
              <p className=' font-bold text-black text-[0.88rem] '>₹50,000</p>
            </div>

            <div className='flex justify-between items-center border-t-black border-t border-b-black border-b border-solid   pt-4 pb-4'>
              <p className=' text-darkGrey font-bold text-[0.88rem]'>PnL Balance Left</p>
              <p className=' font-bold text-black text-[0.88rem] '>₹200</p>
            </div>

            <div className='flex justify-between items-center'>
              <p className=' text-black font-bold text-[0.88rem]'>Cash Rewarded</p>
              <p className=' font-bold text-black  text-[0.88rem]'>Rs 20/-</p>
            </div>

            

          </div>
          <div className='flex justify-center gap-4 items-center  w-full'>
            <Button onClick={closeModal} className='bg-white text-darkBlue  w-full p-1 border-[3px] border-solid border-darkBlue'>Back</Button>
            <Button className='w-full text-white p-1 border-[3px] border-solid  border-darkBlue'>Reedem</Button>
          </div>
          
          
        </div>
      </div>
    </div>
  );
};

export default Modal;
