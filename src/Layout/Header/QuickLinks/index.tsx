import React from "react";
import "./index.css";
import LinkIcon from "./LinkIcon";
import QuickLink from "./QuickLink";

const QuickLinks : React.SFC<{}> = () => {
    return (
        <div className="quick-links-wrapper">
            <div className="quick-links-container">
                <LinkIcon />
                <QuickLink 
                    link="http://catalog.hmc.edu/" 
                    text="Academic Catalog" />
                <QuickLink 
                    link="https://cards.services.claremont.edu/?cid=35&wason=/statement.php" 
                    text="Claremont Cash Site" />
                <QuickLink 
                    link="https://sakai.claremont.edu/portal" 
                    text="Sakai" />
                <QuickLink 
                    link="https://www.hmc.edu/" 
                    text="Harvey Mudd College" />
                <QuickLink 
                    link="https://www.hmc.edu/hsa/curriculum/graduation-requirements/" 
                    text="HSA Requirements" />
                <QuickLink 
                    link="https://claremont.campuslabs.com/engage/" 
                    text="Engage" />
            </div>
        </div>
    );
}

export default QuickLinks;