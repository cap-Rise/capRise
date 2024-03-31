import React, { useState } from 'react';
import logo from '../assets/logo_Blue.webp';
import { Button } from '../components/Button';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    pin: '',
    confirmPin: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const { pin, confirmPin } = formData;
    if (pin !== confirmPin) {
      setErrorMessage("PINs don't match!!");
      return;
    }
    if (pin.length !== 4 || confirmPin.length !== 4) {
      setErrorMessage('PIN should be 4 digits long!');
      return;
    }

    console.log('Form Data:', formData);
   

    setFormData({
      username: '',
      email: '',
      pin: '',
      confirmPin: '',
    });
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
          <div className='flex flex-col gap-4'>
            <div className='flex flex-col gap-1 w-full'>
              <label className=' text-darkBlue font-semibold text-base' htmlFor="username">Username:</label>
              <input
                className=' w-full h-12  p-3 font-medium  border-[2px] rounded-lg  '
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className='flex flex-col gap-1 w-full'>
              <label className=' text-darkBlue font-semibold text-base' htmlFor="email">Email:</label>
              <input
                className=' w-full h-12  p-3 font-medium  border-[2px] rounded-lg  '
                type="email"
                id="email"
                name="email"
                placeholder='example@example.com'
                value={formData.email}
                onChange={handleChange}
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
                name="pin"
                value={formData.pin}
                onChange={handleChange}
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
                name="confirmPin"
                value={formData.confirmPin}
                onChange={handleChange}
                required
              />
              {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            </div>

            <Button onClick={handleSignUp} className="mt-5 h-[3.8rem] w-full text-white  font-medium text-lg">
              Sign Up
            </Button>
          </div>
        </div>

        <div className=' font-medium text-sm text-lightGrey text-center '>
          By signing up you agree our <span className=' text-darkBlue cursor-pointer'><u>Terms and Conditions</u></span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
