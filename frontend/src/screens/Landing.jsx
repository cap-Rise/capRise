import React, { useState, useEffect } from 'react';
import PreLoader from '../components/PreLoader';
import Pin from './Pin';

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
        <Pin/>
      )}
    </div>
  );
};

export default Landing;
