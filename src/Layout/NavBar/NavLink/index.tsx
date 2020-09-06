import React from "react";
import NavIcon from "./NavIcon";
import { ReactComponent as Home } from "../../../Assets/home.svg";
import { ReactComponent as Transcript } from "../../../Assets/transcript.svg";
import { ReactComponent as Student } from "../../../Assets/student.svg";
import { ReactComponent as CourseRegistration } from "../../../Assets/course-registration.svg";
import { ReactComponent as Account } from "../../../Assets/account.svg";
import "./index.css";

const NavLink : React.SFC<{
    icon: NavIcon,
    active: boolean
}> = (props) => {
    return (
        <div className={getClassName(props.active)}>
            <div className="nav-icon">
                {renderIcon(props.icon)}
            </div>
        </div>
    )
}

function getClassName(active: boolean) {
    return active ? "nav-link nav-link-active" : "nav-link"
}

function renderIcon(icon : NavIcon) {
    switch (icon) {
        case NavIcon.Home:
            return <Home />
        case NavIcon.Transcript:
            return <Transcript />
        case NavIcon.Student:
            return <Student />
        case NavIcon.CourseRegistration:
            return <CourseRegistration />
        case NavIcon.Account:
            return <Account />
        default:
            return null;
    }
}

export default NavLink;