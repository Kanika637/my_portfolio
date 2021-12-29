import React from "react"
import {  Route,  ReactLocation } from "react-location";
import Homepage from "./Homepage";
import Boxes from "./Boxes";
import About from "./About"

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
}

];

export const location = new ReactLocation();