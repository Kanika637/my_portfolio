import React from "react"
import {  Route,  ReactLocation } from "react-location";
import Homepage from "./Homepage";
import Boxes from "./Boxes";
import About from "./About"
import Education_Second from "./Education_Second"
import Skills from "./Skills";
import Project from "./Project";
import Footer from "./Footer";
import  Carousel  from './Carousel';
import Scroll from "./Scroll";
import Footer_new from "./Footer_new";

export const routes: Route[] = [
    
{
        path:"/",
        element:<Homepage/>
},
{
    path:"/footer",
    element:<Footer_new/>
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
    path:"/scroll",
    element:<Scroll/>
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
},
{
    path:"/foot",
    element:<Footer/>
},
{
    path:"/car",
    element:<Carousel/>
}



];

export const location = new ReactLocation();