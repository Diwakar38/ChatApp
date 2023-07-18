import React, { useState } from "react";
import "./myStyles.css";
import ConversationItem from "./ConversationItem";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import NightlightIcon from "@mui/icons-material/Nightlight";
import SearchIcon from "@mui/icons-material/Search";
import { Icon, IconButton } from "@mui/material";

function Sidebar() {
    const [conversations, setConversations] = useState([
        {
            name: "Test1",
            lastMessage: "Last Message #1",
            timeStamp: "today",
        },
        {
            name: "Test2",
            lastMessage: "Last Message #2",
            timeStamp: "today",
        },
        {
            name: "Test3",
            lastMessage: "Last Message #3",
            timeStamp: "yesterday",
        },
    ]);

    return (
        <div className="sidebar-container">
            <div className="sb-header">
                <div>
                    <IconButton>
                        {/* This makes button clickable */}
                        <AccountCircleIcon />
                    </IconButton>
                </div>
                <div>
                    <IconButton>
                        <PersonAddIcon />
                    </IconButton>
                    <IconButton>
                        <GroupAddIcon />
                    </IconButton>
                    <IconButton>
                        <AddCircleIcon />
                    </IconButton>
                    <IconButton>
                        <NightlightIcon />
                    </IconButton>
                </div>
            </div>
            <div className="sb-search">
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <input placeholder="Search" className="search-box" />
            </div>
            <div className="sb-conversations">
                {conversations.map((conversation) => {
                    return (
                        <ConversationItem
                            props={conversation}
                            key={conversation.name}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Sidebar;
