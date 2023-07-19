import React from "react";
import "./myStyles.css";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import MessageOthers from "./MessageOthers";
import MessageSelf from "./MessageSelf";

function ChatArea({ props }) {
    const prop = props[0];
    return (
        <div className="chatArea-container">
            <div className="chatArea-header">
                <p className="con-icon">{prop.name[0]}</p>
                <div className="header-text">
                    <p className="con-title">{prop.name}</p>
                    <p className="con-timeStamp">{prop.timeStamp}</p>
                </div>
                <IconButton>
                    <DeleteIcon />
                </IconButton>
            </div>
            <div className="messages-container">
                <MessageOthers />
                <MessageSelf />
                <MessageOthers />
                <MessageSelf />
                <MessageOthers />
                <MessageSelf />
                <MessageOthers />
                <MessageSelf />
                <MessageOthers />
                <MessageSelf />
            </div>
            <div className="text-input-area">
                <input placeholder="Type a message" className="search-box" />
                <IconButton>
                    <SendIcon />
                </IconButton>
            </div>
        </div>
    );
}

export default ChatArea;
