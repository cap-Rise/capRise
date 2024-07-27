import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import authContext from '../context/authContext';
import { Link } from 'react-router-dom';

import arrow from '../assets/Arrow.svg';
import jiya from '../assets/jiya.png';
import { Button } from '../components/Button';
import money from '../assets/moneyCash.svg';
import wallet from '../assets/wallet.svg';

const ProfileCard = () => {
  const { userData, getUser } = useContext(authContext);
  const navigate = useNavigate(); 

  useEffect(() => {
    getUser();
  }, [getUser]);


  const handleGoBack = () => {
    navigate(-1); 
  };

  return (
    <div className='w-full p-4 bg-gradient-to-b from-darkBlue from-25% to-lightBlue rounded-b-[1.5rem]'>
      <img 
        src={arrow} 
        className='h-11 ' 
        alt="Go Back" 
        onClick={handleGoBack} 
      />
      <div className='w-full -mb-6 -mt-2 -translate-y-2 flex flex-col gap-2 justify-center items-center'>
        <img src={jiya} className="h-28 rounded-full" alt="" />
        <p className='text-white font-bold text-base'>{userData.name || 'Username'}</p>
        <p className='text-lightGrey font-semibold text-xs'>{userData.email || 'user@example.com'}</p>
      </div>
      <div className='flex self-end justify-center w-full p-3 h-16 rounded-xl translate-y-9 shadow-xl border-[0.5px] border-solid border-lightGrey bg-white gap-2'>
        <Link to='/rewards' className='flex justify-center items-center w-full h-full'>
          <Button className='p-2 w-full bg-white text-darkBlue border border-solid flex justify-center shadow-none items-center gap-1 border-darkBlue'>
            <img src={money} alt="" />Rewards
          </Button>
        </Link>
        <Link to='/addfunds' className='flex justify-center items-center w-full h-full'>
          <Button className='border border-solid border-darkBlue p-2 flex justify-center items-center gap-1 w-full text-white'>
            <img src={wallet} alt="" />Wallet
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default ProfileCard;
