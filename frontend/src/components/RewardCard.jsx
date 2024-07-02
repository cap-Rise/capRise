import { useState } from 'react'
import React  from 'react'
import { Button } from './Button'
import ModalRewards from '../components/ModalRewards';

const RewardCard = ({cash,pts}) => {
  
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  return (
    <div>
      <div className='w-[10rem] h-[10.5rem] shadow-[inset_0_4px_8px_rgba(0,0,0,0.2)]  bg-lightGrey p flex flex-col justify-center items-center rounded-2xl'>
        <div className="flex flex-col justify-center items-center gap-4 w-[80%]">
            <div className='w-full h-20 flex flex-col items-center justify-center pt-2  gap-1 rounded-xl bg-white'>
                <p className='text-sm font-bold'>Collect Reward</p>
                <p className=' text-base font-bold'>Rs {cash}/-</p>
                <div className="w-full h-full flex flex-col-reverse ">
                <div className='w-16 h-4 bg-lightGrey bg-opacity-60 text-[9px] font-bold flex justify-center items-center ' >{pts} pts</div>
                </div>
            </div>
            <Button className="text-white text-xs w-full h-8  " onClick={openModal}>Redeem</Button>
        </div>
        
    </div>
    <ModalRewards isOpen={isModalOpen} closeModal={closeModal} />
    </div>
  )
}

export default RewardCard