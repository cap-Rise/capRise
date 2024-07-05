import React, { useEffect } from 'react';
import { useState } from 'react';
import { Button } from './Button';


const ModalRewards = ({ isOpen, closeModal, cash, pts }) => {
  const [pnlBalance, setPnlBalance] = useState(50000);
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const rewardDeduction = pts; 
  const pnlBalanceLeft = pnlBalance - rewardDeduction;

  return (
    <div className={`modal-overlay fixed top-0 left-0 w-full h-full flex justify-center items-end z-50 bg-black bg-opacity-50 ${isOpen ? 'open' : ''}`}>
      <div className="modal-content rounded-t-[2.3rem] bg-white flex justify-center h-[23rem] w-full relative slide-in-bottom">
        <div className="w-full p-8 pr-8 pl-8 flex flex-col gap-8">
          <h2 className="text-base font-bold flex items-center justify-center">Summary</h2>
          <div className="main flex flex-col gap-[1.2rem]">
            <div className="flex justify-between items-center">
              <p className="text-darkGrey text-xs font-bold">Current PnL</p>
              <p className="font-bold text-black text-xs">₹{pnlBalance}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-darkGrey font-bold text-xs">Reward deduction</p>
              <p className="font-bold text-black text-xs">₹{rewardDeduction}</p>
            </div>
            <div className="flex justify-between items-center border-t-lightGrey border-t border-b-lightGrey border-b border-solid pt-4 pb-4">
              <p className="text-darkGrey font-bold text-xs">PnL Balance Left</p>
              <p className="font-bold text-black text-xs">₹{pnlBalanceLeft}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-black font-bold text-xs">Cash Rewarded</p>
              <p className="font-bold text-black text-xs">Rs {cash}/-</p>
            </div>
          </div>
          <div className="flex justify-center gap-5 items-center w-full">
            <Button onClick={closeModal} className="bg-white text-darkBlue h-10 w-full p-1 shadow-md drop-shadow-lg text-base border-[3px] border-solid border-darkBlue">Back</Button>
            <Button className="w-full text-white p-1 border-[3px] border-solid h-10 text-base shadow-md drop-shadow-lg border-darkBlue">Redeem</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalRewards;
