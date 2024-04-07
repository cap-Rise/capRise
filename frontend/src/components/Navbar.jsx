import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Home = ({ active }) => {
  return (
    <div>
      <svg width="24" height="24" viewBox="0 0 24 24" fill={active ? "#060F66" : "none"} xmlns="http://www.w3.org/2000/svg">
        <path d="M14.7431 3.19949L14.7434 3.19968L20.5033 7.22961C20.5033 7.22964 20.5033 7.22966 20.5034 7.22968C20.9726 7.55815 21.4168 8.09671 21.7443 8.72389C22.0717 9.35111 22.26 10.0243 22.26 10.6V17.38C22.26 19.6539 20.4138 21.5 18.14 21.5H7.35999C5.08754 21.5 3.23999 19.6453 3.23999 17.37V10.47C3.23999 9.93556 3.41038 9.29648 3.70857 8.69086C4.00662 8.08551 4.41106 7.55688 4.83751 7.22425L4.83761 7.22417L9.84624 3.31524C9.84645 3.31507 9.84667 3.3149 9.84689 3.31473C11.1837 2.27943 13.3528 2.22541 14.7431 3.19949ZM12.75 19.25C13.4361 19.25 14 18.6861 14 18V15C14 14.3139 13.4361 13.75 12.75 13.75C12.0638 13.75 11.5 14.3139 11.5 15V18C11.5 18.6861 12.0638 19.25 12.75 19.25Z" stroke="#747474" />
      </svg>
    </div>
  );
}

const Reward = ({ active }) => {
  return (
    <div>
     <svg width="25" height="24" viewBox="0 0 25 24" fill={active ? "#060F66" : "none"} xmlns="http://www.w3.org/2000/svg">
<path d="M12.303 6.5L12.8361 5.71828C13.408 4.87984 14.1453 3.94384 14.9635 3.21178C15.767 2.4928 16.7267 1.9 17.736 1.9C18.346 1.9 18.931 2.14232 19.3623 2.57365C19.7937 3.00499 20.036 3.59 20.036 4.2C20.036 4.81 19.7937 5.39501 19.3623 5.82635C18.9319 6.25683 18.3483 6.49905 17.7396 6.5H12.303ZM12.303 6.5H13.2492M12.303 6.5H13.2492M13.2492 6.5H17.736H13.2492ZM21.0611 5.77986L20.7079 6.5H21.51H22.35C22.8539 6.5 23.3372 6.70018 23.6935 7.0565C24.0498 7.41282 24.25 7.89609 24.25 8.4V12C24.25 12.1857 24.1763 12.3637 24.045 12.495C23.9137 12.6263 23.7357 12.7 23.55 12.7H1.95C1.76435 12.7 1.5863 12.6263 1.45503 12.495C1.32375 12.3637 1.25 12.1857 1.25 12V8.4C1.25 7.89609 1.45018 7.41282 1.8065 7.0565C2.16282 6.70018 2.64609 6.5 3.15 6.5H3.5712H4.37172L4.02051 5.78064C3.78009 5.28819 3.65338 4.74711 3.65 4.19856C3.65038 3.21778 4.04016 2.27725 4.7337 1.5837C5.42759 0.88982 6.3687 0.5 7.35 0.5C8.88205 0.5 10.4974 1.39007 12.1561 3.3046L12.533 3.73958L12.911 3.30564C14.2304 1.79121 15.8999 0.5 17.7312 0.5C18.7125 0.5 19.6536 0.88982 20.3475 1.5837C21.0412 2.27737 21.431 3.2181 21.4312 4.19906C21.4289 4.74708 21.3024 5.28771 21.0611 5.77986ZM10.4196 6.5H10.7065L10.8513 6.25227C10.8589 6.23923 10.8666 6.22608 10.8743 6.21282C11.0405 5.92841 11.2357 5.59432 11.4797 5.21885L11.6762 4.91639L11.4512 4.63447C10.775 3.78738 10.0824 3.11234 9.40166 2.6453C8.72502 2.18108 8.02677 1.9 7.35 1.9C6.74 1.9 6.15499 2.14232 5.72365 2.57365C5.29232 3.00499 5.05 3.59 5.05 4.2C5.05 4.81 5.29232 5.39501 5.72365 5.82635C6.15499 6.25768 6.74 6.5 7.35 6.5H10.4196ZM10.5 23.5V15H15V23.5H10.5ZM3 21.6V15H8.65V23.5H5.55C5.24051 23.5 4.87648 23.4874 4.54485 23.4269C4.19827 23.3637 3.96911 23.262 3.85355 23.1464C3.65857 22.9515 3.43611 22.6708 3.26538 22.3719C3.08882 22.0628 3 21.7907 3 21.6ZM19.95 23.5H16.85V15H22.5V21.6C22.5 21.7907 22.4112 22.0628 22.2346 22.3719C22.0639 22.6708 21.8414 22.9515 21.6464 23.1464C21.5309 23.262 21.3017 23.3637 20.9552 23.4269C20.6235 23.4874 20.2595 23.5 19.95 23.5Z" stroke="#747474"/>
</svg>

    </div>
  );
}


