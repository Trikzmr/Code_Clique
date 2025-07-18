const express = require("express");
const router = express.Router();
const data = require("../model/post");
const authenticate = require("../Middleware/Authentication"); // Import the authentication middleware

router.post("/getpostdatabyid", authenticate, api);

async function api(req, res) {
    const { _id } = req.body;
    const { Username } = req.user;
    try {
        const connectDB = require("../db/conn");
    await connectDB(); 
        let user = await data.findOne({ _id });
        const userObj = user.toObject(); // Convert to plain object
        userObj.Team.push(user.username); // Still need this?

        const arr = userObj.Team;
        let flag = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === Username) {
                flag = 1;
                break;
            }
        }
        if (flag === 0) {
            return res.status(404).json({ message: "unauthorized" });
        }

        userObj.Owner = userObj.username === Username; // Add Owner field properly

        res.json(userObj);
    } catch (error) {
        res.json(error);
    }
}
module.exports = router;
