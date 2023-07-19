import React from "react";
import logo from "../Images/live-chat.png";
import "./myStyles.css";

function Welcome() {
    return (
        <div className="welcome-container">
            <img className="welcome-logo" src={logo} alt="logo"></img>
            <p>View and text people</p>
        </div>
    );
}

export default Welcome;
