import React from 'react'
import { Link } from 'react-router-dom';
import {Button} from '../components/Button'

import ProfileCard from '../components/ProfileCard'

import account from '../assets/profile/accAvtaar.svg'
import gt from '../assets/profile/gt.svg'
import  bank   from '../assets/profile/bank.svg'
import  tut   from '../assets/profile/tut.svg'
import   star  from '../assets/profile/star.svg'
import    contact from '../assets/profile/contact.svg'

const links = [
  { to: '/home', label: 'Account', icon: account },
  { to: '/home', label: 'Bank Account', icon: bank }, 
  { to: '/home', label: 'Tutorial', icon: tut},
  {to: '/home', label:'Rate App', icon:star},
  {to:'/home', label:'Contact Us', icon:contact}    
];

const Profile = () => {
  return (
    <div className='w-full h-[100vh] flex items-center flex-col gap-8'>
      <ProfileCard/>

      <div className='p-5 w-full'>
        <div className="options w-full">
          <div className='flex flex-col gap-4 justify-center w-full font-medium text-sm '>
            {links.map((link, index) => (
              <Link to={link.to} key={index}>
                <div className='flex justify-between items-center p-3 rounded-xl border border-solid border-lightGrey mb-2'>
                  <div className='flex gap-2'>
                    <img src={link.icon} alt={link.label} />
                    <p>{link.label}</p>
                  </div>
                  <img src={gt} alt="arrow" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Button className="text-white p-3 w-1/2 mb-16">Logout</Button>
    </div>
  )
}

export default Profile
