import React, { useContext } from 'react'
import { useNavigate } from 'react-router'
import authContext from '../context/authContext';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={()=>{
        navigate('/')
      }}>Clear History</button>
    </div>
  )
}

export default Home