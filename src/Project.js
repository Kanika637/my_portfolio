import React from "react"
import "./styles/project.css"
import  amazon from "./images/amazon.jpg"
import  lang from "./images/langimg.png"
import  logo from "./images/logo.png"
import  editor from "./images/editor.jpg"
import  port from "./images/port.jpg"
import  code_logo from "./images/code_logo.png"


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
                            <a target="blank" href="https://github.com/Kanika637/amazon-clone" className="linker"> Project Link</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


{/* SECOND */}
            <div className="outer-div-2">
                <div className="inner-div-2">
                    <div className="front-2">
                        <img className="ama_img-2" src={lang}></img>
                        <div className="front_text-2">
                            <h3 className="front_text-header-2">Language Translator</h3>
                            <h4 className="small-2">(Using Tessareact.js and API's)</h4>

                            <span className="front_text-hover-2">Hover For Details</span>
                        </div>
                    </div>
                    <div className="back-2">
                        <div className="wrapper-2">
                        <div className="link-2">
                            <a target="blank" href="https://language-lt.netlify.app/" className="linker-2"> Project Link</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




{/* THIRD */}

<div className="outer-div-3">
                <div className="inner-div-3">
                    <div className="front-3">
                        <img className="ama_img-3" src={logo}></img>
                        <div className="front_text-3">
                            <h3 className="front_text-header-3">Career Selector</h3>
                            <h4 className="small-3">(Using React)</h4>

                            <span className="front_text-hover-3">Hover For Details</span>
                        </div>
                    </div>
                    <div className="back-3">
                        <div className="wrapper-3">
                        <div className="link-3">
                            <a target="blank" href="https://career-selector.netlify.app/" className="linker-3"> Project Link</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            </div>


            {/* second row */}

            <div className="second-row">

                {/* fourth */}
                <div className="outer-div-4">
                <div className="inner-div-4">
                    <div className="front-4">
                        <img className="ama_img-4" src={port}></img>
                        <div className="front_text-4">
                            <h3 className="front_text-header-4">Portfolio</h3>
                            <h4 className="small-4">(Using React)</h4>

                            <span className="front_text-hover-4">Hover For Details</span>
                        </div>
                    </div>
                    <div className="back-4">
                        <div className="wrapper-4">
                        <div className="link-4">
                            <a target="blank" href="https://github.com/Kanika637/my_portfolio" className="linker-4"> Project Link</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* fifth */}

            <div className="outer-div-5">
                <div className="inner-div-5">
                    <div className="front-5">
                        <img className="ama_img-5" src={code_logo}></img>
                        <div className="front_text-5">
                            <h3 className="front_text-header-5">Online Code Editor</h3>
                            <h4 className="small-5">(Using React)</h4>

                            <span className="front_text-hover-5">Hover For Details</span>
                        </div>
                    </div>
                    <div className="back-5">
                        <div className="wrapper-5">
                        <div className="link-5">
                            <a target="blank" href="https://github.com/Kanika637/Online-code-Editor" className="linker-5"> Project Link</a>
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