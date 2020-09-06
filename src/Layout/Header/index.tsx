import React from "react";
import "./index.css";
import Top from "./Top";
import QuickLinks from "./QuickLinks";

const Header : React.SFC<{}> = (props) => {
    return (
        <div className="header">
            <Top />
            <QuickLinks />
        </div>
    )
}

export default Header;