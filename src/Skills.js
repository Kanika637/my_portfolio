import React,{useEffect} from "react";
import "./styles/skills.css"
import html from "./images/html.png"
import css from "./images/css.png"
import js from "./images/js.png"
import react from "./images/react.png"
import node from "./images/node.png"
import python from "./images/python.jpg"
import Aos from "aos";
import 'aos/dist/aos.css';
import { functionalUpdate } from "react-location";

const Skills=()=>{

	useEffect(()=>{
        Aos.init({duration:3000});
    
      },[]);
	 

	//   var container=document.getElementById('container_s')
	//   var inner=document.getElementById("inner")
	//   var counter=0;
	//   var updateRate=10;
	//   var isTimeToUpdate=function(){
	// 	  return counter++ % updateRate===0;
	//   }

	//   var mouse={
	// 	  _x:0,
	// 	  _y:0,
	// 	  x:0,
	// 	  y:0,
	// 	  updatePosition:function(event){
	// 		  var e=event|| window.event;
	// 		  this.x=e.client - this._x;
	// 		  this.y=(e.client-this._y)* -1;
	// 	  },
	// 	  setOrigin:function(e){
	// 		  this._x=e.offsetLeft+Math.floor(e.offsetWidth/2);
	// 		  this._y=e.offetTop+ Math.floor(e.offsetHeight/2);
	// 	  },
	// 	  show: function() { return '(' + this.x + ', ' + this.y + ')'; }
	//   }
	//   mouse.setOrigin(container);
	//   var update = function(event) {
	// 	mouse.updatePosition(event);
	// 	updateTransformStyle(
	// 	  (mouse.y / inner.offsetHeight/2).toFixed(2),
	// 	  (mouse.x / inner.offsetWidth/2).toFixed(2)
	// 	);
	//   };
	  
	//   var updateTransformStyle = function(x, y) {
	// 	var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
	// 	inner.style.transform = style;
	// 	inner.style.webkitTransform = style;
	// 	inner.style.mozTransform = style;
	// 	inner.style.msTransform = style;
	// 	inner.style.oTransform = style;
	//   };

	//   var onMouseEnterHandler=function(event){
	// 	  update(event);
	//   }
	//   var onMouseLeaveHandler=function(){
	// 	inner.style="";
	// }
	// var onMouseMoveHandler=function(event){
	// 	if(isTimeToUpdate()){
	// 		update(event);
	// 	}
	// }

	// container.onmouseenter=onMouseEnterHandler;
	// container.onmouseleave=onMouseLeaveHandler;
	// container.onmousemove=onMouseMoveHandler;

    return(
		<div className="skill">
			<div  data-aos="fade-right" className="list">
				<div className="html">
					<div id="container_s">
						<div id="inner"><img className="img_html" src={html} alt="/"></img>
						</div>
						</div>
					
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
       

    );
};

export default Skills