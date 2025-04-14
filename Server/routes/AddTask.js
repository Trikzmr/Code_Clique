const express = require('express')
const Task = require('../model/TaskModel');
const api = express.Router();
const authenticate = require('../Middleware/Authentication');

const apicall = async (req, res) =>{
    const { ProjectId, Title, Description, ProjectOwner, StartDate, EndDate, Status, Members } = req.body;
    const{Username} = req.user;
    try{

        
        const task = new Task({
            ProjectId, Title, Description, ProjectOwner, StartDate, EndDate, Status , Username, Members
        });


        await task.save();
        res.status(201).json({message: "Task added sucess"});

    }
    catch(error){  
        console.error(error.message);
        res.status(500).send("server error");
    }
}

api.post('/AddTask', authenticate , apicall);

module.exports = api;