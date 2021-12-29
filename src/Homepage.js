import React from "react"
import "./styles/homepage.css"
import red from "./images/red background.jpg"
import profile_2 from "./images/profile_2.jpg"
import Boxes from "./Boxes"
import { FaGithub,FaInstagram,FaLinkedinIn} from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import About from "./About"

const Homepage=()=>{
    return(
    <div className="homepage">
        <div className="upeer_part">
            <div className="photos">
            <img  className="red_card" src={red} alt="/"></img>
        <img className="profile_img" src={profile_2} alt="/"></img>
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
        <span className="remaining">Frontend Developer</span>
    </div>
    
    
 
    </div>
    

    <Boxes/>

        
    <div className="socials">
      
        <div className="insta">
            <FaInstagram className="insta"></FaInstagram>

        </div>
        <div className="github">
            <FaGithub className="github"></FaGithub>
            
            </div>
            <div className="linked">
            <FaLinkedinIn className="linked"></FaLinkedinIn>
            </div>
            <div className="twitter">
            <FaTwitter className="twitter"></FaTwitter>
            </div>
            
    </div>


    <About/>
    
    
  </div>
        

    )
}

export default Homepage