import React from "react";
import Landing from "../screens/Landing";
import SignUp from "../screens/SignUp";
const routes =[
    {
        path : "/",
        element: <Landing/>,
    },
    {
        path : "/signup",
        element: <SignUp/>,
    },

];
export default routes;