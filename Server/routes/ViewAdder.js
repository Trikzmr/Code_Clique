// api to push categoy to user model inside view array

const express = require("express");
const api = express.Router();
const authenticate = require("../Middleware/Authentication"); // Import the authentication middleware
const User = require("../model/userModel");

const apicall = async (req, res) => {
    const {category } = req.body;
    console.log(category);
    const { Username } = req.user;
    try {
        const connectDB = require("../db/conn");
    await connectDB(); 
        const user = await User.findOne({ Username });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        // category to user.views array save 200 entries only for new entries do cycle remove the last most entry

        if (user.views.length >= 200) {
            user.views.shift(); // remove the first element
        }   
        user.views.push(category); // push the new category
        await user.save(); // save the user

        res.status(200).json({ message: "Category added to user" });
    } catch (error) {   
        console.error(error.message);
        return res.status(500).send("server error");
    }
}

api.post("/ViewAdder", authenticate, apicall); // Use the authentication middleware
module.exports = api;