import React, { useRef, useEffect } from "react";
import NavIcon from "./NavIcon";
import { ReactComponent as Home } from "../../../Assets/home.svg";
import { ReactComponent as Transcript } from "../../../Assets/transcript.svg";
import { ReactComponent as Student } from "../../../Assets/student.svg";
import { ReactComponent as CourseRegistration } from "../../../Assets/course-registration.svg";
import { ReactComponent as Account } from "../../../Assets/account.svg";
import "./index.css";
import { Link } from "react-router-dom";

interface Props {
    icon: NavIcon,
    to: string,
    active: boolean,
    setSliderPosition: (sliderPosition: number) => void;
    onClick: () => void;
}

const NavLink : React.FC<Props> = (props) => {
    const link = useRef(null);
    useEffect(() => {
        handleActiveLink(props, link);
        return function cleanup() {
            window.removeEventListener("resize", () => {
                handleActiveLink(props, link);
            })
        }
    })
    window.addEventListener("resize", () => {
        handleActiveLink(props, link);
    })

    return (
        <Link
            ref={link}
            onClick={handleClick(props)} 
            to={props.to} 
            className={getClassName(props.active)}>
            <div className="nav-icon">
                {renderIcon(props.icon)}
            </div>
        </Link>
    )
}

function handleActiveLink(props : Props, link : React.RefObject<null>) {
    if (props.active && link.current) {
        props.setSliderPosition(getSliderPosition(link.current as unknown as HTMLElement))
    }
}

function handleClick(props : Props) {
    return (event : React.MouseEvent) => {
        props.onClick();
        props.setSliderPosition(getSliderPosition(event.target as HTMLElement));
    }
}

function getSliderPosition(element : HTMLElement) {
    if (window.innerWidth < 768) {
        return findNavLink(element).offsetLeft;
    } else {
        return findNavLink(element).offsetTop;
    }
}

function findNavLink(element : HTMLElement) : HTMLElement {
    if (element.classList.contains("nav-link")) {
        return element;
    } else {
        return findNavLink(element.parentNode as HTMLElement);
    }
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