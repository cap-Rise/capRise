import React from 'react'
import ProfileCard from '../components/ProfileCard'


const Profile = () => {
  return (
    <div className='w-full h-[100vh] flex items-center flex-col gap-8'>
      <ProfileCard/>

      <div className='p-5 w-full'>
        <div className="options w-full">
          <div className='flex p-3 border font-medium border-solid border-lightGrey'>
            Account
          </div>
        </div>
      </div>
       
    </div>
  )
}

export default Profile