const Social = ({ active }) => {
  return (
    <div>
      <svg width="24" height="24" viewBox="0 0 24 24" fill={active ? "#060F66" : "none"} xmlns="http://www.w3.org/2000/svg">
        <path d="M9.32477 3.85717C9.32477 2.24164 10.6344 0.932007 12.2499 0.932007C13.8654 0.932007 15.1751 2.24165 15.1751 3.85717C15.1751 5.47267 13.8654 6.78231 12.2499 6.78231C10.6344 6.78231 9.32477 5.47267 9.32477 3.85717Z" fill={active ? "#060F66" : "none"}  stroke="#747474" />
        <path d="M17.8929 4.71428C17.8929 3.57026 18.8203 2.64285 19.9643 2.64285C21.1083 2.64285 22.0357 3.57026 22.0357 4.71428C22.0357 5.8583 21.1083 6.78571 19.9643 6.78571C18.8203 6.78571 17.8929 5.8583 17.8929 4.71428Z" fill={active ? "#060F66" : "none"} stroke="#747474" />
        <path d="M2.46423 4.71428C2.46423 3.57026 3.39164 2.64285 4.53566 2.64285C5.67969 2.64285 6.60709 3.57026 6.60709 4.71428C6.60709 5.8583 5.67969 6.78571 4.53566 6.78571C3.39164 6.78571 2.46423 5.8583 2.46423 4.71428Z" fill={active ? "#060F66" : "none"} stroke="#747474" />
        <path d="M16.8689 16.3325L16.8689 16.3321C16.8848 16.1764 16.8929 16.0178 16.8929 15.8571V10.7138C16.8929 10.0431 16.3493 9.49945 15.6786 9.49945H8.82146C8.15366 9.49945 7.61173 10.0386 7.60721 10.7053C7.6072 10.7055 7.6072 10.7056 7.6072 10.7058L7.60718 10.7137V15.8571C7.60718 16.3388 7.68035 16.8024 7.81582 17.2379L7.3389 17.3863L7.81582 17.2379C8.40379 19.1283 10.1674 20.5 12.25 20.5C14.313 20.5 16.0629 19.1543 16.6673 17.2914L16.8689 16.3325ZM16.8689 16.3325C16.8353 16.6637 16.7668 16.9844 16.6674 17.2913L16.8689 16.3325Z" fill={active ? "#060F66" : "none"}  stroke="#747474" />
        <path d="M5.08426 9.49945C4.95999 9.88213 4.89286 10.2904 4.89286 10.7137V15.8571C4.89286 16.8543 5.09151 17.8061 5.45164 18.6742C5.15867 18.747 4.85194 18.7857 4.53571 18.7857C2.44493 18.7857 0.75 17.0908 0.75 15V10.7137C0.75 10.0431 1.29366 9.49945 1.96429 9.49945H5.08426Z"  fill={active ? "#060F66" : "none"}  stroke="#747474" />
        <path d="M19.6071 15.8571V10.7138C19.6071 10.2904 19.54 9.88214 19.4157 9.49945H22.5357C23.2063 9.49945 23.75 10.0431 23.75 10.7137V15C23.75 17.0908 22.055 18.7857 19.9643 18.7857C19.6481 18.7857 19.3413 18.747 19.0484 18.6742C19.4085 17.8061 19.6071 16.8543 19.6071 15.8571Z" fill={active ? "#060F66" : "none"} stroke="#747474" />
      </svg>

    </div>
  );
}
const Bag = ({ active, fillColor }) => {
  return (
    <div>
      <svg width="24" height="24" viewBox="0 0 24 24" fill={active ? "#060F66" : "none"} xmlns="http://www.w3.org/2000/svg">
        <path d="M17.0503 4.45722V4.95722H17.5503H17.8318C20.1893 4.95722 21.6815 5.49734 22.5397 6.44636C23.4884 7.49592 23.5366 8.91551 23.4456 10.0806C23.4395 10.1266 23.436 10.1663 23.4336 10.1945L23.433 10.2009C23.4301 10.2349 23.4285 10.2495 23.4262 10.2632L23.4238 10.2778L23.4222 10.2925L23.3638 10.8417L23.3636 10.8438L23.3453 11.0089C23.3453 11.009 23.3453 11.0091 23.3453 11.0091C23.3425 11.0339 23.3299 11.0534 23.3141 11.0648C22.8822 11.3763 22.4159 11.6888 21.9726 11.9393L21.9725 11.9392L21.9614 11.9459C21.9406 11.9583 21.922 11.9701 21.9068 11.9799L21.8681 12.0047C21.8475 12.0177 21.8336 12.0257 21.8191 12.033L21.8045 12.0403L21.7905 12.0485C19.7554 13.2375 17.5031 14.0492 15.1714 14.4263L14.7811 14.4895L14.7526 14.8839C14.7152 15.4021 14.5863 15.8643 14.2509 16.2029C13.9204 16.5366 13.3026 16.8362 12.096 16.8362C10.8912 16.8362 10.2789 16.5346 9.95055 16.202C9.61566 15.8628 9.48713 15.4033 9.43854 14.8957L9.40176 14.5117L9.02092 14.4499C6.83428 14.095 4.68385 13.3739 2.73043 12.3001L2.73045 12.3L2.72486 12.2971C2.54563 12.2015 2.38799 12.1171 2.24385 12.0244L2.2303 12.0157L2.21622 12.0079C1.95274 11.8616 1.49745 11.5685 1.21308 11.3825C1.19436 11.3702 1.18053 11.349 1.17799 11.3224L1.17799 11.3223L1.08713 10.3684L1.08602 10.3567L1.08436 10.3451L1.07417 10.2738C0.958757 9.09917 0.955877 7.57125 1.95761 6.45778C2.81606 5.50874 4.29674 4.96895 6.66528 4.96895H6.94679H7.44679V4.46895V4.41031C7.44679 3.39626 7.46102 2.453 7.91869 1.74093C8.34 1.08543 9.23732 0.5 11.3571 0.5H13.14C15.2606 0.5 16.1576 1.08304 16.5786 1.73686C17.0359 2.44723 17.0503 3.39 17.0503 4.41031V4.45722ZM10.6416 12.1796H10.1416V12.6796V14.1575L10.1416 14.182C10.1416 14.4606 10.1415 14.7242 10.1676 14.9432C10.1948 15.1713 10.2577 15.4312 10.4463 15.6458C10.6388 15.865 10.897 15.9638 11.1545 16.014C11.4079 16.0635 11.7195 16.0768 12.0843 16.0768C12.4466 16.0768 12.7568 16.0658 13.0082 16.0199C13.2628 15.9735 13.5242 15.8798 13.72 15.6602C13.9117 15.4451 13.9742 15.1819 14.0011 14.9521C14.0271 14.7303 14.0271 14.4606 14.0271 14.1708L14.027 14.1458V12.6796V12.1796H13.527H10.6416ZM15.873 4.96895H16.373V4.46895V4.41031V4.38633C16.373 3.91011 16.373 3.46587 16.3266 3.08629C16.2788 2.69618 16.1762 2.31236 15.9247 1.99184C15.6673 1.66371 15.302 1.462 14.8475 1.34212C14.4014 1.2245 13.8388 1.17732 13.14 1.17732H11.3571C10.6587 1.17732 10.0964 1.22372 9.65067 1.34019C9.19654 1.45887 8.83079 1.65911 8.57285 1.98679C8.32087 2.30691 8.2182 2.69086 8.1705 3.08144C8.12409 3.46153 8.1241 3.90719 8.12411 4.38622V4.41031V4.45722V4.46895V4.96895H8.62411H15.873Z" fill={active ? "#060F66" : "none"} stroke="#747474" />
        <path d="M22.8702 14.4863L22.8702 14.4863C22.9029 14.4707 22.9365 14.4735 22.9678 14.4951C22.9987 14.5164 23.0114 14.5448 23.0084 14.5784L22.5876 19.2125C22.4683 20.3452 22.1842 21.3842 21.395 22.1519C20.6081 22.9174 19.2275 23.5 16.7161 23.5H7.77823C5.26689 23.5 3.88598 22.9174 3.09901 22.1531C2.30991 21.3867 2.02595 20.3505 1.90671 19.2241L1.50741 14.8317C1.50741 14.8317 1.50741 14.8317 1.50741 14.8317C1.50437 14.7982 1.51701 14.7701 1.54691 14.749C1.57717 14.7277 1.61007 14.7244 1.6426 14.7391L1.64267 14.7391C2.97147 15.3403 5.47733 16.4321 7.04931 16.8439L7.04942 16.8439C7.08717 16.8538 7.12956 16.8842 7.15606 16.9408L7.15607 16.9409C7.97711 18.6968 9.74359 19.5619 12.0947 19.5619C14.4304 19.5619 16.2118 18.661 17.0331 16.9061L17.0332 16.9059C17.0596 16.8494 17.1022 16.8186 17.1407 16.8085L17.1409 16.8084C18.8124 16.3686 21.4813 15.1471 22.8702 14.4863Z" fill={active ? "#060F66" : "none"}stroke="#747474" />
      </svg>
    </div>
  );
}
const Trade=()=>{
  return(
    <svg width="40" height="35" viewBox="0 0 40 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 30C2.47959 24.7619 2.92386 22.8683 4.0099 22.623C5.89109 23.4426 8.75233 28.1266 11.5347 23.4426L18.0414 21.3934L20.1881 16.4754L32.9802 18.5246L39 5" stroke="#F5E12A"/>
        <path d="M29.3001 7.31427H23.7001V24.6857H29.3001V7.31427Z" fill="#83F19B"/>
        <path d="M30 25.6H23V6.39996H30V25.6ZM24.6963 23.859H28.3037V8.14093H24.6963V23.859Z" fill="#83F19B"/>
        <path d="M27.2001 0H25.8001V7.31429H27.2001V0Z" fill="#83F19B"/>
        <path d="M27.2001 24.6858H25.8001V32.0001H27.2001V24.6858Z" fill="#83F19B"/>
        <path d="M19.2999 11.8571H13.6999V28.1428H19.2999V11.8571Z" fill="#FF0000"/>
        <path d="M20 28.9999H13V10.9999H20V28.9999ZM14.6963 27.3677H18.3037V12.632H14.6963V27.3677Z" fill="#FF0000"/>
        <path d="M17.2 5H15.8V11.8571H17.2V5Z" fill="#FF0000"/>
        <path d="M17.2001 28.1428H15.8001V35H17.2001V28.1428Z" fill="#FF0000"/>
      </svg>

  )}

