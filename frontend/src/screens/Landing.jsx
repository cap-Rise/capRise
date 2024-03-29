import React,{useState, useEffect} from 'react'
import PreLoader from '../components/PreLoader'

const Landing = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <div>
       {loading ? (
        <PreLoader/>
      ) : (
        <div>Signup</div>

      )}
      
    </div>
  )
}

export default Landing