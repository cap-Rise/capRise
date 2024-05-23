
import React from 'react';
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import sample from '../assets/Sbi.png'
import sample2 from '../assets/pnb.png'

const TopGainers = () => {
    return (
        <div>
            <div className="item flex justify-between items-center pb-2 border-b border-solid border-lightGrey ">
                <div className='flex justify-center items-center gap-2'>
                <div className="logo h-[48px] w-[48px] rounded-full  border-solid border-2 border-lightGrey flex justify-center items-center"><img className='h-[35px] rounded-full' src={sample}  alt="" /></div>
                <div>
                  <div className='font-semibold text-black'>State Bank of India</div>
                  <div className='text-sm font-medium text-darkGrey'>SBI</div>
                </div>
                </div>
                <div className='flex flex-col justify-center items-end'>
                  <div className='text-black font-semibold'>₹122.75</div>
                  <div className='text-sm text-seaGreen font-semibold'>▲ 3.77%</div>
                </div>
            </div>
            <div className="item flex justify-between items-center pt-2 pb-2 border-b border-solid border-lightGrey ">
                <div className='flex justify-center items-center gap-2'>
                <div className="logo h-[48px] w-[48px] rounded-full border-solid border-2 border-lightGrey flex justify-center items-center"><img className='h-[35px] rounded-full' src={sample}  alt="" /></div>
                <div>
                  <div className='font-semibold text-black'>State Bank of India</div>
                  <div className='text-sm font-medium text-darkGrey'>SBI</div>
                </div>
                </div>
                <div className='flex flex-col justify-center items-end'>
                  <div className='text-black font-semibold'>₹122.75</div>
                  <div className='text-sm text-seaGreen font-semibold'>▲ 3.77%</div>
                </div>
            </div>
            
        </div>
    );
};

const TopLosers = () => {
    return (
      <div>
      <div className="item flex justify-between items-center ">
                <div className='flex justify-center items-center gap-2'>
                <div className="logo h-[48px] w-[48px] rounded-full  border-solid border-2 border-lightGrey flex justify-center items-center"><img className='h-[35px] rounded-full' src={sample2}  alt="" /></div>
                
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

const TopGnL = () => {
    const data = [
        {
            label: "Top Gainers",
            value: "gainers",
            component: <TopGainers />,
        },
        {
            label: "Top Losers",
            value: "losers",
            component: <TopLosers />,
        },
    ];

    return (
        <div>
            <div className="tabs">
                <Tabs value="gainers">
                    <TabsHeader>
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
    );
};

export default TopGnL;



