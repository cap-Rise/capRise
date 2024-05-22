import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import CreditCard from '../components/CreditCard';
import jiya from '../assets/jiya.png';
import ModalRewards from '../components/ModalRewards';

const Rewards = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='h-[100vh] w-[100vw]'>
      <Navbar />
      <div className='flex flex-col gap-8'>
        <div className="header bg-darkBlue p-5 flex justify-between w-full">
          <p className=' font-extrabold text-2xl flex justify-center items-center text-white '>Rewards</p>
          <div className="profile">
            <img className='rounded-full w-[38px] h-[38px] border border-black' src={jiya} alt="" />
          </div>
        </div>
        <div className="cc flex justify-center items-center">
          <CreditCard pnlBalance="50,000" name="Jiya Trivedi" />
        </div>

        <div className="coupons pl-5 pr-5">
          <div className="grid grid-cols-2 place-items-center place-content-center gap-y-7 gap-x-4">
            <div className="h-[9rem] w-[10rem] bg-lightGrey" onClick={openModal}></div>
            <div className="h-[9rem] w-[10rem] bg-lightGrey" onClick={openModal}></div>
            <div className="h-[9rem] w-[10rem] bg-lightGrey" onClick={openModal}></div>
            <div className="h-[9rem] w-[10rem] bg-lightGrey" onClick={openModal}></div>
          </div>
        </div>
      </div>
      <ModalRewards isOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
};

export default Rewards;
