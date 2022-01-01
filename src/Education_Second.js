import React from "react"
import "./styles/education_Second.css"

const Education_Second=()=>{
    return(
        <div className="edu_second">
        <div className="row1-container">
    <div className="box box-down cyan">
      <h2>Course</h2>
      <p>Bachelor of Technology</p>
      <img src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt=""/>
    </div>

    <div className="box red">
      <h2>School</h2>
      <p>Assisi Convent School</p>
      <img src="https://assets.codepen.io/2301174/icon-team-builder.svg" alt=""/>
    </div>

    <div className="box box-down blue">
      <h2>Specialisation</h2>
      <p>Computer Science with AI</p>
      <img src="https://assets.codepen.io/2301174/icon-calculator.svg" alt=""/>
    </div>
  </div>
  
  <div className="row2-container">
    <div className="box orange">
      <h2>College</h2>
      <p>ABES Institute Of Technology</p>
      <img src="https://assets.codepen.io/2301174/icon-karma.svg" alt=""/>
    </div>
  </div>
  </div>
  
  
    )
}

export default Education_Second