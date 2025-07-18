const express = require('express')
const Task = require('../model/TaskModel');
const api = express.Router();
const authenticate = require('../Middleware/Authentication'); // Import the authentication middleware

const apicall = async (req, res) => {
    const {Username} = req.user;
    const { ProjectId } = req.body;


    try {
        const connectDB = require("../db/conn");
    await connectDB(); 
        const task = await Task.find({ProjectId});
        const filtertask = task.filter((task) => {
            return task.Members.includes(Username);
        });
        res.status(200).json(filtertask);
        
    }
    catch(error){
        console.error(error.message);
        res.status(500).send("Server Error");
    }
}

api.post('/getmytask', authenticate, apicall);

module.exports = api;