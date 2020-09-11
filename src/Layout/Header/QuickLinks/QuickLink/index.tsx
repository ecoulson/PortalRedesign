import React from "react"
import "./index.css";

const QuickLink : React.SFC<{
    link: string;
    text: string;
}> = (props) => {
    return (
        <div className="quick-link">
            <a className="quick-link-text" href={props.link}>{props.text}</a>
        </div>
    )
}

export default QuickLink;