import React from "react"
import "./styles/project.css"
import  amazon from "./images/amazon.jpg"

const Project=()=>{
    return(
        <div className="project">
            <div className="background"></div>
            <div className="outer-div">
                <div className="inner-div">
                    <div className="front">
                        <img className="ama_img" src={amazon}></img>
                        <div className="front_text">
                            <h3 className="front_text-header">Amazon Clone</h3>
                            <h4 className="small">(Using React)</h4>

                            <span className="front_text-hover">Hover For Details</span>
                        </div>
                    </div>
                    <div className="back">
                        <div className="wrapper">
                        <div className="link">
                            <a target="blank" href="https://en.wikipedia.org/wiki/Taj_Mahal" className="linker"> Project Link</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Project