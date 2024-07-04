import React from 'react'
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import sample from '../assets/Sbi.png'
import sample2 from '../assets/pnb.png'
import CreditCard from '../components/CreditCard';
import BalanceCard from '../components/BalanceCard';
import plus from "../assets/plus.svg"



const Money = () => {
  return (
    <div className='flex items-center justify-center'>
      <div className='w-full mt-[28px]  space-y-10'>
        <div className='flex items-center justify-center'>
          <BalanceCard balanceType="Wallet Balance" pnlBalance="20000" />
        </div>
        <div className='flex items-center justify-center'>
          <div className='border-solid border-t border-b p-2 '>
            <input className='text-center' placeholder='Amount'></input>
          </div>

        </div>
        <div className='flex items-center justify-center'>
          <div className='flex w-[90%] gap-12 items-center justify-center '>
            <div className=' gap-2 flex items-center justify-center  '>
              <button className=' rounded-md shadow-md drop-shadow-md  gap-2 p-2 w-[6.25rem] bg-[#1424B2] text-white flex items-center justify-center'>
                <div className='flex items-center justify-center'>
                  <img src={plus} ></img>
                </div>
                <div className='flex items-center justify-center'>
                  <h1 className=''>Add</h1>
                </div>
              </button>


            </div>
            <div className='  '>
              <button className=' shadow-md drop-shadow-md text-[#1424B2] border-solid rounded-md border border-[#1424B2] p-2 w-[6.25rem]'>Withdraw</button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

const Caprise = () => {
  return (
    <div>
      <div className="item flex justify-between items-center ">
        <div className='flex justify-center items-center gap-2'>
          <div className="logo h-[48px] w-[48px] rounded-full  border-solid border-2 border-lightGrey flex justify-center items-center"><img className='h-[35px] rounded-full' src={sample2} alt="" /></div>

          <div>
            <div className='font-semibold text-black'>Punjab National Bank</div>
            <div className='text-sm font-medium text-darkGrey'>PnB</div>
          </div>
        </div>
        <div className='flex flex-col justify-center items-end'>
          <div className='text-black font-semibold'>₹300.75</div>
          <div className='text-sm text-red font-semibold'>▼ 0.77%</div>
        </div>
      </div>
    </div>
  );
};

const AddFunds = () => {
  const data = [
    {
      label: "Money",
      value: "Money",
      component: <Money />,
    },
    {
      label: "Caprise Points",
      value: "caprisePoints",
      component: <Caprise />,
    },
  ];

  return (
    <div className='h-[100vh] w-[100vw] flex items-start p-10 justify-center overflow-hidden'>
      <div className=" h-fit w-[100vw] ">
        <Tabs value="Money">
          <TabsHeader className='w-[90vw]'>
            {data.map(({ label, value }) => (
              <Tab key={value} value={value}>
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {data.map(({ value, component }) => (
              <TabPanel key={value} value={value}>
                {component}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
    </div>
  )
}


export default AddFunds