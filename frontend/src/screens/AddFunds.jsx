import React, { useState } from 'react';
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import Money from '../components/Money';
import Caprise from '../components/Caprise';
import ModalCP from'../components/ModalCP'

const AddFunds = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [amount, setAmount] = useState('');

  const openModal = () => {
    console.log(true);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    console.log(false);
    setIsModalOpen(false);
  };

  const data = [
    {
      label: 'Money',
      value: 'Money',
      component: <Money />,
    },
    {
      label: 'Caprise Points',
      value: 'caprisePoints',
      component: <Caprise openModal={openModal} setAmount={setAmount} />,
    },
  ];

  return (
    <div className='h-[100vh] w-[100vw] flex flex-col overflow-hidden'>
      <div className='header bg-darkBlue p-5 flex justify-between w-full'>
        <p className='font-extrabold text-xl flex justify-center items-center text-white'>Wallet</p>
      </div>
      <div className={`p-5 w-full ${isModalOpen ? 'blur-effect' : ''}`}>
        <Tabs value='Money'>
          <TabsHeader className={`w-full ${isModalOpen ? 'pointer-events-none' : ''}`}>
            {data.map(({ label, value }) => (
              <Tab key={value} value={value}>
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {data.map(({ value, component }) => (
              <TabPanel key={value} className='p-0' value={value}>
                {component}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
      <ModalCP isOpen={isModalOpen} closeModal={closeModal} amount={amount} />
    </div>
  );
};

export default AddFunds;
