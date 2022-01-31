import React from "react";
import  amazon from "./images/amazon.jpg"
import  lang from "./images/langimg.png"
import  logo from "./images/logo.png"
import  editor from "./images/editor.jpg"
import  port from "./images/changed_p.png"
import  code_logo from "./images/code_logo.png"
import hun from "./images/hunlogo.png"
import settyl from "./images/settyl.png"
import "./styles/carousel.css"


const Carousel=()=>{
    return(
        <div className="car">
            <div className="line1">
        <div className="pahla">
            <img className="pahla" src={amazon} alt="/"></img>
        </div>
        <div className="dusra">
            <img  className="dusra" src={lang} alt="/"></img>
        </div>
        <div className="teesra">
            <img className="teesra" src={logo} alt="/"></img>
        </div>
        <div className="chautha">
            <img  className="chautha" src={code_logo} alt="/"></img>
        </div>

        </div>
        </div>

    )
}

export default Carousel