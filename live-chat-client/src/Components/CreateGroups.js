import { IconButton } from "@mui/material";
import React from "react";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";

function CreateGroups() {
    return (
        <div className="createGroups-container">
            <div className="createGroups-container-items">
                <input placeholder="Enter Group Name" className="search-box" />
                <IconButton>
                    <DoneOutlineIcon />
                </IconButton>
            </div>
        </div>
    );
}

export default CreateGroups;
