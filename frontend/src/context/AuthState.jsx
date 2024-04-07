import React, { useState } from 'react'
import authContext from './authContext'

const AuthState = (props) => {

  const [userData, setUserData] = useState({})
  const [leaderBoardData, setLeaderBoardData] = useState([])
  const [loaderSession, setLoaderSession] = useState(true)
  const [Name, setName] = useState("Toyash")
  const getUser = async () => {
    const host = "http://localhost:5000"
    const response = await fetch(`${host}/auth/getuser`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("auth-token")
      },
    });
    const Data = await response.json();
    setUserData(Data);
  }
  const getAllUser = async () => {
    const host = "http://localhost:5000"
    const response = await fetch(`${host}/auth/getalluser`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
    });
    const Data = await response.json();
    setLeaderBoardData(Data);
  }
  const logout = async () => {
    if (localStorage.getItem('google-token')) {
      const host = "http://localhost:5000"
      const response = await fetch(`${host}/auth/logout`, {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("auth-token"),
          "google-access-token": localStorage.getItem("google-token")
        },
      });
      const data = await response.json()
      console.log(data)
      window.location.href = data.redirectTo
      localStorage.removeItem('auth-token');
      localStorage.removeItem('google-token');
    } else {
      localStorage.removeItem('auth-token');
      window.location.href = "http://localhost:3000/auth"
    }

  }
  return (

    <authContext.Provider value={{ getUser, logout,getAllUser,leaderBoardData, userData, loaderSession, setLoaderSession, Name, setName }}>
      {props.children}
    </authContext.Provider>
  )
}

export default AuthState