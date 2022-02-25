import React from "react"
import "./styles/about.css"

const About=()=>{
    return(
        <div  id="about" className="about">

            <div className="me">
                <h3>About Me !</h3>
            </div>
            
            <div className="about_content">
               
                I am a 2nd year college student pursuing Btech
                in Computer Science<br></br> with AI specialisation
                having a keen interest in Web Developement<br></br> and Open Source.
                Because of my curious nature I really like to 
                give a try <br></br>in differnet upcoming technologies
                and always ready to <br></br>learn something new and out of the box.
                Currently diving deep into <br></br>the world of DevOps, Kubernetes and stuff. 
                </div>

                <div class="middle">
      <a href="https://drive.google.com/file/d/14uk7TZAzTMwMoyE0nCcNyk6BV9QEURla/view?usp=sharing" target="blank" className="btn btn1">Resume</a>
      
    </div>
   
                

        </div>
    )
}

export default About