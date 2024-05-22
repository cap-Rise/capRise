import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import authContext from '../context/authContext'
const Trading = () => {
  const {logout} = useContext(authContext)
  const handleLogout = () => {
    logout();
  }
  return (
    <div className='h-[100vh] w-[100vw]'>
      
      <Navbar/>
      <button onClick={handleLogout}>logout</button>
    </div>
  )
}

export default Trading