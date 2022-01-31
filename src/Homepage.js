import React from "react"
import "./styles/homepage.css"
import red from "./images/red background.jpg"
import profile_2 from "./images/profile_2.jpg"
import Boxes from "./Boxes"
import { FaGithub,FaInstagram,FaLinkedinIn} from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import About from "./About"
import Education_Second from "./Education_Second"
import Skills from "./Skills"
import Project from "./Project"
import Scroll from "./Scroll"
import Footer_new from "./Footer_new"

const Homepage=()=>{
    return(
    <div className="homepage">
        <div className="upeer_part">
            <div className="photos">
            <img  className="red_card" src={red} alt="/"></img>
        <img className="profile_img" src={profile_2}
         alt="/"></img>
            </div>
  
    <div className="intro">
        <span className="hello">Hello, I am</span>
        <br></br>
        <span className="name">KANIKA</span>
        <br></br>
        <span className="surname">GOLA</span>
        <br></br>
        <span className="designation">Beginner Level </span>
        <br></br>
        <span className="remaining">Full-Stack Web Developer</span>
    </div>
    
    
 
    </div>
    

    <Boxes/>

        
    <div className="socials">
      
        <div className="insta">
            <FaInstagram className="insta"></FaInstagram>

        </div>
        <div className="github">
            
        <a target="blank" href="https://github.com/Kanika637"><FaGithub  className="github"/> </a>
            
            </div>
            <div className="linked">

            <a  target="blank" href="https://www.linkedin.com/in/kanika-gola-999968204/"><FaLinkedinIn className="linked"/></a>
            </div>
            <div className="twitter">
            <a href="https://twitter.com/gola_kanika"><FaTwitter className="twitter"/></a>
            </div>
            
    </div>

<Scroll/>
    <About/>
    <Education_Second/>
    <Skills/>
    <Project/>
    <Footer_new/>
    
    
  </div>
        

    )
}

export default Homepage