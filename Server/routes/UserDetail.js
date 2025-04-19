// //to update user details get username from middleware and update the details in the database


const express = require('express')
const api = express.Router();
const authenticate = require('../Middleware/Authentication'); // Import the authentication middleware
const User = require('../model/userModel');

const apicall = async (req, res) => {
    const {Username} = req.user;

    try{
        const user = await User.findOne({Username});
        if(!user){
            return res.status(404).json({message: "User not found"});
        }
        return res.status(200).json(user);
        
    }
    catch(error){
        console.error(error.message);
        return res.status(500).send("server error");
    }
}


api.get('/userdetails', authenticate, apicall);

module.exports = api;      
