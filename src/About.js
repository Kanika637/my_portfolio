import React from "react"
import "./styles/about.css"
import about from "./images/about.jpg"
const About=()=>{
    return(
        <div  id="about" className="about">

            <div className="me">
                <h3>About Me !</h3>
            </div>
            
            <div className="about_content">
               
                I am a 2nd year college student pursuing Btech
                in Computer Science<br></br> with AI specialisation
                having a keen interest in Web Developement.<br></br>
                Because of my curious nature I really like to 
                give a try <br></br>in differnet upcoming technologies
                and always ready to <br></br>learn something new and out of the box.  
                </div>

                <div class="middle">
      <a href="file:///C:/Users/hp/Downloads/Engineer%20Resume%20(2).pdf" target="blank" className="btn btn1">Resume</a>
      
    </div>
   
                

        </div>
    )
}

export default About