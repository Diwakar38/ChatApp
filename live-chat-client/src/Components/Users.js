import React from "react";
import "./myStyles.css";
import logo from "../Images/live-chat.png";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";

function Users() {
    const lightTheme = useSelector((state) => state.themeKey);
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ ease: "anticipate", duration: "0.1" }}
                className={"list-container" + (lightTheme ? "" : " dark")}
            >
                <motion.div className={"list-container"}>
                    <motion.div
                        className={"ug-header" + (lightTheme ? "" : " dark")}
                    >
                        <img
                            src={logo}
                            alt="logo"
                            style={{ height: "2rem", width: "2rem" }}
                        />
                        <p className={"ug-title" + (lightTheme ? "" : " dark")}>
                            Online Users
                        </p>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        className="sb-search"
                    >
                        <IconButton>
                            <SearchIcon />
                        </IconButton>
                        <input
                            placeholder="Search for a user"
                            className="search-box"
                        ></input>
                    </motion.div>
                    <motion.div className="ug-list">
                        <motion.div
                            whileTap={{ scale: 0.9 }}
                            whileHover={{ scale: 1.01 }}
                            className="list-tem"
                        >
                            <p className="con-icon">T</p>
                            <p className="con-title">Test User</p>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.01 }}
                            className="list-tem"
                        >
                            <p className="con-icon">T</p>
                            <p className="con-title">Test User</p>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.01 }}
                            className="list-tem"
                        >
                            <p className="con-icon">T</p>
                            <p className="con-title">Test User</p>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.01 }}
                            className="list-tem"
                        >
                            <p className="con-icon">T</p>
                            <p className="con-title">Test User</p>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.01 }}
                            className="list-tem"
                        >
                            <p className="con-icon">T</p>
                            <p className="con-title">Test User</p>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.01 }}
                            className="list-tem"
                        >
                            <p className="con-icon">T</p>
                            <p className="con-title">Test User</p>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}

export default Users;
