import React from "react";
import "./index.css";

const Main : React.SFC<{}> = (props) => {
    return <main className="main">{props.children}</main>
}

export default Main;