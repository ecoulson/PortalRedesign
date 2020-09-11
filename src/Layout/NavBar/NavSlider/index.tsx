import React from "react";
import "./index.css";

const NavSlider : React.SFC<{
    sliderPosition: number
}> = (props) => {
    return (
        <div className="nav-slider-container">
            <div 
                style={getSliderPositionStyle(props.sliderPosition)} 
                className="nav-slider"/>
        </div>
    )
}

function getSliderPositionStyle(sliderPosition: number) {
    if (window.innerWidth > 768) {
        return {
            transform: `translateY(${sliderPosition}px)`
        }
    } else {
        return {
            transform: `translateX(${sliderPosition}px)`
        }
    }
}

export default NavSlider;