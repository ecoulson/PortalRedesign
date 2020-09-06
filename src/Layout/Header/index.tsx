import React from "react";
import "./index.css";
import Top from "./Top";
import QuickLinks from "./QuickLinks";

const Header : React.SFC<{}> = (props) => {
    return (
        <header className="header">
            <Top />
            <QuickLinks />
        </header>
    )
}

export default Header;