import React, { useContext } from 'react'
import { useNavigate } from 'react-router'
import authContext from '../context/authContext';
import Navbar from '../components/Navbar';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar/>
      <button onClick={()=>{
        navigate('/')
      }}>Clear History</button>
    </div>
  )
}

export default Home