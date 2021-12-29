import React from "react";
import "./styles/education.css"

const Education=()=>{
    return(
        <div className="education">
            <div className="partition">
                <div className="schooling">
                    <div className="heading_schooling">School</div>
                    <div className="schooling_content">
                        <span className="institution_school">Institution</span><br></br>
                        <span className="school_name">Assisi Convent School</span><br></br><br></br>
                        <span className="batch_school">Batch</span><br></br>
                        <span className="batch_name_school">2019-2020</span>
                    </div>


                </div>
                <div className="partition_line"></div>
                <div className="college">
                    <div className="heading_college">College</div>
                    <div className="college_content">
                        <span className="institution_college">Institution</span><br></br>
                        <span className="college_name">ABES Institute Of Technology</span><br></br><br></br>
                        <span className="batch_college">Batch</span><br></br>
                        <span className="batch_name_college">2023-2024</span><br></br><br></br>
                        <span className="course">Course</span><br></br>
                        <span className="course_name">BTech CS (AI Specialisation)</span>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Education