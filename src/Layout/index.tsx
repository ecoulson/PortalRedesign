import React from "react";
import Header from "./Header";
import "./index.css";

const Layout : React.SFC<{}> = (props) => {
    return (
        <div className="app-layout">
            <Header />
            {props.children}
        </div>
    )
}

export default Layout;