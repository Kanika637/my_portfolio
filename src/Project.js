import React from "react"
import "./styles/project.css"
import  amazon from "./images/amazon.jpg"

const Project=()=>{
    return(
        <div className="project">
            <div className="background"></div>
            <div className="first_row">
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



            <div className="outer-div-2">
                <div className="inner-div-2">
                    <div className="front-2">
                        <img className="ama_img" src={amazon}></img>
                        <div className="front_text-2">
                            <h3 className="front_text-header-2">Amazon Clone</h3>
                            <h4 className="small-2">(Using React)</h4>

                            <span className="front_text-hover-2">Hover For Details</span>
                        </div>
                    </div>
                    <div className="back-2">
                        <div className="wrapper-2">
                        <div className="link-2">
                            <a target="blank" href="https://en.wikipedia.org/wiki/Taj_Mahal" className="linker-2"> Project Link</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>




        </div>

    )
}

export default Project