import React from "react";
import SectionIcon from "../SectionIcon";
import "./index.css";
import { ReactComponent as Today } from "../../../Assets/today.svg";
import { ReactComponent as Announcements } from "../../../Assets/announcement.svg";
import { ReactComponent as Courses } from "../../../Assets/courses.svg";
import More from "../../../Components/More";

interface DropdownOption {
    to: string;
    text: string;
}

interface Props {
    name: string;
    icon: SectionIcon;
    options: DropdownOption[];
}

const SectionHeader : React.SFC<Props> = (props) => {
    return (
        <div className="grid-section-header">
            <div className="grid-section-header-icon">
                {getSectionIcon(props.icon)}
            </div>
            <h2 className="grid-section-header-title">{props.name}</h2>
            <More />
        </div>
    )
}

function getSectionIcon(icon : SectionIcon) {
    switch (icon) {
        case SectionIcon.Announcements:
            return <Announcements className="grid-section-header-icon-svg" />;
        case SectionIcon.Courses:
            return <Courses className="grid-section-header-icon-svg" />;
        case SectionIcon.Today:
            return <Today className="grid-section-header-icon-svg" />;
    }
}

export default SectionHeader;