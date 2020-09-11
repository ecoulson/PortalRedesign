import React, { useState } from "react";
import "./index.css";
import NavLink from "./NavLink";
import NavIcon from "./NavLink/NavIcon";
import NavSlider from "./NavSlider";

const NavLinks = [
    {
        to: "/",
        icon: NavIcon.Home,
        text: "Home"
    },
    {
        to: "/transcript",
        icon: NavIcon.Transcript,
        text: "Transcript"
    },
    {
        to: "/student",
        icon: NavIcon.Student,
        text: "Student"
    },
    {
        to: "/course-registration",
        icon: NavIcon.CourseRegistration,
        text: "Course Registration"
    },
    {
        to: "/student-account",
        icon: NavIcon.Account,
        text: "Student Account"
    }
]

const NavBar : React.FC<{}> = () => {
    const [active, setActive] = useState(0)
    const [sliderPosition, setSliderPosition] = useState(0);

    return (
        <div className="nav-bar">
            <NavSlider sliderPosition={sliderPosition} />
            {
                NavLinks.map((navLink, i) => 
                    <NavLink 
                        key={i}
                        active={active === i} 
                        text={navLink.text}
                        setSliderPosition={
                            (sliderPosition: number) => setSliderPosition(sliderPosition) 
                        }
                        onClick={() => setActive(i) }
                        to={navLink.to} 
                        icon={navLink.icon} />)
            }
        </div>
    )
}

export default NavBar;