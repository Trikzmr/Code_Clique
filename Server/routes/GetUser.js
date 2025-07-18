const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../model/userModel')

const apicreate = async(req, res) => {
    
    const {Username} = req.body;
    try {
        const connectDB = require("../db/conn");
    await connectDB(); 
        let finduser = await User.findOne({Username});
        

        res.status(201).json(finduser);
    } catch (error) {
        console.log(error);
        res.status(401).json({err: error});
    }
    
}

router.post('/GetUser', apicreate);

module.exports = router;