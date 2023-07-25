const express = require("express");
const userModel = require("../Models/userModel");
const expressAsyncHandler = require("express-async-handler");
const generateToken = require("../Config/generateToken");

// Login
const loginController = expressAsyncHandler(async (res, req) => {
    console.log(req.body);
    const { name, password } = req.body;
    const user = userModel.findOne({ name });

    if (user && user.matchPassword(password)) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        });
    } else throw new Error("Invalid username or password");
});

// Registration
const registerController = expressAsyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    // check all fields
    if (!name || !email || !password) {
        res.send(400);
        throw Error("All necessary input feilds needed");
    }

    // pre-existing user
    const userExist = await userModel.findOne({ email });
    if (userExist) {
        throw new Error("User already exist");
    }

    // userName already taken
    const userNameExist = await userModel.findOne({ name });
    if (userNameExist) {
        throw new Error("Username already exist");
    }

    // Create DB for user
    const user = await userModel.create({ name, email, password });
    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        });
    } else {
        res.status(400);
        throw new Error("Registration Error");
    }
});

module.exports = { loginController, registerController };
