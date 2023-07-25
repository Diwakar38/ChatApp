import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainContainer from "./Components/MainContainer";
import Login from "./Components/Login";
import Welcome from "./Components/Welcome";
import ChatArea from "./Components/ChatArea";
import CreateGroups from "./Components/CreateGroups";
import Users from "./Components/Users";
import Groups from "./Components/Groups";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="app" element={<MainContainer />}>
                    <Route index element={<Welcome />}></Route>
                    <Route
                        path="create-groups"
                        element={<CreateGroups />}
                    ></Route>
                    <Route path="chat" element={<ChatArea />}></Route>
                    <Route path="users" element={<Users />}></Route>
                    <Route path="groups" element={<Groups />}></Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