const Navbar = () => {

  const location = useLocation();
  return (
    <div>
      <div className=" fixed z-10 pl-5 pr-5 grid grid-cols-5 place-items-center gap-3  bottom-0 w-full h-20  bg-white shadow-[0_0_10px_0_#d3d3d3]">
        
      <Link to="/home">
          <button className='w-fit h-full'>
            <div className={`flex flex-col gap-2 justify-center items-center p-1 ${location.pathname === '/home' ? 'text-[#060F66]' : 'text-[#747474]'}`}>
              <Home active={location.pathname === '/home'} />
              <p className='text-base font-semibold'>Home</p>
            </div>
          </button>
        </Link>

          <Link to="/portfolio">
            <button className='w-fit h-full '>
            <div className={`flex flex-col gap-2 justify-center items-center p-1 ${location.pathname === '/portfolio' ? 'text-[#060F66]' : 'text-[#747474]'}`}>
                <Bag active={location.pathname === '/portfolio'}/>
                <p className='text-base font-semibold'>Portfolio</p>
              </div>
            </button>

          </Link>
          <Link to="/trading">
            <button className='w-fit h-full '>
              <div className="flex justify-center items-center p-1 absolute -top-10 left-1/2
            -translate-x-1/2
            h-[5rem] w-[5rem]
            bg-darkBlue rounded-full">
                <Trade/> 
              </div>
            </button>
          </Link>
          

          <Link to="/rewards">
            <button className='w-fit h-full '>
            <div className={`flex flex-col gap-2 justify-center items-center p-1 ${location.pathname === '/rewards' ? 'text-[#060F66]' : 'text-[#747474]'}`}>
                <Reward active={location.pathname === '/rewards'}/>
                <p className='text-base font-semibold'>Rewards</p>
              </div>
            </button>
          </Link>

         <Link to="/social">
         <button className='w-fit h-full '>
         <div className={`flex flex-col gap-2 justify-center items-center p-1 ${location.pathname === '/social' ? 'text-[#060F66]' : 'text-[#747474]'}`}>
              <Social active={location.pathname === '/social'}/>
              <p className='text-base font-semibold'>Social</p>
            </div>
          </button>
         </Link>


        </div>


        
      </div>
    
  );
}

export default Navbar;

