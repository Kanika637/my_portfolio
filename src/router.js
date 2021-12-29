import React from "react"
import {  Route,  ReactLocation } from "react-location";
import Homepage from "./Homepage";
import Boxes from "./Boxes";
import About from "./About"
import Education from "./Education";

export const routes: Route[] = [
    
{
        path:"/",
        element:<Homepage/>
},
{
    path:"/boxes",
    element:<Boxes/>
},
{
    path:"/about",
    element:<About/>
},
{
    path:"/edu",
    element:<Education/>
}

];

export const location = new ReactLocation();