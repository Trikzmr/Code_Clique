const express = require('express')
const Task = require('../model/TaskModel');
const api = express.Router();

const apicall = async (req, res) => {
    const { _id } = req.body;

    try {
        const task = await Task.findOne({_id});
        res.status(200).json(task);
    }
    catch(error){
        console.error(error.message);
        res.status(500).send("Server Error");
    }
}

api.post('/FindTaskByTaskId', apicall);

module.exports = api;