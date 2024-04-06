import React, { useContext } from 'react';
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

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className='h-[100vh] w-[100vw] mb-[500px]'>
      {/* NAVBAR */}
      <div className='  bottom-0 w-full fixed'><Navbar /></div>

      {/* HOME */}
      <div className='flex flex-col gap-8'>
        <div className="header bg-darkBlue p-5 flex justify-between w-full">
          <div className="logowhite">
            <img src={whiteLogo} alt="" />
          </div>
          <div className="icons flex gap-4">
            <div className="addFunds">
              <img src={rupee} alt="" />
            </div>
            <img className='rounded-full w-[38px] h-[38px] border border-black' src={jiya} alt="" />
          </div>
        </div>

        {/* Learning Sec */}
        <div className="flex flex-col gap-3 pl-5 pr-5">
          <div className="heading flex justify-between ">
            <div className="text-xl font-bold text-center flex justify-center items-center">Learn & Grow</div>
            <div className="text-sm font-semibold text-center text-lightBlue flex justify-center items-center"><u>Explore More </u> &#62; </div>
          </div>
          <LearnCards />
        </div>

        {/* Market Movers Sec */}
        <div className="marketMovers flex flex-col gap-3 pl-5 pr-5">
          <div className="heading flex justify-between ">
            <div className="text-xl font-bold text-center flex justify-center items-center">Market Movers</div>
            <div className="text-sm font-semibold text-center text-lightBlue flex justify-center items-center"><u>View All </u> &#62; </div>
          </div>
          <TopGnL />
        </div>

        {/* PORTFOLIOS */}
        <div className="portfolios flex flex-col gap-3 pl-5 pr-5 overflow-x-hidden">
          <div className="heading flex justify-between ">
            <div className="text-xl font-bold text-center flex justify-center items-center">Top Portfolios</div>
            <div className="text-sm font-semibold text-center text-lightBlue flex justify-center items-center"><u>View All </u> &#62; </div>
          </div>
          <div className="flex gap-4 overflow-x-auto">
            <TopPortfolioCard />
            <TopPortfolioCard />
            <TopPortfolioCard />
            <TopPortfolioCard />
          </div>
        </div>

        {/* TOP NEWS */}
        <div className="flex flex-col gap-3 pl-5 pr-5">
          <div className="heading flex justify-between ">
            <div className="text-xl font-bold text-center flex justify-center items-center">Top News</div>
            <div className="text-sm font-semibold text-center text-lightBlue flex justify-center items-center"><u>View All </u> &#62; </div>
          </div>
          <News />
        </div>

        {/* How to use */}
        <div className="mb-[130px] flex flex-col gap-3 pl-5 pr-5">
          <div className="heading flex justify-between ">
            <div className="text-xl font-bold text-center flex justify-center items-center">How to use our App?</div>
          </div>
          <iframe className='w-full h-[215px]' src="https://www.youtube.com/embed/wfjuwfjEANU?si=1Evw3dBKwbTk3Crl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>

      </div>

    </div>
  );
}

export default Home;
