import React from "react";
import Landing from "../screens/Landing";
import SignUp from "../screens/SignUp";
import Auth from "../screens/Auth";
import Callback from "../screens/Callback";
import Home from "../screens/Home";
import Pin from "../screens/Pin";
import Test from "../screens/Test";
import Portfolio from '../screens/Portfolio'
import Social from "../screens/Social"
import Trading from '../screens/Trading'
import Rewards from '../screens/Rewards'
import Admin from "../screens/Admin";
import AddFunds from "../screens/AddFunds";
import Success from "../screens/Success";
import Profile from "../screens/Profile";
import Success2 from "../screens/Success2";
import StockBuy from "../screens/StockBuy";

const routes =[
    {
        path : "/",
        element: <Pin/>,
    },
    {
        path : "/auth",
        element: <Auth/>,
    },
    {
        path : "/signup",
        element: <SignUp/>,
    },
    {
        path : "/callback",
        element: <Callback/>,
    },
    {
        path : "/home",
        element: <Home/>,
    },
    {
        path : "/portfolio",
        element: <Portfolio/>,
    },
    {
        path : "/social",
        element: <Social/>,
    },
    {
        path : "/trading",
        element: <Trading/>,
    },
    {
        path:"/rewards",
        element: <Rewards/>
    },
    {
        path : "/test",
        element: <Test/> ,
    },
    {
        path : "/admin",
        element: <Admin/> ,
    },
    {
        path : "/addfunds",
        element: <AddFunds/> ,
    },
    {
        path : "/success",
        element: <Success/> ,
    },
    {
        path : "/successPts",
        element: <Success2/> ,
    },
    {
        path : "/profile",
        element: <Profile/> ,
    },
    {
        path:'/buystock',
        element: <StockBuy/>
    }

];
export default routes;