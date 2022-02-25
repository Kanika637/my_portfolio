import React,{useEffect} from "react";
import "./styles/skills.css"
import html from "./images/html.png"
import css from "./images/css_black.jpg"
import js from "./images/js.png"
import react from "./images/react_black.png"
import node from "./images/node_black.png"
import python from "./images/p_blackkfjnh.jpg"
import Aos from "aos";
import 'aos/dist/aos.css';
import { functionalUpdate } from "react-location";

const Skills=()=>{

	useEffect(()=>{
        Aos.init({duration:3000});
    
      },[]);
	 
	  return(
		<div className="skill">
			<div className="me_sk">
                <h3>Skills</h3>
            </div>
			<div className="sjbf">
			<div  data-aos="fade-right" className="list">
				<div className="first_half">
				<div className="html">
					
						<img className="img_html" src={html} alt="/"></img>
						<span className="measure_html">
					<span  className="per_html"></span>
					</span>
					
				</div>

				<div className="css">
					<img className="img_css" src={css}></img>
					<span className="measure_css">
					<span className="per_css"></span>
					</span>
					
				</div>

				<div className="js">
					<img className="img_js" src={js}></img>
					<span className="measure_js">
					<span className="per_js"></span>
					</span>
					
				
				</div>
				</div>
				
				

				<div className="react">
					<img className="img_react" src={react}></img>
					<span className="measure_react">
					<span className="per_react"></span>
					</span>
					
				</div>
				<div className="node">
					<img className="img_node" src={node}></img>
					<span className="measure_node">
					<span className="per_node"></span>
					</span>
					
				</div>
				<div className="python">
					<img className="img_python" src={python}></img>
					<span   className="measure_python">
					<span   className="per_python"></span>
					</span>
					
				</div>
				</div>
				
				
		
			
			
			</div>



		</div>
       

    );
};

export default Skills