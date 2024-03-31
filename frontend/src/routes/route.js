import React from "react";
import Landing from "../screens/Landing";
import SignUp from "../screens/SignUp";
import Auth from "../screens/Auth";
import Callback from "../screens/Callback";
import Home from "../screens/Home";

const routes =[
    {
        path : "/",
        element: <Landing/>,
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
   
   

];
export default routes;