import React from 'react'
import { Button } from './Button';
import cross from '../assets/cross.svg'

const WithdrawModal = ({ isOpen, closeModal,Amount }) => {
    if (!isOpen) return null;

    return (
        <div className="w-full h-full flex justify-center  items-end fixed top-0 left-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm z-50">
            <div className="modal-overlay rounded-tl-[40px] rounded-tr-[40px] border-[3px] border-solid border-lightGrey bg-white flex justify-center h-[25rem] z-1000 w-[100vw] relative">
                <div>
                    <button onClick={closeModal} ><div className=' z-50 absolute top-6 right-10'><img src={cross}></img></div></button>
                </div>
                <div className="modal-content absolute w-full  p-4 pr-6 pl-6 flex items-start mt-5 space-y-10 justify-center gap-6">
                    <div className=' w-full space-y-8'>
                        <div>
                            <h2 className='text-lg text-black font-bold flex items-center justify-center'>Withdraw Money</h2>
                        </div>
                        <div className=' space-y-3'>
                            <h2 className='text-md font-bold flex items-center justify-center'>Money will be Withdraw</h2>
                            <div className=' font-semibold text-[40px] flex items-center justify-center'>
                                <h1>Rs {Amount} /-</h1>
                            </div>

                        </div>
                        <div className=' w-full border-solid border-t border-b p-2 '>
                            <div>
                                <h2 className=' text-[14px] font-semibold'>NOTE*</h2>
                            </div>
                            <div>
                                <h2 className='text-[12px]'>Minimum Amount to withdraw is 100 /-</h2>
                            </div>
                        </div>
                        <div className='flex items-center justify-center'>
                            <button className=' w-[80%] p-2 text-white rounded-xl drop-shadow-md shadow-md font-semibold bg-[#060F66]'>Procced</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WithdrawModal