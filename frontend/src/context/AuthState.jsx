import React, { useState } from 'react'
import authContext from './authContext'

const AuthState = (props) => {

  const [userData, setUserData] = useState({})
  
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

    <authContext.Provider value={{ getUser, logout,userData }}>
      {props.children}
    </authContext.Provider>
  )
}

export default AuthState