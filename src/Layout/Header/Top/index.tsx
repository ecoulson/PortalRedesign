import React from "react";
import Logo from "./Logo";
import Title from "./Title";
import Avatar from "./Avatar";
import "./index.css";

const Top : React.SFC<{}> = () => {
    return (
        <div className="top">
            <Logo />
            <Title />
            <Avatar />
        </div>
    )
}

export default Top;