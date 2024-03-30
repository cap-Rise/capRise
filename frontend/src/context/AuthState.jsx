import React from 'react'
import authContext from './authContext'
const AuthState = (props) => {
    const Name= "Toyash"
  return (

    <authContext.Provider value={Name}>
        {props.children}
    </authContext.Provider>
  )
}

export default AuthState