import React, { useState } from "react";
import "./myStyles.css";
import ConversationItem from "./ConversationItem";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import NightlightIcon from "@mui/icons-material/Nightlight";
import SearchIcon from "@mui/icons-material/Search";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Icon, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../Features/themeSlice";

function Sidebar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const lightTheme = useSelector((state) => state.themeKey);
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
            <div className={"sb-header" + (lightTheme ? "" : " dark")}>
                <div className="other-icons">
                    <IconButton>
                        <AccountCircleIcon
                            className={"icon" + (lightTheme ? "" : " dark")}
                        />
                    </IconButton>

                    <IconButton
                        onClick={() => {
                            navigate("users");
                        }}
                    >
                        <PersonAddIcon
                            className={"icon" + (lightTheme ? "" : " dark")}
                        />
                    </IconButton>
                    <IconButton
                        onClick={() => {
                            navigate("groups");
                        }}
                    >
                        <GroupAddIcon
                            className={"icon" + (lightTheme ? "" : " dark")}
                        />
                    </IconButton>
                    <IconButton
                        onClick={() => {
                            navigate("create-groups");
                        }}
                    >
                        <AddCircleIcon
                            className={"icon" + (lightTheme ? "" : " dark")}
                        />
                    </IconButton>

                    <IconButton
                        onClick={() => {
                            dispatch(toggleTheme());
                        }}
                    >
                        {lightTheme && (
                            <NightlightIcon
                                className={"icon" + (lightTheme ? "" : " dark")}
                            />
                        )}
                        {!lightTheme && (
                            <LightModeIcon
                                className={"icon" + (lightTheme ? "" : " dark")}
                            />
                        )}
                    </IconButton>
                </div>
            </div>
            <div className={"sb-search" + (lightTheme ? "" : " dark")}>
                <IconButton className={"icon" + (lightTheme ? "" : " dark")}>
                    <SearchIcon />
                </IconButton>
                <input
                    placeholder="Search"
                    className={"search-box" + (lightTheme ? "" : " dark")}
                />
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
