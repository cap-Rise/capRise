import React, { useState, useEffect } from 'react';
import PreLoader from '../components/PreLoader';
import SignUp from './SignUp';

const Landing = () => {
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setLoading(true);


    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div>
      {loading ? (
        <PreLoader />
      ) : (
        <div>
          {isLoggedIn ? (
            <div>
              <p>Login</p>
            </div>
          ) : (
            <div>
              <SignUp/>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Landing;
