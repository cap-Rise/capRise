import React, { useState } from 'react'
import CreditCard from '../components/CreditCard';
import BalanceCard from '../components/BalanceCard';
import plus from "../assets/plus.svg"
import Modal from './ModalRewards';
import MoneyModal from './MoneyModal';
import WithdrawModal from './WithdrawModal';

const Money = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [modalType, setModalType] = useState(null);
    const [Amount, setAmount] = useState(0)
    const [walletBalance, setWalletBalance] = useState(20000)
    const [orderId
        , setOrderId
    ] = useState("")

    const URL = "http://localhost:5000/payment/create"

    const handlePayment = async () => {
        const response = await fetch(URL, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.

            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify({
                amount: Amount*100
            }), // body data type must match "Content-Type" header
        })
        const data = await response.json();
        console.log(data.id)
        setOrderId(data.id)
    }

    const modalControl = async (typeOfTransaction) => {
        if (Amount >= 100 && Amount <= walletBalance) {
            
            await handlePayment();
            setModalType(typeOfTransaction);
            setIsModalOpen(true)
        }


    }
    const closeModal = () => {
        setIsModalOpen(false);
    }
    const handleChange = (e) => {
        const { value } = e.target;
        setAmount(value);
    }
    // console.log(Amount)
    return (
        <div className='flex items-center justify-center'>
            <div className='w-full mt-[28px]  space-y-10'>
                <div className='flex items-center justify-center'>
                    <BalanceCard balanceType="Wallet Balance" pnlBalance="20000" />
                </div>
                <div className='flex items-center justify-center'>
                    <div className='border-solid border-t border-b p-2 '>
                        <input className='text-center font-semibold ' type='number' onChange={handleChange} placeholder='Enter Amount'></input>
                    </div>

                </div>
                <div className='flex items-center justify-center'>
                    <div className='flex w-[90%] gap-12 items-center justify-center '>
                        <div className=' gap-2 flex items-center justify-center  '>
                            <button onClick={() => { modalControl("Add") }} className=' rounded-md shadow-md drop-shadow-md  gap-2 p-2 w-[6.25rem] bg-[#1424B2] text-white flex items-center justify-center'>
                                <div className='flex items-center justify-center'>
                                    <img src={plus} ></img>
                                </div>
                                <div className='flex items-center justify-center'>
                                    <h1 className=''>Add</h1>
                                </div>
                            </button>
                        </div>
                        <div className='  '>
                            <button onClick={() => modalControl(null)} className=' shadow-md drop-shadow-md text-[#1424B2] border-solid rounded-md border border-[#1424B2] p-2 w-[6.25rem]'>Withdraw</button>
                        </div>

                    </div>
                </div>
                <div className=' w-full border-solid border-t border-b p-2 '>
                    <div>
                        <h2 className=' text-[14px] font-semibold'>NOTE*</h2>
                    </div>
                    <div>
                        <h2 className=' text-[12px] '>Minimum Amount to add or Withdraw is 100 /-</h2>
                    </div>
                </div>

            </div>
            {(modalType === "Add") ? <MoneyModal orderId={orderId} Amount={Amount} isOpen={isModalOpen} closeModal={closeModal} /> : <WithdrawModal Amount={Amount} isOpen={isModalOpen} closeModal={closeModal} />}

        </div>
    )
}

export default Money