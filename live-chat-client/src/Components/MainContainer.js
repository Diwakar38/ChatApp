import React from "react";
import "./myStyles.css";
import Sidebar from "./Sidebar";
import ChatArea from "./ChatArea";
import { useState } from "react";

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
            <ChatArea props={conversations} key={conversations.name} />
        </div>
    );
}

export default MainContainer;
