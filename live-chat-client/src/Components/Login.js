import React from "react";
import "./myStyles.css";
import logo from "../Images/live-chat.png";
import { Button, TextField } from "@mui/material";

function Login() {
    return (
        <div className="login-container">
            <div className="image-container">
                <img className="welcome-logo" src={logo} alt="logo"></img>
                Live Chat
            </div>
            <div className="login-box">
                <p className="login-text">Login to your Account</p>
                <TextField
                    id="outlined-basic"
                    size="small"
                    label="Enter username"
                    variant="outlined"
                />
                <TextField
                    id="outlined-password-input"
                    size="small"
                    label="Enter password"
                    type="password"
                    autoComplete="current-password"
                />
                <Button variant="outlined">Login</Button>
            </div>
        </div>
    );
}

export default Login;
