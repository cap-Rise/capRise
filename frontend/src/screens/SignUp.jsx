import React, {useState}from 'react'

import logo from '../assets/logo_Blue.webp'

const SignUp = () => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [pin, setPin] = useState('');
  const [confirmPin, setConfirmPin] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    if (pin !== confirmPin) {
      setErrorMessage("PINs don't match");
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
              <img src={logo} className='w-[90%]' alt="" />
          </div>
          <div className='font-extrabold text-3xl text-darkGrey text-center'>SignUp</div>
        </div>

        <div className='form '>
            <form onSubmit={handleSignUp}>
              <div className='flex flex-col gap-2 w-full'>
              <label className=' text-darkBlue font-medium text-base' htmlFor="username">Username:</label>
              <input 
                className=' w-full h-10 p-[2 px]  border-[2px] rounded-lg  '
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
        </form>

        </div>
        </div>
    </div>
  )
}

export default SignUp