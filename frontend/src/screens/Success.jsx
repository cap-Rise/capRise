import React, { useEffect } from 'react';
import ticket from '../assets/ticket.png';
import tick from '../assets/tick.png';
import BalanceCard from '../components/BalanceCard';
import bag from '../assets/bag.svg';
import confetti from 'canvas-confetti';

const Success = () => {

  useEffect(() => {
   
    const triggerConfetti = () => {
      const duration = 0.2 * 1000; 
      const end = Date.now() + duration;

      const frame = () => {
        confetti({
          particleCount: 3,
          angle: 60,
          spread: 55,
          startVelocity: 60,
          origin: { x: 0 },
        });
        confetti({
          particleCount: 3,
          angle: 120,
          spread: 55,
          startVelocity: 60,
          origin: { x: 1 },
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      };

      frame();
    };

    
    triggerConfetti();
  }, []);

  return (
    <div className='w-full h-[100vh]'>
      <div className=" w-full h-full flex items-center justify-center p-5 ">
        <div className='relative w-full flex justify-center'>
          <div className='h-48 absolute -top-24 flex justify-center items-center w-48 bg-darkBlue rounded-full bg-opacity-30'>
            <div className='h-36 w-36 rounded-full bg-darkBlue flex justify-center items-center'>
              <img src={tick} width='60' alt="" />
            </div>
          </div>
          <div className='h-[34rem] w-full ticket flex flex-col justify-center items-center'>
            <div className='w-[70%] flex flex-col items-center gap-6'>
              <div className='text-black text-xl flex justify-center items-center font-bold p-11 border-b-2 border-black border-dashed'>
                Payment Success
              </div>
              <div className='flex flex-col items-start pt-10 gap-4'>
                <div className='text-xs font-bold'>Transaction details:</div>
                <div className='text-xs font-bold'>Order ID - order_pay442315</div>
                <div className='text-xs font-bold'>Transaction Details - order_pay442315</div>
              </div>
              <div className='h-20 p-4 rounded-2xl bg-white w-full'>
                <div className='flex justify-between items-center'>
                  <div className='flex flex-col justify-center gap-2 items-center'>
                    <div className='text-xs font-semibold'>Your Wallet Balance</div>
                    <div className='text-[20px] font-bold'>₹100</div>
                  </div>
                  <img src={bag} width='44' alt="" />
                </div>
              </div>
              <div className='text-xs font-medium text-center'>Enjoy Trading!</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
