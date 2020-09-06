import React from "react";
import "./index.css";
import NavLink from "./NavLink";
import NavIcon from "./NavLink/NavIcon";

const NavBar : React.SFC<{}> = () => {
    return (
        <div className="nav-bar">
            <NavLink active icon={NavIcon.Home} />
            <NavLink active={false} icon={NavIcon.Transcript} />
            <NavLink active={false} icon={NavIcon.Student} />
            <NavLink active={false} icon={NavIcon.CourseRegistration} />
            <NavLink active={false} icon={NavIcon.Account} />
        </div>
    )
}

export default NavBar;