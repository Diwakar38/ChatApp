import React from "react";
import "./myStyles.css";
import Sidebar from "./Sidebar";
import ChatArea from "./ChatArea";
import { useState } from "react";
import Welcome from "./Welcome";
import CreateGroups from "./CreateGroups";
import Users_Groups from "./Users_Groups";
import { Outlet } from "react-router-dom";

function MainContainer() {
    return (
        <div className="main-container">
            <Sidebar />
            <Outlet />
            {/* <Welcome /> */}
            {/* <CreateGroups /> */}
            {/* <ChatArea /> */}
            {/* <Users_Groups /> */}
        </div>
    );
}

export default MainContainer;
