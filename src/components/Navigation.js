import React from "react";
import { Link } from "react-router-dom";

function Navigation(){
    return (
        <div className="nav-bar">
            <Link to="/" className="nav__menu">Home</Link>
            <Link to="/about/" className="nav__menu">About</Link>
        </div>
    );
}

export default Navigation;