const express = require('express')
const Task = require('../model/TaskModel');
const api = express.Router();
const authenticate = require('../Middleware/Authentication'); // Import the authentication middleware

const apicall = async (req, res) => {
    const {Username} = req.user;


    try {
        res.status(200).json(req.user);
        
    }
    catch(error){
        console.error(error.message);
        res.status(500).send("Server Error");
    }
}

api.post('/messageapi', authenticate, apicall);

module.exports = api;