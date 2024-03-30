import React from "react";
import Landing from "../screens/Landing";
import SignUp from "../screens/SignUp";
import Auth from "../screens/Auth";
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

];
export default routes;