import React from "react";
import "./About.css";

function About(props){
    console.log(props);
    return (
        <div className="about__container">
            <span>
                About this page : You can check movies information.
            </span>
        </div>
    );
}

export default About;