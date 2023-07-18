import React from "react";

function MessageSelf() {
    var props2 = {
        name: "You",
        message: "This is sample message!",
    };
    return (
        <div className="self-message-container">
            <div className="messageBox">
                <p>{props2.message}</p>
                <p className="con-timeStamp">12:04pm</p>
            </div>
        </div>
    );
}

export default MessageSelf;
