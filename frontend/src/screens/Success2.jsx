import React, { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import tick from '../assets/tick.png';
import BalanceCard from '../components/BalanceCard';
import bag from '../assets/bag.svg';
import confetti from 'canvas-confetti';
import { Button } from '../components/Button';
import authContext from '../context/authContext';

const Success2 = () => {
  const { totalPoints } = useContext(authContext); // Use totalPoints from context
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const trancid = queryParams.get('trancid');

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
    <div className='w-full h-fit p-5'>
      <div className='w-full h-[85vh] flex justify-center items-center '>
        <div className='p-4 w-full'>
          <div className='w-full h-[31rem] bg-lightGrey rounded-3xl flex  justify-center  relative'>
            <div className='h-44 absolute -top-24 flex justify-center items-center w-44 bg-darkBlue rounded-full bg-opacity-30'>
              <div className='h-32 w-32 rounded-full bg-darkBlue flex justify-center items-center'>
                <img src={tick} width='55' alt="" />
              </div>
            </div>
            <div className='w-8 h-8 bg-white rounded-full absolute -left-4  top-[35%]'></div>
            <div className='w-8 h-8 bg-white rounded-full absolute -right-4 top-[35%]'></div>

            <div className=' w-full  flex flex-col justify-end p-5 items-center'>
              <div className='w-full pr-5 pl-5 flex flex-col items-center gap-6'>
                <div className='w-full text-black text-xl flex justify-center items-center font-bold pt-13  pb-11 border-b-2 border-black border-dashed'>
                  Payment Success
                </div>
                <div className='flex flex-col w-full items-start pt-10 gap-4'>
                  <div className='text-xs font-bold'>Transaction details:</div>
                  <div className='text-xs font-bold'>Order ID - order_pay442315</div>
                  <div className='text-xs font-bold'>Transaction ID - {trancid}</div>
                </div>
                <div className='h-20 p-4 rounded-2xl bg-white w-full'>
                  <div className='flex justify-between items-center'>
                    <div className='flex flex-col justify-center gap-2 items-center'>
                      <div className='text-xs font-semibold'>CapRise balance</div>
                      <div className='text-[20px] font-bold'>{totalPoints} pts</div> {/* Display totalPoints */}
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
      <Link to='/addfunds'>
        <Button className='w-full h-[3.5rem] text-white'>Done</Button>
      </Link>
    </div>
  );
};

export default Success2;
