import React, {useState}from 'react'

import logo from '../assets/logo_Blue.webp'
import { Button } from '../components/Button';

const SignUp = () => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [pin, setPin] = useState('');
  const [confirmPin, setConfirmPin] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    if (pin !== confirmPin) {
      setErrorMessage("PINs don't match!!");
      return;
    }
    if (pin.length !== 4 || confirmPin.length !== 4) {
      setErrorMessage('PIN should be 4 digits long!');
      return;
    }

   
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('PIN:', pin);
    console.log('Confirm PIN:', confirmPin);
    
    setUsername('');
    setEmail('');
    setPin('');
    setConfirmPin('');
    setErrorMessage('');
  };

  return (
    <div className='background w-[100vw] h-[100vh] flex justify-center'>
      <div className='flex flex-col gap-7 w-[80%] '>
        <div className=" title flex flex-col gap-7  ">
          <div className=" pt-16 flex justify-center items-center">
              <img src={logo} className='w-[80%]' alt="" />
          </div>
          <div className='font-extrabold text-3xl text-darkGrey text-center'>Sign Up</div>
        </div>

        <div className='form  '>
            <form className='flex flex-col gap-4' onSubmit={handleSignUp}>
              <div className='flex flex-col gap-1 w-full'>
                <label className=' text-darkBlue font-semibold text-base' htmlFor="username">Username:</label>
                <input 
                  className=' w-full h-12  p-3 font-medium  border-[2px] rounded-lg  '
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div  className='flex flex-col gap-1 w-full'>
                <label className=' text-darkBlue font-semibold text-base' htmlFor="email">Email:</label>
                <input
                  className=' w-full h-12  p-3 font-medium  border-[2px] rounded-lg  '
                  type="email"
                  id="email"
                  placeholder='example@example.com'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required

                />
              </div>
              <div className='flex flex-col gap-1 w-full'>
                <label className=' text-darkBlue font-semibold text-base' htmlFor="pin">Set PIN:</label>
                <input
                className=' w-full h-12  p-3 font-medium  border-[2px] rounded-lg  '
                placeholder='Enter 4 digit pin'
                  type="password"
                  id="pin"
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  required
                />
              </div>
              <div className='flex flex-col gap-1 w-full'>
                <label className=' text-darkBlue font-semibold text-base' htmlFor="confirmPin">Confirm PIN:</label>
                <input
                className=' w-full h-12  p-3 font-medium  border-[2px] rounded-lg  '
                placeholder='Enter 4 digit pin'
                  type="password"
                  id="confirmPin"
                  value={confirmPin}
                  onChange={(e) => setConfirmPin(e.target.value)}
                  required
                />
              </div>
              {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
              <Button type="submit" className="mt-8 h-[3.8rem] w-full text-white   font-medium text-lg">
                Sign Up 
              </Button>
        </form>
        </div>

        <div className=' font-medium text-sm text-lightGrey text-center '>
        By signing up you agree our <span className=' text-darkBlue cursor-pointer'><u>Terms and Conditions</u></span> 
        </div>

        </div>
    </div>
  )
}

export default SignUp