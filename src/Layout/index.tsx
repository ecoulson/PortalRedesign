import React from "react";
import Header from "./Header";
import "./index.css";
import NavBar from "./NavBar";
import Main from "./Main";

const Layout : React.SFC<{}> = (props) => {
    return (
        <div className="app-layout">
            <Header />
            <Main>{props.children}</Main>
            <NavBar />
        </div>
    )
}

export default Layout;