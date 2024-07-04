import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import CreditCard from '../components/CreditCard';
import jiya from '../assets/jiya.png';
import RewardCard from '../components/RewardCard';

const Rewards = () => {
  const reward = [
    { cash: '100', pts: '10000' },
    { cash: '200', pts: '20000' },
    { cash: '300', pts: '30000' },
    { cash: '400', pts: '40000' },
    { cash: '500', pts: '50000' },
  ];

  return (
    <div id="rewards-container" className="h-fit w-[100vw]">
      <Navbar />
      <div className="flex flex-col gap-8 pb-32">
        <div className="header bg-darkBlue p-5 flex justify-between w-full">
          <p className="font-extrabold text-xl flex justify-center items-center text-white">Rewards</p>
          <div className="profile">
            <img className="rounded-full w-8 h-8 border border-black" src={jiya} alt="" />
          </div>
        </div>
        <div className="cc flex justify-center items-center">
          <CreditCard pnlBalance="50,000" name="Jiya Trivedi" />
        </div>
        <div className="coupons pl-5 pr-5">
          <div className="grid grid-cols-2 place-items-center place-content-center gap-y-7 gap-x-4">
            {reward.map((rewards, index) => (
              <RewardCard
                key={index}
                cash={rewards.cash}
                pts={rewards.pts}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rewards;
