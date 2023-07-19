import React from "react";
import "./myStyles.css";
import Sidebar from "./Sidebar";
import ChatArea from "./ChatArea";
import { useState } from "react";
import Welcome from "./Welcome";
import CreateGroups from "./CreateGroups";

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
            <CreateGroups />
            {/* <ChatArea props={conversations} key={conversations.name} /> */}
        </div>
    );
}

export default MainContainer;
