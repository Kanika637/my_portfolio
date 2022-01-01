import React from "react";
import "./styles/skills.css"

const Skills=()=>{
    return(
        <div className="skill">
            <ul className="grid cs-style-3">
	<li>
		<figure>
			<img src="https://images.unsplash.com/photo-1614292253351-4deb4913c142?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHNjaG9vbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="img01"/>
			<figcaption>
				<h3>Camera</h3>
				<span>Jacob Cummings</span>
				<a href="http://dribbble.com/shots/1115632-Camera">Take a look</a>
			</figcaption>
		</figure>
	</li>
	{/* <li>
		<figure>
			<!-- ... -->
		</figure>
	</li>
	<!-- ... --> */}
</ul>
        </div>

    )
}

export default Skills