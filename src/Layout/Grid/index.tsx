import React from "react";
import "./index.css";

const Grid : React.SFC<{
    id: string
}> = (props) => {
    return (
        <div id={props.id} className="grid-layout">
            {props.children}
        </div>
    )
}

export default Grid;