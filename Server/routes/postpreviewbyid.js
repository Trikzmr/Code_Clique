const express = require("express");
const router = express.Router();
const data = require("../model/post");
const authenticate = require("../Middleware/Authentication"); // Import the authentication middleware

router.post("/postpreviewbyid", authenticate, api);

async function api(req, res) {
    const { _id } = req.body;
    const { Username } = req.user;
    try {
        const connectDB = require("../db/conn");
    await connectDB(); 
        let user = await data.findOne({ _id });
        
        res.json(user);
    } catch (error) {
        res.json(error);
    }
}
module.exports = router;
