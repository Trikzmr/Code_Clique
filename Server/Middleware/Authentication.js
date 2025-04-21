// Purpose: Middleware for authenticating user
const jwt = require('jsonwebtoken'); 
const User = require('../model/userModel');
const cookieParser = require("cookie-parser"); 
require('dotenv').config();
const express = require('express');
const router = express.Router();

const authenticate = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        
        if (!token) {
            return res.status(401).json({ message: "Unauthorized 1" });
        }
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id);
        if (!user) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const {Username,Email} = user;
        req.user = {Username,Email};
        console.log({Username,Email});
        next();
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server error");
    }
}

exports = module.exports = authenticate;