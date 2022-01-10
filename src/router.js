import React from "react"
import {  Route,  ReactLocation } from "react-location";
import Homepage from "./Homepage";
import Boxes from "./Boxes";
import About from "./About"
import Education_Second from "./Education_Second"
import Skills from "./Skills";
import Project from "./Project";

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
    path:"/edus",
    element:<Education_Second/>
},
{
    path:"/skill",
    element:<Skills/>
},
{
    path:"/pro",
    element:<Project/>
}



];

export const location = new ReactLocation();