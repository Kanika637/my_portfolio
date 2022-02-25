import React from "react"
import "./styles/boxes.css"
import { DiReact} from "react-icons/di";
import { FaSchool } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";
import { FaSeedling } from "react-icons/fa";
import Skills from "./Skills";
import Education_Second from "./Education_Second";
import Project from "./Project";
import About from "./About";
const Boxes=()=>{
    return(
        <div className="boxes">
            <div className="first_line">
            <div className="box1">
                <div className="box1_icon">
                <DiReact className="box1_icon"></DiReact>

                </div>
                <div className="box1_heading">
                    SKILLS
                    </div>
                  
            </div>
            <div className="box2">
                <div className="box2_icon">
                    
                    <FaSchool className="box2_icon"></FaSchool>

                </div>
                <div  className="box2_heading">
                    EDUCATION
                </div>
                
            </div>
            </div>
            <div className="second_line">
            <div className="second_line">
            <div className="box3">
                <div className="box3_icon">
                    <VscCode className="box3_icon"></VscCode>

                </div>
                <div className="box3_heading">
                    PROJECTS
                </div>
            </div>
            <div   className="box4">
                <div className="box4_icon">
                    <FaSeedling  className="box4_icon"></FaSeedling>

                </div>
                <a href="#about">
                <div className="box4_heading">
                    ABOUT
                </div></a>
            </div>
            </div>
            </div>
           
        </div>

    )
}

export default Boxes