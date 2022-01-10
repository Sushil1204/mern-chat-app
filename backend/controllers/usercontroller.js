const asyncHandler = require("express-async-handler");
const res = require("express/lib/response");
const { generatePath } = require("react-router-dom/cjs/react-router-dom.min");
const generateToken = require("../config/generateToken");
const User = require("../models/userModel");

const registerUser = asyncHandler(async (req,res) => {
    const { name, email, password, pic } = req.body;

    if (!name || !email || !password) {
        res.status(400);
        throw new Error("Please Enter all the Fields");
    }


    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400);
        throw new Error("User Already Exists")
    }

    const newUser = await User.create({ name, email, password, pic });

    if (newUser) {
        res.status(201).json({
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            pic: newUser.pic,
            token: generateToken(newUser._id)
        });
    } else {
        res.status(400);
        throw new Error("Failed to Create User")

    }
});

module.exports = { registerUser };