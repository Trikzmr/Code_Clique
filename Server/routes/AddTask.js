const express = require('express')
const Task = require('../model/TaskModel');
const api = express.Router();

const apicall = async (req, res) =>{
    const data = req.body;
    try{

        const task = new Task(data);
        await task.save();
        res.status(201).json({message: "Task added sucess"});

    }
    catch(error){
        console.error(error.message);
        res.status(500).send("server error");
    }
}

api.post('/AddTask',apicall);

module.exports = api;