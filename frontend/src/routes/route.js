import React from "react";
import Landing from "../screens/Landing";
import SignUp from "../screens/SignUp";
import Auth from "../screens/Auth";
import Callback from "../screens/Callback";

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
   

];
export default routes;