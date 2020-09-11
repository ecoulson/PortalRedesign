import React from "react";
import { ReactComponent as ComputerScience } from "../../Assets/computer-science.svg"
import { ReactComponent as Engineering } from "../../Assets/engineering.svg"
import { ReactComponent as Physics} from "../../Assets/physics.svg"
import "./index.css"
import CourseType from "./CourseType";

interface Props {
    name: string,
    time: string,
    courseType: CourseType
}


export default function CourseCard(props : Props) {
    return (
        <div style={{backgroundColor: getColor(props.courseType)}} className="course-card">
            <h3 className="course-card-name">{props.name}</h3>
            {getIcon(props.courseType)}
            <span className="course-card-time">{props.time}</span>
        </div>
    )
}

function getColor(courseType : CourseType) {
    switch (courseType) {
        case CourseType.ComputerScience:
            return "#F7C331"
        case CourseType.Engineering:
            return "#F7882F"
        case CourseType.Physics:
            return "#6B7A8F"
    }
}

function getIcon(courseType : CourseType) {
    switch (courseType) {
        case CourseType.ComputerScience:
            return <ComputerScience className="course-card-icon"/>
        case CourseType.Engineering:
            return <Engineering className="course-card-icon"/>
        case CourseType.Physics:
            return <Physics className="course-card-icon"/>
    }
}