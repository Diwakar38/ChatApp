import React from "react";
import "./myStyles.css";
import Sidebar from "./Sidebar";
import ChatArea from "./ChatArea";
import { useState } from "react";
import Welcome from "./Welcome";
import CreateGroups from "./CreateGroups";
import Users_Groups from "./Users_Groups";

function MainContainer() {
    const [conversations, setConversations] = useState([
        {
            name: "Test1",
            lastMessage: "Last Message #1",
            timeStamp: "today",
        },
    ]);
    return (
        <div className="main-container">
            <Sidebar />
            {/* <Welcome /> */}
            {/* <CreateGroups /> */}
            {/* <ChatArea props={conversations} key={conversations.name} /> */}
            <Users_Groups />
        </div>
    );
}

export default MainContainer;
