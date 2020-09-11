import React from "react";
import { ReactComponent as Link } from "../../../../Assets/link.svg"
import "./index.css";

const LinkIcon : React.SFC<{}> = () => {
    return (
        <div className="link-icon-container">
            <Link className="link-icon " />
        </div>
    )
}

export default LinkIcon;