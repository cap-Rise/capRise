import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import authContext from '../context/authContext';
import Navbar from '../components/Navbar';
import rupee from '../assets/Rupee.png';
import jiya from '../assets/jiya.png';
import News from '../components/News';
import whiteLogo from '../assets/logo_white.png';
import LearnCards from '../components/LearnCards';
import TopPortfolioCard from '../components/TopPortfolioCard';
import TopGnL from '../components/TopGnL';
import { Link } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const {getAllUser,leaderBoardData}=useContext(authContext)

  useEffect(() => {
    
    getAllUser()
    
  }, [])

  console.log(leaderBoardData)
  

  return (
    <div className='h-fit w-[100vw]'>
      {/* NAVBAR */}
      <div ><Navbar /></div>

      {/* HOME */}
      <div className='flex flex-col gap-8'>
        <div className="header bg-darkBlue p-5 h-20 items-center flex justify-between w-full">
          <div className="logowhite">
            <img src={whiteLogo} className='h-9' alt="" />
          </div>
          <div className="icons flex gap-4">
            <div className="addFunds">
              <Link to='/addfunds'><img src={rupee} className='w-8 h-8' alt="" /></Link>
            </div>
            <Link to='/profile'><img className='rounded-full w-8 h-8 border border-black' src={jiya} alt="" /></Link>
          </div>
        </div>

        {/* Learning Sec */}
        <div className="flex flex-col gap-3 pl-5 pr-5">
          <div className="heading flex justify-between">
            <div className="text-base font-bold text-center flex justify-center items-center">Learn & Grow</div>
            <div className="text-sm font-semibold text-center text-lightBlue flex justify-center items-center"><u>Explore More </u> &#62; </div>
          </div>
          <LearnCards />
        </div>

        {/* Market Movers Sec */}
        <div className="marketMovers flex flex-col gap-3 pl-5 pr-5">
          <div className="heading flex justify-between">
            <div className="text-base font-bold text-center flex justify-center items-center">Market Movers</div>
            <div className="text-sm font-semibold text-center text-lightBlue flex justify-center items-center"><u>View All </u> &#62; </div>
          </div>
          <TopGnL />
        </div>

        {/* PORTFOLIOS */}
        <div className="portfolios flex flex-col gap-3 pl-5 pr-5 overflow-x-hidden">
          <div className="heading flex justify-between">
            <div className="text-base font-bold text-center flex justify-center items-center">Top Portfolios</div>
            <div className="text-sm font-semibold text-center text-lightBlue flex justify-center items-center"><u>View All </u> &#62; </div>
          </div>
          <div className="flex gap-4 overflow-x-auto">
            {leaderBoardData.map((user,index) => (
              <TopPortfolioCard disName={user.name} portfolioValue={user.portfolioValue} key={index} bgColor={index % 2 === 0 ? 'white' : 'lightGray'} />
            ))}
          </div>
        </div>

        {/* TOP NEWS */}
        <div className="flex flex-col gap-3 pl-5 pr-5">
          <div className="heading flex justify-between">
            <div className="text-base font-bold text-center flex justify-center items-center">Top News</div>
            <div className="text-sm font-semibold text-center text-lightBlue flex justify-center items-center"><u>View All </u> &#62; </div>
          </div>
          <News />
        </div>

        {/* How to use */}
        <div className="mb-[130px] flex flex-col gap-3 pl-5 pr-5">
          <div className="heading flex justify-between">
            <div className="text-bs font-bold text-center flex justify-center items-center">How to use our App?</div>
          </div>
          <iframe className='rounded-xl w-full h-[215px]' src="https://www.youtube.com/embed/wfjuwfjEANU?si=1Evw3dBKwbTk3Crl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  );
}

export default Home;
