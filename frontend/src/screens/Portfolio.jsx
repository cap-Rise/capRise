import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import jiya from '../assets/jiya.png';
import Holdings from '../components/Holdings';
import Orders from '../components/Orders';
import Plus from '../assets/Plus.png';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('Holdings');
  const [barPosition, setBarPosition] = useState(0);
  const tabRefs = {
    Holdings: useRef(null),
    Orders: useRef(null),
    History: useRef(null),
  };

  useEffect(() => {
    if (tabRefs[activeTab].current) {
      setBarPosition(tabRefs[activeTab].current.offsetLeft);
    }
  }, [activeTab]);

  const renderContent = () => {
    switch (activeTab) {
      case 'Holdings':
        return <div><Holdings /></div>;
      case 'Orders':
        return <div><Orders /></div>;
      case 'History':
        return <div>History Content</div>;
      default:
        return null;
    }
  };

  return (
    <div className='h-[100vh] w-[100vw]'>
      <Navbar />
      <div className='flex flex-col gap-8 pb-15 relative'>
        <div className="fixed  bottom-20 right-5 z-50 w-14 h-14 bg-darkBlue border-[6px] border-lightGrey border-solid rounded-full flex items-center justify-center">
          <button  onClick={() => { alert("Hello") }}><img src={Plus} height="52" alt="Add" /></button>
        </div>
        <div>
          <div className="header bg-darkBlue p-5 w-full">
            <div className="flex justify-between">
              <p className='font-black text-xl flex justify-center items-center text-white'>Portfolio</p>
              <div className="profile">
                <img className='rounded-full w-8 h-8 border border-black' src={jiya} alt="Profile" />
              </div>
            </div>
            <div className="relative flex p-3 pt-5 justify-between items-center">
              <div
                ref={tabRefs.Holdings}
                className={`text-base font-bold cursor-pointer ${activeTab === 'Holdings' ? 'text-white' : 'text-gray-400'}`}
                onClick={() => setActiveTab('Holdings')}
              >
                Holdings
              </div>
              <div
                ref={tabRefs.Orders}
                className={`text-base font-bold cursor-pointer ${activeTab === 'Orders' ? 'text-white' : 'text-gray-400'}`}
                onClick={() => setActiveTab('Orders')}
              >
                Orders
              </div>
              <div
                ref={tabRefs.History}
                className={`text-base font-bold cursor-pointer ${activeTab === 'History' ? 'text-white' : 'text-gray-400'}`}
                onClick={() => setActiveTab('History')}
              >
                History
              </div>
              <div
                className="absolute bottom-0 h-1 rounded-full bg-white transition-all duration-700"
                style={{ left: barPosition, width: `${tabRefs[activeTab].current ? tabRefs[activeTab].current.clientWidth : 0}px` }}
              />
            </div>
          </div>
          <div className="content p-5">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
