import React from "react";
import './styles/scroll.css'


import { FaAngleDoubleDown } from "react-icons/fa";
const Scroll=()=>{
    return(
        <div className="s">
        <div className="scroll">
        <p className="scrl1">scroll down</p>
        <p className="scrl2">scroll down</p>
        </div>

        <div className="icons">
            <p className="icon1"><FaAngleDoubleDown/></p>
            <p className="icon2"><FaAngleDoubleDown/></p>
        </div>
    </div>
    )
}

export default Scroll